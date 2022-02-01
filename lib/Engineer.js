const Employee = require(`./Employee.js`);

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super.name = name;
        super.id = id;
        super.email = email;
        this.github = github;
    }

    getGithub() {
        console.log(`Github: ${this.github}`);
    }

    getRole() {
        console.log(`Role: ${this}`);
    }
}
