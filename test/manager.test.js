const Manager = require("../lib/manager");

test("Can set office number by constructor", () => {
    const testValue = 318;
    const employee = new Manager("Randy", 1, "test@test.com", 318, "Manager");
    expect(employee.officeNumber).toBe(testValue);
});

test("Can get office number by getOffice()", () => {
    const testValue = 318;
    const employee = new Manager("Randy", 1, "test@test.com", testValue, "Manager");
    expect(employee.getOfficeNumber()).toBe(testValue);
});

test("Can get role by getRole()", () => {
    const testValue = "Manager";
    const employee = new Manager("Randy", 1, "test@test.com", 318, "Manager");
    expect(employee.getRole()).toBe(testValue);
});
