import { Parrot } from "./parrot";

export class Age extends Parrot {
  constructor(_beak: boolean, _wings: boolean, private _age: number) {
    super(_beak, _wings);
  }
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }

  getInfo(): string {
    return super.getInfo() + `Age: ` + this._age;
  }
}
