const Intern = require('../lib/Intern');

test("creates a new Intern Object", () => {
    const intern = new Intern("Tom", 1, "tom@gmail.com", "EUBA");

    expect(intern.school).toEqual(expect.any(String));
})


test("test if the getRole method returns the correct role data", () => {
    const intern = new Intern("Tom", 1, "tom@gmail.com", "EUBA");

    expect(intern.getRole()).toEqual("Intern");
})