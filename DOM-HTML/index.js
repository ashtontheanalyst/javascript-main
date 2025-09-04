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


/* Element Selectors, this is a method used to target and manipulate HTML elements
using the DOM as well, shown next to it is what is RETURNED:
1. document.getElementById()                    Element or Null (if the element doesn't exist)
2. document.getElementsClassName()              HTML Collection (similar to an array)
3. document.getElementsByTagName()              HTML Collection, tag name is something like <h1>, <div>, <button>, etc.
4. document.querySelector()                     Element or Null (if the element doesn't exist)
5. document.querySelectorAll()                  Nodelist*/

// 1 ---------
const myHeading = document.getElementById("myHeading");
// Now we can play with this element through the DOM, adding CSS styles
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// This will return the HTML of the element with all of it's DOM manipulations
console.log(myHeading);

// 2 ---------
let fruits = document.getElementsByClassName("fruits");
// Returns an HTML collection, shows the properties for each element
console.log(fruits);

// Manipulating an indvidual element within the class
fruits[0].style.backgroundColor = "red";

// They are iterable so you can do stuff like this
// HTML Collections CAN NOT USE .forEach() natively, it can if you type cast it to an array
for (let fruit of fruits) {
    fruit.style.backgroundColor = "blue";
}

// Type casting the HTML collection to an array then performing DOM manipulation
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "green";
});

// 3 -------
const h4Elements = document.getElementsByTagName("h4");

// Shows all h4 objects
console.log(h4Elements);

h4Elements[0].style.background = "yellow";
h4Elements[1].style.background = "purple";

for (let h4Element of h4Elements){
    h4Element.style.fontFamily = "arial";
}
// Again for this, they're HTML collections so we can cast them to arrays if we want to access them like that

// 4 -------
// querySelector() will return the FIRST element based on what's passed in like a class or tag
const element = document.querySelector(".fruits");
console.log(element);

// 5 -------
// querySelectorAll() returns a node list which is similar to an HTML collection but with built in methods
fruits = document.querySelectorAll(".fruits");
fruits[0].style.backgroundColor = "blue";

const foods = document.querySelectorAll("li");
foods[1].style.backgroundColor = "orange";

// Output the node list
console.log(foods);

// Node lists have a built in forEach method
foods.forEach(food => {
    food.style.backgroundColor = "red";
});


/*
NOTE: The video from 8:32 hrs - 8:47 hrs was very similar to DOM navigation but
with some more details and methods if you're interested. Didn't feel the need for more notes.
*/


// Adding and Changing HTML Elements
// Step 1: Create the element
const newH1 = document.createElement("h1");

// Step 2: Add attributes and properties
newH1.textContent = "I like Espresso";
newH1.id = "myH1";
newH1.style.color = "lightgreen";
newH1.style.textAlign = "center";

// Step 3: Append to the DOM
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);                        // This inserts the heading before box2, sanwhiched with box1

// document.getElementById("box1").append(newH1);               Appends it to the box1, puts it inside, after anything else inside the box
// document.getElementById("box1").prepend(newH1);              Same as appending to box1, but puts it at the BEGINNING
// document.body.append(newH1);                                 This adds it to the END of the body
// document.body.prepend(newH1);                                Adds it to the BEGINNING of the body, top of page

// Inspecting the element to see if it exists and saved the attrubutes/changes
console.log(newH1);


// Another example but based on class instead of id
const newH2 = document.createElement("h1");
newH2.id = "myH2";
newH2.textContent = "Names Bond, James Bond";
newH2.style.color = "white";
newH2.style.fontSize = "2em";

// This is a node list of all elements with the box class
const boxes = document.querySelectorAll(".box");

document.body.insertBefore(newH2, boxes[2]);


// Removing HTML elements, follow the loaction then do remove
document.body.removeChild(newH1);


// Adding an unlinked list and elements
const newList = document.createElement("ul");
newList.id = "newList";
newList.style.border = "2px solid black";
newList.style.backgroundColor = "white";

document.body.append(newList);

const names = ["John", "Asher", "Remmy", "Killiam"];

for (let name of names) {
    const newListItem = document.createElement("li");
    newListItem.textContent = name;
    document.getElementById("newList").append(newListItem);
}


// eventListener listens for specific events on screen to make interactive pages
const myBox = document.getElementById("myBox");

// This is the callback function, the event is provided by the browser, shows the most recent event
function changeColor(event) {
    // The target is the div box we made, when you click on it, we turn it's background white
    event.target.style.backgroundColor = "white";
    event.target.textContent = "HEY! 😊";
}

// When we click on the box, call the callback function
myBox.addEventListener("click", changeColor);


// This is another way to do it with an anonymous function
myBox.addEventListener("click", function(event) {
    if (event.target.style.backgroundColor == "white") {
        event.target.style.backgroundColor = "lightblue";
        event.target.textContent = "Cool Beans 👌";
    }
});

// This is using an arrow function
myBox.addEventListener("click", (event) => {
    if (event.target.style.backgroundColor == "lightblue") {
        event.target.style.backgroundColor = "green";
        event.target.textContent = "Gross!! 🤮";
    }
});


// This is using eventListener but instead of waiting for a click, it's on hover or mouseover
myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't Do It ⚠️";
});

// mouseout is for when you leave an element, leave the boundaries of the box
myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightcoral";
    event.target.textContent = "Click Me!😂";
});

// Adding a button in the mix
const myBtn = document.getElementById("myBtn");

// Change the div box to stuff when we click the button down
myBtn.addEventListener("mousedown", (event) => {
    myBox.style.backgroundColor = "purple";
    myBox.textContent = "CLICKED";
});

// When we let off the mouse click, go back to default
myBtn.addEventListener("mouseup", (event) => {
    myBox.style.backgroundColor = "lightcoral";
    myBox.textContent = "Click Me!😂";
});