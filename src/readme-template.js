const generateLicense = (licenseInfo) => {
    if (licenseInfo[0]) {
        return `
            [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        `;
    }
    if (licenseInfo[1]) {
        return `
            [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        `;
    }
    if (licenseInfo[2]) {
        return `
        [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)
        `
    }
    if (!licenseInfo) {
        return "";
    }

    generateReadme(licenseInfo);
};

const generateReadme = (readmeData, licenseInfo) => {
    return `
# ${readmeData.projectName} ${licenseInfo.licenseInfo}

## Description

${readmeData.description}

## Table of Contents

## Installation

${readmeData.installation}

## Usage

${readmeData.usage}

## Contributing

${readmeData.contributing}
## Tests

${readmeData.tests}
## Questions

[${readmeData.github}](http://github.com/${readmeData.github})
<${readmeData.email}>
`;
};



module.exports = generateReadme, generateLicense;