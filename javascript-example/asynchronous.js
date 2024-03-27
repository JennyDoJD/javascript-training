const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 2000);
};

console.log('Hello World');
networkRequest();
console.log('The end');
// Output:
// Hello World
// The end
// Async Code

// we have 2 asynchronous functions that take 3 and 5 seconds respectively,
// because asyncFunction uses await in turn,
// it takes 8 seconds to complete
// => To overcome this situation, use "Promise"
function returnResultAfter3Seconds() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(5);
    }, 3000);
  });
}

function returnResultAfter5Seconds() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(5);
    }, 5000);
  });
}

async function asyncFunction() {
  var result1 = await returnResultAfter3Seconds();
  var result2 = await returnResultAfter5Seconds();
  return result1 + result2;
}

var promise = asyncFunction();

promise.then(function(value) {
  console.log(value);
});

// callback
function asyncFunction(callback) {
  console.log("Start");
  setTimeout(() => {
    callback();
  }, 1000);
  console.log("Middle");
}

let printEnd = function() {
  console.log("End");
}

asyncFunction(printEnd);
// Output:
//   Start
//   Middle
//   End
