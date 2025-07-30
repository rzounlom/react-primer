/**TypeScript Basics */

// console.log("🚀 TypeScript Basics - Starting Examples");
// console.log("=".repeat(50));

// **Typing variables**

// console.log("\n📝 1. BASIC TYPES");
// console.log("-".repeat(30));

//Example 1: Basic Number
let age: number = 30;
// console.log("Example 1 - Basic Number:");
// console.log(`age: ${age} (type: ${typeof age})`);
// console.log(`age + 5: ${age + 5}`);
// console.log();

//Example 2: Floating Point Number
let price: number = 19.99;
// console.log("Example 2 - Floating Point Number:");
// console.log(`price: ${price} (type: ${typeof price})`);
// console.log(`price * 2: ${price * 2}`);
// console.log();

//Example 3: String
let firstName: string = "John";
// console.log("Example 3 - String:");
// console.log(`firstName: ${firstName} (type: ${typeof firstName})`);
// console.log(`firstName length: ${firstName.length}`);
// console.log(`firstName toUpperCase: ${firstName.toUpperCase()}`);
// console.log();

//Example 4: Template String
let greeting: string = `Hello, ${firstName}!`;
// console.log("Example 4 - Template String:");
// console.log(`greeting: ${greeting} (type: ${typeof greeting})`);
// console.log();

//Example 5: Basic Boolean
let isActive: boolean = true;
// console.log("Example 5 - Basic Boolean:");
// console.log(`isActive: ${isActive} (type: ${typeof isActive})`);
// console.log(`!isActive: ${!isActive}`);
// console.log();

//Example 6: Boolean Expression
let isAdult: boolean = age > 18;
// console.log("Example 6 - Boolean Expression:");
// console.log(`age: ${age}, isAdult: ${isAdult} (type: ${typeof isAdult})`);
// console.log(`age > 18: ${age > 18}`);
// console.log(`age < 18: ${age < 18}`);
// console.log();

// 2. **Typing Arrays, Objects, and Functions**

// console.log("\n📋 2. ARRAYS");
// console.log("-".repeat(30));

// *Typing Arrays*

//Example 1: Basic Array of Numbers
// Arrays can be typed by placing the type in square brackets after the type of the array elements.
let numbers: number[] = [1, 2, 3, 4, 5];
// console.log("Example 1 - Basic Array of Numbers:");
// console.log(`numbers: ${numbers} (type: ${typeof numbers})`);
// console.log(`numbers length: ${numbers.length}`);
// console.log(`numbers[0]: ${numbers[0]}`);
// console.log(`numbers sum: ${numbers.reduce((a, b) => a + b, 0)}`);
// console.log();

//Example 2: Basic Array of Strings
let fruits: string[] = ["apple", "banana", "cherry"];
// console.log("Example 2 - Basic Array of Strings:");
// console.log(`fruits: ${fruits} (type: ${typeof fruits})`);
// console.log(`fruits length: ${fruits.length}`);
// console.log(`fruits[1]: ${fruits[1]}`);
// console.log(`fruits joined: ${fruits.join(", ")}`);
// console.log();

//Example 3: Mixed Array
// If you want to allow multiple types in an array
let mixedArray: (number | string | boolean)[] = [1, "two", 3, "four"];
// console.log("Example 3 - Mixed Array:");
// console.log(`mixedArray: ${mixedArray} (type: ${typeof mixedArray})`);
// console.log(`mixedArray[0] type: ${typeof mixedArray[0]}`);
// console.log(`mixedArray[1] type: ${typeof mixedArray[1]}`);
// console.log();

