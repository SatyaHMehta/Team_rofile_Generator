// given modules
const fs = require("fs");
const inquirer = require("inquirer");

// created modules
const employeeMod = require("./lib/Employee");
const managerMod = require("./lib/Manager");
const engineerMod = require("./lib/Engineer");
const internMod = require("./lib/Intern");
const questions = require("./lib/Questions");
const generateHTML = require('./lib/generateHtml')

const newEmployees = [];

// function that prompts the user to generate the employees
const createManager = () => {
  const createIntern = () => {
    inquirer
      .prompt(questions.questionsIntern)
      .then(({ name, id, email, school }) => {
        const intern = new internMod(name, id, email, school);
        newEmployees.push(intern);
        menu();
      });
  };
  const createEngineer = () => {
    inquirer
      .prompt(questions.questionsEngineer)
      .then(({ name, id, email, github }) => {
        const engineer = new engineerMod(name, id, email, github);
        newEmployees.push(engineer);
        menu();
      });
  };
  const menu = () => {
    inquirer.prompt({
      type: "list",
      name: "newEmployee",
      message: "Create another profile?",
      choices: ["Engineer", "Intern", "Done"],
      filter(val) {
        return val.toLowerCase();
      },
    })
    .then(({newEmployee})=>{
      switch (newEmployee) {
        case "engineer":
          createEngineer();
          break;
        case "intern":
          createIntern();
          break;
        case "done":
          console.log("employees created!");
          // module.exports = newEmployees
          generateHTML(newEmployees);
          // console.log(newEmployees)
          break;
        default:
          console.log("invalid option");
      }
    })
    // .then(pageHTML => {
    //   return writeFile(pageHTML)
    // })
  };
  inquirer
    .prompt(questions.questionsManager)
    .then(({ name, id, email, officeNumber}) => {
      const manager = new managerMod(name, id, email, officeNumber);
      newEmployees.push(manager)
      menu();
      
    });

};
createManager();

// const writeFile = data => {
//   fs.writeFile('./dist/index.html', data, err => {
//     err ? console.log(err) : console.log('Your team profile has been generated!');
//   })
// }
