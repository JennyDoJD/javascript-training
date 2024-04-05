// primitive types => By value
let a = 10;
let b = a;
b = 12;
console.log(a); // Output: 10
console.log(b); // Output: 12

// Object => By references
// Example 1
const obj = { str: 'hello' };
const objRef = obj;
obj.str = 'Updated string';
console.log(objRef); // Output: { str: 'Updated string' }
console.log(obj); // Output: { str: 'Updated string' }

// Example 2
let myArray = [1, 2, 3];
function modifyArray(arr) {
  arr.push(5);
}
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 5]
