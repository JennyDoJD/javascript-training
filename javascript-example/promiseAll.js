// Promise.all()
// case: 1
//   function 1: resolve
//   function 2: resolve
//   function 3: resolve

const function1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      resolve(data);
    }, 2000);
  });
};

const function2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [6, 7, 8, 9];
      resolve(data);
    }, 2000);
  });
};

const function3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [10, 11, 12];
      resolve(data);
    }, 2000);
  });
};

Promise.all([
  function1(),
  function2(),
  function3()
])
.then(dataArray => {
  console.log('All data from diff function: ', dataArray);
})
.catch(error => {
  console.log('Error in promise', error);
})
// Output:
// All data from diff function:  [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9 ], [ 10, 11, 12 ] ]

// case: 2
//   function 1: resolved
//   function 2: rejected

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from getData');
    }, 2000);
  });
};

const getError = () => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('Error: data is not available from getError');
    }, 2000);
  });
};

Promise.all([
getData(),
getError()
])
.then(dataArray => {
  console.log('All data fetch: ' + dataArray);
})
.catch((error => {
  console.log('Error occured: ', error);
}))
// Output: All data fetch: Data from getData,Error: data is not available from getError
