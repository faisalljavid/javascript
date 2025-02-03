const userObj = {
    username: "faisal",
    loginCount: 4,
    signedIn: true,
    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);


    }
}

// console.log(userObj.loginCount);
// console.log(userObj.getUserDetails());
// console.log(this);


function user(username, loginCount, isLoggedIn) {
    this.username = username // left hand side is varibale
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`)

    }


    return this // it is implicitly defined,
    // we can write it or we can skip it
}



// wrong way
// const userOne = user("Faisal", 12, true)
// const userTwo = user("ChaiAurCode", 3, false)
// console.log(userOne); // without using "new" we will get the details of userTwo rather than userOne (over-written)



// correct way
const userOne = new user("Faisal", 12, true)
const userTwo = new user("ChaiAurCode", 3, false)
console.log(userOne)
console.log(userTwo)
