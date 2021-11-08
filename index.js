// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Prompt the list of questions

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "fname",
      message: "What is your name?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
      },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },    
    {
      type: "input",
      name: "projectname",
      message: "What is the title of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "Tell us something about your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install the projects?",
    },
    {
        type: "input",
        name: "usage",
        message: "How can the user run the application?",
      },
      {
      type: "input",
      name: "contributions",
      message: "Were there others that contributed to this project, if so, mention them here.",
    },
    {
        type: "input",
        name: "test",
        message: "How can the user test the application?",
      },
    {
      type: "list",
      name: "license",
      message: "Which license is applicable?",
      default: "MIT",
      choices: [
        {
          value: "MIT",
        },
        {
          value: "GNU",
        },
        {
          value: "ISC",
        },
        {
          value: "Other",
        },
      ],
    },
  ]);
};


const generatereadme = ({ fname, projectname, description, installation, contributions, usage, license, github, email, test  }) =>
  `
  # ${projectname}

  ![License](https://img.shields.io/badge/Licence-${license}-blue)

  ${description}
  
## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Test](#Test)
- [Questions](#Questions)
- [License](#License)
- [Author](#Author)

    
## Installation
Run this code to install:
\`\`\`
${installation} 
\`\`\`
    
## Usage 
Run this code to run the application:
\`\`\`
${usage}
\`\`\`

## Contributions
${contributions}

## Test
Run this code to test:
\`\`\`
${test}
\`\`\`

## Questions 
If you have any questions please contact me either (https://github.com/${github}) or via email at ${email} 
    
## License 
This application is covered under ${license}. 

## Author 
<a href="https://www.github.com/${github}">${fname}</a><br>
![avatar](https://avatars.githubusercontent.com/${github})
  `;

// Create a function to initialize app
const init = () => {
  promptUser()
    // Write the README file from the function
    .then((answers) =>
      fs.writeFileSync("./readme/readme.md", generatereadme(answers))
    )
    .then(() => console.log("Successfully wrote to readme.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
