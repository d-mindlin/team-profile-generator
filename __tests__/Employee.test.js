const Employee = require('../lib/Employee');


test("create a new Employee Object", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
})


test("test if getName method returns string data", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test("test if getId method returns id data", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
})


test("test if getEmail method returns email data", () => {
    const employee = new Employee("Tom", 1, "tom@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})