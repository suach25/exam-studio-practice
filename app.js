const content = window.practiceContent;
const questions = content.questions;
const sections = content.sections;
const questionState = new Map();
let exam = null;

function node(tag, text, className) {
  const result = document.createElement(tag);
  if (text !== undefined) result.textContent = text;
  if (className) result.className = className;
  return result;
}

function fileLink(file, label) {
  const link = node('a', label || file.split('/').pop());
  link.href = 'data/' + file.split('/').map(encodeURIComponent).join('/');
  link.download = file.split('/').pop();
  return link;
}

function normaliseText(value) {
  return value.normalize('NFKC').trim().toLocaleLowerCase('en').replace(/\s+/g, ' ');
}

function validation(question, value) {
  const trimmed = value.trim();
  if (question.type === 'written') return trimmed ? '' : 'Write your answer before continuing.';
  if (question.type === 'choice') return question.options.includes(value) ? '' : 'Choose an answer.';
  if (question.type === 'text') return trimmed ? '' : 'Enter an answer.';
  const normalised = trimmed.replace(',', '.');
  const isNumber = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(normalised);
  if (question.type === 'integer') {
    return isNumber && Number.isSafeInteger(Number(normalised)) && Number(normalised) >= 0
      ? '' : 'Enter a valid whole number.';
  }
  return isNumber && Number.isFinite(Number(normalised)) ? '' : 'Enter a valid number.';
}

function isCorrect(question, value) {
  if (question.type === 'text') return normaliseText(value) === normaliseText(String(question.answer));
  if (question.type === 'choice') return value === question.answer;
  const number = Number(value.trim().replace(',', '.'));
  return Math.abs(number - Number(question.answer)) <= (question.tolerance || 0) + 1e-10;
}

function formatAnswer(question) {
  if (typeof question.answer === 'number') return question.answer.toLocaleString('en-US', { maximumFractionDigits: question.decimals ?? 0 });
  return question.answer;
}

function feedbackText(question, value) {
  if (isCorrect(question, value)) return `Correct! ${formatAnswer(question)}${question.unit ? ' ' + question.unit : ''}.`;
  if (question.id === 'film-records' && Number(value) === 33503) return 'You may have included the header row. Check that you counted only data records.';
  return 'Try again. ' + (question.hint || 'Use the method with the values in this example.');
}

function createAnswer(container, question, id, state) {
  const label = node('label', question.type === 'written' ? 'Your explanation' : 'Your answer' + (question.unit ? ` (${question.unit})` : ''));
  label.htmlFor = id;
  let input;
  if (question.type === 'choice') {
    input = node('select');
    input.append(new Option('Choose an answer', ''));
    question.options.forEach(value => input.append(new Option(value, value)));
  } else if (question.type === 'written') {
    input = node('textarea');
    input.rows = 5;
  } else {
    input = node('input');
    input.type = 'text';
    if (question.type === 'integer') input.inputMode = 'numeric';
    if (question.type === 'number') input.inputMode = 'decimal';
  }
  input.id = id;
  input.className = 'answer-control';
  input.value = state.value || '';
  const help = node('p', question.type === 'integer' ? 'Use a whole number without thousands separators.' : question.type === 'number' ? `Use a decimal point or comma without thousands separators.${question.decimals !== undefined ? ` Round to ${question.decimals} decimal places.` : ''}` : question.type === 'written' ? 'Compare your explanation with the checklist after submitting.' : '', 'help');
  help.id = id + '-help';
  const feedback = node('p', '', 'feedback');
  feedback.id = id + '-feedback';
  feedback.setAttribute('aria-live', 'polite');
  input.setAttribute('aria-describedby', feedback.id + (help.textContent ? ' ' + help.id : ''));
  input.addEventListener('input', () => {
    state.value = input.value;
    state.checked = false;
    if (input.getAttribute('aria-invalid') !== 'true') feedback.textContent = '';
    if (input.getAttribute('aria-invalid') === 'true' && !validation(question, input.value)) {
      input.removeAttribute('aria-invalid');
      feedback.textContent = '';
      feedback.classList.remove('error');
    }
  });
  container.append(label, input, feedback);
  if (help.textContent) container.append(help);
  return { input, feedback };
}

