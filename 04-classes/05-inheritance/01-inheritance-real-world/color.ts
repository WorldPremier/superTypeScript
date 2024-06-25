// describing main distinctive colors.

import { Parrot } from "./parrot";

export class Color extends Parrot {
  constructor(
    hasPeak: boolean,
    hasWings: boolean,
    private _blue: string,
    private _red: string,
    private _purble: string,
    private _yellow: string
  ) {
    super(hasPeak, hasWings);
  }
  public get blue(): string {
    return this._blue;
  }

  set blue(value: string) {
    this._blue = value;
  }

  get red(): string {
    return this._red;
  }
  set red(value: string) {
    this._red = value;
  }
  get purple(): string {
    return this._purble;
  }
  set purple(value: string) {
    this._purble = value;
  }

  get yellow(): string {
    return this._yellow;
  }
  set yellow(value: string) {
    this._yellow = value;
  }
  getInfo(): string {
    return (
      super.getInfo() +
      `Blue and Gold Macaw: ${this._blue}, Red and blue Macaw: ${this._red}, Hyacinth Macaw: ${this._purble}, Scarlet Macaw: ${this._yellow}`
    );
  }
}
