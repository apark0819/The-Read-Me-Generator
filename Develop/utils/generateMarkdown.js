

** Table-of-Contents **
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contribute)
  * [Tests](#tests)
  ${renderLicenseTOC(data.license)}
  * [Questions](#questions)
----------------------------------
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## For questions and concerns:
  
  Contact: [${data.github}](https://github.com/${data.github}), email at [${data.email}](mailto:${data.email}).;
  `}

module.exports = generateMarkdown;