function showError(control, message) {
  control.feedback.textContent = message;
  control.feedback.classList.toggle('error', Boolean(message));
  control.input.setAttribute('aria-invalid', String(Boolean(message)));
}

function addSolution(container, question) {
  const details = node('details');
  details.append(node('summary', 'Show solution method'), node('pre', question.method));
  container.append(details);
}

function writtenReview(container, question, state, onReview) {
  container.replaceChildren();
  container.className = 'self-review';
  container.append(node('h3', 'Compare your explanation'), node('pre', question.method), node('p', 'Check each point your own answer covers. Then record your review.'));
  const checkboxes = (question.rubric || []).map((criterion, index) => {
    const label = node('label', undefined, 'checkbox');
    const input = node('input');
    input.type = 'checkbox';
    input.checked = Boolean(state.criteria?.[index]);
    input.addEventListener('change', () => { state.criteria = checkboxes.map(box => box.checked); });
    label.append(input, document.createTextNode(criterion));
    container.append(label);
    return input;
  });
  const reviewButton = node('button', 'Record my review');
  reviewButton.type = 'button';
  const reviewMessage = node('p', '', 'feedback');
  reviewMessage.setAttribute('role', 'status');
  const record = () => {
    state.reviewed = true;
    state.criteria = checkboxes.map(box => box.checked);
    state.met = state.criteria.filter(Boolean).length;
    reviewMessage.textContent = `Self-reviewed: ${state.met} of ${checkboxes.length} points covered. Revisit any unchecked points.`;
    onReview?.();
  };
  reviewButton.addEventListener('click', record);
  container.append(reviewButton, reviewMessage);
  if (state.reviewed) record();
}

function addPractice(container, question, id, state) {
  const control = createAnswer(container, question, id, state);
  const check = node('button', question.type === 'written' ? 'Compare with model answer' : 'Check answer');
  check.type = 'button';
  const review = node('div');
  control.input.addEventListener('input', () => {
    if (question.type === 'written') {
      state.reviewed = false;
      state.criteria = [];
      review.replaceChildren();
    }
  });
  check.addEventListener('click', () => {
    const error = validation(question, control.input.value);
    showError(control, error);
    if (error) { control.input.focus(); return; }
    state.value = control.input.value;
    state.checked = true;
    if (question.type === 'written') writtenReview(review, question, state);
    else control.feedback.textContent = feedbackText(question, control.input.value);
  });
  container.append(check, review);
  if (state.checked) {
    if (question.type === 'written') writtenReview(review, question, state);
    else control.feedback.textContent = feedbackText(question, state.value);
  }
  if (question.type !== 'written') addSolution(container, question);
}

function addModel(container, model) {
  const wrapper = node('div', undefined, 'model');
  wrapper.append(node('h3', 'Fitted restaurant model'), node('p', model.label));
  const table = node('table');
  const caption = node('caption', `${model.n} observed sales dates · R² ${model.r2}`);
  const head = node('thead');
  const row = node('tr');
  for (const text of ['Term', 'Coefficient']) { const cell = node('th', text); cell.scope = 'col'; row.append(cell); }
  head.append(row);
  const body = node('tbody');
  model.coefficients.forEach(coefficient => { const tr = node('tr'); tr.append(node('td',coefficient.term),node('td',String(coefficient.value))); body.append(tr); });
  table.append(caption,head,body);
  const preparation = node('details');
  preparation.append(node('summary','How this model was prepared'),node('p',model.preparation || 'Sum netTotal and netTotal_364 by sales date. Left join weatherData and gameData by date. Treat dates absent from the supplied game schedule as gameDay=0. Fit ordinary least squares with an intercept on the 312 dates with sales records. Dates without sales rows are omitted rather than assumed to be zero. These models describe historical associations.'));
  wrapper.append(table,preparation);
  container.append(wrapper);
}

