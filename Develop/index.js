
// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Please include a brief description of your project.',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install your project.',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how your project will be used.',
    },
      
    {
        type: 'input',
        name: 'license',
        message: 'Please name the license you will be using.',
        // choices: ['Apache', 'MPL 2.0', 'MIT', 'none']
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Please include contribution guidelines for your project.'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please add your github username.'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please add your email.'
    }

];

// TODO: Create a function to write README file
    function writeToFile(filename, data) {
        fs.writeFile(filename, data, (err) =>{
            if(err){
                return console.log(err);
            } else {
                return console.log('Here is your README file!')
            }
        }
        )
    }


// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });

// Function call to initialize app
init();