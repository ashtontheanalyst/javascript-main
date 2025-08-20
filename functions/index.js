// FUNCTIONS

// Basic declaration and calling of the function
function happyBirthday() {
    console.log(`Happy Birthday!`);
}

happyBirthday();
happyBirthday(); //etc...


// Passing arguments to a function, which takes it in as parameters
function happyBirthdayYou(name, age) {
    console.log(`Happy Birthday ${name}!! You're ${age} now...`);
}

happyBirthdayYou("John", 20);


// Using the return for a function
function add(x, y) {
    result = x + y;
    return result;
}
function isEven(number) {
    return number % 2 === 0 ? true : false;
}

let answer = add(3, 4);
let test = isEven(11);
console.log(answer, test);


// The rest param is very similar to the spread, but instead of breaking down an array into pieces
// it bundles pieces into an array, good for passing to a function
const food1 = "pizza";
const food2 = "burger";
const food3 = "hot dog";
const food4 = "shrimp";

function openFridge(...foods) {
    console.log(foods);                 // Outputs the array straight up
    console.log(...foods);              // This is the spread operator so it lists each value
}

// This function makes an array from an unknown amount of inputs, HOW COOL!!
function makeArray(...foods) {
    return foods;
}

// Finds the sum of all passed in numbers
function sum(...numbers) {
    let result = 0;
    
    for (let number of numbers) {
        result += Number(number);
    }
    
    return result;
}

// When passed to this function, all values get bundled up into an array called foods
openFridge(food1, food2, food3, food4);
// This function makes an array out of all passed in arguments, then we output each individual value
console.log(...makeArray("apple", "banana", "strawberry"));
// Gets the sum of the values then output
console.log(`The sum is: ${sum(1, 8, 99, 120)}`);


// Callback - a function that is passed as an argument to another function
// Typically for reading a file, network requests, interacting with db, etc.

/* This ex mimics a function taking a long time, notice the goodBye function goes first
but we can fix it using the callback below. We pass goodbye to hello, then once everything in
hello has processed, it'll call the goodbye function
function hello() {
    setTimeout(function () {
        console.log("Hello!");
    }, 3000)
}

function goodbye() {
    console.log("Goodbye...");
}

hello();
goodbye();
*/

function hello(callback) {
    console.log("Hello!");

    // Wait for the rest of the function to be done, then call next function
    callback();
}

function goodbye() {
    console.log("goodbye...");
}

hello(goodbye);

// Another callback function but with arguments and shows on HTML
adding(displayPage, 3, 10);

function adding(callback2, x, y) {
    let result = x + y;
    callback2(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}


// .forEach() is used to iterate over an array and apply a function to it
let numbers = [1, 2, 3, 4, 5];

// Another example, doubling the values in the array individually
numbers.forEach(double);
// Accesses each value in the array then passes it to the display function
numbers.forEach(display);

// By default these param.'s are passed thanks to the forEach function, doubles the value of index
function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}


// .map(), returns a new array that under goes the callback function, similar to .foreach()
const numbers2 = [1, 2, 3, 4, 5];

// New array made containing squared values from 'numbers2'
const squares = numbers.map(squared);

function squared(element) {
    return Math.pow(element, 2);
}

function display2(element) {
    console.log(element);
}

squares.forEach(display2);

// Another ex of .map()
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

// New array with formatted dates from 'dates', displayed using the pre made function from above
const formattedDates = dates.map(formalDates);
formattedDates.forEach(display);

// Callback function that changes the date to be standard
function formalDates(element) {
    // Split the array into a new array filled with the m, d, yr
    const parts = element.split("-");

    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}