function setUsername(username) {
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password) {
    // have to explicitly call the function (important)
    // we are holding reference via 'call'
    setUsername.call(this, username)

    this.email = email
    this.password = password

}

const chai = new createUser('chai', 'chai@gmail.com', '123SD')
console.log(chai);
