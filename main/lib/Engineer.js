const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, phoneNumber) {
    
    super(name, employeeId, email);

    this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;