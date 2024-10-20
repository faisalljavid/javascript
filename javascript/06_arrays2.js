const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const all_heros = [...marvel_heros, ...dc_heros];

console.log(all_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usable_array = another_array.flat(Infinity);
console.log(usable_array);



console.log(Array.isArray("Faisal")); // checks if the argument is an array
console.log(Array.from("Faisal")); // converts string to array
console.log(Array.from({ name: "Faisal" })); // interesting

console.log(Array.from({ length: 3, 0: 'a', 1: 'b', 2: 'c' })); // in response to above line
// length and index both given in above line so it gives an array





let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates an array from the arguments

