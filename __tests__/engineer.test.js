const Engineer = require("../library/engineer")

// test creates engineer object
test("creates engineer object", () => {
  const github = "HEHE";
  const engineer = new Engineer(
    "Blins",
    "1234",
    "blins@gmail.com",
    github
  );

  //   test name, id and email
  expect(engineer.name).toEqual("Blins");
  expect(engineer.id).toEqual("1234");
  expect(engineer.email).toEqual("blins@gmail.com");

  //   github
  expect(engineer.getGithub()).toBe(github);

  //   get role
  expect(engineer.getRole()).toBe("Engineer");
});
