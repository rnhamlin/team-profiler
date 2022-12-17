const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require('./src/page-template');
const pageHTML = generatePage(name, github);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your employee's name?",
    },
  ]);
};

promptUser().then(answers => console.log(answers));


fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Employee roster complete! Check out index.html to see the output!');
});
