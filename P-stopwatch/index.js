// Stopwatch program logic

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        // Returns the time NOW in UTC minus any elapsed time
        startTime = Date.now() - elapsedTime;

        // Call this function and store it every 10ms
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        // Stop the timer function, which is a setInterval for update
        clearInterval(timer);
        isRunning = false;
    }   
}

function reset() {
    // Stop the timer if it's running
    clearInterval(timer);

    // Reset all variables and on screen
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Converting ms to hours, ms to... then take off decimal numbers, add pad with 0 at the front
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime / (1000) % 60).toString().padStart(2, 0);
    let milliseconds  = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}