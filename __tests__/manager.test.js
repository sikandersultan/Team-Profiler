const Manager = require("../library/manager");

// testing create manager object
test("creates manager object", () => {
  const officeNumber = 12345;
  const manager = new Manager(
    "Blins",
    "1234",
    "blins@gmail.com",
    officeNumber
  );
  expect(manager.getOfficeNumber()).toEqual(officeNumber);
});

// testing get role
test("gets role", () => {
  const manager = new Manager(
    "Blins",
    "1234",
    "blins@gmail.com",
    "12345"
  );
  expect(manager.getRole()).toEqual("Manager");
});
