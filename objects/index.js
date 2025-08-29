// Objects in JS
// Objects are a collection of related properties (stored values/var's) and methods (functions), key/value pairs

// Creating object and assigning props and methods
const person1 = {
    // properties
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,

    // methods
    sayHello: function() {console.log("Bahahhaaha, I'm Spongebob")},
    eat: function() {console.log("Eating a krabby patty!")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,

    sayHello: () => {console.log("Uhhhhh, where's the mayo, I mean hey..")},
    eat: () => {console.log("I ate all the cheese")},
}

// Calling object props and methods
console.log(person1.firstName);
console.log(person1.age);
console.log(person1.sayHello());

console.log(person2.firstName);
console.log(person2.isEmployed);
console.log(person2.eat());


// THIS is a reference to the object where the keyword is used, makes sure you don't use a global by accident
const person3 = {
    name: "John",
    food: "burgers",
    
    // sayHello: function() {console.log(`Hey, my name is ${name}!`)}, DOESN'T work, needs this.name
    // the THIS keyword DOESN'T WORK in arrow functions
    sayHello: function() {console.log(`Hey, my name is ${this.name}!`)},
    eat: function() {console.log(`I like eating ${this.food}`)},
}

person3.sayHello();
person3.eat();


// Constructors, defines the properties and methods for an object and is REUSABLE for multiple objects
function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {console.log(`Your ${this.year} ${this.make} ${this.model} is ${this.color}`)}
}

// Calling the constructor and making new objects
const car1 = new Car("Toyota", "Tacoma", 2003, "beige");
const car2 = new Car("Ford", "F150", 2016, "blue");
const car3 = new Car("Dodge", "Viper", 1999, "red");

car1.drive();
car2.drive();
car3.drive();


// Classes are similar to the constructor but are just a bit cleaner, way to make object(s)
class Product{
    // Within the class you have your constructor
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    displayProduct(){
        console.log(`Product:   ${this.name}`);
        console.log(`Price:     $${this.price.toFixed(2)}`);
    }

    calcTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

// Creating objects from the class
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);

product1.displayProduct();
product2.displayProduct();

// Calling another one of the class methods that takes an argument
const total = product1.calcTotal(salesTax);
console.log(`The total price with tax is: $${total.toFixed(2)}`);


// STATIC, a keyword that allows the class to own something but not the objects themselves, like local variables
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }
    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
}

// Calling the static property from the class
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(6));
console.log(MathUtil.getCircumference(10));


// Example 2 of using STATIC along with regular thigns in the class
class User{
    static userCount = 0;   // This is only tracked in the class, not by each object

    constructor(username) {
        this.username = username;
        // Every time we make a new user object, the class keeps track of it inside a static var.
        User.userCount++;
    }

    // Static method, only can be called by the class User, not by an object
    static getUserCount() {
        console.log(`There are ${User.userCount} users made from this class`);
    }

