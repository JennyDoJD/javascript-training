// regular function
function getData() {
  return 'This is a function!';
}
console.log(getData()); // Output: This is a function!

//another regular function
function myFunc(theArr) {
  theArr[0] = 30;
}
const arr = [45];
console.log(arr[0]); // Output: 45

myFunc(arr);
console.log(arr[0]); // Output: 30

const num1 = 3;
const num2 = 2;
function multiply() {
  return num1 * num2;
}
console.log(multiply()); // Output: 6

// a nested function example
function getScore() {
  const num3 = 4;
  const num4 = 5;
  const name = 'Fubao';

  function add() {
    return `${name} scored ${num3 + num4}`;
  }
  return add();
}
console.log(getScore()); // Output: Fubao scored 9

// arrow function
const foods = ['Banana', 'Chips', 'Grapes', 'Jam'];
console.log(foods.map((food) => food.length)); // Output: [ 6, 5, 6, 3 ]

let age = 5;
let welcome = age < 18 ? () => console.log('Baby') : () => console.log('Adult');

welcome(); // Output: Baby

// the difference between arrow function and function
function total (num1, num2) {
  console.log(arguments);
  return num1 + num2;
}
total(1,2);

const test = (num1, num2) => {
  console.log(arguments);
  let total = num1 + num2;
  return total.toFixed(2);
}
test(1,2);