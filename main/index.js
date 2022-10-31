const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const createSite = require('./src/page-template');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const addManager = () => {
    return inquirer.createPromptModule([
        // possible issues with naming of inputs
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the manager name',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter the manager name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter employee email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phoneNumber',
            message: 'Please enter employee phone number',
            validate: phoneNumber => {
                if (phoneNumber) {
                    return true;
                } else {
                    console.log('Please enter employee phone number');
                    return false;
                }
            }
        }

    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.phoneNumber);
            team.push(manager);
            promptMenu();
        })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select employee type to add',
            choices: ['Engineer', 'Intern', 'None - Team Complete']
        }
    ])
        .then(selection => {
            switch (selection.menu) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                default:
                    buildTeam();

            }
        })
}

const createEngineer = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Engineer name',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter Engineer name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter employee email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter github username',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter github username');
                    return false;
                }
            }
        }

    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
            team.push(engineer);
            promptMenu();
        })
};

const createIntern = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter Intern name',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter Intern name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter employee email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter github username',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter github username');
                    return false;
                }
            }
        }

    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Intern (answers.name, answers.employeeId, answers.email, answers.github);
            team.push(intern);
            promptMenu();
        })
};

const buildTeam = () => {

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, createSite(team), "utf-8");
}

promptManager();