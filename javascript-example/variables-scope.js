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

getFruit(); // ReferenceError: fruit is not defined

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
