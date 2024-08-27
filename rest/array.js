/**Array rest operator
 * used to gather elements into an array, effectively collecting the remaining elements after extracting specific ones.
 * The rest operator is represented by three dots (...)
 * The rest operator must be the last element in the array.
 * The rest operator collects all remaining elements that are not destructured into a new array.
 * Basic syntax: const [element1, element2, ...rest] = arr;
 */

//Example 1: Extracting Specific Elements:
const fruits2 = ["apple", "banana", "orange", "grape"];
const [fruit1, fruit2, ...remainingFruits] = fruits2;
// console.log("Example 1 --> fruit1 & fruit2: ", fruit1, fruit2); //Output: apple
// console.log("Example 1 --> remainingFruits: ", remainingFruits); //Output: banana

//Example 2: Skipping Elements:
const numbers3 = [1, 2, 3, 4, 5];
const [, , ...restNumbers] = numbers3;
// console.log("Example 2 --> restNumbers: ", restNumbers); //Output: [3, 4, 5]

//Example 3: Combining with Spread:
const originalArr = [1, 2, 3, 4, 5];
const [num1, ...rest] = originalArr;
const newArr = [num1, ...rest, 6];
// console.log("Example 3 --> newArr: ", newArr); //Output: [1, 2, 3, 4, 5, 6]