    // Regular method
    sayHello() {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
user1.sayHello();
const user2 = new User("Patrick");
const user3 = new User("Sandy");

// Using a static method in the User class to look at a static variable
User.getUserCount();


// Inheritance allows a new class to inherit from a parent class, grab some from one and give to a child
// This is the parent class
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

// These are the child classes which inherit all things within Animal and we can add to them
class Rabbit extends Animal{
    name = "rabbit";
}

class Fish extends Animal{
    name = "fish";

    swim() {
        console.log(`${this.name} is swimming along!`);
    }
}

// Making instances of the child classes
const rabbit = new Rabbit();
const fish = new Fish();

// This shows that the an instance of the Rabit and Fish object can pull methods/vars from both parent and child
console.log(`Is the ${rabbit.name} alive: ${rabbit.alive}`);
console.log(`Is the rabbit alive: ${rabbit.alive}`);
fish.sleep();
fish.swim();


// SUPER keyword is used in classes to call the constructor. Or it's used to call props/methods of the parent class
// from the child class, similar-ish to using THIS
class Vehicle{
    // This is sent from super() and is great for use with child objects that have similarities like this use case
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    topSpeed(speed){
        console.log(`The ${this.model}'s top speed is ${speed} miles per hour!`);
    }
}

// Child classes
class Truck extends Vehicle {
    constructor(make, model, lifted, speed){
        // super is called to initialize variables in the parent class, this is useful for inheritance
        super(make, model);
        this.lifted = lifted;
        this.speed = speed;
    }

    tow(){
        console.log(`The ${this.model} is meant for towing`);
        // This extending the topSpeed function from our parent to the child and intaking a local var
        super.topSpeed(this.speed);
    }
}

class SportsCar extends Vehicle {
    constructor(make, model, dropped, speed){
        super(make, model);
        this.dropped = dropped;
        this.speed = speed;
    }

    drag(){
        console.log(`The ${this.model} is meant for drag racing!`);
        super.topSpeed(this.speed);
    }
}

// Creating instances
const f150 = new Truck("Ford", "F150", 4, 120);
const corvette = new SportsCar("Chevy", "Corvette", 2, 210);

// Testing child vs parent things
console.log(`The ${f150.make} is lifted ${f150.lifted} inches`);
f150.tow();
console.log(`The ${corvette.model} is dropped ${corvette.dropped} inches`);
corvette.drag();


// Getters and Setters, they validate and modify a value before reading it or writing to it
class Rectangle{
    constructor(width, height) {
        // When this is called, go to it's setter and if the passed value fits the condition it gets assigned
        this.width = width;
        this.height = height;
    }

    // This is the setter, checks our passed in condition from the constructor to then assign the value
    set width(newWidth) {
        if (newWidth > 0) {
            // We use _width because if we did this.width it'd keep calling this function over, and over, and ...
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            // _height is like looking into the private this.height, it's really just a naming convention
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    // Getters let us read the variables, similar to how setters let us write to them
    // Since we defined a setter for width, we have to have a getter otherwise we can't access the value like console.log()
    // See how we can change what happens when we want to retreieve the width value, we can even format it nice!
    get width() {
        return `${this._width.toFixed(1)} cm`;
    }

    get height() {
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }
}

// const rectangle = new Rectangle(-10000000, "pizza")     
// In the real world this should throw an error, we need to validate these inputs with a setter, the below works:
const rectangle = new Rectangle(10, 30);

// Now we're able to set the value in the object later on thanks to our setter
rectangle.width = 40;

// If we feed it garbage, it'll just retain it's last good value or if one hasn't been assigned throw an error
rectangle.height = "pizza";

console.log(rectangle.width);
console.log(rectangle.height);

// Accessing a getter for area
console.log(rectangle.area);


// Another ex of setters and getters
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // SETTERS
    set firstName(newFirstName) {
        // Making sure the firstName passed value to the constructor is a string and more than 0 char's
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error(`First name must be a non-empty string`);
        }
    }

    // Same deal for last name that's passed to the constructor
    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error(`Last name must be a non-empty string`);
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        }
        else {
            console.error(`Age must be a number above 0`);
        }
    }

    // GETTERS
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

// This instance of the object will return errors based on our setter from above
// const person = new Person(23.3435, 92.23, "john");
const person = new Person("Spongebob", "Squarepants", 30);

// In order to retrieve these values, since we have setters defined, we must create getter functions
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// This is a separate getter we made, combines values
console.log(person.fullName);


// Destructuring extracts values from arrays and objects then assigns them to variables convinently
// [] for array destruc. and {} for object destruc.
let a = 1;
let b = 2;

// This swaps the values of a and b, the right hand of the = is destructuring it makes a new array then reassigns
[a, b] = [b, a];

console.log(a, b);

// Another ex
const colors = ["red", "green", "blue", "black", "white"];

// Swapping the 0 and 4 indexed values
[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(...colors);

// Using colors still, assign some variables with the values from the colors array
const [fColor, sColor, tColor, ...extraColors] = colors;
console.log(fColor, sColor, tColor, extraColors);


// Now we do Destructuring with an objetc
const char1 = {
    fName: "Spongebob",
    lName: "Squarepants",
    age: 30,
    job: "Fry Cook"
}

const char2 = {
    fName: "Patrick",
    lName: "Star",
    age: 42,
}

/* Destructuring from an object, this is the basic normal way
const {fName, lName, age, job} = char1;
console.log(fName, lName, age, job);
*/

// This is setting a default value to the destructuring in case of like in char 2 where patirck has no job property
const {fName, lName, age, job="Unemployed"} = char2;
console.log(fName, lName, age, job);


// The function takes in the object and destructures it so that we can access values
// The destructured values need to line up with the variables from the class
function displayChar({fName, lName, age, job}) {
    console.log(`${fName} ${lName} is ${age}`);
    console.log(`Their job is: ${job}`);
}

// This is passign an entire OBJECT into a function
displayChar(char2);