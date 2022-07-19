// Needed for application
//const { licenses } = require("./licenses");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
//     if (license !== 'no license') {
//       return  `![badge]No license available.`;
//     } else {
//         return '';
//     }
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title}
 
 
## Table-of-Contents 
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution](#contribute)
 - [Tests](#tests)
  
  ## Description:
    ${data.description}

  ## Installation
    ${data.installation}
  
  ## Usage  
    ${data.usage}
  
  ## Contributing
    ${data.contribute}
  
  ## Tests
    ${data.tests}
    
  ## Contact
    ${data.github}
    ${data.email}
`}

module.exports = generateMarkdown;