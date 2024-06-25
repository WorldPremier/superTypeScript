class Customers {
  private firstName: string;
  private lastName: string;

  constructor(thefirst: string, thelast: string) {
    this.firstName = thefirst;
    this.lastName = thelast;
  }

  public getFristName(): string {
    return this.firstName;
  }

  public setFirstName(theFirst: string): void {
    this.firstName = theFirst;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(theLast: string): void {
    this.lastName = theLast;
  }
}

let meCustomer = new Customers("Mike", "Jones");
// meCustomer.setFirstName("Carl");
// meCustomer.setLastName("Queso");
console.log(meCustomer.getFristName());
console.log(meCustomer.getLastName());