function intro(container, question, examNumber) {
  container.append(node('p',`${question.section} · ${question.case}${question.optional ? ' · Optional' : ''}`,'meta'));
  container.append(node('h2',`${examNumber ? `Question ${examNumber} — ` : ''}${question.title}`),node('p',question.prompt,'prompt'));
  if (question.model) addModel(container,question.model);
  const downloads = node('div',undefined,'downloads');
  question.files.forEach(file => downloads.append(fileLink(file,'Download '+file.split('/').pop())));
  container.append(downloads);
  if (question.subject==='SQL') container.append(node('p','Open the database in DB Browser for SQLite. Run your query there, then enter its result or explanation here.','help'));
}

function showQuestion(id) {
  const question = questions.find(q => q.id===id);
  const container = document.getElementById('question');
  container.replaceChildren();
  if (!question) { container.append(node('h1','Question not found'),node('p','Choose a question from the question bank.')); return; }
  let state = questionState.get(id);
  if (!state) { state={value:'',followup:{value:''}}; questionState.set(id,state); }
  const back = node('a','Back to questions'); back.href='#bank'; container.append(back);
  intro(container,question);
  addPractice(container,question,'practice-'+id,state);
  const follow = node('div',undefined,'followup');
  follow.append(node('h3','Try another example'),node('p',question.followup.prompt));
  addPractice(follow,question.followup,'follow-'+id,state.followup);
  container.append(follow);
}

function renderList() {
  const section = document.getElementById('section-filter').value;
  const caseName = document.getElementById('case-filter').value;
  const search = document.getElementById('search').value.trim().toLowerCase();
  const matching = questions.filter(q => (section==='all'||q.section===section)&&(caseName==='all'||q.case===caseName)&&`${q.title} ${q.prompt} ${q.case}`.toLowerCase().includes(search));
  document.getElementById('question-count').textContent=`${matching.length} questions`;
  const list = document.getElementById('question-list'); list.replaceChildren();
  matching.forEach(q => { const link=node('a',undefined,'question-card'); link.href='#question/'+q.id; link.append(node('strong',q.title),node('span',`${q.section} · ${q.case}${q.optional?' · Optional':''}`)); list.append(link); });
  if (!matching.length) list.append(node('p','No questions match. Try another filter or search.'));
}

function updateCases() {
  const section=document.getElementById('section-filter').value;
  const select=document.getElementById('case-filter');
  const old=select.value;
  select.replaceChildren(new Option('All topics','all'));
  [...new Set(questions.filter(q=>section==='all'||q.section===section).map(q=>q.case))].forEach(c=>select.add(new Option(c,c)));
  select.value=[...select.options].some(o=>o.value===old)?old:'all';
  renderList();
}

function shuffled(items) {
  const copy=[...items];
  for(let i=copy.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [copy[i],copy[j]]=[copy[j],copy[i]]; }
  return copy;
}

function updateExamSummary() {
  if (!exam?.submitted) return;
  const automatic=exam.items.filter(item=>item.question.type!=='written');
  const correct=automatic.filter(item=>isCorrect(item.question,item.state.value)).length;
  const written=exam.items.filter(item=>item.question.type==='written');
  const reviewed=written.filter(item=>item.state.reviewed).length;
  document.getElementById('exam-result').textContent=`Automatically checked: ${correct} of ${automatic.length} correct. Written responses: ${reviewed} of ${written.length} self-reviewed. Review the feedback and solution methods under each question.`;
}

