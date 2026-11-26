window.practiceContent = {
  "sections": [
    "PwC Excel Case",
    "ETL Case",
    "IntegrateCo Case",
    "Restaurant Regression Case",
    "CS50 — SQL Part 1",
    "PwC — SQL Part 1",
    "P-cards — SQL Part 2"
  ],
  "questions": [
    {
      "id": "film-records",
      "section": "PwC Excel Case",
      "case": "Film permits",
      "subject": "Excel",
      "title": "Count records",
      "prompt": "How many records does the film-permit table have? Exclude the header row.",
      "answer": 33502,
      "method": "Count non-empty EventID cells. When the header is in row 1 and there are no gaps, the last record is in row 33,503. Subtract one header row to get 33,502.",
      "files": [
        "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt"
      ],
      "source": "Assignment_01_Excel-SQL.xlsx — Excel Questions; solutions.xlsx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "type": "integer",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "Imagine a header in row 1 and records filling rows 2 through 101. How many records are there?",
        "answer": 100,
        "method": "101 - 2 + 1 = 100."
      }
    },
    {
      "id": "film-columns",
      "section": "PwC Excel Case",
      "case": "Film permits",
      "subject": "Excel",
      "title": "Count columns",
      "prompt": "How many columns does the film-permit table have?",
      "answer": 14,
      "method": "The table spans columns A through N. N is column 14.",
      "files": [
        "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt"
      ],
      "source": "Assignment_01_Excel-SQL.xlsx — Excel Questions; solutions.xlsx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "type": "integer",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "Imagine a table covering columns A through H. How many columns are there?",
        "answer": 8,
        "method": "Count A through H to get eight."
      }
    },
    {
      "id": "film-types",
      "section": "PwC Excel Case",
      "case": "Film permits",
      "subject": "Excel",
      "title": "Count distinct categories",
      "prompt": "How many different EventType values are there?",
      "answer": 4,
      "method": "Use EventType as PivotTable row labels and count the distinct labels, excluding Grand Total.",
      "files": [
        "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt"
      ],
      "source": "Assignment_01_Excel-SQL.xlsx — Excel Questions; solutions.xlsx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "type": "integer",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "The labels are Film, Theater, Film, Theater. How many distinct labels are present?",
        "answer": 2,
        "method": "Film and Theater are two distinct labels."
      }
    },
    {
      "id": "film-missing",
      "section": "PwC Excel Case",
      "case": "Film permits",
      "subject": "Excel",
      "title": "Find missing ZIP codes",
      "prompt": "How many film-permit records have a missing ZipCode, represented by N/A in the supplied file?",
      "answer": 11,
      "method": "Filter ZipCode to the literal text N/A, then count the remaining EventID values. COUNTIF on ZipCode with criterion \"N/A\" also works. COUNTBLANK alone would miss these text markers.",
      "files": [
        "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt"
      ],
      "source": "Assignment_01_Excel-SQL.xlsx — Excel Questions; solutions.xlsx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "A ZipCode column has three cells containing N/A and seven valid codes. How many records have missing ZIP codes under the N/A rule?",
        "answer": 3,
        "method": "Count the three N/A markers. They are text values representing missing information.",
        "type": "integer"
      }
    },
    {
      "id": "film-common",
      "section": "PwC Excel Case",
      "case": "Film permits",
      "subject": "Excel",
      "title": "Find the most common event",
      "prompt": "What is the most common EventType? Enter the label.",
      "answer": "Shooting Permit",
      "method": "Count EventID in a PivotTable with EventType in Rows and sort the counts descending.",
      "files": [
        "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt"
      ],
      "source": "Assignment_01_Excel-SQL.xlsx — Excel Questions; solutions.xlsx",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Event labels are Film, Film, Film, Theater and Theater. Which label is most common?",
        "answer": "Film",
        "method": "Film occurs three times and Theater twice.",
        "type": "text"
      }
    },
    {
      "id": "film-students",
      "section": "PwC Excel Case",
      "case": "Film permits",
      "subject": "Excel",
      "title": "Filter student films",
      "prompt": "Among Shooting Permit records, how many have SubCategoryName equal to Student Film?",
      "answer": 193,
      "method": "Filter EventType to Shooting Permit and SubCategoryName to Student Film. Count EventID.",
      "files": [
        "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt"
      ],
      "source": "Assignment_01_Excel-SQL.xlsx — Excel Questions; solutions.xlsx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Five records are Shooting Permit; two of those have Student Film as their subcategory. How many satisfy both filters?",
        "answer": 2,
        "method": "Both filters must be true, so count the two student-film shooting permits.",
        "type": "integer"
      }
    },
    {
      "id": "film-locale",
      "section": "PwC Excel Case",
      "case": "Film permits",
      "subject": "Excel",
      "title": "Interpret source dates",
      "prompt": "The source uses the US date convention. What does 4/5/2016 mean?",
      "answer": "5 April 2016",
      "method": "The US convention is month/day/year. Inspect the source format and choose the matching locale before converting text to dates.",
      "files": [
        "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt"
      ],
      "source": "Assignment_01_Excel-SQL.xlsx — Excel Questions; solutions.xlsx",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "5 April 2016",
        "4 May 2016"
      ],
      "followup": {
        "type": "choice",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "In US month/day/year format, what does 12/3/2016 mean?",
        "options": [
          "3 December 2016",
          "12 March 2016"
        ],
        "answer": "3 December 2016",
        "method": "12 is the month, December; 3 is the day."
      }
    },
    {
      "id": "etl-delimiter",
      "section": "ETL Case",
      "case": "ETL Case 1",
      "subject": "Excel",
      "title": "Protect commas inside fields",
      "prompt": "In Case 1, a company name includes a comma and amounts may contain thousands separators. What should you do before trusting a comma-delimited import?",
      "answer": "Check text qualifiers and field alignment, then repair malformed rows",
      "method": "Quoted commas must stay inside a field. The Case 1 file deliberately includes messy values and an unquoted company-name comma. Check that each row aligns to the eight intended headers.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 1/Analytics_mindset_case_studies_ETL_Case1.csv"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "Check text qualifiers and field alignment, then repair malformed rows",
        "Split at every comma without checking the preview",
        "Delete all commas from the complete file"
      ],
      "followup": {
        "prompt": "A comma-delimited row contains 1001,\"Acme, Inc.\",2020. With correct double-quote handling, how many fields are there?",
        "answer": 3,
        "method": "The comma inside the quoted name is part of that field.",
        "type": "integer"
      }
    },
    {
      "id": "etl-clean",
      "section": "ETL Case",
      "case": "ETL Case 1",
      "subject": "Excel",
      "title": "Plan cleaning and validation",
      "prompt": "Inspect Case 1. Describe three data problems and how you would address them. Explain how you would verify the cleaned file.",
      "answer": null,
      "method": "Examples include unquoted commas in company names, numbers stored with commas or M suffixes, parenthesised negatives, inconsistent units and repeated or inconsistent labels. Repair parsing before converting values. Confirm the meaning and scale of each column rather than guessing. Reconcile row counts and representative values and document the steps.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 1/Analytics_mindset_case_studies_ETL_Case1.csv"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Identify at least three concrete issues in the supplied file",
        "Describe a suitable transformation for each issue",
        "Check field alignment, record counts and representative values",
        "Document assumptions about units"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "etl-code-2",
      "section": "ETL Case",
      "case": "ETL Case 2",
      "subject": "Excel",
      "title": "Extract a location",
      "prompt": "For EmployeeCode JAP1080-19M, what is the location code exactly as stored?",
      "answer": "JAP",
      "method": "Extract the initial letters before the first digit. Case 2 permits LEFT(code,3); Case 3 requires finding the first digit because country-code lengths vary.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 2/Analytics_mindset_case_studies_ETL_Case2_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "In EmployeeCode CAN1234-12W, what does LEFT(code,3) return?",
        "answer": "CAN",
        "method": "LEFT takes the first three characters.",
        "type": "text"
      }
    },
    {
      "id": "etl-plant-2",
      "section": "ETL Case",
      "case": "ETL Case 2",
      "subject": "Excel",
      "title": "Extract a plant number",
      "prompt": "For EmployeeCode JAP1080-19M, what is the PlantID?",
      "answer": 19,
      "method": "Take the digits after the hyphen and before the pay-period letters. In Case 3 the plant number and period suffix have variable lengths.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 2/Analytics_mindset_case_studies_ETL_Case2_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "In EmployeeCode CAN1234-12W, what is PlantID?",
        "answer": 12,
        "method": "Take the digits between the hyphen and W.",
        "type": "integer"
      }
    },
    {
      "id": "etl-key-2",
      "section": "ETL Case",
      "case": "ETL Case 2",
      "subject": "Excel",
      "title": "Build a location–plant key",
      "prompt": "For EmployeeCode JAP1080-19M, enter LocationPlantID using Location-PlantID.",
      "answer": "JAP-19",
      "method": "Concatenate the location, a hyphen, and the extracted plant ID. A plant ID alone can repeat across countries.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 2/Analytics_mindset_case_studies_ETL_Case2_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "type": "text",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "A location code is AUS and its plant is 12. Enter the combined key as Location-PlantID.",
        "answer": "AUS-12",
        "method": "AUS & \"-\" & 12 gives AUS-12."
      }
    },
    {
      "id": "etl-code-3",
      "section": "ETL Case",
      "case": "ETL Case 3",
      "subject": "Excel",
      "title": "Extract a location",
      "prompt": "For EmployeeCode Japan177-3Mo, what is the location code exactly as stored?",
      "answer": "Japan",
      "method": "Extract the initial letters before the first digit. Case 2 permits LEFT(code,3); Case 3 requires finding the first digit because country-code lengths vary.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 3/Analytics_mindset_case_studies_ETL_Case3_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "For EmployeeCode Canada42-8We, enter the location code as stored.",
        "answer": "Canada",
        "method": "Take all initial letters before the first digit.",
        "type": "text"
      }
    },
    {
      "id": "etl-plant-3",
      "section": "ETL Case",
      "case": "ETL Case 3",
      "subject": "Excel",
      "title": "Extract a plant number",
      "prompt": "For EmployeeCode Japan177-3Mo, what is the PlantID?",
      "answer": 3,
      "method": "Take the digits after the hyphen and before the pay-period letters. In Case 3 the plant number and period suffix have variable lengths.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 3/Analytics_mindset_case_studies_ETL_Case3_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "For EmployeeCode US7-12Mo, what is PlantID?",
        "answer": 12,
        "method": "Take the digits between the hyphen and Mo.",
        "type": "integer"
      }
    },
    {
      "id": "etl-key-3",
      "section": "ETL Case",
      "case": "ETL Case 3",
      "subject": "Excel",
      "title": "Build a location–plant key",
      "prompt": "For EmployeeCode Japan177-3Mo, enter LocationPlantID using Location-PlantID.",
      "answer": "Japan-3",
      "method": "Concatenate the location, a hyphen, and the extracted plant ID. A plant ID alone can repeat across countries.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 3/Analytics_mindset_case_studies_ETL_Case3_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "type": "text",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "A location code is AUS and its plant is 12. Enter the combined key as Location-PlantID.",
        "answer": "AUS-12",
        "method": "AUS & \"-\" & 12 gives AUS-12."
      }
    },
    {
      "id": "etl-variable",
      "section": "ETL Case",
      "case": "ETL Case 3",
      "subject": "Excel",
      "title": "Handle variable-length codes",
      "prompt": "Why is LEFT(EmployeeCode,3) unsuitable as a general location formula in Case 3?",
      "answer": "Country codes have different lengths",
      "method": "Case 3 uses codes such as US, Japan and Canada. Locate the first digit or use an explicit mapping instead of a fixed three-character slice.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 3/Analytics_mindset_case_studies_ETL_Case3_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "Country codes have different lengths",
        "Every country code has exactly three letters",
        "Location is always after the hyphen"
      ],
      "followup": {
        "prompt": "The code Japan12-3W has a location ending before its first digit. How many characters are in that location?",
        "answer": 5,
        "method": "Japan has five letters. A three-character slice would truncate it.",
        "type": "integer"
      }
    },
    {
      "id": "etl-period",
      "section": "ETL Case",
      "case": "ETL Case 3",
      "subject": "Excel",
      "title": "Standardise pay periods",
      "prompt": "Case 3 records weekly pay as W or We and monthly pay as M or Mo. What should a standardised field do?",
      "answer": "Map W and We to Weekly, and M and Mo to Monthly",
      "method": "The case defines W and We as the same period and M and Mo as the same period.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 3/Analytics_mindset_case_studies_ETL_Case3_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "Map W and We to Weekly, and M and Mo to Monthly",
        "Treat all four labels as different periods",
        "Drop rows with a two-letter suffix"
      ],
      "followup": {
        "prompt": "A pay-period suffix is We. Enter its standard meaning, Weekly or Monthly.",
        "answer": "Weekly",
        "method": "The case defines both W and We as weekly.",
        "type": "text"
      }
    },
    {
      "id": "etl-lines",
      "section": "ETL Case",
      "case": "ETL Case 4",
      "subject": "Excel",
      "title": "Check the joined row count",
      "prompt": "How many journal-entry line items should a correctly enriched Case 4 solution retain, assuming each lookup has exactly one match?",
      "answer": 789,
      "method": "Start with all 789 journal-entry lines and use matching lookup keys. Check uniqueness in each lookup before merging. Enrichment should preserve the 789 source lines.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 4/Analytics_mindset_case_studies_ETL_Case4_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "A source has 20 lines. Every lookup key matches exactly one row. How many lines should an enriching left join retain?",
        "answer": 20,
        "method": "A one-match-per-key left join preserves all 20 source lines.",
        "type": "integer"
      }
    },
    {
      "id": "etl-preparer",
      "section": "ETL Case",
      "case": "ETL Case 4",
      "subject": "Excel",
      "title": "Choose the preparer join key",
      "prompt": "Which fields together identify the correct preparer in Case 4?",
      "answer": "PreparerID and BusinessUnitID",
      "method": "Preparer IDs restart in each business unit. Match both PreparerID and BusinessUnitID to avoid incorrect names or duplicated lines.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 4/Analytics_mindset_case_studies_ETL_Case4_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "PreparerID and BusinessUnitID",
        "PreparerID alone",
        "JENumber and Amount"
      ],
      "followup": {
        "type": "choice",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "Two business units both have preparer 101. Is preparer 101 alone a unique employee key?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": "No",
        "method": "Use the preparer ID together with its business unit."
      }
    },
    {
      "id": "etl-account",
      "section": "ETL Case",
      "case": "ETL Case 4",
      "subject": "Excel",
      "title": "Look up an account",
      "prompt": "Find GLAccountNumber 11845 in ChartOfAccounts. What is its GLAccountName?",
      "answer": "Operating Bank Account",
      "method": "Match 11845 to ChartOfAccounts.GLAccountNumber and return GLAccountName. Use an exact-match lookup.",
      "files": [
        "1. Excel part 2/ETL Assignment/data/case 4/Analytics_mindset_case_studies_ETL_Case4_Excel.xlsx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "An exact-match lookup table has account 100 named Cash and 200 named Sales. What name should account 100 return?",
        "answer": "Cash",
        "method": "Return the label associated with key 100.",
        "type": "text"
      }
    },
    {
      "id": "etl-joins",
      "section": "ETL Case",
      "case": "ETL overview",
      "subject": "Excel",
      "title": "Explain a safe join",
      "prompt": "You must retain every transaction and attach matching customer details. Which join would you use, on what key, and what checks would you perform?",
      "answer": null,
      "method": "Use transactions as the left table and left join customers on the customer ID. Check that the customer lookup has one row per ID. Compare transaction counts and totals before and after merging, and review unmatched IDs.",
      "files": [
        "1. Excel part 2/ETL Assignment/Analytics_mindset_case_studies_ETL.docx"
      ],
      "source": "Analytics_mindset_case_studies_ETL.docx",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Preserve transactions with a left join",
        "Name the customer-ID key",
        "Check lookup uniqueness",
        "Reconcile counts and totals and investigate unmatched IDs"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pay15",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Calculate 2015 gross wages",
      "prompt": "What are total 2015 gross wages? Sum Reg_Pay and OT_Pay across all rows. Round to two decimals.",
      "answer": 1086734.19,
      "method": "Sum Reg_Pay and OT_Pay. Do not include employer taxes in this definition of gross wages.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2015payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "prompt": "A payroll row has regular pay of 1000 and overtime pay of 150. What are gross wages?",
        "answer": 1150,
        "method": "Gross wages = regular pay + overtime pay.",
        "type": "integer"
      }
    },
    {
      "id": "pay16",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Calculate 2016 gross wages",
      "prompt": "What are total 2016 gross wages? Sum Gross_Wages across all rows. Round to two decimals.",
      "answer": 1352789.75,
      "method": "Sum Gross_Wages once per source row.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "prompt": "Two 2016 rows have Gross_Wages of 100 and 250. What is their combined gross pay?",
        "answer": 350,
        "method": "Sum the two gross-wage amounts once each.",
        "type": "integer"
      }
    },
    {
      "id": "pay-diff",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Compare gross wages",
      "prompt": "What is the total gross-wage change, defined here as 2016 minus 2015? Round to two decimals.",
      "answer": 266055.56,
      "method": "Calculate SUM(2016 Gross_Wages) - SUM(2015 Reg_Pay + OT_Pay). The direction is explicitly 2016 minus 2015.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2015payroll.csv",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "prompt": "Gross wages are 1000 in 2015 and 1300 in 2016. What is the change defined as 2016 minus 2015?",
        "answer": 300,
        "method": "1300 - 1000 = 300.",
        "type": "integer"
      }
    },
    {
      "id": "pay-code",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Extract a job code",
      "prompt": "For project 14S001SG, enter the three-character job code.",
      "answer": "001",
      "method": "Remove the two-digit project year, optional department letter and optional location suffix. Retain 001 as text so leading zeros are preserved.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_jobcodes.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "type": "text",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "For project 15007B, enter the three-character job code.",
        "answer": "007",
        "method": "15 is the project year, 007 the job code and B the location suffix."
      }
    },
    {
      "id": "pay-id",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Match employee identities",
      "prompt": "Which mapping links the persistent employee number across the two payroll systems?",
      "answer": "2015 Emp_No to 2016 Employee_Number",
      "method": "The appendix explicitly maps Employee_Number to Emp_No. Employee_ID is a new system identifier.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2015payroll.csv",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "2015 Emp_No to 2016 Employee_Number",
        "2015 Emp_No to 2016 Employee_ID",
        "First name alone"
      ],
      "followup": {
        "prompt": "Employee_Number is 42 and the new Employee_ID is X900. Which value should match 2015 Emp_No?",
        "answer": 42,
        "method": "Employee_Number is the persistent identifier in the case mapping.",
        "type": "integer"
      }
    },
    {
      "id": "pay-aggregate",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Make payroll comparable",
      "prompt": "Explain how you would compare the two years fairly by job code and employee. Include the roles of the job-code and location files.",
      "answer": null,
      "method": "Standardise field definitions, preserve employee numbers, extract three-character job codes and aggregate 2015 pay runs to the same six-month level as 2016. Use Reg_Pay + OT_Pay as 2015 gross wages and Gross_Wages in 2016; include both regular and overtime hours. Join job descriptions on Job_Code. For location analysis, use the supplied employee-name mapping and check name uniqueness and unmatched names. Reconcile totals, retain a year field and report invalid job codes. Do not directly join detailed 2015 rows to aggregated 2016 amounts and then sum repeated wages.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2015payroll.csv",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_jobcodes.csv",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_locations.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Align the aggregation periods",
        "Use consistent wage and hour definitions",
        "Preserve employee number and text job codes",
        "Check lookup keys and reconcile totals"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pay-report",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Explain a payroll increase",
      "prompt": "Noah wants to understand the payroll increase. Describe the analyses and evidence you would put in a short report, including a follow-up question.",
      "answer": null,
      "method": "Separate changes in total hours from changes in pay per hour. Compare by job code and employee, identify the largest contributors and distinguish new or departing employees from comparable employees. Investigate invalid job codes and zero-hour or zero-wage anomalies. Ask Noah about pay-rate changes, overtime policy or changes in staffing. Report reconciled totals and limitations.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2015payroll.csv",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Separate hours and rates",
        "Identify contributors by job code and employee",
        "Investigate anomalies",
        "Give a relevant follow-up question and limitations"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pay-phantoms",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Find missing employee numbers",
      "prompt": "How many 2016 payroll rows have a blank Employee_Number?",
      "answer": 68,
      "method": "Filter Employee_Number to blanks and count source rows. Do not count unique names.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "type": "choice",
        "prompt": "After a transformation, should you compare record counts and totals with the source before using the result?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": "Yes",
        "method": "Reconcile counts and relevant totals, and explain any intended changes. This helps detect missing or duplicated records."
      }
    },
    {
      "id": "pay-phantom-wages",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Measure phantom wages",
      "prompt": "What is total Gross_Wages for 2016 rows with a blank Employee_Number? Round to two decimals.",
      "answer": 32951.29,
      "method": "Filter blank Employee_Number and sum Gross_Wages for those rows.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "type": "choice",
        "prompt": "After a transformation, should you compare record counts and totals with the source before using the result?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": "Yes",
        "method": "Reconcile counts and relevant totals, and explain any intended changes. This helps detect missing or duplicated records."
      }
    },
    {
      "id": "pay-cost",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Calculate total employee cost",
      "prompt": "What is total employee cost in 2016, including gross wages, SocSec_Medicare, FUTA, SUTA and Work_Comp? Include all source rows. Round to two decimals.",
      "answer": 1486454.83,
      "method": "Sum the five stated columns across all rows. Gross_Wages already includes regular and overtime pay.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "type": "choice",
        "prompt": "After a transformation, should you compare record counts and totals with the source before using the result?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": "Yes",
        "method": "Reconcile counts and relevant totals, and explain any intended changes. This helps detect missing or duplicated records."
      }
    },
    {
      "id": "pay-location",
      "section": "IntegrateCo Case",
      "case": "IntegrateCo",
      "subject": "Excel",
      "title": "Join employee locations",
      "prompt": "After excluding rows with blank Employee_Number, what are 2016 gross wages for location 1? Match Employee_Name to the supplied locations file. Round to two decimals.",
      "answer": 550990.4,
      "method": "Check employee-name uniqueness in the locations lookup, match Employee_Name, exclude phantom rows, filter Location=1 and sum Gross_Wages.",
      "files": [
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv",
        "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_locations.csv"
      ],
      "source": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "type": "choice",
        "prompt": "After a transformation, should you compare record counts and totals with the source before using the result?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": "Yes",
        "method": "Reconcile counts and relevant totals, and explain any intended changes. This helps detect missing or duplicated records."
      }
    },
    {
      "id": "rest-days",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Prepare daily sales",
      "prompt": "Aggregate salesData by date. How many distinct dates with sales observations are present?",
      "answer": 312,
      "method": "Group salesData by date and sum netTotal for each date. Use the distinct sales dates as the analysis base.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm"
      ],
      "source": "Restaurant Instructions.docx; data.xlsm, salesData",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Sales rows have dates Jan 1, Jan 1, Jan 2 and Jan 3. After grouping by date, how many rows remain?",
        "answer": 3,
        "method": "The three distinct dates each become one daily row.",
        "type": "integer"
      }
    },
    {
      "id": "rest-join",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Combine sales, weather and games",
      "prompt": "Which preparation keeps the restaurant analysis at one row per observed sales date?",
      "answer": "Aggregate sales by date, then left join weather and games on date",
      "method": "Sum netTotal and netTotal_364 by date, then left join one weather row and at most one game row per date. For this supplied schedule, missing game matches represent non-game days and gameDay is set to 0. Investigate missing weather separately.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm"
      ],
      "source": "Restaurant Instructions.docx, ETL",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "Aggregate sales by date, then left join weather and games on date",
        "Sum tmax across menu items",
        "Keep only dates present in gameData"
      ],
      "followup": {
        "prompt": "There are five daily sales rows, two game dates and one weather row per date. A left join retains the five sales dates. How many rows should remain?",
        "answer": 5,
        "method": "Retain all five sales dates; game dates add an indicator without removing non-game dates.",
        "type": "integer"
      }
    },
    {
      "id": "rest-temp",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Read a temperature coefficient",
      "prompt": "Using the displayed fitted model, how much does predicted daily sales change for a 1°F increase in tmax? Round to two decimals.",
      "answer": 7.58,
      "method": "Read the tmax coefficient. It is the predicted change in daily net sales dollars per 1°F. This simple association alone does not establish a causal effect.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm"
      ],
      "source": "Restaurant Instructions.docx, temperature task",
      "type": "number",
      "unit": "USD per °F",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "model": {
        "label": "Daily netTotal = intercept + temperature coefficient × tmax (°F)",
        "n": 312,
        "r2": 0.02271,
        "coefficients": [
          {
            "term": "Intercept",
            "value": 2725.292435
          },
          {
            "term": "tmax",
            "value": 7.579688
          }
        ]
      },
      "followup": {
        "type": "number",
        "unit": "USD",
        "hint": "Apply the method to the values in this example.",
        "decimals": 2,
        "tolerance": 0.005,
        "prompt": "Using the rounded coefficient 7.58 USD per °F, what is the predicted change for a 2°F increase?",
        "answer": 15.16,
        "method": "Multiply the stated per-degree coefficient by 2."
      }
    },
    {
      "id": "rest-game",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Interpret a game indicator",
      "prompt": "In the displayed single-predictor model, what is the predicted game-day minus non-game-day sales difference? Round to two decimals.",
      "answer": 1436.3,
      "method": "gameDay=0 gives the intercept; gameDay=1 gives intercept plus the gameDay coefficient. Their difference is the coefficient. Other factors are not controlled in this single-predictor model.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm"
      ],
      "source": "Restaurant Instructions.docx, game-day task",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "model": {
        "label": "Daily netTotal = intercept + gameDay coefficient × gameDay",
        "n": 312,
        "r2": 0.074765,
        "coefficients": [
          {
            "term": "Intercept",
            "value": 3191.080268
          },
          {
            "term": "gameDay",
            "value": 1436.304348
          }
        ]
      },
      "followup": {
        "prompt": "A game-day model is Sales = 1000 + 200 × gameDay. What is the game-day minus non-game-day prediction?",
        "answer": 200,
        "method": "For gameDay=1 the prediction is 1200; for 0 it is 1000. The difference is 200.",
        "type": "integer"
      }
    },
    {
      "id": "rest-interaction",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Read an interaction",
      "prompt": "Using the displayed model, what is the slope on netTotal_364 on game days? Add the netTotal_364 coefficient to the interaction coefficient. Round to four decimals.",
      "answer": 0.6303,
      "method": "On game days gameDay=1, so the slope on netTotal_364 is b1 + b3. Off game days it is b1.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm"
      ],
      "source": "Restaurant Instructions.docx, interaction task",
      "type": "number",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "decimals": 4,
      "tolerance": 5e-05,
      "model": {
        "label": "Daily netTotal = intercept + b1 × netTotal_364 + b2 × gameDay + b3 × netTotal_364 × gameDay",
        "n": 312,
        "r2": 0.535981,
        "coefficients": [
          {
            "term": "Intercept",
            "value": 1044.415479
          },
          {
            "term": "netTotal_364",
            "value": 0.619594
          },
          {
            "term": "gameDay",
            "value": 387.029626
          },
          {
            "term": "netTotal_364 × gameDay",
            "value": 0.01074
          }
        ]
      },
      "followup": {
        "prompt": "A model is Sales = 10 + 2 × lag + 5 × gameDay + 0.5 × lag × gameDay. What is the slope on lag when gameDay=1?",
        "answer": 2.5,
        "method": "The slope is 2 + 0.5 = 2.5.",
        "type": "number",
        "tolerance": 1e-05,
        "decimals": 1
      }
    },
    {
      "id": "rest-forecast",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Plan a seven-day-ahead prediction",
      "prompt": "The last observed sales date is 31 December 2018. Explain how you would forecast total sales seven days later, including predictor availability and how you would communicate uncertainty to Bob.",
      "answer": null,
      "method": "Aggregate sales across products by date and build predictors available at the forecast origin. A seven-day lag or a same-weekday last-year value may be usable if the required source values exist. Check calendar alignment explicitly. Weather for the target date requires a forecast or stated scenario; this workbook only supplies historical 2018 weather. Evaluate the model using an earlier training period and later holdout dates. Explain the forecast in dollars, a prediction interval or scenario range, and limitations. Use the result to inform ingredients and staffing without claiming certainty.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm",
        "1. Excel part 4/Regression Assignment/Restaurant/Instructions.docx"
      ],
      "source": "Restaurant Instructions.docx, prediction and communication tasks",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Aggregate at the daily level",
        "Identify the target date and check predictor availability",
        "Avoid future-data leakage",
        "Validate chronologically and communicate uncertainty"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "rest-causal",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Explain model limitations",
      "prompt": "The game-day coefficient is positive. Can Bob conclude that a game causes the full difference in sales? Explain what you would check.",
      "answer": null,
      "method": "The coefficient describes an association in this fitted model. Season, weekday, temperature and other factors may differ between game and non-game days. Check controls, residuals, sample size and forecast performance. A causal conclusion needs a suitable design and assumptions.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm"
      ],
      "source": "Restaurant Instructions.docx, interpretation tasks",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Distinguish association from causation",
        "Name plausible confounders",
        "Discuss validation or residual checks"
      ],
      "model": {
        "label": "Daily netTotal = intercept + gameDay coefficient × gameDay",
        "n": 312,
        "r2": 0.074765,
        "coefficients": [
          {
            "term": "Intercept",
            "value": 3191.080268
          },
          {
            "term": "gameDay",
            "value": 1436.304348
          }
        ]
      },
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "rest-predict",
      "section": "Restaurant Regression Case",
      "case": "Restaurant regression",
      "subject": "Excel",
      "title": "Calculate a seven-day-ahead forecast",
      "prompt": "Using the displayed fitted lag model and lagged daily sales of 3252.00 USD, predict total sales on 07 January 2019. Round to two decimals.",
      "answer": 3260.4,
      "method": "Multiply the stated lagged daily sales by the lag coefficient and add the intercept. This produces a point prediction in USD; assess forecast error and business uncertainty before using it.",
      "files": [
        "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm"
      ],
      "source": "Restaurant Instructions.docx, seven-day-ahead prediction",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.01,
      "model": {
        "label": "Daily sales = intercept + b1 × actual total sales seven calendar days earlier",
        "n": 304,
        "r2": 0.327535,
        "coefficients": [
          {
            "term": "Intercept",
            "value": 1407.800036
          },
          {
            "term": "Sales seven days earlier",
            "value": 0.569679
          }
        ],
        "preparation": "Sum netTotal by date. Retain dates where the date exactly seven calendar days earlier also has observed sales. Fit OLS with an intercept. No zero-sales days are invented. The target-date lag is the last observed daily sales total. This is one explicit forecasting model; other justified models may differ."
      },
      "followup": {
        "type": "choice",
        "prompt": "After a transformation, should you compare record counts and totals with the source before using the result?",
        "options": [
          "Yes",
          "No"
        ],
        "answer": "Yes",
        "method": "Reconcile counts and relevant totals, and explain any intended changes. This helps detect missing or duplicated records."
      }
    },
    {
      "id": "chinook-invoices",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Count invoices",
      "prompt": "How many rows are in Invoice?",
      "answer": 412,
      "method": "SELECT COUNT(*) FROM Invoice;",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "COUNT(*) returns 25. Five invoices are added. What count should the same query return?",
        "answer": 30,
        "method": "25 + 5 = 30.",
        "type": "integer"
      }
    },
    {
      "id": "chinook-filter",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Filter invoice totals",
      "prompt": "How many invoices have Total greater than 20?",
      "answer": 4,
      "method": "SELECT COUNT(*) FROM Invoice WHERE Total > 20;",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Totals are 10, 20, 21 and 30. How many satisfy Total > 20?",
        "answer": 2,
        "method": "21 and 30 qualify; the boundary value 20 does not.",
        "type": "integer"
      }
    },
    {
      "id": "chinook-range",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Combine conditions",
      "prompt": "How many invoices have Total greater than 10 and less than 20?",
      "answer": 60,
      "method": "SELECT COUNT(*) FROM Invoice WHERE Total > 10 AND Total < 20;",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Totals are 10, 12, 15 and 20. How many satisfy Total > 10 AND Total < 20?",
        "answer": 2,
        "method": "12 and 15 satisfy both conditions.",
        "type": "integer"
      }
    },
    {
      "id": "chinook-company",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Check NULL values",
      "prompt": "How many customers list a company? In this database, missing companies are NULL.",
      "answer": 10,
      "method": "SELECT COUNT(*) FROM Customer WHERE Company IS NOT NULL;",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Company values are NULL, Acme, NULL and Beta. How many satisfy Company IS NOT NULL?",
        "answer": 2,
        "method": "Acme and Beta are the two non-NULL values.",
        "type": "integer"
      }
    },
    {
      "id": "chinook-employees",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Count employees",
      "prompt": "How many employees does Chinook have?",
      "answer": 8,
      "method": "SELECT COUNT(*) FROM Employee;",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "An Employee table has eight rows. Two employees are added. How many rows are there?",
        "answer": 10,
        "method": "8 + 2 = 10.",
        "type": "integer"
      }
    },
    {
      "id": "chinook-lines",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Count line items",
      "prompt": "How many invoice line items are there?",
      "answer": 2240,
      "method": "SELECT COUNT(*) FROM InvoiceLine;",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Two invoices each have three lines. How many invoice-line rows represent them?",
        "answer": 6,
        "method": "2 × 3 = 6 line items.",
        "type": "integer"
      }
    },
    {
      "id": "chinook-countries",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Filter several countries",
      "prompt": "How many invoices have BillingCountry in Brazil, Argentina or Chile?",
      "answer": 49,
      "method": "SELECT COUNT(*) FROM Invoice WHERE BillingCountry IN ('Brazil','Argentina','Chile');",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "BillingCountry values are Brazil, Chile, Canada and Argentina. How many match IN (Brazil, Argentina, Chile)?",
        "answer": 3,
        "method": "Brazil, Chile and Argentina match the set.",
        "type": "integer"
      }
    },
    {
      "id": "chinook-prices",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Count distinct prices",
      "prompt": "How many distinct UnitPrice values appear in InvoiceLine?",
      "answer": 2,
      "method": "SELECT COUNT(DISTINCT UnitPrice) FROM InvoiceLine;",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC SQL.docx; PWC answers.docx",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "UnitPrice values are 0.99, 0.99 and 1.99. What does COUNT(DISTINCT UnitPrice) return?",
        "answer": 2,
        "method": "There are two distinct prices.",
        "type": "integer"
      }
    },
    {
      "id": "songs-tempo",
      "section": "CS50 — SQL Part 1",
      "case": "Songs",
      "subject": "SQL",
      "title": "Average tempo",
      "prompt": "What is the average tempo across all songs? Round to two decimals.",
      "answer": 119.9,
      "method": "SELECT AVG(tempo) FROM songs;",
      "files": [
        "2. SQL part 1/Assignments/cs50 assignment/songs/songs.db"
      ],
      "source": "Songs requierements.txt, question 5",
      "type": "number",
      "unit": "BPM",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "prompt": "Three song tempos are 100, 120 and 140 BPM. What is their average?",
        "answer": 120,
        "method": "(100 + 120 + 140) / 3 = 120.",
        "type": "integer"
      }
    },
    {
      "id": "songs-energy",
      "section": "CS50 — SQL Part 1",
      "case": "Songs",
      "subject": "SQL",
      "title": "Join songs and artists",
      "prompt": "What is the average energy for Post Malone songs? Round to four decimals.",
      "answer": 0.6088,
      "method": "SELECT AVG(s.energy) FROM songs s JOIN artists a ON a.id=s.artist_id WHERE a.name='Post Malone';",
      "files": [
        "2. SQL part 1/Assignments/cs50 assignment/songs/songs.db"
      ],
      "source": "Songs requierements.txt, question 7",
      "type": "number",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "decimals": 4,
      "tolerance": 5e-05,
      "followup": {
        "prompt": "An artist has song energies 0.4 and 0.8. What is that artist’s average energy?",
        "answer": 0.6,
        "method": "(0.4 + 0.8) / 2 = 0.6.",
        "type": "number",
        "tolerance": 1e-05,
        "decimals": 1
      }
    },
    {
      "id": "songs-longest",
      "section": "CS50 — SQL Part 1",
      "case": "Songs",
      "subject": "SQL",
      "title": "Find the longest song",
      "prompt": "What is the name of the longest song?",
      "answer": "Te Bote - Remix",
      "method": "SELECT name FROM songs ORDER BY duration_ms DESC, name LIMIT 1;",
      "files": [
        "2. SQL part 1/Assignments/cs50 assignment/songs/songs.db"
      ],
      "source": "Songs requierements.txt, question 3, adapted to the longest song",
      "type": "text",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Song A is 200000 ms long and Song B is 250000 ms long. Which name comes first when sorting duration descending?",
        "answer": "Song B",
        "method": "Descending duration puts the longer song first.",
        "type": "text"
      }
    },
    {
      "id": "movies-birth",
      "section": "CS50 — SQL Part 1",
      "case": "Movies",
      "subject": "SQL",
      "title": "Find a birth year",
      "prompt": "What is Johnny Depp’s birth year?",
      "answer": 1963,
      "method": "SELECT birth FROM people WHERE name='Johnny Depp';",
      "files": [
        "2. SQL part 1/Assignments/cs50 assignment/movies/movies.db"
      ],
      "source": "Movies requierements.txt, question 2",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "A people row has name Alex and birth 1980. What value does SELECT birth return for that row?",
        "answer": 1980,
        "method": "Selecting birth returns the stored year.",
        "type": "integer"
      }
    },
    {
      "id": "movies-rating",
      "section": "CS50 — SQL Part 1",
      "case": "Movies",
      "subject": "SQL",
      "title": "Filter ratings",
      "prompt": "How many movies have a rating greater than 9.0?",
      "answer": 1297,
      "method": "SELECT COUNT(*) FROM ratings WHERE rating > 9.0;",
      "files": [
        "2. SQL part 1/Assignments/cs50 assignment/movies/movies.db"
      ],
      "source": "Movies requierements.txt, question 4",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Ratings are 8.9, 9.0 and 9.1. How many satisfy rating > 9.0?",
        "answer": 1,
        "method": "Only 9.1 is strictly greater than 9.0.",
        "type": "integer"
      }
    },
    {
      "id": "movies-average",
      "section": "CS50 — SQL Part 1",
      "case": "Movies",
      "subject": "SQL",
      "title": "Join movies and ratings",
      "prompt": "What is the average rating for movies released in 2013? Round to four decimals.",
      "answer": 6.234,
      "method": "SELECT AVG(r.rating) FROM ratings r JOIN movies m ON m.id=r.movie_id WHERE m.year=2013;",
      "files": [
        "2. SQL part 1/Assignments/cs50 assignment/movies/movies.db"
      ],
      "source": "Movies requierements.txt, question 6",
      "type": "number",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "decimals": 4,
      "tolerance": 5e-05,
      "followup": {
        "prompt": "Two rated movies in the requested year have ratings 6 and 8. What is their average?",
        "answer": 7,
        "method": "(6 + 8) / 2 = 7.",
        "type": "integer"
      }
    },
    {
      "id": "movies-join",
      "section": "CS50 — SQL Part 1",
      "case": "Movies",
      "subject": "SQL",
      "title": "Explain a relational query",
      "prompt": "Describe how to list each person who starred in a movie released in 2003 once, ordered by birth year. Provide the SQL and explain why DISTINCT is needed.",
      "answer": null,
      "method": "SELECT DISTINCT p.name, p.birth FROM people p JOIN stars s ON p.id=s.person_id JOIN movies m ON m.id=s.movie_id WHERE m.year=2003 ORDER BY p.birth, p.name;\n\nThe relationship goes through stars. DISTINCT removes repeated appearances by the same person across films. The original exercise requests just names; selecting birth too makes the ordering field visible during checking.",
      "files": [
        "2. SQL part 1/Assignments/cs50 assignment/movies/movies.db"
      ],
      "source": "Movies requierements.txt, question 9",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Join people to stars on person_id and stars to movies on movie_id",
        "Filter m.year=2003",
        "Remove duplicate people",
        "Order by birth year"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pcard-count",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Count all transactions",
      "prompt": "How many transaction rows are in the supplied OSU database?",
      "answer": 489178,
      "method": "SELECT COUNT(*) FROM pcards;",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard case, Tasks 4–5; supplied pcards schema",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "A table contains five transaction rows and one column has two NULL descriptions. What does COUNT(*) return?",
        "answer": 5,
        "method": "COUNT(*) counts rows, including rows with NULL descriptions.",
        "type": "integer"
      }
    },
    {
      "id": "pcard-2014",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Select a calendar year",
      "prompt": "How many transactions have TransactionDate in calendar year 2014?",
      "answer": 116031,
      "method": "SELECT COUNT(*) FROM pcards WHERE CAST(substr(TransactionDate, instr(TransactionDate,' ')-4, 4) AS INTEGER)=2014;",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard case, Tasks 4–5; supplied pcards schema",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "A transaction occurred on 12/31/2013 and was posted on 1/2/2014. Which transaction calendar year does it belong to?",
        "answer": 2013,
        "method": "Transaction-calendar filtering uses the transaction date, not the posting date.",
        "type": "integer"
      }
    },
    {
      "id": "pcard-over-limit",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Flag a transaction limit",
      "prompt": "How many transactions dated in calendar year 2014 have Amount strictly greater than 5000?",
      "answer": 33,
      "method": "SELECT COUNT(*) FROM pcards WHERE CAST(substr(TransactionDate, instr(TransactionDate,' ')-4, 4) AS INTEGER)=2014 AND Amount>5000;",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard case, Tasks 4–5; supplied pcards schema",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "Amounts are 4999, 5000 and 5001. How many are strictly greater than 5000?",
        "answer": 1,
        "method": "Only 5001 exceeds the limit.",
        "type": "integer"
      }
    },
    {
      "id": "pcard-total",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Sum calendar-year spending",
      "prompt": "What is net Amount for transactions dated in calendar year 2014, including negative returns? Round to two decimals.",
      "answer": 33504148.34,
      "method": "SELECT SUM(Amount) FROM pcards WHERE CAST(substr(TransactionDate, instr(TransactionDate,' ')-4, 4) AS INTEGER)=2014;",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard case, Tasks 4–5; supplied pcards schema",
      "type": "number",
      "unit": "USD",
      "hint": "Review the fields and method, then try again.",
      "decimals": 2,
      "tolerance": 0.005,
      "followup": {
        "prompt": "Amounts are 100, -20 and 50. What is net spending including the return?",
        "answer": 130,
        "method": "100 - 20 + 50 = 130.",
        "type": "integer"
      }
    },
    {
      "id": "pcard-annual",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Group cardholders",
      "prompt": "Using FullName as the case’s cardholder identifier, how many cardholders have net Amount strictly above 50000 in transaction calendar year 2014?",
      "answer": 127,
      "method": "SELECT COUNT(*) FROM (SELECT FullName FROM pcards WHERE CAST(substr(TransactionDate, instr(TransactionDate,' ')-4, 4) AS INTEGER)=2014 GROUP BY FullName HAVING SUM(Amount)>50000);",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard case, Tasks 4–5; supplied pcards schema",
      "type": "integer",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "followup": {
        "prompt": "A cardholder’s eligible yearly amounts are 30000 and 25000. What is their total for a HAVING SUM(Amount)>50000 test?",
        "answer": 55000,
        "method": "30000 + 25000 = 55000, which exceeds 50000.",
        "type": "integer"
      }
    },
    {
      "id": "pcard-threshold",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Apply a strict limit",
      "prompt": "Under the case test for transactions more than $5,000, which Amount is flagged?",
      "answer": "$5,000.01",
      "method": "The test uses Amount > 5000, so a transaction exactly at 5000 is not flagged by this test.",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard Task 5, control 3",
      "type": "choice",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "options": [
        "$5,000.01",
        "$5,000.00",
        "$4,999.99"
      ],
      "followup": {
        "type": "integer",
        "unit": "",
        "hint": "Apply the method to the values in this example.",
        "prompt": "Two purchases by the same person at the same vendor on the same day are $3,000 and $2,500. What is their combined amount?",
        "answer": 5500,
        "method": "3000 + 2500 = 5500. This is a potential split-purchase flag that requires investigation."
      }
    },
    {
      "id": "pcard-split",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Design a split-purchase test",
      "prompt": "Describe how you would flag same-person, same-vendor, same-day groups in calendar 2014 with multiple transactions and combined Amount above $5,000. What would you do after flagging them?",
      "answer": null,
      "method": "Filter TransactionDate to calendar 2014. Group by FullName, Vendor and the date portion of TransactionDate. Use HAVING COUNT(*)>1 AND SUM(Amount)>5000. Join flagged keys back to the transactions to retain all details. Review purchase documentation and reversals, and ask the responsible person for a business explanation. A flag is a candidate for follow-up, not proof of deliberate splitting or fraud.\n\nSELECT FullName, Vendor, substr(TransactionDate,1,instr(TransactionDate,' ')-1) AS PurchaseDate, COUNT(*) AS N, SUM(Amount) AS Total FROM pcards WHERE CAST(substr(TransactionDate, instr(TransactionDate,' ')-4, 4) AS INTEGER)=2014 GROUP BY FullName, Vendor, PurchaseDate HAVING COUNT(*)>1 AND SUM(Amount)>5000;",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard Task 5, control 4",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Use transaction-calendar 2014",
        "Group on person, vendor and date",
        "Require multiple rows and total over 5000",
        "Retrieve details and investigate before concluding"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pcard-monthly",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Test monthly limits",
      "prompt": "Explain how to find people whose spending exceeded $10,000 in a transaction calendar month during 2014. Which clause filters the grouped totals?",
      "answer": null,
      "method": "Filter on TransactionDate in calendar 2014. Extract the transaction month from the original US M/D/YYYY text, group by FullName and transaction month, sum Amount and use HAVING SUM(Amount)>10000. Sort by numeric month and then descending total. Check approval records before concluding a violation. Posting Month may differ from the transaction month.",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard Task 5, control 2",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Use transaction-calendar year and month",
        "Group by cardholder and month",
        "Use HAVING on SUM(Amount)",
        "Review approval evidence"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pcard-shared",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Test split purchases across people or vendors",
      "prompt": "Describe two tests for 2014 purchases split across exactly two cardholders or exactly two vendors. Explain how the grouping keys differ.",
      "answer": null,
      "method": "For exactly two cardholders, group by vendor and transaction date, require COUNT(DISTINCT FullName)=2 and combined Amount>5000. Under the case’s simplified no-double-payments rule, also require two transactions. For exactly two vendors, group by FullName and transaction date, require COUNT(DISTINCT Vendor)=2, two transactions and combined Amount>5000. Join flagged groups back to details and investigate documentation.",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard Task 5, controls 5–6",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Distinguish vendor–date from person–date grouping",
        "Require exactly two distinct counterparties",
        "Apply the total threshold and simplified duplicate rule",
        "Return details and investigate"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pcard-travel",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Test travel purchases",
      "prompt": "Explain how to flag food or restaurant purchases on days when the same cardholder also has a hotel, motel, resort or inn MCC in 2014.",
      "answer": null,
      "method": "Filter transaction-calendar 2014. Build employee–transaction-date keys for hotel/motel/resort/inn MCC matches. Match food/restaurant MCC purchases on the same employee and date, using EXISTS or distinct keys so multiple lodging rows do not duplicate food rows. Return the transaction details and review travel and per-diem evidence before drawing a conclusion.",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard Task 5, control 7",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Use MCC keyword groups and transaction-calendar 2014",
        "Match on person and transaction date",
        "Avoid duplication from multiple matches",
        "Review supporting travel evidence"
      ],
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pcard-keywords",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Review keyword flags",
      "prompt": "A description contains the word alcohol. Explain why a keyword hit needs follow-up and how you would investigate it.",
      "answer": null,
      "method": "A keyword hit may describe permitted laboratory rubbing alcohol or a book rather than prohibited drinking alcohol. Inspect the description, vendor, amount, date and supporting receipt, check the business purpose and relevant case policy, consider reversals and document the decision. Escalate unexplained exceptions for further investigation.",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard Task 6 (optional)",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Explain at least one plausible false positive",
        "Review supporting transaction evidence",
        "Apply the case policy and document follow-up"
      ],
      "optional": true,
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "pcard-benford",
      "section": "P-cards — SQL Part 2",
      "case": "P-cards",
      "subject": "SQL",
      "title": "Plan a first-digit analysis",
      "prompt": "For the optional forensic task, explain how you would prepare a first-digit analysis of OSU 2014 transactions and how you would interpret unusual results.",
      "answer": null,
      "method": "Select transaction-calendar 2014 and exclude Amount below 1.00 as instructed, including negative returns. Extract the first digit of each positive amount, count by digit 1–9 and divide by all eligible transactions. Round percentages to three decimals. Compare the distribution with the stated benchmark and investigate unusual patterns in context. A deviation is a risk indicator and does not establish fraud.",
      "files": [
        "2. SQL part 2/Pcards Assignment/pcards.db"
      ],
      "source": "PCard Task 7 (optional)",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Use the correct year and eligibility rule",
        "Extract digits and use all eligible rows as denominator",
        "Explain follow-up and limitations"
      ],
      "optional": true,
      "followup": {
        "type": "written",
        "prompt": "Apply your method to a fresh situation. Name one plausible error in this analysis and explain a check that would detect it.",
        "method": "A useful answer names a specific error, links it to the analysis, and gives a check with an observable result.",
        "rubric": [
          "Name a concrete error relevant to this case",
          "Explain a check that would detect that error"
        ]
      }
    },
    {
      "id": "sql-overview",
      "section": "PwC — SQL Part 1",
      "case": "Chinook",
      "subject": "SQL",
      "title": "Explain joins and aggregation",
      "prompt": "Using the supplied PWC slides and SQL notes, explain WHERE versus HAVING and why an invoice total may be duplicated when joined to invoice lines.",
      "answer": null,
      "method": "WHERE filters source rows before grouping. HAVING filters grouped results. An Invoice-to-InvoiceLine join repeats the invoice row for each line, so summing Invoice.Total after the join can multiply totals. Aggregate lines to one row per invoice or sum line-level amounts appropriately.",
      "files": [
        "2. SQL part 1/Assignments/pwc assignment/PWC.pptx",
        "2. SQL part 1/Assignments/cs50 assignment/Note.txt",
        "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite"
      ],
      "source": "PWC.pptx; CS50 Note.txt; PWC SQL case",
      "type": "written",
      "unit": "",
      "hint": "Review the fields and method, then try again.",
      "rubric": [
        "Distinguish row filtering and group filtering",
        "Explain the one-to-many join",
        "Describe a way to avoid double counting"
      ],
      "followup": {
        "type": "integer",
        "prompt": "An invoice total of $100 is repeated on three joined line rows. What is SUM of that repeated invoice-total column?",
        "answer": 300,
        "method": "100 + 100 + 100 = 300, which illustrates double counting."
      }
    }
  ],
  "resources": [
    {
      "path": "1. Excel Part 1/PWC Excel Assignment/Assignment_01_Excel-SQL.xlsx",
      "name": "Assignment_01_Excel-SQL.xlsx",
      "section": "PwC Excel Case",
      "bytes": 81975
    },
    {
      "path": "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.txt",
      "name": "NYC_Film_Permits.txt",
      "section": "PwC Excel Case",
      "bytes": 11120891
    },
    {
      "path": "1. Excel Part 1/PWC Excel Assignment/NYC_Film_Permits.xlsx",
      "name": "NYC_Film_Permits.xlsx",
      "section": "PwC Excel Case",
      "bytes": 3506591
    },
    {
      "path": "1. Excel Part 1/PWC Excel Assignment/solutions.xlsx",
      "name": "solutions.xlsx",
      "section": "PwC Excel Case",
      "bytes": 19532
    },
    {
      "path": "1. Excel part 2/ETL Assignment/Analytics_mindset_case_studies_ETL.docx",
      "name": "Analytics_mindset_case_studies_ETL.docx",
      "section": "ETL Case",
      "bytes": 473574
    },
    {
      "path": "1. Excel part 2/ETL Assignment/data/case 1/Analytics_mindset_case_studies_ETL_Case1.csv",
      "name": "Analytics_mindset_case_studies_ETL_Case1.csv",
      "section": "ETL Case",
      "bytes": 1779
    },
    {
      "path": "1. Excel part 2/ETL Assignment/data/case 2/Analytics_mindset_case_studies_ETL_Case2_Excel.xlsx",
      "name": "Analytics_mindset_case_studies_ETL_Case2_Excel.xlsx",
      "section": "ETL Case",
      "bytes": 48502
    },
    {
      "path": "1. Excel part 2/ETL Assignment/data/case 3/Analytics_mindset_case_studies_ETL_Case3_Excel.xlsx",
      "name": "Analytics_mindset_case_studies_ETL_Case3_Excel.xlsx",
      "section": "ETL Case",
      "bytes": 48326
    },
    {
      "path": "1. Excel part 2/ETL Assignment/data/case 4/Analytics_mindset_case_studies_ETL_Case4_Excel.xlsx",
      "name": "Analytics_mindset_case_studies_ETL_Case4_Excel.xlsx",
      "section": "ETL Case",
      "bytes": 114035
    },
    {
      "path": "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2015payroll.csv",
      "name": "Analytics_mindset_case_studies_IntegrateCo_2015payroll.csv",
      "section": "IntegrateCo Case",
      "bytes": 378963
    },
    {
      "path": "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2015payroll.xlsx",
      "name": "Analytics_mindset_case_studies_IntegrateCo_2015payroll.xlsx",
      "section": "IntegrateCo Case",
      "bytes": 399922
    },
    {
      "path": "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv",
      "name": "Analytics_mindset_case_studies_IntegrateCo_2016payroll.csv",
      "section": "IntegrateCo Case",
      "bytes": 49152
    },
    {
      "path": "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_2016payroll.xlsx",
      "name": "Analytics_mindset_case_studies_IntegrateCo_2016payroll.xlsx",
      "section": "IntegrateCo Case",
      "bytes": 62745
    },
    {
      "path": "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "name": "Analytics_mindset_case_studies_IntegrateCo_Excel.docx",
      "section": "IntegrateCo Case",
      "bytes": 87354
    },
    {
      "path": "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_jobcodes.csv",
      "name": "Analytics_mindset_case_studies_IntegrateCo_jobcodes.csv",
      "section": "IntegrateCo Case",
      "bytes": 283
    },
    {
      "path": "1. Excel part 3/IntegrateCo Assignment/Analytics_mindset_case_studies_IntegrateCo_locations.csv",
      "name": "Analytics_mindset_case_studies_IntegrateCo_locations.csv",
      "section": "IntegrateCo Case",
      "bytes": 1706
    },
    {
      "path": "1. Excel part 4/Regression Assignment/Restaurant/Instructions.docx",
      "name": "Instructions.docx",
      "section": "Restaurant Regression Case",
      "bytes": 13706
    },
    {
      "path": "1. Excel part 4/Regression Assignment/Restaurant/data.xlsm",
      "name": "data.xlsm",
      "section": "Restaurant Regression Case",
      "bytes": 540404
    },
    {
      "path": "2. SQL part 1/Assignments/cs50 assignment/Note.txt",
      "name": "Note.txt",
      "section": "CS50 — SQL Part 1",
      "bytes": 170
    },
    {
      "path": "2. SQL part 1/Assignments/cs50 assignment/movies/movies.db",
      "name": "movies.db",
      "section": "CS50 — SQL Part 1",
      "bytes": 68939776
    },
    {
      "path": "2. SQL part 1/Assignments/cs50 assignment/movies/requierements.txt",
      "name": "requierements.txt",
      "section": "CS50 — SQL Part 1",
      "bytes": 4380
    },
    {
      "path": "2. SQL part 1/Assignments/cs50 assignment/songs/requierements.txt",
      "name": "requierements.txt",
      "section": "CS50 — SQL Part 1",
      "bytes": 1797
    },
    {
      "path": "2. SQL part 1/Assignments/cs50 assignment/songs/songs.db",
      "name": "songs.db",
      "section": "CS50 — SQL Part 1",
      "bytes": 24576
    },
    {
      "path": "2. SQL part 1/Assignments/pwc assignment/Chinook_Sqlite.sqlite",
      "name": "Chinook_Sqlite.sqlite",
      "section": "PwC — SQL Part 1",
      "bytes": 1067008
    },
    {
      "path": "2. SQL part 1/Assignments/pwc assignment/PWC SQL.docx",
      "name": "PWC SQL.docx",
      "section": "PwC — SQL Part 1",
      "bytes": 15125
    },
    {
      "path": "2. SQL part 1/Assignments/pwc assignment/PWC answers.docx",
      "name": "PWC answers.docx",
      "section": "PwC — SQL Part 1",
      "bytes": 24175
    },
    {
      "path": "2. SQL part 1/Assignments/pwc assignment/PWC.pptx",
      "name": "PWC.pptx",
      "section": "PwC — SQL Part 1",
      "bytes": 3100038
    },
    {
      "path": "2. SQL part 2/Pcards Assignment/Analytics_mindset_case_studies_PCard.docx",
      "name": "Analytics_mindset_case_studies_PCard.docx",
      "section": "P-cards — SQL Part 2",
      "bytes": 115994
    },
    {
      "path": "2. SQL part 2/Pcards Assignment/pcards.db",
      "name": "pcards.db",
      "section": "P-cards — SQL Part 2",
      "bytes": 94003200
    }
  ],
  "models": {
    "temperature": {
      "label": "Daily netTotal = intercept + temperature coefficient × tmax (°F)",
      "n": 312,
      "r2": 0.02271,
      "coefficients": [
        {
          "term": "Intercept",
          "value": 2725.292435
        },
        {
          "term": "tmax",
          "value": 7.579688
        }
      ]
    },
    "gameDay": {
      "label": "Daily netTotal = intercept + gameDay coefficient × gameDay",
      "n": 312,
      "r2": 0.074765,
      "coefficients": [
        {
          "term": "Intercept",
          "value": 3191.080268
        },
        {
          "term": "gameDay",
          "value": 1436.304348
        }
      ]
    },
    "interaction": {
      "label": "Daily netTotal = intercept + b1 × netTotal_364 + b2 × gameDay + b3 × netTotal_364 × gameDay",
      "n": 312,
      "r2": 0.535981,
      "coefficients": [
        {
          "term": "Intercept",
          "value": 1044.415479
        },
        {
          "term": "netTotal_364",
          "value": 0.619594
        },
        {
          "term": "gameDay",
          "value": 387.029626
        },
        {
          "term": "netTotal_364 × gameDay",
          "value": 0.01074
        }
      ]
    }
  }
};
