const Manager = require('../lib/Manager');

test("creates a new manager", () => {
    const manager = new Manager("Tom", 1, "tom@gmail.com", 650-339-5086);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("test if getRole method returns correct role", () => {
    const manager = new Manager("Tom", 1, "tom@gmail.com", 650-339-5086);

    expect(manager.getRole()).toEqual("Manager");
})