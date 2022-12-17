const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "employeeName",
      message: "What is your employee's name?",
    },
    {
      name: "employeeId",
      message: "What is your employee's ID number?",
    },
    {
      name: "employeeEmail",
      message: "What is your employee's email address?",
    },
    {
      type: "list",
      name: "employeeRole",
      message: "What is your employee's role in the company?",
      choices: ["Employee", "Manager", "Engineer", "Intern"],
      //   validate: roleInput => {
      //     if (roleInput) {
      //       return true;
      //     } else {
      //       console.log('Please enter your name!');
      //       return false;
      //     }
    },
    {
      name: "managerOffice",
      message:
        "What is the manager's office number? (Only applicable to manager roles; leave blank if not manager.)",
    },
    {
      name: "engineerGitHub",
      message:
        "What is the engineer's GitHub username? (Only applicable to engineer roles; leave blank if not engineer.)",
    },
    {
      name: "internSchool",
      message:
        "What is the intern's school? (Only applicable to intern roles; leave blank if not intern.)",
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers);
  });
