import { Shape } from "./Shape";
export class Rectangle extends Shape {
  constructor(
    theX: number,
    theY: number,
    private _width: number,
    private _length: number
  ) {
    super(theX, theY);
  }

  get length(): number {
    return this._length;
  }
  set length(value: number) {
    this._length = value;
  }
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
  }

  getInfo(): string {
    return (
      super.getInfo() + `, Width = ${this._width}, Length = ${this._length}`
    );
  }
  calculateArea(): number {
    return this._width * this._length;
  }
}

// let newRect = new Rectangle(41, 50, 3, 900);
// console.log();
//super.getInfo() +
