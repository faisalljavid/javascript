// The 'Object.create' method in JavaScript allows you to create a new object, 
// using an existing object as the prototype of the newly created object.
// not used here though

// Object literal is used here

const mySym = Symbol("key1");

const jsUser = {
    name: "Faisal",
    "full name": "Faisal Javid", // this is how actually js perceives the 'key'
    [mySym]: "mykey1",
    age: 20,
    location: "Punjab",
    email: "faisal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


// two ways to access
console.log(jsUser.name); // first one

console.log(jsUser["name"]); // second one
console.log(jsUser["full name"]);
console.log(jsUser[mySym]); // little bit diiferent from the above two

jsUser.email = "faisal@yahoo.com";
console.log(jsUser["email"]);

// Object.freeze(jsUser); // changes will not occur

jsUser.email = "faisal@outlook.com";
console.log(jsUser["email"]); // no change

console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello JS user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

jsUser.greeting();
jsUser.greetingTwo();




