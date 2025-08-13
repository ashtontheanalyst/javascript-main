// This will ouput text in Dev Tools on the web page
console.log(`Hello from the Dev Page`);


// This makes a pop up window appear with a message
// window.alert(`This is an alert!`);


// We can assign values to html tags from the JS file
document.getElementById("myH1").textContent = `Basic Site`;
document.getElementById("myP").textContent = `Welcome to the site bro`;


// Variables, you declare it with 'let' then assign value
let age = 25;                                   // integer
let price = 10.99;
let gpa = 3.25;
let firstName;
firstName = "Ashton";                           // string
let email = "ashton@not.com"
let online = true;                              // Boolean

// Constants, a variable that cannot be changed, const stands in for let
const PI = 3.14159;
const name = "James";

// Variable output, going to dev tools console
console.log(age);
console.log(typeof age);                        // Output the data type
console.log(price);
console.log(`Your GPA is a ${gpa}, nice!`);     // Like an f-string
console.log(typeof firstName);
console.log(`Your first name is ${firstName} and email is ${email}`);
console.log(`Is bro a student? ${online}`);


// Changing html elements again using this JS file, showing on site
document.getElementById("p1").textContent = `Your name is ${firstName}`
document.getElementById("p2").textContent = `You are ${age}`
document.getElementById("p3").textContent = `${email} is best to reach me`


// Arithmetic
let students = 30;
console.log(`The class has ${students} students`);

students += 1;
students ++;                                    // incrememnt/dec
students -= 1;
students --;
students *= 0.7;
students /= 3;
students **= 2;                                 // exponent
students %= 5;                                  // modulo

console.log(`The class now has ${students} students`);


// Using the MATH function, this is like the math library in python
console.log(Math.PI);

let x = 3.21;
let y = 2;
let z;

/* Different things for Math
z = Math.round(x);
z = Math.floor(x);                  // round down
z = Math.ceil(x);                   // always round up
z = Math.trunc(x);                  // truncating, takes off decimals
z = Math.pow(x,y);
z = Math.sqrt(x);
z = Math.log(x);
z = Math.sin(x);...cos...tan
z = Math.abs(x);
z = Math.sign(x);                   // Gets the sign of a number
max = Math.max(x, y, ...)
min = Math.min(x, y, ...)
*/


// Type Conversion
// When we take input, it's taken in as a string, so convert from there if needed
let age2;
// This function puts a nice html input box up to take in a number, converts it,
// then outputs it in a paragraph string
document.getElementById("mySubmit").onclick = function(){
    age2 = document.getElementById("myText").value;
    age2 = Number(age2);
    console.log(typeof age2);
    document.getElementById("p4").textContent = `Your new age is ${age2}`;
}


// String Methods
let userName = "     Dementus";
let phoneNum = "480-450-2472";
let test;

test = userName.charAt(9);                  // Letter at x index
test = userName.indexOf("e");               // Returns first occurance of a char
test = userName.lastIndexOf("e");           // Returns last occurance
test = userName.length;                     // Len of string
userName = userName.trim();                 // Trims whitespace on f and b
test = userName.toUpperCase();
test = userName.toLowerCase();
test = userName.repeat(3);                  // Repeats the string x times
test = userName.startsWith("D");            // Returns bools if string starts with x char
test = userName.endsWith(" ");              // Same but at the end of str
test = userName.includes("x");              // Checks full string for x sub string or char
test = phoneNum.replaceAll("-", "/");       // Replace one with another
test = userName.trim();

console.log(test);


// String slicing
const fullName = "John Doe";

test = fullName.slice(0, 4);                 // Get first 4 char's
test = fullName.slice(5, 8);                 // Get last name
test = fullName.slice(0, 1);                 // Get's x char
test = fullName.slice(-1);                   // Last char

test = fullName.slice(0, fullName.indexOf(" "));    // Get everything from including till you hit a space
test = fullName.slice(fullName.indexOf(" ") + 1);   // Get everything from the space to the endd

console.log(test);

// More slicing 
const email2 = "JohnD@gmail.com";
let uName = email2.slice(0, email2.indexOf("@"));
let provider = email2.slice(email2.indexOf("@") + 1, email2.indexOf("."));

console.log(`User: ${uName}, uses ${provider} for email.`);


// Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits);                          // Pure array output
console.log(fruits[0]);                       // Prints the index value in arry
fruits[0] = "strawberry";                     // Changes the value of indexed item
fruits.push("coconut");                       // Add a value onto the end
fruits.pop();                                 // Removes the value from the end
fruits.unshift("mango");                      // Inserts a value at the beg. of the array
fruits.shift();                               // Removes the first indexed value

test = fruits.length;                         // Amount of values
test = fruits.indexOf("banana");              // Search for value, return index, -1 means not found
console.log(test);

// Print out values using a C++ for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.sort()                                 // Sort in alpha
fruits.sort().reverse()

// Shortcut, for loop like Python
for (let fruit of fruits) {
    console.log(fruit);
}


// Spread Operator (...), allows an interable like string or array to be separated/unpacked
let numbers = [1, 2, 3, 4, 5];

/* This will not work, you need the spread op
let max = Math.max(numbers)
console.log(max); */

let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(max, min);

// Splits the original string into a char array, puts it one char at a time like C-string
let user = "Jane Jefferon";
let letters = [...user];
// let letters = [...user].join("-")            // This would break the numbers up, but join them back together with a - inbetween each
console.log(letters);

// Combining arrays
let meat = ["beef", "chicken", "pork"];
let cheese = ["american", "swiss", "pepper jack"];

// We make a new array with the values of the ones above and add some outside values in too
let foods = [...meat, "bread", ...cheese, "milk", "ketchup"];
console.log(foods);