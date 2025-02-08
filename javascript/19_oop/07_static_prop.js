class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // 'Static' means that it belongs to the class itself 
    // rather than to instances of the class.
    static createID() {
        return `123`
    }
}

// const faisal = new User("faisal")
// console.log(faisal.createID())


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const sir = new Teacher("sir", "i@sir.com")
console.log(sir);
sir.logMe()