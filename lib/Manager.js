const Employee = require("./Employee");
//needs: name, id, email, getName(), getId(), getEmail(), getOffice, getRole() - overridden to return "Manager"

//Manager is all of Employee attributes, + 1 more.
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
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
    return "Manager";
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;
