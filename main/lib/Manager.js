const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeId, email, phoneNumber) {
    
    super(name, employeeId, email);

    this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;