const Engineer = require("../lib/engineer");

test("Can set GitHub by constructor", () => {
    const testValue = "rkingjr";
    const employee = new Employee("Randy", 1, "test@test.com", testValue, "Enginner");
    expect(employee.github).toBe(testValue);
});

test("getGithub() should return GitHub username", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("Taylor", 2, "test@test.com", testValue, "Engineer");
    expect(employee.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Taylor", 2, "test@test.com", "GitHubUser", "Engineer");
    expect(employee.getRole()).tobe(testValue);
});
