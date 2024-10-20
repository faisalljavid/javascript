// this refers to the current context

const user = {
    username: "Faisal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();


// console.log(this); // will give {} here but "window obj" in browser




// -------------------------------------------------------------------------------


// function chai() {
//     let username = "Faisal";
//     console.log(this.username); // undefined
    
// }

// chai();




const chai = () => {
    let username = "Faisal";
    console.log(this.username); // undefined
    
}

// chai();




// 1st usage (Explicit return)

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 6));


// 2nd usage (Implicit return)
// const addTwo = (num1, num2) => (num1 + num2);
//console.log(addTwo(3, 6));

const addThree = (num1, num2) => ({username: "Faisal"});
console.log(addThree());
