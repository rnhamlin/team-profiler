//name
//id
//email
//getName()
//getId()
//getEmail()
//github - github username
//getGitHub()
//getRole() - overridden to return "Engineer"

class Engineer {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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
