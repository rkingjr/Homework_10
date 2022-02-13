const Intern = require("../lib/intern");

test("Can set school by constructor", () => {
    const testValue = "Texas A&M";
    const employee = new intern("Hailey", 1, "test@test.com", testValue, "Intern");
    expect(employee.school).toBe(testValue);
});

test("gotSchool() should return school", () => {
    const testValue = "Texas A&M";
    const employee = new Intern("Hailey", 1, "test@test.com", testValue, "Intern");
    expect(employee.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const employee = new Intern("Hailey", 1, "test@test.com", "Texas A&M", "Intern");
    expect(employee.getRole()).toBe(testValue);
})
