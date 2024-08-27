/**Array spread operator
 * used to create a new array by expanding elements from an existing array, or by combining multiple arrays together.
 * The spread operator is represented by three dots (...)
 * Basic syntax: const newArray = [ ...oldArray, element1, element2, ... ];
 */

//Example 1: Creating a Copy of an Array:
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];

//Original way of copying arrays
const coppiedNums = numbers.slice();
const copiedNums2 = [].concat(numbers);
// console.log("Example 1 --> coppiedNums and the originals numbers arrays: ", {
//   coppiedNums,
//   copiedNums2,
//   numbers,
//   numbers2,
// }); //Output: [1, 2, 3] --> Noties that the original arrays are not modified

//Using the spread operator to copy an array
const copiedNumbers = [...numbers];
// console.log("Example 1.2 --> copiedNumbers: ", copiedNumbers); //Output: [1, 2, 3]

//Example 2: Merging Arrays:
//Original way of merging arrays
const mergedNumbers = numbers.concat(numbers2);
// console.log("Example 2 --> mergedNumbers: ", mergedNumbers); //Output: [1, 2, 3, 4, 5, 6]

//Using the spread operator to merge arrays
const mergedNumbers2 = [...numbers, ...numbers2];
// console.log("Example 2.2 --> mergedNumbers2: ", mergedNumbers2); //Output: [1, 2, 3, 4, 5, 6]

//Example 3: Adding Elements to an Array:
const newNumbers = [0, ...numbers, ...numbers2, 7, 8, 9, 10]; //Combining arrays and additional values into a new array
// console.log("Example 3 --> newNumbers: ", newNumbers); //Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//The position of the spread operator in the array determines where the elements are inserted
const newNumbers2 = [...numbers, 0, ...numbers2, 7, 8, 9, 10]; //Combining arrays and additional values into a new array
// console.log("Example 3.2 --> newNumbers2: ", newNumbers2); //Output: [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 10]
