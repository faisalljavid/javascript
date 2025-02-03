// let myName = "Faisal     "
// console.log(myName.length); // gives 11

// but I want true length without using any extra method
// how to do that?
// let's see

// CHECK THIS SOLUTION AFTER GOING THROUGH LINE 27 TO THE END

let anotherUsername = "chaiAurcode      "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Faisal      ".trueLength()
"    Hello".trueLength()
"   whaat!!     ".trueLength()




// -------------------------------------


let myHeros = ["Thor", "Spiderman", "Batman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",
    Batman: "Money",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}


// we are adding property in top level hierarchy directly,
// now everyone going through the object can inherit this
Object.prototype.faisal = function () {
    console.log(`Faisal is present in all objects`);

}

// we are adding property in Array now
Array.prototype.heyFaisal = function () {
    console.log(`Faisal says hello`);

}

// heroPower.faisal()

myHeros.faisal()
myHeros.heyFaisal()
// heroPower.heyFaisal()  // should give error




// --------------------------------------------------

// INHERITANCE

const user = {
    name: 'Chai',
    email: 'chai@google.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // old syntax
    __proto__: teachingSupport
}

// old syntax
// Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)