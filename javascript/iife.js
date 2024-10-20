// Immediately Invoked Function Expressions (IIFE)


// prevents from the pollution of the global scope
// also it immediately executes the function

(function chai(){
    // named IIFE (function's name basically)
    console.log(`DB CONNECTED`);
})(); // colon needed here (maybe explicitly), just to stop the context



( (name) => { // Un-named IIFE
    console.log(`DB CONNECTED TO ${name}`);
} )('Faisal');