function startExam() {
  const scope=document.getElementById('exam-scope').value;
  const optional=document.getElementById('include-optional').checked;
  const pool=questions.filter(q=>optional||!q.optional);
  const selected=scope==='all'?sections.map(s=>shuffled(pool.filter(q=>q.section===s))[0]):shuffled(pool.filter(q=>q.section===scope)).slice(0,4);
  exam={submitted:false,items:selected.map(question=>({question,state:{value:''}}))};
  const container=document.getElementById('exam-questions'); container.replaceChildren();
  document.getElementById('exam-result').textContent='';
  exam.items.forEach((item,index)=>{
    const article=node('article'); intro(article,item.question,index+1);
    item.control=createAnswer(article,item.question,'exam-'+index,item.state);
    item.review=node('div'); article.append(item.review); item.article=article;
    container.append(article);
  });
  const submit=document.getElementById('submit-exam'); submit.hidden=false; submit.disabled=false;
}

function submitExam() {
  if (!exam || exam.submitted) return;
  let firstInvalid=null;
  exam.items.forEach(item=>{
    item.state.value=item.control.input.value;
    const error=validation(item.question,item.state.value);
    showError(item.control,error);
    if(error&&!firstInvalid) firstInvalid=item.control.input;
  });
  if(firstInvalid) { firstInvalid.focus(); return; }
  exam.submitted=true;
  exam.items.forEach(item=>{
    item.control.input.disabled=true;
    if(item.question.type==='written') writtenReview(item.review,item.question,item.state,updateExamSummary);
    else { item.control.feedback.textContent=feedbackText(item.question,item.state.value); addSolution(item.article,item.question); }
  });
  document.getElementById('submit-exam').disabled=true;
  updateExamSummary();
  document.getElementById('exam-result').focus();
}

function renderMaterials() {
  const resources=document.getElementById('resource-list');
  sections.forEach(section=>{
    const article=node('article'); article.append(node('h2',section));
    const cases=[...new Set(questions.filter(q=>q.section===section).map(q=>q.case))];
    article.append(node('p','Practice coverage: '+cases.join(', ')+'.'));
    const list=node('ul');
    content.resources.filter(r=>r.section===section).forEach(resource=>{const li=node('li',undefined,'resource-file'); li.append(fileLink(resource.path),document.createTextNode(` (${resource.bytes>1048576?(resource.bytes/1048576).toFixed(1)+' MB':Math.ceil(resource.bytes/1024)+' KB'})`)); list.append(li);});
    article.append(list); resources.append(article);
  });
}

function route() {
  const hash=location.hash.slice(1)||'home';
  const page=hash.startsWith('question/')?'question':hash.split('?')[0];
  const valid=['home','bank','question','exams','materials'].includes(page)?page:'home';
  for(const name of ['home','bank','question','exams','materials']) document.getElementById(name).hidden=name!==valid;
  document.querySelectorAll('nav a').forEach(link=>{if(link.hash==='#'+valid)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
  if(valid==='bank') {
    const requested=new URLSearchParams(hash.split('?')[1]||'').get('section');
    if(sections.includes(requested)) { document.getElementById('section-filter').value=requested; updateCases(); }
  }
  if(valid==='question') showQuestion(hash.slice('question/'.length));
  window.scrollTo({top:0});
  const heading=document.getElementById(valid).querySelector('h1,h2');
  if(heading) { heading.tabIndex=-1; heading.focus({preventScroll:true}); }
}

sections.forEach(section=>{
  document.getElementById('section-filter').add(new Option(section,section));
  document.getElementById('exam-scope').add(new Option(section,section));
  const card=node('a'); card.href='#bank?section='+encodeURIComponent(section);
  const count=questions.filter(q=>q.section===section).length;
  card.append(node('strong',section),node('span',`${count} questions`)); document.getElementById('coverage').append(card);
});
document.getElementById('section-filter').addEventListener('change',updateCases);
document.getElementById('case-filter').addEventListener('change',renderList);
document.getElementById('search').addEventListener('input',renderList);
document.getElementById('new-exam').addEventListener('click',startExam);
document.getElementById('submit-exam').addEventListener('click',submitExam);
window.addEventListener('hashchange',route);
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  const main = document.getElementById('main');
  main.tabIndex = -1;
  main.focus();
});
updateCases(); renderMaterials(); route();
