"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printVehicleInfo(vehicle) {
    switch (vehicle.type) {
        case 'car':
            console.log("This is a ".concat(vehicle.brand, " ").concat(vehicle.model, " car with ").concat(vehicle.numWheels, " wheels."));
            break;
        case 'motorcycle':
            console.log("This is a ".concat(vehicle.brand, " ").concat(vehicle.model, " motorcycle with ").concat(vehicle.numWheels, " wheels and ").concat(vehicle.hasHelmetCompartment ? 'a' : 'no', " helmet compartment."));
            break;
        case 'bicycle':
            console.log("This is a ".concat(vehicle.brand, " ").concat(vehicle.model, " bicycle with ").concat(vehicle.numWheels, " wheels and ").concat(vehicle.hasBasket ? 'a' : 'no', " basket."));
            break;
        default:
            console.log("Vehicle type not recognized: ".concat(JSON.stringify(vehicle)));
            var exhaust = vehicle;
    }
}
var car = { type: 'car', brand: 'Honda', model: 'Civic', numWheels: 4 };
var motorcycle = { type: 'motorcycle', brand: 'Yamaha', model: 'FZ-09', numWheels: 2, hasHelmetCompartment: true };
var bicycle = { type: 'bicycle', brand: 'Trek', model: 'FX 3 Disc', numWheels: 2, hasBasket: true };
printVehicleInfo(car); // This is a Honda Civic car with 4 wheels.
printVehicleInfo(motorcycle); // This is a Yamaha FZ-09 motorcycle with 2 wheels and a helmet compartment.
printVehicleInfo(bicycle); // This is a Trek FX 3 Disc bicycle with 2 wheels and a basket.
// printVehicleInfo({ type: 'car1', brand: 'Trek', model: 'FX 3 Disc', numWheels: 2})
