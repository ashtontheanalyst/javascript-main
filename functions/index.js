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