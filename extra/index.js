/* ES6 module is an extrenal file that contains reusable code that
can be imported into other JS files, think of it like a helper file
from C/C++

When using one of these modules, make sure you piuit the correct link in your
html as seen in this folder*/

// Similar to a library in Python, inside of {}s is where you specify what to import
import {PI, getCircumference, getArea, getVolume} from './exModule.js';

// See how PI has a value since we got it from our module file
console.log(PI);

const circumference = getCircumference(20);
console.log(`${circumference.toFixed(2)} cm`);

const area = getArea(20);
console.log(`${area.toFixed(2)} cm^2`);

const volume = getVolume(20);
console.log(`${volume.toFixed(2)} cm^3`); 


/* Error handling, an object is created to represent something went wrong wit hthe code
Common with user input or establishing connections

try {}      Encloses code that might potentially cause an error
catch {}    Catch and handle any errors thrown from try {}
finally {}  (optional) This code will always execute, used mostly for clean up of loose ends
*/

try{
    console.log(x);
}
// x is not defined so an error is passed to catch, then displayed, then we keep moving down the file
catch (error) {
    console.error(error);
}
finally {
    console.log("I'll always run, no matter the problem!");
}

console.log("End of the program");

// Another ex:
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    // This is where we can DEFINE our own custom errors, like for instance dividing by zero
    if (divisor == 0) {
        throw new Error("You can't divide by zero");
    }

    // Another error handle for if the user inputs something that's not a number
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.error(error);
}

console.log("You reached the end!")