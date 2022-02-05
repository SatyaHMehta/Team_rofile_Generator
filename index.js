// given modules
const fs = require("fs");
const inquirer = require("inquirer");

// created modules
const managerMod = require("./lib/Manager");
const engineerMod = require("./lib/Engineer");
const internMod = require("./lib/Intern");
const questions = require("./lib/Questions");
const generateHTML = require("./lib/generateHtml");

// holds new employee bojct
const newEmployees = [];

// function that prompts the user to generate the employees
const createManager = () => {
// prompt to create an intern, and then push the intern object to the newEmployees array
  const createIntern = () => {
    inquirer
      .prompt(questions.questionsIntern)
      .then(({ name, id, email, school }) => {
        const intern = new internMod(name, id, email, school);
        newEmployees.push(intern);
        menu();
      });
  };
// promt to create an engineer, and then push the intern object to the newEmployees array
  const createEngineer = () => {
    inquirer
      .prompt(questions.questionsEngineer)
      .then(({ name, id, email, github }) => {
        const engineer = new engineerMod(name, id, email, github);
        newEmployees.push(engineer);
        menu();
      });
  };
// menu function that gives the user choices to create manager, intern or engineer. 
  const menu = () => {
    inquirer
      .prompt({
        type: "list",
        name: "newEmployee",
        message: "Create another profile?",
        choices: ["Engineer", "Intern", "Done"],
        filter(val) {
          return val.toLowerCase();
        },
      })
      .then(({ newEmployee }) => {
        switch (newEmployee) {
          case "engineer":
            createEngineer();
            break;
          case "intern":
            createIntern();
            break;
          case "done":
            const htmlPageContent = generateHTML(newEmployees);
            fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
              err
                ? console.log(err)
                : console.log("Successfully created index.html!")
            );
            return htmlPageContent;
        }
      });
  };
  inquirer
    .prompt(questions.questionsManager)
    .then(({ name, id, email, officeNumber }) => {
      const manager = new managerMod(name, id, email, officeNumber);
      newEmployees.push(manager);
      menu();
    });
};

// main function that starts the whole app. 
createManager();
