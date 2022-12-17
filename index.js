const inquirer = require("inquirer");
const {template} = require("./src/template");
const path = require("path");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");


// function to add a new employee to the team roster.
function addEmployee() {
  inquirer.prompt([
    {
      type: "list",
      name: "employeeRole",
      message: "What is your employee's role in the company?",
      choices: ["Employee", "Manager", "Engineer", "Intern"],
    },
  ]).then((answer) => {
    if (answer.type ==="Employee") {
      generatePage();
    }
    else initialQuestions(answer.type);
  });

  // Function for questions applicable to anybody.
function initialQuestions(employeeRole) {
inquirer
  .prompt([
    {
      type: "input",
      name: "employeeName",
      message: "What is your employee's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your employee's ID number?",
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "What is your employee's email address?",
    }
     ]).then((answers) => {
      if (employeeRole === "Manager") {
        managerQs(answers);
      }
      else if (employeeRole === "Engineer") {
        engineerQs(answers);
      }
      else if (employeeRole === "Intern") {
        internQs(answers);
      }
     });

function engineerQs(engineer) {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerGitHub",
      message:"What is the engineer's GitHub username?",
    }
  ]).then((answer) => {
    employeeRoster.push(
      new Engineer(engineer.name, engineer.id, engineer.email, answer.github)
    );
    console.log(`${engineer.name} has been added to the database.`);
    addEmployee();
  });
}

function managerQs(manager) {
  inquirer.prompt([
    {
      type: "input",
      name: "managerOffice",
      message: "What is the manager's office number?",
    }
  ]).then((answer) => {
    employeeRoster.push(
      new Manager(manager.name, manager.id, manager.email, answer.managerOffice)
    );
    console.log(`${manager.name} has been added to the database.`);
    addEmployee();
  });
}


function internQs(intern) {
  inquirer.prompt([
    {
      type: "input",
      name: "internSchool",
      message: "Where does the intern attend school?",
    }
  ]).then((answer) => {
    employeeRoster.push(
    new Intern(intern.name, intern.id, intern.email, answer.internSchool),
  );
},

addEmployee();

function generatePage() {
  console.log("File written.");
  fs.writeFileSync(
    path.join(path.resolve(__dirname, "dist"), "team.html"),
    pageTemplate(teamArray),
    "utf-8"
  )};
