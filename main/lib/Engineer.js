const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, phoneNumber) {
    
    super(name, id, email);

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