// Jest tests
const Employee = require("../lib/Employee");

const employee = new Employee("Yukon Cornelius", 5, "yukonc@northpole.com");

test("This code makes a new employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Name property appears correctly", () => {
  expect(employee.name).toBe("Yukon Cornelius");
});

test("id property appears correctly", () => {
  expect(employee.id).toBe(5);
});

test("email appears correctly", () => {
  expect(employee.email).toBe("yukonc@northpole.com");
});
