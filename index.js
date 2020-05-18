const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

const teamMembers = [];


const promptIntern = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the Intern's Name",
            validate: internNameInput => {
                if(internNameInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name as a string!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the Intern's Id",
            validate: internIdInput => {
                if(internIdInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Intern's ID as number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the Intern's Email",
            validate: internEmailInput => {
                if(internEmailInput.match("[a-zA-Z@]+$")) {
                    return true;
                } else {
                    console.log("Try Again for the email, please!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the Intern's school name",
            validate: internSchoolInput => {
                if(internSchoolInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter school name as a string!");
                    return false;
                }
            }
        }

    ]).then((answers) => {
        const {internName, internId, internEmail, internSchool } = answers
        const intern = new Intern(internName, internId, internEmail, internSchool )
        teamMembers.push(intern);

        promptChoicesNew();

        console.log(internName, internId, internEmail, internSchool);
    })
}


const promptEngineerNew = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the Engineer's Name",
            validate: engineerNameInput => {
                if(engineerNameInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter Engineer name as a string");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the Engineer's Id",
            validate: engineerIdInput => {
                if(engineerIdInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter Engineer ID as a number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the Engineer email",
            validate: engineerEmailInput => {
                if(engineerEmailInput.match("[a-zA-Z@]+$")) {
                    return true;
                } else {
                    console.log("Please enter Engineer's email");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the Engineer Github username",
            validate: engineerGitHubInput => {
                if(engineerGitHubInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter Github as a string");
                    return false;
                }
            }
        }
    

    ]).then((answers) => {
        const {engineerName, engineerId, engineerEmail, engineerGithub } = answers
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub )
        teamMembers.push(engineer);

        promptChoicesNew();


        console.log(engineerName, engineerId, engineerEmail, engineerGithub);
    })
}


const writeFile = function(teamMembers) {
        const createHTMLFile = generateHTML(teamMembers);
        
        fs.writeFile('./dist/index.html', createHTMLFile, err => {
                if(err) throw new Error(err);
                    console.log('index.html created!');
        });
}


const promptChoicesNew = function() {
    inquirer.prompt([
        {
            type: "list",
            name: "choicesForEmployeeType",
            message: "Please select from the list of choices:",
            choices: ["Engineer", "Intern", "Finish building the Team"],
            validate: choiceSelection => {
                if (choiceSelection) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ]).then((answers) => {
        const {choicesForEmployeeType} = answers;
        if (choicesForEmployeeType === "Engineer") {

            //prompt for the Engineer data function call
            promptEngineerNew();
        }
        else if (choicesForEmployeeType === "Intern") {

            //prompt for the Intern data function call
            promptIntern();
        }
        else if(choicesForEmployeeType === "Finish building the Team") {

            writeFile(teamMembers);

        }

    })
    
}


const promptManagerNew = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter Team Manager's Name (Required)",
            validate: managerNameInput => {
                if(managerNameInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's name as a string!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter your Employee ID",
            validate: employeeIdInput => {
                if(employeeIdInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter your the Employee ID as a number");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter your email:",
            validate: emailInput => {
                if(emailInput.match("[a-zA-Z@]+$")) {
                    return true;
                } else {
                    console.log("Please enter your email as a string");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter your Office Number:",
            validate: officeNumberInput => {
                if(officeNumberInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter your Office Number as number");
                    return false;
                }
            }
        }
    ]).then((answers) => {
        const {managerName, managerId, managerEmail, managerOfficeNumber } = answers
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber )
        teamMembers.push(manager);

        promptChoicesNew();


        console.log(managerName, managerId, managerEmail, managerOfficeNumber);
    })
}


promptManagerNew();





