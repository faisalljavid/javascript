// foreach (builtin, higher order function)
// foreach doesn't return anything
// most used

const coding = ["js", "ruby", "java", "python", "cpp"];

// via general function
// coding.forEach( function (item) { // callback function don't have names
//     console.log(item);
// } ) 


// via arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )


// via calling a function 
// function printMe(item) {
//     console.log(item);   
// } 

// coding.forEach(printMe);


// arrow function again
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);  
// })



// objects

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js',
    },
    {
        languageName: 'java',
        languageFileName: 'java',
    },
    {
        languageName: 'python',
        languageFileName: 'py',
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})