class User1 {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }



    get password() {
        return `${this._password}hello`
    }
    set password(value) {
        this._password = value
    }
}

const faisal = new User1("faisal@ai.com", "abc")
console.log(faisal.password);
console.log(faisal.email);
console.log("-------------------------------");






// old way (define Property)

function User2(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const chai = new User2("chai@chai.com", "chai")
console.log(chai.email);

console.log("-------------------------------");



// Object base method (rare nowadays)

const User3 = {
    _email: "f@hc.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User3)
console.log(tea.email);
