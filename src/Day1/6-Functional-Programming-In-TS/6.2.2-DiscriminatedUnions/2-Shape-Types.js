"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  | { kind: "cube"; side: number;  };
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.size, 2);
        case "rectangle":
            return shape.width * shape.height;
    }
}
var circle = { kind: "circle", radius: 5 };
var square = { kind: "square", size: 10 };
var rectangle = { kind: "rectangle", width: 4, height: 6 };
console.log(area(circle));
console.log(area(square));
console.log(area(rectangle));
