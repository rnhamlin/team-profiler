// Jest tests
const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Rudolph", 4, "rudolph@northpole.com", "rudy1");

test("property this.github is set correctly", () => {
  expect(engineer.github).toBe("rudy1");
});

test("method this.gitHub() returns correct value", () => {
  expect(engineer.getGitHub()).toBe("rudy1");
});

test("method this.getRole() returns correct value", () => {
  expect(engineer.getRole()).toBe("Engineer");
});

// const Engineer = require("../lib/Engineer.js");

// test("creates an engineer object", () => {
//   const engineer = new Engineer("Rudolph", 3, "rudy@northpole.com", "rudy01");

//   expect(Engineer.name).toBe("Rudolph");
//   expect(Engineer.id).toBe("3");
//   expect(Engineer.email).toBe("rudy@northpole.com");
//   expect(Engineer.role).toBe("Engineer");
// });

// test("this.gitHub is set correctly", () => {
//   expect(Engineer.gitHub).toBe("rudy01");
// });

// test("this.gitHub returns the correct value", () => {
//   expect(Engineer.getGitHub()).toBe("rudy01");
// });

// test("Please I need the this.getRole to return correctly", () => {
//   expect(Engineer.getRole()).toBe("Engineer");
// });
