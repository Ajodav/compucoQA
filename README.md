Compuco (CiviCRM) QA Task

Summary

This automation script covers the basic functionalities around Login, Contact & Relationships. Test scripts were set to execute sequencially

for full test cases please go to https://docs.google.com/spreadsheets/d/15UYbfsFam-vwhG06on5iCQ9IWmh7yOhAvH8qeuf5BbA/edit?usp=sharing

Technologies
Node and npm
Playwright with JS

Installation
If you don't have node or npm please go to: https://brew.sh or run:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Create a folder with

    mkdir my-project
    cd my-project
Install playwright with npm

    npm init playwright@latest
Install Report module with npm

    npm install playwright-json-summary-reporter --save-dev
Running Tests
To run tests, run the following command:

To run this tests (E2E):

  npx playwright test 'E2ETests.spec.ts' --workers=1
  
To run specific test;  

  npx playwright test -g'Add relationship with null dates'
     
To open trace view:

  npx playwright show-trace trace.zip  

To execute the suite manually you have to options On your local with the commands above
