// forin loop (gives usually keys)
// usually used for objects

// Objects

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by Apple'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}



// Arrays

const programming = ["rb", "py", "cpp", "java"];
for (const key in programming) {
    // console.log(programming[key]);
}





// Map

const map = new Map(); 
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India"); // will not print (duplicate)

for (const key in map) {
    console.log(key); // can't directly iterate
    
}