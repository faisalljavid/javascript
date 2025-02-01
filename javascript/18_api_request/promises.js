// Ist way
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // db task, cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");

})



// 2nd way

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 2000)
}).then(function () {
    console.log("Async 2 resolved");

})


// 3rd way

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "faisalljavid",
            email: "faisalljavid@gmail.com"

        })
    }, 4000)
})

promiseThree.then(function (user) {
    console.log(user);
})



// 4th way
promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({
                username: "faisal",
                password: "1243"
            })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");

    })




// 5th way

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "fai", password: "343" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()






// ASYNC AWAIT
// ist way

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users/faisalljavid")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// getAllUsers();



// 2nd way

fetch('https://api.github.com/users/faisalljavid')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error)
    )