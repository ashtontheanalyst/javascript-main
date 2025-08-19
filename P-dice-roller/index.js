// Dice Roller Program

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];          // array of random values from our rolls
    const images = [];          // array of html elements for the dice pngs

    for (let i = 0; i < numOfDice; i++) {
        // Make a random number between 0 and 5, add 1, then round down to get rid of decimal
        const value = Math.floor(Math.random() * 6) + 1;
        
        // Append the rolled value to it's array
        values.push(value);
        // Append a new html string with that value into it's array
        images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
    }

    // Puts the rolled number(s) online and serves up the correct dice pngs
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}