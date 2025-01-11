// map

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (item) => item+10 );


// chaining
const nums = myNumers
                .map( (num) => num * 10 ) // result from this statement will go to next line
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 );


console.log(nums);

