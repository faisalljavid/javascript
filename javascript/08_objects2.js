
//c onst tinderUser = new Object();   // singleton

const tinderUser = {};   // non singleton

tinderUser.id = "123abc";
tinderUser.name = "Faize";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Faisal",
            lastname: "Javid"
        }
    }
}

// console.log(regularUser.fullname.userfullname);




const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 4: "a", 5: "b" };

// syntax 1
const obj4 = Object.assign({}, obj1, obj2, obj3); // first argument acts as target and rest as source/s that's why 
//  we included empty {} at target place
console.log(obj4);



// syntax 2
const obj5 = { ...obj1, ...obj2, ...obj3 }; // use this syntax instead
console.log(obj5);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // not used more

// console.log(tinderUser.hasOwnProperty("isLogged"));




// Destructuring ---------------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}


// basically syntactical sugar
const {courseInstructor: instructor} = course; // when we want to print something multiple times then calling that 
                                  // again and again is not clean way, that's why we are using it.
                                  // and instructor here is kinda alias of courseInstructor 
console.log(instructor);
