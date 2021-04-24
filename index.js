// require filesystem
const fs = require("fs");
//require generateReadme function
const generateReadme = require("./src/readme-template.js");
// require inquirer
const inquirer = require('inquirer');

const promptUser = readmeData => {
    readmeData = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information:'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Please select the license you would like to use:',
            choices: ['Open Software License', 'Mozilla Public License', 'MIT']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter information on how to contribute:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter instructions on how to run tests on your project:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:'
        }
    ])
};

//write a README.md file
const writeFile = (readmeData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", generateReadme(readmeData), (err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        }));
    });
};

promptUser().then(readmeData => writeFile(readmeData));