/* Document Object Model (DOM) is the Object {} that represents the page you see in the web browser
and provides you with an API to interact with it. The structure of the HTML document as it's loaded in
is like the image seen in this file called `DOM-tree.png`. JS can access the DOM to dynamically change
the web page content, structure, and style. */

// Original way to access HTML elements
document.getElementById("");

// This will output the HTML document as an object
console.log(document);

// This will list all the different PROPERTIES as an object, much more detail!
console.dir(document);

// Accessing the document object, which is our HTML page, and changing the title
document.title = "My website";
console.log(document.title);

// This dynamically changes the background color, it changes after the page has been loaded
document.body.style.backgroundColor = "hsl(0, 0%, 30%)";

// Updating the text content of the page through the DOM, conditionally
const username = "johnDoe";
const welcomeMsg = document.getElementById("welcomeMsg");

if (username === "") {
    welcomeMsg.textContent += ' Guest';
}
else {
    welcomeMsg.textContent += (" " + username);
}