// require Employee class
const employee = require("./Employee");

// create a class called manager that extends Employee
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
// export manager
module.exports = Manager;