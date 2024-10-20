function one() {
    const username = "Faisal";

    function two() {
        const website = "YouTube";
        console.log(username);
        
    }
    // console.log(website);

    // two();
}

one();


if (true) {
    const username = "Faisal";
    if (username === "Faisal") {
        const website = " YouTube";
        console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username);







// ------------------------------------------------------------------

// Technique 1 (to make a function)
console.log(addOne(3)); // this will work normally

function addOne(num) {
    return num + 1;
}

// addOne(3);


// Technique 2
addTwo(5); // error here (check 'hoisting' topic)
const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5));