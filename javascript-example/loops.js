// while loops
let i = 0;
let n = 10;
while (i <= n) {
  console.log(i);
  i += 1;
  // Output: 0 1 2 3 4 5 6 7 8 9 10
}

// i = 0; n = 10 => 0 is printed out, i is incremented by 1.
// i = 1; n = 10 => 1 is printed out, i is incremented by 2.
// i = 2; n = 10 => 2 is printed out, i is incremented by 3.
// ...
// i = 11; n = 10 => 11 is not less than or equal to 10, so the loop stops.

// do..while loops
let x = 1;
const y = 5;
do {
  console.log(x);
  x++;
} while (x <= y); // Output: 1 2 3 4 5

// x = 1; y = 5 => 1 is printed out, x is incremented by 2.
// x = 2; y = 5 => 2 is printed out, x is incremented by 3.
// x = 3; y = 5 => 3 is printed out, x is incremented by 4.
// x = 4; y = 5 => 4 is printed out, x is incremented by 5.
// x = 5; y = 5 => 5 is printed out, x is incremented by 6.
// x = 6; y = 5 => 6 is not less than or equal to 5, so the loop stops.


// for..of loops
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
  //Output: 1 2 3
}

// for loops
let sum = 0;
const t = 50;
for (let i = 1; i <= t; i++) {
  sum += i;
}
console.log('sum: ', sum); // Output: sum: 1275