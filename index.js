// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "what is your github username?",
    name: "title"},
    {type: "input",
    message: "What is your email address?",
    name: "titleDisc"},
    {type: "input",
    message: "What is your project's name?",
    name: "titleDisc0"},
    {type: "input",
    message: "Write a short description of your project:",
    name: "titleDisc1"},
    {type: "list",
    message: "What type of license should you project have?",
    name: "titleDisc2",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]},
    {type: "input",
    message: "What command should I run to run the dependencies?",
    name: "titleDisc3"},
    {type: "input",
    message: "What does the user need to know about using the repo?",
    name: "titleDisc4"},
    {type: "input",
    message: "What does the user need to know about contributing the repo?",
    name: "titleDisc5"}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => console.log(response));
}

// Function call to initialize app
init();
