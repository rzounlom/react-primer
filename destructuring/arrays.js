/**Array Destructuring
 * allows you to extract properties from objects and bind them to variables, making your code cleaner and more readable.
 * Array destructuring is similar to object destructuring, but instead of extracting properties from objects, it extracts elements from arrays.
 * Items in arrays are matched by position, not by name.
 *  Basic syntax: const [ value, value, value] = array;
 */

//Example 1: Basic Array Destructuring:
const numbers = [1, 2, 3];

//Original way to declare varables based on array elements
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log("Example 1 --> numbers: ", first, second, third); //Output: 1 2 3

//Array destructuring syntax
const [one, two, three] = numbers;
console.log("Example 1 --> numbers destructured: ", first, second, third); //Output: 1 2 3

//Example 2: Skipping Elements:
const fruits = ["apple", "banana", "orange", "grape"];

//Since arrays are indexed, we can skip elements by leaving a comma without a variable name
const [, secondFruit, , fourthFruit] = fruits;
console.log("Example 2 --> fruits: ", secondFruit, fourthFruit); // Output: "banana" "grape"
