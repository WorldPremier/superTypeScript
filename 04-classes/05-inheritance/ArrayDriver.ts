import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Circle } from "./Circle";

// let myShape = new Shape(5, 3);

let newRectangle = new Rectangle(40, 81, 2, 9);

let myCircle = new Circle(7, 19, 9);

let arrayShapes: Shape[] = [];

// arrayShapes.push(myShape);
arrayShapes.push(newRectangle);
arrayShapes.push(myCircle);

for (let everyShape of arrayShapes) {
  console.log(everyShape.getInfo());
  console.log("Area: ", everyShape.calculateArea());
  console.log();
}
