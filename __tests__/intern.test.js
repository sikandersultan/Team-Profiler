const Intern = require("../library/intern");

test("creating new intern object", () => {
  const intern = new Intern(
    "Blins",
    "1234",
    "blins@gmail.com",
    "da skol"
  );
  //   intern name
  expect(intern.name).toBe("Blins");
  //   intern ID
  expect(intern.id).toBe("1234");
  //   intern email
  expect(intern.email).toBe("blins@gmail.com");
  //    intern school
  expect(intern.getSchool()).toBe("da skol");
  //   intern role
  expect(intern.getRole()).toBe("Intern");
});
