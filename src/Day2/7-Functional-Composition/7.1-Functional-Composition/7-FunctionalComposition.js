const add = (x) => x + 1;
const multiply = (x) => x * 2;

const compose = (f, g) => (x) => f(g(x));

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(5)); // Output: 12
console.log(addThenMultiply("5"));
console.log(addThenMultiply("5-Hundred"));
