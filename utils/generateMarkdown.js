// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "none") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "License: [MIT](https://opensource.org/license/mit)";
  } else if (license === "APACHE 2.0") {
    return "License: [APACHE 2.0](https://opensource.org/license/apache-2-0)";
  } else if (license === "GPL 3.0") {
    return "License: [GPL 3.0](https://opensource.org/license/gpl-3-0)";
  } else if (license === "BSD 3") {
    return "License: [BSD 3](https://opensource.org/license/bsd-3-clause)";
  } else if (license === "none") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);
  let licenseBadge = renderLicenseBadge(license);

  console.log(licenseLink);
  console.log(licenseBadge);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = `${data.license}`;
  // console.log(license);
  renderLicenseSection(license);

  return `# ${data.title}
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  
  ## Installation

  To install the necessary dependencies, run the following command:

  ~~~
  ${data.dependencies}
  ~~~

  ## Usage

  ${data.usage}
  
  ## License
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  ~~~
  ${data.tests}
  ~~~
  
  ## Questions
  
  For questions about this repo, open an issue or email me directly at <${data.email}><br>
  To view my other repos, see my [GitHub profile](https://github.com/${data.username})
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
