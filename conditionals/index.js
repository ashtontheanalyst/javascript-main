// If Statements
let temp = 70;
let raining = false;

if (temp > 120) {
    console.log(`There's no way you're alive bro...`);
}
else if (temp >= 60 && temp <= 78 && !raining) {
    console.log(`The temp is perfect`);
}
else {
    console.log(`${temp} isn't that nice of a day, or it's raining`);
}


// Nested if statement
let hasLicense = true;
let age = 18;

if (age >= 16) {
    console.log(`You're old enough to drive since you're ${age}`);

    if (!hasLicense){
        console.log(`But you can't legally drive!!!`);
    }
    else {
        console.log(`And you have your license, go tear it up!`);
    }
}
else {
    console.log(`${18-age} more years till you can drive`);
}


// If statement ut updating the page
const input = document.getElementById("myText");
const submit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age2;

submit.onclick = function(){
    // Remember that input in JS is always taken as a string so you have to cast
    age2 = input.value;
    age2 = Number(age2);

    if (age2 >= 21) {
        result.textContent = `You're old enough to drink`;
    }
    else {
        result.textContent = `You're too young!`;
    }
}