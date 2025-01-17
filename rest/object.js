/**Object rest operator
 * used to create a new object containing only specified properties from an existing object.
 * The rest operator is represented by three dots (...)
 * Basic syntax: const { prop1, prop2, ...rest } = oldObj;
 * The rest operator must be the last property in the object.
 * The rest operator collects all remaining properties that are not destructured into a new object.
 */

//Example 1: Extracting Selected Properties:
const Kim = { fName: "Kim", lastName: "Smith", age: 25 };
const { fName, ...restProps } = Kim;
// console.log("Example 1 --> fName: ", fName); //Output: Kim
// console.log("Example 1 --> restProps: ", restProps); //Output: { lastName: "Smith", age: 25 }

const book = { title: "JavaScript Handbook", author: "Jane Doe", year: 2023 };
const { year, ...bookInfo } = book;
// console.log("Example 1.2 --> year: ", year); //Output: 2023
// console.log("Example 1.2 --> bookInfo: ", bookInfo); //Output: { title: 'JavaScript Handbook', author: 'Jane Doe' }

//Example 3: Combining with Spread:
const Kate = { firstName: "Kate", lastName: "Williams", yrs: 28 };
const { yrs, ...info } = Kate;
const updatedPerson = { ...info, age: yrs + 1 };
// console.log("Example 3 --> updatedPerson: ", updatedPerson); //Output: { firstName: 'Kate', lastName: 'Williams', age: 29 }
