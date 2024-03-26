// 'animals' array created using array literal notation.
const animals = ['dog', 'cat'];
console.log(animals);

// 'animals2' array created using the Array() constructor.
const animals2 = new Array('dog', 'cat');
console.log(animals2);

// 'animals3' array created using String.prototype.split().
const animals3 = 'dog, cat'.split(' ,');
console.log(animals3);

const fruits = [];
// add an item to an array
fruits.push('apple', 'coconut', 'banana');

// the length of an array
console.log(fruits.length); //3

// converts an array to a string of array values.
console.log(fruits.toString()); // apple, coconut, banana

// removes the last element from an array
console.log(fruits.pop()); // 'banana'
console.log(fruits); // [ 'apple', 'coconut' ]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][0]); //1
console.log(matrix[1][1]); //5

const length = matrix.length;
console.log(length); //3

// join arrays
const a = [1, 2];
const b = [3, 4];

//method 1
const c = a.concat(b);
//method 2
const d = [...a, ...b];

// all have results: [1, 2, 3, 4]
console.log(c);
console.log(d);

// find a specific item in the array
const array = [4, 9, 16, 25, 29];
const found = array.find((element) => element > 10);
console.log(found); // 16

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 5, 8, 12].find(isPrime)); // 5

const colors = ['red', 'yellow', 'blue'];
colors[5] = 'purple';
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
//   0: red
//   1: yellow
//   2: blue
//   5: purple
});

// reverse the order of the array
colors.reverse();
console.log(colors); // [ 'purple', <2 empty items>, 'blue', 'yellow', 'red' ]

// remove multiple items from the end of an array
const fruits1 = ['Apple', 'Banana', 'Strawberry', 'Mango'];
const start = -3;
const removedItems = fruits1.splice(start);
console.log(fruits1); // [ 'Apple' ]
console.log(removedItems); // [ 'Banana', 'Strawberry', 'Mango' ]

// remove the first item from an array
const removedItem = fruits1.shift();
console.log(removedItem); // Apple

// add a new first item to an array
const color = ['pink', 'yellow'];
console.log(color); // [ 'pink', 'yellow' ]
const newLength = color.unshift('red');
console.log(newLength); // 3

// iterate over an array
for (const color1 of color) {
  console.log(color1);
// red
// pink
// yellow
}

// call a function on each element in an array
color.forEach((item, index, array) => {
  console.log(item, index);
// red 0
// pink 1
// yellow 2
});
