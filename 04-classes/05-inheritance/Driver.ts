// import { Customer } from "../04-parameter-properties/Customer";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Circle } from "./Circle";

// let newCust = new Customer("Mang", "Junior");
// console.log(newCust.firstName);
// console.log(newCust.lastName);

// let myShape = new Shape(5, 3);
// console.log(myShape.getInfo());

let newRectangle = new Rectangle(40, 81, 2, 9);
console.log(newRectangle.getInfo());

let myCircle = new Circle(7, 1, 4);
console.log(myCircle.getInfo());
