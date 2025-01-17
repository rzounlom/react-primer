/**Object spread operator
 * object spread syntax --> allow you to work with objects more efficiently and flexibly.
 * The spread operator is used to copy properties from one object to another object.
 * The spread operator is represented by three dots (...)
 * Basic syntax: const newObj = { ...oldObj, prop1: value1, prop2: value2, ... };
 */

//Example 1: Creating a Copy of an Object:
const Jim = { firstName: "Jim", lastName: "Johnson" };
const copiedPerson = { ...Jim };
// console.log("Example 1 --> copiedPerson: ", copiedPerson); //Output: { firstName: "Jim", lastName: "Johnson" }

//creating a copy of an object with additional properties
const copiedPersonWithAge = { ...Jim, age: 30 };
// console.log("Example 1.2 --> copiedPersonWithAge: ", copiedPersonWithAge); //Output: { firstName: "Jim", lastName: "Johnson", age: 30 }

//Example 2: Merging Objects:
const person = { firstName: "Jim", lastName: "Johnson" };
const job = { jobTitle: "Software Developer", company: "ABC" };

//Merging two objects into one object
const employee = { ...person, ...job };
// console.log("Example 2 --> employee: ", employee); //Output: { firstName: "Jim", lastName: "Johnson", jobTitle: "Software Developer", company: "ABC" }

//Example 3: Overriding Properties:
const person1 = { firstName: "Jim", lastName: "Johnson" }; //notice that firstName is "Jim"
const person2 = { firstName: "John", age: 30 }; //notice that firstName is "John"

//Overriding the firstName property of person1 with the firstName property of person2
const newPerson = { ...person1, ...person2 };
// console.log("Example 3 --> newPerson: ", newPerson); //Output: { firstName: "John", lastName: "Johnson", age: 30 }

/**
 *In example above, since object can only contain unique properties, the firstName property of person2 overrides the firstName property of person1 based on the position they are spread in the new object.
 *The lastName property of person1 is retained because person2 does not have a lastName property.
 */
