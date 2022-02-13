const Employee = require("../lib/employee");

describe("Can instantiate Employee instance", () => {
    const employee = new employee();
    expect(typeof (employee)).toBe("object");
});

describe("Can set name by constructor argumaent", () => {
    const name = "Randy";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

describe("Can set id by constructor argument", () => {
    const testValue = 17;
    const employee = new Employee("Megan", testValue);
    expect(employee.id).toBe(testValue);
});

describe("Can set email by constructor argument", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Mark", 1, testValue);
    expect(employee.email).toBe(testValue);
});

describe("Can get name by getName()", () => {
    const testValue = "Robert";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

describe("Can get id by getId()", () => {
    const testValue = 15;
    const employee = new Employee("Gaye", testValue);
    expect(employee.getId()).toBe(testValue);
});

describe("Can get email by getEmail()", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Gaye", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

describe("getRole() should return \"Empoyee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Randy", 17, "test@test.com", "Employee");
    expect(employee.getRole()).toBe(testValue);
});
