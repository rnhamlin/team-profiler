// Jest tests
const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Rudolph", 001, "rudy@northpole.com", "rudy01");

  expect(engineer.name).toBe("Rudolph");
  expect(engineer.id).toBe(001);
  expect(engineer.email).toBe("rudy@northpole.com");
  expect(engineer.role).toBe("Engineer");
});

test("this.gitHub is set correctly", () => {
  expect(engineer.gitHub).toBe("rudy01");
});

test("this.gitHub returns the correct value", () => {
  expect(engineer.getGitHub()).toBe("rudy01");
});

test("Please I need the this.getRole to return correctly", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
