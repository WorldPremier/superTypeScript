class Customer {
  private _firstName: string;
  // private _lastName: string;

  constructor(firstName: string) {
    this._firstName = firstName;
    // this._lastName = newLast;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }
}
// creating instance of a class then using its construct by passing-in its parameters.
let myCustomer = new Customer("Martin");

// removing these assingment code to make use of new constructor to embed the key property call within instance of class.
myCustomer.firstName = "Mark";
// myCustomer._lastName = "woodstein";

console.log(myCustomer.firstName);
// console.log(myCustomer._lastName);
