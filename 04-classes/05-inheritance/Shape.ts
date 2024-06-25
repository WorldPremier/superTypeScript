export abstract class Shape {
  //parameter properties, define and assign at once withing constructor.
  constructor(private _x: number, private _y: number) {}

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  getInfo(): string {
    return `x = ${this._x}, y = ${this._y}`;
  }

  abstract calculateArea(): number;
}
