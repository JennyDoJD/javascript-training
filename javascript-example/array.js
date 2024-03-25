const fruits = [];

// add an item to an array
fruits.push("apple", "coconut", "banana");

// the length of an array
console.log(fruits.length); //3

// converts an array to a string of array values.
console.log(fruits.toString()); // apple, coconut, banana

// removes the last element from an array
console.log(fruits.pop()); // banana
console.log(fruits); // [ 'apple', 'coconut' ]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
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
console.log(found); //16

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