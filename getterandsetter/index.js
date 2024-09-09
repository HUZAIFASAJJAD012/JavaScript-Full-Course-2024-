
//getter = make the property readable
//setter = make the property writable


class Animal {
    constructor(name, age, speed) {
        this.name = name;
        this.age = age;
        this.speed = speed;
    }

    // Getter for name
    get animalName() {
        return this.name;
    }

    // Setter for name
    set animalName(name) {
        this.name = name;
    }

    // Getter for age
    get animalAge() {
        return this.age;
    }

    // Setter for age
    set animalAge(age) {
        this.age = age;
    }

    // Getter for speed
    get animalSpeed() {
        return this.speed;
    }

    // Setter for speed
    set animalSpeed(speed) {
        this.speed = speed;
    }

    display(speed) {
        console.log(`Name: ${this.name}, Age: ${this.age}, Speed: ${speed}`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;
    }

    // Getter for runspeed
    get runSpeed() {
        return this.runspeed;
    }

    // Setter for runspeed
    set runSpeed(runspeed) {
        this.runspeed = runspeed;
    }

    run() {
        super.display(this.runspeed);
    }
}

class Fish extends Animal {
    constructor(name, age, swimspeed) {
        super(name, age);
        this.swimspeed = swimspeed;
    }

    // Getter for swimspeed
    get swimSpeed() {
        return this.swimspeed;
    }

    // Setter for swimspeed
    set swimSpeed(swimspeed) {
        this.swimspeed = swimspeed;
    }

    swim() {
        super.display(this.swimspeed);
    }
}

class Hawk extends Animal {
    constructor(name, age, flyspeed) {
        super(name, age);
        this.flyspeed = flyspeed;
    }

    // Getter for flyspeed
    get flySpeed() {
        return this.flyspeed;
    }

    // Setter for flyspeed
    set flySpeed(flyspeed) {
        this.flyspeed = flyspeed;
    }

    fly() {
        super.display(this.flyspeed);
    }
}

const rabbit = new Rabbit('Rabbit', 2, '25 km/sec');
const fish = new Fish('Fish', 1, '5 km/sec');
const hawk = new Hawk('Hawk', 3, '50 km/sec');

rabbit.run();
fish.swim();
hawk.fly();
