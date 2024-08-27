/**Typesciprt Basics */

// **Typing variables**

//Example 1: Basic Number
let age: number = 30;
// 'age' is a number.

//Example 2: Floating Point Number
let price: number = 19.99;
// 'price' is a floating-point number.

//Example 3: String
let firstName: string = "John";
// 'firstName' is a string.

//Example 4: Template String
let greeting: string = `Hello, ${firstName}!`;
// 'greeting' is a template string that includes a variable.

//Example 5: Basic Boolean
let isActive: boolean = true;
// 'isActive' is a boolean.

//Example 6: Boolean Expression
let isAdult: boolean = age > 18;
// 'isAdult' is a boolean expression.

// 2. **Typing Arrays, Objects, and Functions**

// *Typing Arrays*

//Example 1: Basic Array of Numbers
// Arrays can be typed by placing the type in square brackets after the type of the array elements.
let numbers: number[] = [1, 2, 3, 4, 5];
// This array can only contain numbers.

//Example 2: Basic Array of Strings
let fruits: string[] = ["apple", "banana", "cherry"];
// This array can only contain strings.

//Example 3: Mixed Array
// If you want to allow multiple types in an array
let mixedArray: (number | string)[] = [1, "two", 3, "four"];
// This array can contain both numbers and strings. You can use the pipe (|) to separate the types and add as many as you like.

//Example 4: Array of Objects
let users: { name: string; age: number }[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// Each object in the array must have a 'name' (string) and 'age' (number).

//Example 5: Array of Arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// This is a 2D array where each sub-array contains numbers.

// *Typing Objects*

//Example 1: Basic Object
let person: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
// This object must have a 'name' (string) and 'age' (number).

//Example 2: Object with Optional Properties
let user: { name: string; age?: number } = {
  name: "Alice",
};
// The 'age' property is optional. It can be omitted when creating the object.

//Example 3: Nested Objects
let employee: { name: string; address: { city: string; zip: number } } = {
  name: "Jane",
  address: {
    city: "New York",
    zip: 10001,
  },
};
// The 'address' property is an object with 'city' (string) and 'zip' (number).

//Example 3: Object with Array Property
let library: { name: string; books: string[] } = {
  name: "City Library",
  books: ["Book1", "Book2"],
};
// The 'books' property is an array of strings.

//Example 4: Object with Array Property
let calculator: { add: (a: number, b: number) => number } = {
  add: (a, b) => a + b,
};
// The 'add' property is a function that takes two numbers and returns a number.

// *Typing Functions*

//Example 1: Basic Function
function greet(name: string): string {
  return `Hello, ${name}!`;
}
// The function takes a 'name' (string) and returns a string.

//Example 2: Function with Multiple Parameters
function add(a: number, b: number): number {
  return a + b;
}
// The function takes two numbers and returns a number.

//Example 3: Function with Optional Parameter
function log(message: string, userId?: number): void {
  console.log(message, userId);
}
// The 'userId' parameter is optional.

//Example 4: Function with Default Parameter
function multiply(a: number, b: number = 1): number {
  return a * b;
}
// The 'b' parameter has a default value of 1.

// 3. **Union Types**

//Example 1: Basic Union Types
let id: number | string;
id = 101; // valid
id = "E101"; // also valid
// 'id' can be either a number or a string.

//Example 2: Function with Union Type Parameter
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}
// The 'id' parameter can be either a number or a string.

//Example 3: Union Types in Arrays
let mixedArray2: (number | string)[] = [1, "two", 3, "four"];
// The array can contain both numbers and strings.

//Example 4: Union Types in Objects
let product: { id: number | string; name: string } = {
  id: "P101",
  name: "Laptop",
};
// The 'id' property can be either a number or a string.

//Example 5: Union Type with Function Return Type
function getValue(value: number | string): number | string {
  return value;
}
// The function can return either a number or a string.

// **Reusable Types**

//Example 1: Type Alias for Object
type User = { name: string; age: number };

let user1: User = { name: "Alice", age: 25 };
let user2: User = { name: "Bob", age: 30 };
// 'User' is a reusable type alias for an object with 'name' and 'age' properties.

//Example 2: Type Alias for Function
type Add = (a: number, b: number) => number;

let addNums: Add = (a, b) => a + b;
// 'Add' is a reusable type alias for a function that takes two numbers and returns a number.

//Example 3: Type Alias for Union Types
type ID = number | string;

let id1: ID = 101;
let id2: ID = "E101";
// 'ID' is a reusable type alias for a union type of number and string.

//Example 4: Type Alias for Array
type StringArray = string[];

let fruitsArr: StringArray = ["apple", "banana", "cherry"];
// 'StringArray' is a reusable type alias for an array of strings.

//Example 5: Type Alias for Nested Object
type Address = { city: string; zip: number };
type Employee = { name: string; address: Address };

let employeeObj: Employee = {
  name: "Jane",
  address: {
    city: "New York",
    zip: 10001,
  },
};

const Bob: Employee = {
  name: "Bob",
  address: {
    city: "New York",
    zip: 10001,
  },
};

// console.log({ Bob });

// const Jim: Employee = {
//   name: "Bob",
// };
// Error: Property 'address' is missing in type '{ name: string; }' but required in type 'Employee'.

// 'Address' and 'Employee' are reusable type aliases for nested objects.
