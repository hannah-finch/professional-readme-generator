// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "what is your github username?",
    name: "username"},
    {type: "input",
    message: "What is your email address?",
    name: "email"},
    {type: "input",
    message: "What is your project's name?",
    name: "title"},
    {type: "input",
    message: "Write a short description of your project:",
    name: "description"},
    {type: "list",
    message: "What type of license should you project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]},
    {type: "input",
    message: "What command should I use to run the dependencies?",
    name: "command"},
    {type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage"},
    {type: "input",
    message: "What does the user need to know about contributing the repo?",
    name: "contributing"}
];

// TODO: Create a function to write README file
// This takes in data and uses it to create a readme file
const writeToFile = (data) => {
  fs.writeFile('generated-readme.md', data, (err) => {
    err ? console.error(err)
    : console.log('File created!')
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((data) => {
    // send the data to generateMarkdown to format it
    let markdown = generateMarkdown(data)
    writeToFile(markdown)
  }
  );
}

// Function call to initialize app
init();
