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
    super(name, 4, 'woof');
    this.type = 'dog';
  }

  speak(to) {
    super.speak();
    if (to) console.log(`to ${to}`); // Output: Sun says 'woof' to everyone
  }
}

const sun = new Dog('Sun');
sun.speak('everyone');
sun.eats = 'anything';
console.log(sun.dinner); // Output: Sun eats anything for dinner
