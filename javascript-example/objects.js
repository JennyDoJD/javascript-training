const student = {
  id: 1,
  name: 'Van A',
  name: 'Van B', // same key come later will take precedence
  isHero: true,
  'avg mark': 9,
  getName: function() {
    return this.name;
  }
};

const myKey = 'id';

console.log(student.name); // Output: Van B
console.log(student.avg mark); // SyntaxError
console.log(student["avg mark"]); // Output: 9
console.log(student[myKey]); // Output: 1
console.log(student.getName()); // Output: Van B

const key = 'avg mark';
console.log(student.key); // Output: undefined
console.log(student[key]); // Output: 9

// set new key to object
student.age = 18;
student['mark'] = 10;
console.log(student.age); // Output: 18
console.log(student.mark); // Output: 10

// delete key
delete student.name;
console.log(student.name); // Output: undefined

// date object
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}`);

// different arrow functions and regular functions in objects
const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: () => {
    console.log(`Started ${this.brand} ${this.model}`); // not going to work
  }
};
car.start(); // Output: Started undefined undefined

const car1 = {
  brand: 'Ford',
  model: 'Fiesta',
  goTo: function(destination) {
    console.log(`Going to ${destination}`);
  }
};
car1.goTo('Rome'); // Output: Going to Rome