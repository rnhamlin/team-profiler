// Jest tests
const Manager = require("../lib/Manager");

const manager = new Manager(
  "Mrs. Claus",
  7,
  "missusC@northpole.com",
  "Room 44"
);

test("getRole() returns the correct value", () => {
  expect(manager.getRole()).toBe("Manager");
});

test("getOffice() returns the correct value", () => {
  expect(manager.getOffice()).toBe("Room 44");
});