//Example 4: Array of Objects
let users: { name: string; age: number }[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
// console.log("Example 4 - Array of Objects:");
// console.log("users:", users);
// console.log(`users[0]: ${users[0].name} (${users[0].age} years old)`);
// console.log(`users length: ${users.length}`);
// console.log(
//   `Average age: ${
//     users.reduce((sum, user) => sum + user.age, 0) / users.length
//   }`
// );
// console.log();

//Example 5: Array of Arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log("Example 5 - Array of Arrays (2D Matrix):");
// console.log("matrix:", matrix);
// console.log(`matrix[0][1]: ${matrix[0][1]}`);
// console.log(`matrix rows: ${matrix.length}`);
// console.log(`matrix columns: ${matrix[0].length}`);
// console.log();

// *Typing Objects*

// console.log("\n🏗️ 3. OBJECTS");
// console.log("-".repeat(30));

//Example 1: Basic Object
let person: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
// console.log("Example 1 - Basic Object:");
// console.log("person:", person);
// console.log(`person.name: ${person.name}`);
// console.log(`person.age: ${person.age}`);
// console.log(`person type: ${typeof person}`);
// console.log();

//Example 2: Object with Optional Properties
let user: { name: string; age?: number } = {
  name: "Alice",
};
// console.log("Example 2 - Object with Optional Properties:");
// console.log("user:", user);
// console.log(`user.name: ${user.name}`);
// console.log(`user.age: ${user.age} (undefined because optional)`);
// console.log(`user.hasOwnProperty('age'): ${user.hasOwnProperty("age")}`);
// console.log();

//Example 3: Nested Objects
let employee: { name: string; address: { city: string; zip: number } } = {
  name: "Jane",
  address: {
    city: "New York",
    zip: 10001,
  },
};
// console.log("Example 3 - Nested Objects:");
// console.log("employee:", employee);
// console.log(`employee.name: ${employee.name}`);
// console.log(`employee.address.city: ${employee.address.city}`);
// console.log(`employee.address.zip: ${employee.address.zip}`);
// console.log();

//Example 4: Object with Array Property
let library: { name: string; books: string[] } = {
  name: "City Library",
  books: ["Book1", "Book2", "Book3"],
};
// console.log("Example 4 - Object with Array Property:");
// console.log("library:", library);
// console.log(`library.name: ${library.name}`);
// console.log(`library.books: ${library.books}`);
// console.log(`library.books.length: ${library.books.length}`);
// console.log(`library.books[0]: ${library.books[0]}`);
// console.log();

//Example 5: Object with Function Property
let calculator: { add: (a: number, b: number) => number } = {
  add: (a, b) => a + b,
};
// console.log("Example 5 - Object with Function Property:");
// console.log("calculator:", calculator);
// console.log(`calculator.add(5, 3): ${calculator.add(5, 3)}`);
// console.log(`calculator.add(10, 20): ${calculator.add(10, 20)}`);
// console.log();

// *Typing Functions*

// console.log("\n⚡ 4. FUNCTIONS");
// console.log("-".repeat(30));

//Example 1: Basic Function
function greet(name: string): string {
  return `Hello, ${name}!`;
}
// console.log("Example 1 - Basic Function:");
// console.log(`greet("Alice"): ${greet("Alice")}`);
// console.log(`greet("Bob"): ${greet("Bob")}`);
// console.log(`greet function type: ${typeof greet}`);
// console.log();

//Example 2: Function with Multiple Parameters
function add(a: number, b: number): number {
  return a + b;
}
// console.log("Example 2 - Function with Multiple Parameters:");
// console.log(`add(5, 3): ${add(5, 3)}`);
// console.log(`add(10, 20): ${add(10, 20)}`);
// console.log(`add(-5, 8): ${add(-5, 8)}`);
// console.log();

//Example 3: Function with Optional Parameter
function sendMessage(message: string, userId?: number): void {
  // console.log(
  //   `📨 Message: "${message}"${userId ? ` (User ID: ${userId})` : ""}`
  // );
}
// console.log("Example 3 - Function with Optional Parameter:");
// sendMessage("Hello, World!");
// sendMessage("Hello, World!", 101);
// console.log();

//Example 4: Function with Default Parameter
function multiply(a: number, b: number = 1): number {
  return a * b;
}
// console.log("Example 4 - Function with Default Parameter:");
// console.log(`multiply(5): ${multiply(5)} (uses default b=1)`);
// console.log(`multiply(5, 3): ${multiply(5, 3)}`);
// console.log(`multiply(10, 2): ${multiply(10, 2)}`);
// console.log();

// 3. **Union Types**

// console.log("\n🔗 5. UNION TYPES");
// console.log("-".repeat(30));

//Example 1: Basic Union Types
let id: number | string;
id = 101; // valid
id = "E101"; // also valid
// console.log("Example 1 - Basic Union Types:");
// console.log(`id (number): ${id} (type: ${typeof id})`);
// id = "E101";
// console.log(`id (string): ${id} (type: ${typeof id})`);
// console.log();

//Example 2: Function with Union Type Parameter
function printId(id: number | string): void {
  // console.log(`🆔 ID: ${id} (type: ${typeof id})`);
}
// console.log("Example 2 - Function with Union Type Parameter:");
// printId(101);
// printId("E101");
// console.log();

//Example 3: Union Types in Arrays
let mixedArray2: (number | string)[] = [1, "two", 3, "four"];
// console.log("Example 3 - Union Types in Arrays:");
// console.log(`mixedArray2: ${mixedArray2}`);
// console.log(`mixedArray2[0] type: ${typeof mixedArray2[0]}`);
// console.log(`mixedArray2[1] type: ${typeof mixedArray2[1]}`);
// console.log(`mixedArray2 length: ${mixedArray2.length}`);
// console.log();

//Example 4: Union Types in Objects
let product: { id: number | string; name: string } = {
  id: "P101",
  name: "Laptop",
};
// console.log("Example 4 - Union Types in Objects:");
// console.log("product:", product);
// console.log(`product.id: ${product.id} (type: ${typeof product.id})`);
// console.log(`product.name: ${product.name}`);
// console.log();

//Example 5: Union Type with Function Return Type
function getValue(value: number | string): number | string {
  return value;
}
// console.log("Example 5 - Union Type with Function Return Type:");
// console.log(`getValue(42): ${getValue(42)} (type: ${typeof getValue(42)})`);
// console.log(
//   `getValue("hello"): ${getValue("hello")} (type: ${typeof getValue("hello")})`
// );
// console.log();

// **Reusable Types**

// console.log("\n🏷️ 6. TYPE ALIASES");
// console.log("-".repeat(30));

//Example 1: Type Alias for Object
type User = { name: string; age: number };

let user1: User = { name: "Alice", age: 25 };
let user2: User = { name: "Bob", age: 30 };
// console.log("Example 1 - Type Alias for Object:");
// console.log("user1:", user1);
// console.log("user2:", user2);
// console.log(`user1.name: ${user1.name}, user1.age: ${user1.age}`);
// console.log(`user2.name: ${user2.name}, user2.age: ${user2.age}`);
// console.log();

//Example 2: Type Alias for Function
type Add = (a: number, b: number) => number;

let addNums: Add = (a, b) => a + b;
// console.log("Example 2 - Type Alias for Function:");
// console.log(`addNums(5, 3): ${addNums(5, 3)}`);
// console.log(`addNums(10, 20): ${addNums(10, 20)}`);
// console.log(`addNums function type: ${typeof addNums}`);
// console.log();

//Example 3: Type Alias for Union Types
type ID = number | string;

let id1: ID = 101;
let id2: ID = "E101";
// console.log("Example 3 - Type Alias for Union Types:");
// console.log(`id1: ${id1} (type: ${typeof id1})`);
// console.log(`id2: ${id2} (type: ${typeof id2})`);
// console.log();

//Example 4: Type Alias for Array
type StringArray = string[];

let fruitsArr: StringArray = ["apple", "banana", "cherry"];
// console.log("Example 4 - Type Alias for Array:");
// console.log(`fruitsArr: ${fruitsArr}`);
// console.log(`fruitsArr type: ${typeof fruitsArr}`);
// console.log(`fruitsArr length: ${fruitsArr.length}`);
// console.log();

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
    city: "Los Angeles",
    zip: 90210,
  },
};

// console.log("Example 5 - Type Alias for Nested Object:");
// console.log("employeeObj:", employeeObj);
// console.log("Bob:", Bob);
// console.log(`employeeObj.address.city: ${employeeObj.address.city}`);
// console.log(`Bob.address.zip: ${Bob.address.zip}`);
// console.log();

// Example of TypeScript error (commented out to prevent compilation error)
// const Jim: Employee = {
//   name: "Jim",
//   // Error: Property 'address' is missing in type '{ name: string; }' but required in type 'Employee'.
// };
