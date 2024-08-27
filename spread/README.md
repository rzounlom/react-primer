# JavaScript Array and Object Spread Operator

The spread operator in JavaScript allows you to expand arrays and objects into individual elements. It provides a concise and powerful way to manipulate and combine data. In this README, we will explore the usage of the spread operator with both arrays and objects, along with code examples and comments for each.

## Array Spread Operator

### Example 1: Combining Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
// Result: [1, 2, 3, 4, 5, 6]
```

In this example, the spread operator is used to combine two arrays into a single array.

### Example 2: Copying an Array

```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
// Result: [1, 2, 3]
```

Here, the spread operator is used to create a copy of an existing array.

### Example 3: Adding Elements to an Array

```javascript
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
// Result: [1, 2, 3, 4, 5]
```

In this example, the spread operator is used to add additional elements to an existing array.

### Example 4: Spreading Array as Function Arguments

```javascript
const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
// Result: 5
```

Here, the spread operator is used to pass the elements of an array as individual arguments to a function.

### Example 5: Merging Arrays with Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2, 7, 8];
// Result: [1, 2, 3, 4, 5, 6, 7, 8]
```

In this example, the spread operator is used to merge multiple arrays into a single array.

## Object Spread Operator

### Example 1: Merging Objects

```javascript
const obj1 = { name: "John", age: 25 };
const obj2 = { city: "New York", country: "USA" };
const mergedObject = { ...obj1, ...obj2 };
// Result: { name: 'John', age: 25, city: 'New York', country: 'USA' }
```

Here, the spread operator is used to merge the properties of two objects into a new object.

### Example 2: Copying an Object

```javascript
const originalObject = { name: "John", age: 25 };
const copiedObject = { ...originalObject };
// Result: { name: 'John', age: 25 }
```

In this example, the spread operator is used to create a shallow copy of an existing object.

### Example 3: Adding Properties to an Object

```javascript
const originalObject = { name: "John", age: 25 };
const newObject = { ...originalObject, city: "New York" };
// Result: { name: 'John', age: 25, city: 'New York' }
```

Here, the spread operator is used to add additional properties to an existing object.

### Example 4: Spreading Object as Function Arguments

```javascript
const person = { name: "John", age: 25 };
const greet = ({ name, age }) => {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
};
greet({ ...person });
// Result: Hello, my name is John and I am 25 years old.
```

In this example, the spread operator is used to pass the properties of an object as individual arguments to a function.

### Example 5: Overriding Object Properties

```javascript
const originalObject = { name: "John", age: 25 };
const updatedObject = { ...originalObject, age: 30 };
// Result: { name: 'John', age: 30 }
```

Here, the spread operator is used to override a property value in an existing object.
