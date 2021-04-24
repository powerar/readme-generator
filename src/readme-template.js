const generateLicense = (licenseInfo) => {
    if (licenseInfo.licenseInfo === 'Unlicense') {
        return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)
## License
http://unlicense.org/`;
    }
    if (licenseInfo.licenseInfo === 'GNU GPL') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## License
https://www.gnu.org/licenses/gpl-3.0`;
    }
    if (licenseInfo.licenseInfo === 'Create Commons') {
        return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)
## License
http://creativecommons.org/publicdomain/zero/1.0/`
    }
    if (!licenseInfo) {
        return "";
    }

    return licenseInfo;
};

const generateReadme = (readmeData, licenseInfo) => {
    return `
# ${readmeData.projectName} ${generateLicense(licenseInfo)}

## Description
${readmeData.description}

## Table of Contents
- [Description](##description)
- [Installation](##installation)
- [Usage](##usage)
- [Contributing](##contributing)
- [Tests](##tests)
- [Questions](##questions)

## Installation
${readmeData.installation}

## Usage
${readmeData.usage}

## Contributing
${readmeData.contributing}

## Tests
${readmeData.tests}

## Questions
- [${readmeData.github}](https://github.com/${readmeData.github})
- <${readmeData.email}>
`;
};



module.exports = generateReadme, generateLicense;