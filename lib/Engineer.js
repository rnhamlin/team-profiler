const Employee = require("./Employee");
//Needs: NAME, ID, EMAIL, getName(), getEmail(), github (username), getGitHub(), getRole() (RETURN "Engineer")

//Engineer class is all of Employee attributes + 3 more.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Engineer";
  }
  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
