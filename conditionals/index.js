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


// This is for working with check boxes and radio buttons
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit2 = document.getElementById("mySubmit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit2.onclick = function() {
    // Checked evaluates to TRUE or FALSE
    if (myCheckbox.checked) {
        subResult.textContent = `You are Subscribed!`;
    }
    else {
        subResult.textContent = `You aren't Subscribed...`;
    }

    // Same but for radio buttons
    if (visaBtn.checked) {
        paymentResult.textContent = `Using Visa`;
    }
    else if (masterBtn.checked) {
        paymentResult.textContent = `Using Master Card`;
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = `Using PayPal`;
    }
    else {
        paymentResult.textContent = `Select a form of payment`;
    }
}