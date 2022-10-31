const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, phoneNumber) {
    
    super(name, id, email);

    this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;