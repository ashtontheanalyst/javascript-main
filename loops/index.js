/* While loop
let username = "";
while (username === "" || username === null) {
    username = window.prompt(`Enter your name`);
}


// Do-While loop
do {
    // username = window.prompt(`Enter your name`);
    username = "Skip"
} while (username === "" || username === null)

console.log(`What's up ${username}`);

// Another ex
let loggedIn = false;
username;
let password;

while (!loggedIn) {
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if (username === "admin" && password === "secure") {
        loggedIn = true;
        console.log(`You're logged in`);
    }
    else {
        console.log(`Invalid credentials`);
    }
}
*/


// For loop
for (let i = 3; i > 0; i--) {
    console.log(i);
}
console.log(`Happy New Year!!!`);

// Continue and break
for (let i = 1; i <= 10; i++) {
    if (i == 3) {
        // Basically skips printing out three but goes on in the for loop
        continue;
    }
    else if (i == 9) {
        // Once 9 is hit, break out of the for loop, doesn't print 9
        break;
    }
    else {
        console.log(i);
    }
}