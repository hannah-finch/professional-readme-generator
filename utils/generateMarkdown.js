// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  ## Installation
  To install the necessary dependencies, run the following command:<br>
  ${data.command}
  ## Usage
  ${data.usage}
  ## License
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  For questions about this repo, open an issue or email me directly at <${data.email}>
`;
}

// Here is the acceptance criteria in a readable way
// - professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// - project title is displayed as the title of the README
// - choose a license for my application from a list of options
// - badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// - GitHub username added to the section of the README entitled Questions, with a link to my GitHub profile
// - email address added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// -links in the Table of Contents corresponding section of the README

module.exports = generateMarkdown;
