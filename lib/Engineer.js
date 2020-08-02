// require Employee class
const employee = require("./Employee");

// create a class called Engineer that extends Employee
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
        }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}
// export employee

module.exports = Engineer;