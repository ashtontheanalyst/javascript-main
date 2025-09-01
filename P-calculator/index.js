// Calculator logic
const display = document.getElementById("display");

// When a button is clicked, it adds it onto the display screen
function appendToDisplay(input) {
    display.value += input;
}

// Set the display to an empty string
function clearDisplay() {
    display.value = "";
}

// eval() function takes in a math string and evaluates it
function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}