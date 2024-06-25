class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(newFirst: string, newLast: string) {
    this._firstName = newFirst;
    this._lastName = newLast;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }
}
// creating instance of a class then using its construct by passing-in its parameters.
let myCustomer = new Customer("Martin", "Cristobal");

// removing these assingment code to make use of new constructor to embed the key property call within instance of class.
// myCustomer.firstName = "Mark";
// myCustomer.lastName = "woodstein";

console.log(myCustomer.firstName);
// console.log(myCustomer._lastName);
console.log(myCustomer.lastName);
