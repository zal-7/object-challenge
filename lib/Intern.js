// require Employee class
const employee = require("./Employee");

// create a class called intern that extends Employee
class Intern extends Employee{
    constructor(name, id, email, school){
    super(name, id, email)
    this.school = school;
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
// export intern
module.exports = Intern;