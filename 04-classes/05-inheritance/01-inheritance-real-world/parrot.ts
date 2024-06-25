export class Parrot {
  constructor(private _beak: boolean, private _wings: boolean) {}

  get beak(): boolean {
    return this._beak;
  }
  set beak(value: boolean) {
    this._beak = value;
  }

  get wings(): boolean {
    return this._wings;
  }
  set wings(value: boolean) {
    this._wings = value;
  }
  // if(_beak = true && this._wings) {
  getInfo(): any {
    if (this._beak === true && this._wings === true) {
      return `Parrot has beak: ${this._beak}, Parrot has wings: ${this._wings}, `;
    } else return "This animal is not a parrot. ";
  }
}
