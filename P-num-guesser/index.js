// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`))

    // Error checking, function returns true if guess is Not a Number, ex string
    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
    }
    // Error for number outside of range
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number in range.")
    }
    else {
        attempts++;
        
        // Game logic
        if (guess < answer) {
            window.alert("Too low, try again");
        }
        else if (guess > answer) {
            window.alert("Too high, try again");
        }
        else {
            window.alert(`CORRECT, YOU DID IT!! ${answer} was correct. You did it in ${attempts} tries.`)
            running = false;
        }
    }
}