class Animal {
  constructor(name){
    this.name = name;
    this.greeting = "Hello";
  }

  sayHello() {
      return `${this.greeting}! I'm ${this.name}!`;
  }
}

const dog = new Animal("Rex");
const cat = new Animal("Twingo");

console.log(dog.sayHello());
console.log(cat.sayHello());

/* Test the class: Create an instance of the Dog class and an instance of the Cat class and display the return value of the sayHello method inside the console.

 */