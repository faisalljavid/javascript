// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ // parameters
    
    // method 1
    // let result = number1 + number2
    // return result

    //method 2
    return number1 + number2
}

const result = addTwoNumbers(3, 5) // arguments

// console.log("Result: ", result);





function loginUserMessage(username = "Sam") { // default value
    if(username === undefined) { //  or if (!username)
        console.log("Please enter a username");
        return;
        
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());




// -----------------------------------

function calculateCartPrice(...num1) { // Rest operator
    return num1;
}

// console.log(calculateCartPrice(200, 400, 344));





// Ojects in function


const user = {
    username: "faisal",
    price: 300
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user); 

// or direct object passing
handleObject({
    username: "fullstop",
    price: 213
});


// Array passing
const myNewArray = [200, 3121, 422];

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
