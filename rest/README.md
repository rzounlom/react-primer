# JavaScript Array and Object Rest Operator

This README provides an overview of the JavaScript Array and Object rest operator. It includes code examples and comments to help you understand how to use these operators effectively.

## Array Rest Operator

The array rest operator allows you to capture multiple elements of an array into a new array. It is denoted by three dots (`...`) followed by the name of the variable that will hold the rest of the elements.

### Example 1: Rest Operator with Arrays

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

In this example, the first two elements of the `numbers` array are assigned to the variables `first` and `second`, while the rest of the elements are captured in the `rest` array.

### Example 2: Rest Operator with Function Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

The rest operator can also be used with function parameters to capture multiple arguments into an array. In this example, the `sum` function accepts any number of arguments and calculates their sum using the `reduce` method.

## Object Rest Operator

The object rest operator allows you to extract properties from an object into a new object. It is similar to the array rest operator, but instead of capturing elements, it captures properties.

### Example 3: Rest Operator with Objects

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

const { name, age, ...rest } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(rest); // Output: { city: 'New York', country: 'USA' }
```

In this example, the `name` and `age` properties of the `person` object are assigned to the variables `name` and `age`, while the rest of the properties are captured in the `rest` object.

### Example 4: Rest Operator with Object Destructuring

```javascript
const { name, ...details } = { name: "John", age: 30, city: "New York" };

console.log(name); // Output: 'John'
console.log(details); // Output: { age: 30, city: 'New York' }
```

The object rest operator can also be used with object destructuring to extract specific properties from an object and assign the remaining properties to a new object.

## Conclusion

The Array and Object rest operators are powerful tools in JavaScript that allow you to capture multiple elements or properties into new arrays or objects. They provide flexibility and convenience when working with arrays and objects.
