// DATES

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2024, 9, 20);
// console.log(myCreatedDate.toLocaleString());

let newDate = new Date("12-26-2024"); // MM-DD-YYYY
// console.log(newDate.toLocaleString());






// TIMESTAMP

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));



let date_2 = new Date();
// console.log(date_2);
// console.log(date_2.getMonth() + 1);
// console.log(date_2.getDay()); // Wednesday = 3




console.log(date_2.toLocaleString('default', {
    weekday: "narrow",
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour:"2-digit",
    
}));
