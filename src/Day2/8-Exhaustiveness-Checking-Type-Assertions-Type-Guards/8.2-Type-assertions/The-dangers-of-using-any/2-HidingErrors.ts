export {};
interface Address{ name: "John", age: 30, address: { street: "123 Main St", city: "New York" }};

let i: any = 10;
i = "hello";
i = true;

let j: unknown = 10;
j = "hello";
j = true;
j = 10;

switch (typeof j) {
  case "string":
    console.log("j is a string");
    break;
  case "boolean":
    console.log("j is a boolean");
    break;
  default:
    console.log("j is not a string or boolean");
}


// let k = "kelly";
// console.log(k)
// k = true;


const user1: any = { name: "John", age: 30 };
const user2: Address = { name: "John", age: 30, address: { street: "123 Main St", city: "New York" }};
// console.log(user1.address.street);
// // Runtime error: Cannot read property 'street' of undefined

let person: any = {
    name: "John",
    age: 30
};
const favoriteColor = person.favoriteColor;
console.log(favoriteColor);
// output: undefined
