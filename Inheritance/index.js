/*  Inheritance in JavaScript allows objects to inherit properties and methods from other objects.
 JavaScript primarily uses a prototype-based inheritance model rather than the classical inheritance */



const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);
dog.bark = function() {
    console.log("Barking");
};

dog.eat(); // Output: Eating
dog.bark(); // Output: Barking


class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog = new Dog("Rex");
dog.eat();  // Output: Rex is eating
dog.bark(); // Output: Rex is barking
