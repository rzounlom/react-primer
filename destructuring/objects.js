/**Object Destructuring
 * object destructuring --> allows you to extract properties from objects and bind them to variables, making your code cleaner and more readable.
 * Basic syntax: const { prop1, prop2, prop3} = object;
 */

//Example 1: Basic Object Destructuring:
const person = { firstName: "Alice", lastName: "Smith", age: 30 };

//Original way to declare varables based on object props
// In this example, we are extracting the firstName, lastName, and age properties from the person object and binding them to variables.
const personFirstName = person.firstName;
const personLastName = person.lastName;
const personAge = person.age;
const personOccupation = person.occupation;

// console.log(
//   "Example 1 --> persion details: \n",
//   personFirstName,
//   personLastName,
//   personAge,
//   personOccupation //undefined because person object does not have occupation property
// );

//Object destructuring syntax
// In this example, we are extracting the firstName, lastName, and age properties from the person object and binding them to variables.
const { firstName, lastName, age, occupation } = person;
// console.log({ firstName, lastName, age, occupation }); // Output: "Alice Smith"

//Example 2: Adding default property to object while destructuring:
const person2 = { firstName2: "Jane", lastName2: "Doe", age: 25 }; //need use different variable name while destructuring since lastName is already declared

//adding default value to middle property
const { firstName2, middle = "Nicole", lastName2 } = person2;
// console.log("Example 2 --> Person details: \n", firstName2, middle, lastName2); // Output: "Jane Nicole Doe"

//Example 3: Nested Object Destructuring:
const Alex = {
  userName: "Alex",
  userInfo: {
    userAge: 32,
    country: "USA",
  },
  userAddress: {
    city: "New York",
    state: "NY",
    zip: 10001,
  },
};

//Normal way to declare variables based on nested object props
const alexName = Alex.userName;
const alexAge = Alex.userInfo.userAge;
const alexCountry = Alex.userInfo.country;
const city = Alex.userAddress.city;
const state = Alex.userAddress.state;
const zip = Alex.userAddress.zip;

// console.log(
//   "Example 3 --> Alex details: \n",
//   alexName,
//   alexAge,
//   alexCountry,
//   city,
//   state,
//   zip
// );

//Object destructuring syntax
const {
  userName,
  userInfo: { userAge, country },
  userAddress: { city: userCity, state: userState, zip: userZip },
} = Alex;

// console.log(
//   "Example 3 --> Alex details: \n",
//   userName,
//   userAge,
//   country,
//   userCity,
//   userState,
//   userZip
// ); // Output: "Alex 32 USA New York NY 10001"
