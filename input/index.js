/*
// Takin in user input
let username;

// This is a pop up window on the site that accepts input with a prompt
username = window.prompt("What's your username?");
console.log(`Your username is: ${username}`);
*/

// This is the more "professional way" to get input, it's an html input box
let username2;
// When we click the button, do this function inside the {}s
document.getElementById("mySubmit").onclick = function(){
    username2 = document.getElementById("myText").value;
    // Once we get the input, change the site header
    document.getElementById("myH1").textContent = `How's it goin ${username2}`; 
}


// This is working with constants and more input
const PI = 3.14159;
let radius;
let circumference;

// Takes in input like above but then casts it to an int and uses a pop up window
// to display the circumference
document.getElementById("mySubmit2").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);

    circumference = 2 * PI * radius;
    window.alert(`A ${radius} unit circle's circumference is: ${circumference} units`);
}