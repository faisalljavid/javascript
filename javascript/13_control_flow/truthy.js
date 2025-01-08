const userEmail = "fai@s.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN



// rest all are truthy, some examples:
// "0", 'false', " ", [], {}, function(){}


const sampleArr = ["hello"]

if (sampleArr.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty");
}

const emptyObj = {}

// Check if the object has no keys by getting the length of the array returned by Object.keys()
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// ---------------------------------------------------------------


// Nullish Coalescing Operator (??): made for  null and undefined
// It returns the right-hand operand when the left-hand operand is null or undefined,
// otherwise, it returns the left-hand operand.

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 20 ?? 50

console.log(val1);



// ---------------------------------------------------------------



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



