// 8 falsy values when converted to boolean will be "false":
// false, 0, -0, 0n, "", null, undefined, NaN
let a = Boolean('NaN');
console.log(a); // true
console.log(typeof a); // boolean

// Example: checks whether a variable is assigned a value or undefined
let salary;
console.log(salary); // undefined
if (salary) {
  console.log('Salary is defined');
} else {
  console.log('Salary is undefined');
}

// Output: Salary is undefined

// || and ??
console.log(1 || 0); // Output: 1 (the first truthy value is 1)
console.log(null || 2); // Output: 2 (the first truthy value is 2)
console.log("" || undefined || 0 || 10); // Output: 10 (the first truthy value is 10)
console.log(null || 100 || 5 || undefined); // Output: 100 (the first truthy value is 100)
console.log("" || 0 || null); // Output: null (no truthy value, return the final value)

console.log(0 ?? 1); // Output: 0 (0 is not null or undefined)
console.log(null ?? false ?? undefined); // Output: false (false value is the first value that is not null or undefined)
