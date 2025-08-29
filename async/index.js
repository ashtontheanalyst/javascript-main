/* The code your used to is synchronous code, it executes the file line by line in sequence, waiting for an operation
to complete.

Asynchronous code allows multiple operaitons to execute at the same time without waiting.
This is great for fetching data, network requests, I/O Operations...
Handled with callbacks, promises, and async/await
*/

// Synch code, waits for the operation before it to execute
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// setTimeout is an async function type, it executes when the code is run, execute the code after waiting x sec
// It doesn't wait for the other tasks above it to go, it starts immediately
setTimeout(() => console.log("Task 1"), 3000);


// This is taking the example from above but now we wait for the async setTimeout function to run
// Then we can go run our callbakc function which is func2
function func1(callback) {
    setTimeout(() => {console.log("Task 1");
                      callback()}, 4000);
}

// This is our callback function, it executes once func1 is complete
function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

// Calling it all together
func1(func2);