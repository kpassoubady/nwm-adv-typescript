export {};

function advPrint<T>(arg: T): T {
  return arg;
}

let output1 = advPrint<string>("welcome");
console.log(output1); // "welcome"

let output2 = advPrint<number>(20);
console.log(output2); // 20

let output3 = advPrint<boolean>(10 > 20 ? true : false);
console.log(output3);

console.log(advPrint("Jonothan"));
console.log(advPrint(false));
console.log(advPrint(20));
console.log(advPrint(10 > 20 ? true : false));



