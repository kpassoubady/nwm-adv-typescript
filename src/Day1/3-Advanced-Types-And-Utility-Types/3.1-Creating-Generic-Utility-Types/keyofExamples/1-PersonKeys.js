"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: 'Kangs',
    age: 30,
    email: 'kangs@kavinschool.com'
};
// PersonKeys is now a union type: "name" | "age" | "email"
var personKeysName;
console.log(Object.keys(person));
// [ 'name', 'age', 'email' ]
Object.keys(person).forEach(function (key) {
    console.log("".concat(key, " value is ").concat(person[key]));
});
console.log(person['name']);
// Output:
// name value is Kangs
// age value is 30
// email value is kangs@kavinschool.com
