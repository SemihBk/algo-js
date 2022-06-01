// Exercice 6.4
// Create a class named Person. It will have two properties, firstname and lastname, as well as a getter name, which will return "[firstname] [lastname]", and a setter name, which will divide the full name on the basis of a space: the first element will be the firstname, the second the lastname.

// Test the class: Create an instance of the Person class and display the value of the name inside the console, then assigns a new value to it and displays the state of the instance inside the console at the end of the process.


class Person {
  constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;

  }
  get fullname() {
      return `${this.firstname} ${this.lastname}`;
  }

  set fullname(newFullName) {
    newFullName = newFullName.split(" ");
    this.firstname = newFullName[0];
    this.lastname = newFullName[1];

    return `${this.firstname} ${this.lastname}`;
  }
}



const guy = new Person("Semih", "Bekki");

console.log(guy.fullname);

console.log(guy.fullname);