// require filesystem
const fs = require("fs");

const generateReadme = require("./src/readme-template.js");

const readmeDataArgs = process.argv.slice(2);

const [projectName, description] = readmeDataArgs;

//write a README.md file
const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", generateReadme(projectName, description), (err => {
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


writeFile("test");
