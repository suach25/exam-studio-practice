# Exam Studio Practice

A practice website for Data Analytics in Accounting, with 68 questions based on the seven supplied course cases.

## Run locally

Open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser. Press Control+C in the terminal to stop the server.

## Use the website

Choose a question or practice exam. Download the data, work in Excel or DB Browser for SQLite, and enter your answer. Written answers use a model answer and self-review checklist. Refreshing the page clears your attempts.

## Project files

- `index.html` — page structure.
- `styles.css` — appearance.
- `app.js` — navigation, answer checks and exams.
- `questions.js` — questions, answers and source references.
- `data/` — copies of the supplied course materials.
