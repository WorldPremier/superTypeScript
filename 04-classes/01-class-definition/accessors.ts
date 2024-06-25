class Customers {
  private _firstName: string;
  private _lastName: string;

  constructor(thefirst: string, thelast: string) {
    this._firstName = thefirst;
    this._lastName = thelast;
  }

  get fristName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(theLast: string) {
    this._lastName = theLast;
  }
}

let meCustomer = new Customers("Mike", "Jones");
meCustomer.firstName = "Carls";
// meCustomer.setLastName("Queso");
console.log(meCustomer.fristName);
console.log(meCustomer.lastName);
