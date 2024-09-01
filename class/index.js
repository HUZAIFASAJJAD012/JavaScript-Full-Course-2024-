//  class =
/*  A class in JavaScript is a blueprint for creating objects.
 It defines a type of object with specific properties and methods that all instances of the class will share.   */
class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  display() {
    console.log(this.name);
    console.log(this.model);
    console.log(this.price);
  }
}

const car1 = new Car("civic", `honda`, 123412);

car1.display();
 