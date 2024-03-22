let x = 10;

const precedence = 1 * x + 20 / x % 2;

// const precedence = 1 * 10 + 20 / 10 % 2
// const precedence = 10 + 20 / 10 % 2
// const precedence = 10 + 2 % 2
// const precedence = 10 + 0
// const precedence = 10

console.log(precedence);