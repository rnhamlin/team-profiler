// Jest tests
const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Rudolph", 4, "rudolph@northpole.com", "rudy1");

test("this.github is set correctly", () => {
  expect(engineer.github).toBe("rudy1");
});

test("this.gitHub() returns correct value", () => {
  expect(engineer.getGitHub()).toBe("rudy1");
});

test("this.getRole() returns correct value", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
