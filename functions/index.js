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

// This is a function expression, defines a function as a variables
// This way we can pass a function to another function in the form of a param. variable
// It can be useful because it cleans up some lines of code but I like declaring more...
const example2 = function() {
    console.log("This function is stored as a variable");
}
example2();

// Compare to normal function declaration
function example() {
    console.log("This is a regular function");
}
example();


// setTimeout function will invoke a function after x milliseconds, 1000 milli is 1 sec
setTimeout(example2, 2000);

// setTimeout function but we declare the function variable inside the param.
setTimeout(function(){
    console.log("This function is declared inside setTimeout()");
}, 4000);

// Another function expression ex. We use the map function firstly to create a new array
// that cubes each value from 'numbers' and stores it in evenCubes. Then each value in
// evenCubes is checked to see if it's even, if not then it's removed.
numbers = [1, 2, 3, 4, 5, 6];

const evenCubes = numbers.map(function (element) {
    return Math.pow(element, 3);
}).filter(function (element) {
    return element % 2 === 0 ? true : false;
});

console.log(...evenCubes);


// Arrow functions, a concise way to write a function, generally for small func's
// Format: function expression: name = (param's) => code inside the function block
const helloArrow = () => console.log("Hello Arrow function with no param's");
const helloName = (name) => console.log(`Hello ${name}`);
const helloNA = (name, age) => {console.log(`Your name is ${name}`)
                                console.log(`You're ${age} years old`)}

helloArrow();
helloName("John");
helloNA("Adam", 21);

// Arrow function as a callback in setTimeout(). After three sec's do the arrow func.
setTimeout(() => console.log("Arrow function in setTimeout()"), 3000);

// Another arrow funciton, first thing we do is use the map function to make a new array
// of values from 'numbers' quaded. Then we use .reduce to get the sum of those values and store it
numbers = [1, 2, 3, 4, 5, 6];
const totalQuads = numbers.map((element) => Math.pow(element, 4))
                          .reduce((prevElement, element) => prevElement + element);
console.log(totalQuads);


// setTimeout() function, this is an ansync function, it allows you to run a function after x millisec from runtime
function sayHello() {
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

// Another ex with an anonymous function
setTimeout(function() {console.log("Works with an anonymous func too")}, 4000);

// Works with an arrow function too
setTimeout(() => {console.log("Works with an arrow func too")}, 4500);


// clearTimeout is in the same family as setTimeout(), cancels a timeout before it triggers
let timeoutId;

// This function triggers when we click the button on screen, wait 4 sec from a window to pop up
function startTimer() {
    timeoutId = setTimeout(() => {window.alert("What's up from clearTimeout")}, 4000);
    console.log("STARTED");
}

// If we click this button on screen it will cancel the above function if we do it before 3 seconds
function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}


// setInterval() is super useful because it calls the callback function every x seconds
function sayBye() {
    console.log("Bye Bye!");
}

setInterval(sayBye, 1000);


// Closure is a function defined inside of another function, the inner has access to the vars
// and methods of the outer function. Used in frameworks a lot.
function outer() {
    let message = "testing inner function from outer";

    // inner() has access to the things inside of outer, but not the other way around
    function inner() {
        console.log(message);
    }

    // You then have to call it to make it happen
    inner();
}

outer();

// Another ex but looking at how to keep a variable private/ maintain it's state securely
function createCounter() {  
    let count = 0;  
    
    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    // Return an object from createCounter, with a method (function) of increment and getCount
    return {increment, getCount};
}

// A blank object gets returned from calling createCounter but it has a count of 0 and the increment method
const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

// Notice how the count variable is hidden, we need to make a function since it's hidden
console.log(counter.count);

// We made the getCount method to now see the 'hidden' var
console.log(counter.getCount());