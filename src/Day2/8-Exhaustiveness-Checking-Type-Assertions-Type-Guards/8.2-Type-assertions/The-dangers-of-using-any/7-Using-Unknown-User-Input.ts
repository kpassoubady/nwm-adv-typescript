export {};

function processForm(formData: unknown) {
    if (typeof formData === "object" && formData !== null) {
        const name = (formData as { name?: string }).name;
        const age = (formData as { age?: string }).age;

        if (name && age) {
            console.log(`Hello, ${name}! You are ${age} years old.`);
        } else {
            console.log("Missing form data.");
        }
    } else {
        console.log("Invalid form data.");
    }
}

processForm({ name: "Alice", age: "30" });
processForm({ name: "Bob" });
processForm("invalid data");
processForm(null);
processForm(undefined);
processForm(123);
processForm({ firstName: "Alice", zip: "30" });

