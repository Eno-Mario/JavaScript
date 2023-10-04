class Person {
  firstName;
  lastName;
  
  constructor(firstName, lastName) {
    this.firstName = Person.isString(firstName)
    this.lastName = Person.isString(lastName);
  }

  static fromObject(obj) {
    return new Person(obj.firstName, obj.lastName)
  }

  static isString(el) {
    if (typeof(el) === "string" ) {
      return el
    } else {
      return String(el)
    }
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);


console.log(typeof(Person.isString(3)))