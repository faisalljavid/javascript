// for of
// usually used for arrays


const arr = [5, 43, 12, 23];

for (const element of arr) {
    // console.log(element);   
}



const greetings = "Hello World!";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}




// Maps
// unique values only


const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India"); // will not print (duplicate)

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}






// Object  (not iterable directly)

const myObj = {
    'game1': 'NFS',
    'game2': 'GTA V'
}

for (const value of myObj) {
    console.log(value); // error
}
