const Employee = require(`./Employee.js`);

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super.name = name;
        super.id = id;
        super.email = email;
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log(`Role: ${this}`);
    }
}
