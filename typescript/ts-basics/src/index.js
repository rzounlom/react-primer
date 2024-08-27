"use strict";
/**Typesciprt Basics */
// **Typing variables**
// 2. **Typing Arrays, Objects, and Functions**
// *Typing Arrays*
//Example 1: Basic Array of Numbers
// Arrays can be typed by placing the type in square brackets after the type of the array elements.
let numbers = [1, 2, 3, 4, 5];
// This array can only contain numbers.
//Example 2: Basic Array of Strings
let fruits = ["apple", "banana", "cherry"];
// This array can only contain strings.
//Example 3: Mixed Array
// If you want to allow multiple types in an array
let mixedArray = [1, "two", 3, "four"];
// This array can contain both numbers and strings. You can use the pipe (|) to separate the types and add as many as you like.
//Example 4: Array of Objects
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];
// Each object in the array must have a 'name' (string) and 'age' (number).
//Example 5: Array of Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// This is a 2D array where each sub-array contains numbers.
// *Typing Objects*
//Example 1: Basic Object
let person = {
    name: "Alice",
    age: 25,
};
// This object must have a 'name' (string) and 'age' (number).
//Example 2: Object with Optional Properties
let user = {
    name: "Alice",
};
// The 'age' property is optional. It can be omitted when creating the object.
//Example 3: Nested Objects
let employee = {
    name: "Jane",
    address: {
        city: "New York",
        zip: 10001,
    },
};
// The 'address' property is an object with 'city' (string) and 'zip' (number).
//Example 3: Object with Array Property
let library = {
    name: "City Library",
    books: ["Book1", "Book2"],
};
// The 'books' property is an array of strings.
//Example 4: Object with Array Property
let calculator = {
    add: (a, b) => a + b,
};
// The 'add' property is a function that takes two numbers and returns a number.
// *Typing Functions*
//Example 1: Basic Function
function greet(name) {
    return `Hello, ${name}!`;
}
// The function takes a 'name' (string) and returns a string.
//Example 2: Function with Multiple Parameters
function add(a, b) {
    return a + b;
}
// The function takes two numbers and returns a number.
//Example 3: Function with Optional Parameter
function log(message, userId) {
    console.log(message, userId);
}
// The 'userId' parameter is optional.
//Example 4: Function with Default Parameter
function multiply(a, b = 1) {
    return a * b;
}
// The 'b' parameter has a default value of 1.
// 3. **Union Types**
//Example 1: Basic Union Types
let id;
id = 101; // valid
id = "E101"; // also valid
// 'id' can be either a number or a string.
//Example 2: Function with Union Type Parameter
function printId(id) {
    console.log(`ID: ${id}`);
}
// The 'id' parameter can be either a number or a string.
//Example 3: Union Types in Arrays
let mixedArray2 = [1, "two", 3, "four"];
// The array can contain both numbers and strings.
//Example 4: Union Types in Objects
let product = {
    id: "P101",
    name: "Laptop",
};
// The 'id' property can be either a number or a string.
//Example 5: Union Type with Function Return Type
function getValue(value) {
    return value;
}
let user1 = { name: "Alice", age: 25 };
let user2 = { name: "Bob", age: 30 };
let addNums = (a, b) => a + b;
let id1 = 101;
let id2 = "E101";
let fruitsArr = ["apple", "banana", "cherry"];
let employeeObj = {
    name: "Jane",
    address: {
        city: "New York",
        zip: 10001,
    },
};
console.log(employeeObj);
// 'Address' and 'Employee' are reusable type aliases for nested objects.
