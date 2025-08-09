// Practicing Random Num Gen:
const minimum = 50;
const maximum = 100;

// Random number generator, 1 through 100. The random function does a random
// decimal 0-1 then we multiply by 100 and round up with the ceil func.
randomNum = Math.floor(Math.random() * 100) + 1;

// Random number between a range, between 50 and 100
randomNum = Math.floor(Math.random() * (maximum - minimum)) + minimum;
console.log(randomNum);


// Real Code for Page, rolling 3 dice between 1 and 6
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomNumber1;
    label2.textContent = randomNumber2;
    label3.textContent = randomNumber3;
}