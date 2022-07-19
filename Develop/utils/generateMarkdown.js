// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `# ${data.title}

[![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
 
## Table-of-Contents 
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contribution](#contribute)
 - [Tests](#tests)
  
  ## Description:
    ${data.description}

  ## Installation
    ${data.installation}
  
  ## Usage  
    ${data.usage}
  
  ## License
    ${data.license}
  
  ## Contributing
    ${data.contribute}
  
  ## Tests
    ${data.tests}
    
  ## Contact
    Github:${data.github}
    Email:${data.email}
`}

module.exports = generateMarkdown;