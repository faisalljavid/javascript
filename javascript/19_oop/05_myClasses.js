// ES6
// basically syntactic sugar 

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}@123`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai11", "chai@gmail.com", "chaipass")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());




// what would have happened if there was no class
// behind the scene (actually)


function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}@123`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea11", "tea@gmail.com", "teapass")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());