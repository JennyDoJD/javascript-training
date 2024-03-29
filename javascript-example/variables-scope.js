// global scope
var globalVariable = 'I am in global scope';
function someFunction() {
  console.log(globalVariable); // accessible within the function
}
console.log(globalVariable); // accessible outside the function

someFunction();

// function scope
function anotherFunction() {
  var functionVariable = 'I am in function scope';
  console.log(functionVariable); // accessible inside the function

  if(true) {
    console.log(functionVariable); // still accessible inside nested block
  }
}
//console.log(functionVariable); // not accessible outside the function, will throw ReferenceError
anotherFunction();

// block scope
{
  let blockVariable = 'I am in block scope';
  console.log(blockVariable); // accessible within the block
}
console.log(blockVariable); // not accessible outside the block, will throw ReferenceError

function getAnimal() {
  if (true) {
    var animal = 'Panda';
    console.log(animal);
  }
}
getAnimal(); // Output: Panda

function getColor() {
  if (true) {
    var color = 'Red';
  }
    console.log(color);
}
getColor(); // Output: Red

function getFruit() {
  if (true) {
    let fruit = 'Strawberry';
  }
  console.log(fruit);
}

//getFruit(); // ReferenceError: fruit is not defined

function getData() {
  console.log(data);
  if(true) {
    var data = 'some data';
    // let data = 'some data';
  }
}
getData();
// use var => Output: undefined
// use let => ReferenceError: data is not defined
// because hoisting doesn't happen with let declarations, it happens with var declarations
