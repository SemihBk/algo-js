class Person {
  constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
  };
  sayHello(other) {
    return console.log(this.firstname + this.lastname + " say Hello to " + other);
  }
}

new Person("Semih", " Bekki").sayHello("everyone");