const accountId = 14343;
let accountEmail = "faisalljavid@gmail.com"
var accountPassword = "F@123"
accountCity = "Kashmir"
//console.log(accountId, accountEmail, accountPassword, accountCity);

let accountState;
//accountId = 2;
accountEmail = "fjavid68@gmail.com";
//console.table([accountState, accountId, accountEmail, accountPassword, accountCity]);


let score = "33ab";
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);

console.log("-------------------------");

// ===
console.log("2" === 2);


console.log("-------------------------");


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber);


console.log("-------------------------");

// Stack
let ytName = "CodeWithFaisal";

let anotherName = ytName;
anotherName = "MyVideography";

console.log(ytName);
console.log(anotherName);


// Heap

let userOne = {
    email: "user@google.com",
    name: "Miro"
}

let userTwo = userOne;

userTwo.email = "new@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
