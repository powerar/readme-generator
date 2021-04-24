const generateReadme = (readmeData) => {
    return `
# ${readmeData.projectName}

## Description

${readmeData.description}

## Table of Contents

## Installation

${readmeData.installation}

## Usage

${readmeData.usage}

## License

${readmeData.license}

## Contributing

${readmeData.contributing}
## Tests

${readmeData.tests}
## Questions

[${readmeData.github}](http://github.com/${readmeData.github})
<${readmeData.email}>
`;
};

module.exports = generateReadme;