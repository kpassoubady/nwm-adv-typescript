export { };

interface Person {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
}

type PersonWithoutAddress = Omit<Person, "address">;

let personWithoutAddress: PersonWithoutAddress = { name: "Kangs", age: 30 };
console.log(personWithoutAddress);

// Object literal may only specify known properties, and 'address' does not exist in type 'PersonWithoutAddress'.ts(2353)
// personWithoutAddress = { name: "Jesse", age: 30, address: { street: "First Street", city: "New York" } };


let personWithAddress : Person = { name: "Kangs", age: 40, address: { street: "First Street", city: "New York" } };
console.log(personWithAddress);
