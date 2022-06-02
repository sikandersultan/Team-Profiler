const Employee = require("../library/employee");

// test creates employee object
test("creates employee object", () => {
  const employee = new Employee(
    "Blins",
    "1234",
    "blins@gmail.com"
    );

  expect(employee.name).toEqual("Blins");
  expect(employee.id).toEqual("1234");
  expect(employee.email).toEqual("blins@gmail.com");
});

// gets employee email
test("gets employee email", () => {
  const employee = new Employee("Blins", "1234", "blins@gmail.com");

  expect(employee.getEmail()).toBe("blins@gmail.com");
});

