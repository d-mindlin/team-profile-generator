const Engineer = require('../lib/Engineer');

test("creates a new Engineer Object", () => {
    const engineer = new Engineer("Tom", 1, "tom@gmail.com", "izabelacloud");

    expect(engineer.github).toEqual(expect.any(String));
})


test("test if the getRole method returns the correct role data", () => {
    const engineer = new Engineer("Tom", 1, "tom@gmail.com", "izabelacloud");

    expect(engineer.getRole()).toEqual("Engineer");
})


test("test if the getGithub method returns the correct Github username data", () => {
    const engineer = new Engineer("Tom", 1, "tom@gmail.com", "izabelacloud");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})