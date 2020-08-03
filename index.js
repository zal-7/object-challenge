const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineer = require("./__tests__/engineer");
const intern = require("./__tests__/intern");
const manager = require("./__tests__/manager");
const employee = require("./__tests__/employee");


const outputPath = path.resolve(__dirname, "output", "team.html");

const teamMember = [];

function mainApp() {
   
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the managers id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the managers email?"
            }
        ])
        .then(answers => {
            var { name, id, email, officeNumber } = answers;
            var manager = Manager(name, id, email, officeNumber);
            
            
            teamMember.push(manager);

            
            createTeam();
        })

}

function createTeam() {

    inquirer
        .prompt([
        {
            type: "list",
            name: "command",
            message:"Would you like to add more team members?",
            choices:["Add an Engineer", "Add an Intern", "Make team"]
        }
        ])
        .then(answers => {
            
            statement = answers.command;

            switch(statement){
                case "Add an Engineer":
                    getEngineer();
                    break;

                case "Add an Intern":
                    getIntern();
                    break;

                case "Make team":
                    buildTeam();
                    break;
            }
        })
}


function getEngineer() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineers name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineers id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers github username?"
            }

        ])
        .then(answers => {
            var {name, id, email, github} = answers;
            var engineer = Engineer(name, id, email, github);
            teamMember.push(engineer);
        })

}

function getIntern() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Interns name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Interns id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Interns email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the school name?"
            }

        ])
        .then(answers => {
            var {name, id, email, school} = answers;
            var intern = Intern(name, id, email, school);

        })

}

function buildTeam() {
    fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()
