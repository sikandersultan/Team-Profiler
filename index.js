
const Manager = require("./library/manager.js")
const Engineer = require("./library/engineer.js")
const Intern = require("./library/intern.js")
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html")
const newHtml = require("./src/template.js")

bigArray = []


function theBigFunction () {
    function chooseTeam () {
        inquirer.prompt([
            {
            type: "list",
            message: "Choose an employee pls",
            name: "choiceOfWorker",
            choices: ["Manager", "Engineer", "Intern", "No one else to add."]
        }
    ])
        .then (function (input) {
            switch (input.choiceOfWorker) {
                case "Manager":
                    newManager()
                    break
                case "Engineer":
                    newEngineer()
                    break
                case "Intern":
                    newIntern()
                    break
                default:
                    siteConstructor()

            }
        })
    }

    function newManager () {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter the manager's name"
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the manager's ID number"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the manager's email address"
            },
            {
                type: "input",
                name: "managerOffice",
                message: "Please enter the manager's office number"
            }
        ]) 
        .then (answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
            bigArray.push(manager)
            chooseTeam()
        })
    }

    function newEngineer () {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter the engineer's name"
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter the engineer's ID number"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the engineer's email address"
            },
            {
                type: "input",
                name: "engineerGH",
                message: "Please enter the engineer's GitHub username"
            }
        ])
        .then (answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGH)
            bigArray.push(engineer)
            chooseTeam()
        })
    }

    function newIntern () {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter the intern's name"
            },
            {
                type: "input",
                name: "internID",
                message: "Please enter the intern's ID number"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter the intern's email address"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the intern's school name"
            }
        ])
        .then (answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            bigArray.push(intern)
            chooseTeam()
        })
    }
    function siteConstructor () {
        console.log("Team created!")
    
        fs.writeFileSync(outputPath, newHtml(bigArray),)
    
    }
    chooseTeam()
}
theBigFunction()