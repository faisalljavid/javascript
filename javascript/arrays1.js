const myArr = [9, 8, 7, 6, 5];

// splice, splice

console.log("A ", myArr); // original array


// slice
const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B ", myArr); // original array is not changed



// splice
const myn2 = myArr.splice(1, 3);
console.log(myn2); // range included (last one)

console.log("C ", myArr); // original array is changed

