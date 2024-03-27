// example 1
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // getter
  get area() {
    return this.calcArea();
  }
  // method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area); // Output: 100

// example 2
class Animal {
  constructor(name = 'anonymous', legs = 4, noise = 'nothing') {
    this.type = 'animal';
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} says '${this.noise}'`);
  }

  walk() {
    console.log(`${this.name} walks on ${this.legs} legs`);
  }

  // setter
  set eats(food) {
    this.food = food;
  }

  // getter
  get dinner() {
    return `${this.name} eats ${this.food || 'nothing'} for dinner.`;
  }
}

const rex = new Animal('Rex', 4, 'woof');
rex.speak(); // Output: Rex says 'woof'
rex.noise = 'growl';
rex.speak(); // Output: Rex says 'growl'
rex.eats = 'anything';
console.log(rex.dinner); // Output: Rex eats anything for dinner.

class Dog extends Animal {
  constructor(name) {
    // call the Animal constructor
    super(name, 4, 'woof');
    this.type = 'dog';

    // update count of Dog objects
    Dog.count++;
  }

  speak(to) {
    super.speak();
    if (to) console.log(`to ${to}`); // Output: Sun says 'woof' to everyone
  }

  // return number of dog objects
  static get COUNT() {
    return Dog.count;
  }
}

const sun = new Dog('Sun');
sun.speak('everyone');
sun.eats = 'anything';
console.log(sun.dinner); // Output: Sun eats anything for dinner

// static property (added after class is defined)
Dog.count = 0;
console.log(`Dogs defined: ${Dog.COUNT}`); // Output: Dogs defined: 0

const don = new Dog('Don');
console.log(`Dogs defined: ${Dog.COUNT}`); // Output: Dogs defined: 1

const kim = new Dog('Kim');
console.log(`Dogs defined: ${Dog.COUNT}`); // Output: Dogs defined: 2
