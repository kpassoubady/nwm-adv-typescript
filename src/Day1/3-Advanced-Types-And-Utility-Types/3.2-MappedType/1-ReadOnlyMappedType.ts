export { };

interface Person {
    name: string;
    age: number;
    email: string;
    address: {
      street: string;
      city: string;
    }
}

/*
In this example, we have defined an interface Person with three properties: name, age, and address. 
We then create a new type ReadonlyPerson using a mapped type that applies the readonly modifier to each property of Person. 
The Person[P] syntax in the mapped type is used to refer to the type of the property P in the Person interface. 
We then create a person object of type Person and assign it to a readonlyPerson variable of type ReadonlyPerson. 
If we try to modify the name property of readonlyPerson, TypeScript will give us an error because the readonly modifier prevents us from modifying the property.
*/
const person: Person = { name: 'Kangs', age: 30, email: 'kangs@kavinschool.com', address: { street: 'First Street', city: 'New York' } };

type keyPerson = keyof Person;
//name|age|email|address

type ReadonlyPerson = { readonly [P in keyof Person]: Person[P] };
const readonlyPerson: ReadonlyPerson = person;

// readonlyPerson.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.
// readonlyPerson.age = 31;
// readonlyPerson.email = 'kangs@kavinschool.com';
// readonlyPerson.address.street = 'Second Street';
// readonlyPerson.address.city = 'London';
// readonlyPerson.address = { street: 'First Street', city: 'New York' }; // Error: Cannot assign to 'address' because it is a read-only property.