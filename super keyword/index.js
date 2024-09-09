/* super keyword = this key word is use  to call the constractor or access the properties of paresnt class(superclass)
 */
// Base class `animal` that all other animals will inherit from
class Animal {
    // Constructor for the animal class, takes `name`, `age`, and `speed` as parameters
    constructor(name, age, speed) {
        this.name = name;  // Sets the animal's name
        this.age = age;    // Sets the animal's age
        this.speed = speed; // Sets the animal's speed
    }

    // Method to display animal's properties, takes speed as a parameter
    display(speed) {
        console.log(`Name: ${this.name}, Age: ${this.age}, Speed: ${speed}`);
        // `this.name` and `this.age` are instance variables
        // `speed` is passed as an argument
    }
}

// `Rabbit` class that extends the `Animal` class
class Rabbit extends Animal {
    // Constructor for `Rabbit`, takes `name`, `age`, and `runspeed` as parameters
    constructor(name, age, runspeed) {
        super(name, age);  // Calls the parent class's constructor with `name` and `age`
        this.runspeed = runspeed; // Sets the rabbit's running speed
    }

    // Method to display the rabbit running
    run() {
        super.display(this.runspeed);  // Calls the parent class's `display` method with `runspeed`
    }
}

// `Fish` class that extends the `Animal` class
class Fish extends Animal {
    // Constructor for `Fish`, takes `name`, `age`, and `swimspeed` as parameters
    constructor(name, age, swimspeed) {
        super(name, age);  // Calls the parent class's constructor with `name` and `age`
        this.swimspeed = swimspeed; // Sets the fish's swimming speed
    }

    // Method to display the fish swimming
    swim() {
        super.display(this.swimspeed);  // Calls the parent class's `display` method with `swimspeed`
    }
}

// `Hawk` class that extends the `Animal` class
class Hawk extends Animal {
    // Constructor for `Hawk`, takes `name`, `age`, and `flyspeed` as parameters
    constructor(name, age, flyspeed) {
        super(name, age);  // Calls the parent class's constructor with `name` and `age`
        this.flyspeed = flyspeed; // Sets the hawk's flying speed
    }

    // Method to display the hawk flying
    fly() {
        super.display(this.flyspeed);  // Calls the parent class's `display` method with `flyspeed`
    }
}

// Creating instances of Rabbit, Fish, and Hawk
const rabbit = new Rabbit('Rabbit', 2, '25 km/sec');  // Creating a rabbit object
const fish = new Fish('Fish', 1, '5 km/sec');         // Creating a fish object
const hawk = new Hawk('Hawk', 3, '50 km/sec');        // Creating a hawk object

// Call methods to show behaviors
rabbit.run();  // Display rabbit's run speed
fish.swim();   // Display fish's swim speed
hawk.fly();    // Display hawk's fly speed
