// 8 falsy values when converted to boolean will be "false":
// false, 0, -0, 0n, "", null, undefined, NaN
let a = Boolean('NaN');
console.log(a); // true
console.log(typeof a); // boolean

// Example: checks whether a variable is assigned a value or undefined
let salary;
console.log(salary); // undefined
if(salary) {
  console.log('Salary is defined');
} else {
  console.log('Salary is undefined');
}

// Output: Salary is undefined
