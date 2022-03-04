const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const newHtml = require("./src/template.js")
const { choices } = require("yargs")



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
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, managerOffice)
            
        })
    }
}