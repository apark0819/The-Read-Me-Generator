
// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
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
        name: 'title',
        message: 'What is the title of your project?',
    },
    
    
    {
        type: 
    }

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();