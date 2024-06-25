import { Parrot } from "./parrot";
import { Color } from "./color";
import { Age } from "./age";

// let myParrot = new Parrot(true, true);
// console.log(myParrot.getInfo());

let myColor = new Color(true, true, "blue", "red", "purple", "yellow");
// console.log(myColor.getInfo());

let newAge = new Age(true, false, 20);
// console.log(newAge.getInfo());

let parrotArr: Parrot[] = [];

// parrotArr.push(myParrot);
parrotArr.push(myColor);
parrotArr.push(newAge);
parrotArr.push(myColor);

for (let addParrot of parrotArr) {
  console.log(addParrot.getInfo());
}
