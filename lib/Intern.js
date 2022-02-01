const Employee = require(`./Employee.js`);

class Intern extends Employee {
    constructor(name, id, email, school) {
        super.name = name;
        super.id = id;
        super.email = email;
        this.school = school;
    }

    getSchool() {
        console.log(`School: ${this.school}`);
    }

    getRole() {
        console.log(`Role: ${this}`);
    }
}
