# Currying and Partial Application in TypeScript

# Currying
Currying and partial application are functional programming techniques that can improve code reusability and readability.

## Differences Between TypeScript and JavaScript

| Feature           | JavaScript                                                      | TypeScript                                                                                   |
|-------------------|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| **Type Annotations** | Does not support type annotations.                             | Allows you to specify types for variables, function parameters, and return types. This helps catch type-related errors at compile time. |
| **Generics**         | Does not have built-in support for generics.                    | Supports generics, allowing you to write more flexible and reusable code by defining functions and classes that can work with different data types. |
| **Type Safety**      | Errors related to types are usually caught at runtime.          | Errors are caught at compile time, providing an additional layer of safety and reducing runtime errors. |
| **IDE Support**      | Basic IDE support without type information.                     | Enhanced IDE support with type information, including features like autocompletion, refactoring, and navigation. |


## Currying in JavaScript
Currying is a technique where a function with multiple arguments is transformed into a series of functions that each take a single argument. Here’s an example in JavaScript:

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(10)); // Output: 15

```
## Currying in TypeScript
In TypeScript, currying is similar, but you can add type annotations to ensure type safety:

```ts
function add(a: number): (b: number) => number {
  return function (b: number): number {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(10)); // Output: 15
```

# Partial Application in JavaScript

```js
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(10)); // Output: 20

```
# Partial Application in TypeScript
In TypeScript, partial application can be implemented with type annotations:
```ts
function multiply(a: number, b: number): number {
  return a * b;
}

const double = multiply.bind(null, 2) as (b: number) => number;
console.log(double(10)); // Output: 20
```
