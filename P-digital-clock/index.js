// This is the logic that makes the clock run

function updateClock() {
    // This is the time right now
    // The method chaining and padding allows us to put a 0 in front of any single numbers if needed
    const now = new Date();
    let hours = now.getHours();
    // Putting AM or PM based on hours value that's returned, then changing hours the same as the others, lead 0
    const apm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    // Time string
    const time = hours + ":" + minutes + ":" + seconds + " " + apm;
    
    // Change the clock in the HTML
    document.getElementById("clock").textContent = time;
}

// When we run this code, immediately update the clock
updateClock();

// setInterval is great because it runs the callback function every x amount of time
setInterval(updateClock, 1000);