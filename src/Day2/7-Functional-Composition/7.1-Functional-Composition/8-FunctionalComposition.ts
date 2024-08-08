const add = (x: number): number => x + 1;
const multiply = (x: number): number => x * 2;

const compose = <T>(f: (arg: T) => T, g: (arg: T) => T) => (x: T): T => f(g(x));

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(5)); // Output: 12
