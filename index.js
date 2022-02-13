const ingquirer = require("inquire");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const fs = require("fs");
const { off } = require("process");

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        message: "What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return ingquirer
        .prompt(promptArray);
}

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];

    return ingquirer
        .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your github?",
        name: "github"
    }];

    return ingquirer
        .prompt(promptArray);
}

function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school do you attend?",
        name: "school"
    }];

    return ingquirer
        .prompt(promptArray);
}

async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promis((resolve, reject) => {
            runInquirer()
                .then(function ({name, id, email, title}) {
                    if (title === "Manager") {
                        runInquirerManager().then(function ({officeNumber}) {
                            this.Employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if  (title === "Engineer") {
                        runInquirerEngineer().then(function ({github}) {
                            this.Employee = new Engineer(name, id, email, github, title);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if  (title === "Intern") {
                        runInquirerIntern().then(function ({school}) {
                            this.Employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log('There was an error.');
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

    function displayTitle(employee) {
        if (employee.title === "Manager") {
            console.log(employee.officeNumber);
            return `Office Number: ${employee.officeNumber}`;
        }

        if (employee.title === "Engineer") {
            return `GitHub: ${employee.github}`;
        }

        if (employee.title === "Intern") {
            return `School: ${employee.school}`;
        }
    }

    function getCardHtml() {
        let html = "";
        for (j = 0; j < maxTimes; j++) {
            console.log(employeeArray[j])
            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 15rem;">
                <div class="col card-header">
                    <h4>${employeeArray[j].name}</h4>
                </div>

                <div class="col card-header">
                    <h4>${employeeArray[j].title}</h4>
                </div>

                <ul class="list-group-flush text">
                    <li class=list-group-item">ID: ${employeeArray[j].id}</li>
                    <li class=list-group-item">E-mail: ${employeeArray[j].email}</li>
                    <li class=list-group-item"> ${displayTitle(employeeArray[j])}</li>
                </ul>
            </div>`;
        }
        return html;
    }

    let html = `<!DOCTYPE html>
                    <html lang="en-US">
                        <head>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie-edge">
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                            <title>The Team</title>
                            <style>
                                .row {
                                    display: flex;
                                    flex-wrap: wrap;
                                    justify-content: center;
                                    margin-top: 20px;
                                    margin-bottom: 20px;
                                }

                                .card {
                                    padding: 15px;
                                    border-radius: 6px;
                                    background-color: white;
                                    color: lightskyblue;
                                    margin: 15px;
                                }

                                .text {
                                    padding: 15px;
                                    border-radius: 6px;
                                    background-color: lightskyblue;
                                    color: black;
                                    margin: 15px;
                                }

                                .col {
                                    text-align: center;
                                }
                            </style>
                        </head>

                        <body>
                            <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                                <span class="navbar-brand mb-0 h1">
                                    <h1>Our Team>/h1>
                                </span>
                            </nav>
                            <div class="row">
                                ${getCardHtml()}
                            </div>
                        </body>
                    </html>
                    `;

                    console.log(html);
                    const fs = require("fs");
                    fs.writeFile('myteam.html', html, function (err) {
                        if (err) throw err;
                        console.log('File is created successfully');
                    });
}
run()
