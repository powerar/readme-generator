// require filesystem
const fs = require('fs');
//require generateReadme function
const generateReadme = require('./src/readme-template.js');
const generateLicense = require('./src/readme-template.js');

// require inquirer
const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter information on how to contribute:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter instructions on how to run tests on your project:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your github username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address:',
    },
  ]);
};

const promptLicense = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to display license information?',
      default: true,
    },
    {
      type: 'list',
      name: 'licenseInfo',
      message: 'Please select the license you would like to use:',
      choices: ['Unlicense', 'GNU GPL', 'Creative Commons'],
    },
  ]);
};

//write a README.md file
const writeFile = (data) => {
  fs.writeFile(
    './dist/README.md',
    generateReadme(data.readmeData, data.licenseInfo),
    (err) => {
      if (err) {
        throw err;
      }
      console.log('File written!');
    }
  );

console.log(data);
};

function returnGenerateReadme(readmeData) {
  return function (licenseInfo) {
    // generateReadme(readmeData, licenseInfo);
    return {readmeData, licenseInfo};
  };
}

promptUser().then(function (response) {
  var readmeData = returnGenerateReadme(response);
  promptLicense().then(function (value) {
    writeFile(readmeData(value));
  });
});

//  .then(writeFile);
