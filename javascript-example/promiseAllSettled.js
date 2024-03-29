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


Promise.allSettled([
  getData(),
  getError()
])
.then(results => {
  results.forEach(results => {
    if(results.status === 'fulfilled') {
      console.log('value: ', results.value);
    }
    else{
      console.error('reason for rejection: ', results.reason);
    }
  })
})
// Output:
//   value:  Data from getData
//   value:  Error: data is not available from getError
