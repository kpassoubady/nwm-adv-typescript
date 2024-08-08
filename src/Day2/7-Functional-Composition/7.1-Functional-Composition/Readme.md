
Functional composition in TypeScript provides the same benefits as in JavaScript, with the added advantages of type safety, better tooling, and early error detection. This makes your code more robust and easier to maintain

# Differences Between TypeScript and JavaScript

| Feature          | JavaScript                                                      | TypeScript                                                                                   |
|------------------|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| **Type Annotations** | Does not support annotations.                                 | Allows you to specify types for variables, function parameters, and return types. This helps catch type-related errors at compile time. |
| **Generics**         | Does not have built-in support for generics.                  | Supports generics, allowing you to write more flexible and reusable code by defining functions and classes that can work with different data types. |
| **Type Inference**   | Does not infer types as it does not have a type system.       | Infers types where possible, reducing the need for explicit type annotations.                |
| **Type Safety**      | Errors related to types are usually caught at runtime.        | Errors are caught at compile time, providing an additional layer of safety and reducing runtime errors. |
| **IDE Support**      | Basic IDE support without type information.                   | Enhanced IDE support with type information, including features like autocompletion, refactoring, and navigation. |


# Functional Composition in JavaScript and TypeScript

## JavaScript
```javascript
const add = (x) => x + 1;
const multiply = (x) => x * 2;

const compose = (f, g) => (x) => f(g(x));

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(5)); // Output: 12

```

## TypeScript
```typescript
const add = (x: number): number => x + 1;
const multiply = (x: number): number => x * 2;

const compose = <T>(f: (arg: T) => T, g: (arg: T) => T) => (x: T): T => f(g(x));

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(5)); // Output: 12
```