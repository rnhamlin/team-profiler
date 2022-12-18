// Jest tests
const Intern = require("../lib/Intern");

const intern = new Intern(
  "Winter Warlock",
  6,
  "wwarlock@northpole.com",
  "North Pole University"
);

test("this.school returns the correct value", () => {
  expect(intern.getSchool()).toBe("North Pole University");
});

test("this.getRole() returns the correct value", () => {
  expect(intern.getRole()).toBe("Intern");
});
