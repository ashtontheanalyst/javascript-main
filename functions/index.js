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