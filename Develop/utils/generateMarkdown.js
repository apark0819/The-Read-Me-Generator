
// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title}
// `;
 }
## License:
 [![license]]

## Table-of-Contents 
 - [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribute)
  * [Tests](#tests)
  
  ## Description:
    ${data.description}

  ## Installation
    ${data.installation}
  
  ## Usage  
    ${data.usage}
  
  ## Contributing
    ${data.contribution}
  
  ## Tests
    ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Contact
    $[{data.github}}(https://github.com/$data.github}])
    $[{data.email}](mailto:$data.email)
    ``;

module.exports = generateMarkdown;