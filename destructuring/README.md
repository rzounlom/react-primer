# JavaScript Array and Object Destructuring

In JavaScript, array and object destructuring is a powerful feature that allows you to extract values from arrays and objects into separate variables. This can make your code more concise and readable. In this README, we will explore the array and object destructuring operators with code examples and comments.

## Array Destructuring

### Example 1: Basic Array Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// first = 1
// second = 2
// rest = [3, 4, 5]
```

### Example 2: Swapping Variables

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];

// a = 2
// b = 1
```

### Example 3: Ignoring Values

```javascript
const [x, , z] = [1, 2, 3];

// x = 1
// z = 3
```

### Example 4: Default Values

```javascript
const [a = 1, b = 2, c = 3] = [10];

// a = 10
// b = 2
// c = 3
```

### Example 5: Nested Array Destructuring

```javascript
const numbers = [1, [2, 3], 4];
const [x, [y, z], w] = numbers;

// x = 1
// y = 2
// z = 3
// w = 4
```

## Object Destructuring

### Example 1: Basic Object Destructuring

```javascript
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;

// name = 'John'
// age = 30
// city = 'New York'
```

### Example 2: Renaming Variables

```javascript
const { name: fullName, age: years, city: location } = person;

// fullName = 'John'
// years = 30
// location = 'New York'
```

### Example 3: Default Values

```javascript
const { name = "Anonymous", age = 0, city = "Unknown" } = person;

// name = 'John'
// age = 30
// city = 'New York'
```

### Example 4: Nested Object Destructuring

```javascript
const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

const {
  name,
  address: { city, country },
} = user;

// name = 'John'
// city = 'New York'
// country = 'USA'
```

### Example 5: Rest Syntax

```javascript
const { name, ...rest } = person;

// name = 'John'
// rest = { age: 30, city: 'New York' }
```
