const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, phoneNumber) {
    
    super(name, id, email);

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