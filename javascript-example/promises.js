//callback hell
setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
      setTimeout(function () {
        console.log(4);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// SIMPLE EXAMPLE
// create Promise :
//      step1: new Promise
//      step2: Executor function has 2 parameters
//      step3: call resolve or reject

var promise = new Promise(
  //Executor
  function (resolve, reject) {
    //logic
    // call resolve
    // call reject
    // reject("error");
    resolve();
  }
);

promise
  .then(function () {
    console.log("Success!");
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done!");
  });

// more concise: default is always success or failure (Promise.resolve and Promise.reject)
var promise = Promise.resolve("Success!");
promise.then(function (result) {
  console.log(result);
});

// Promise.all
var promise1 = new Promise((resolve) => {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});

var promise2 = new Promise((resolve) => {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});

Promise.all([promise1, promise2]).then(function ([result1, result2]) {
  // var result1 = result[0];
  // var result2 = result[1];
  console.log(result1.concat(result2));
});

// resolve callback hell
function prom(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
prom(1000)
  .then(function () {
    console.log(1);
    return prom(1000);
  })
  .then(function () {
    console.log(2);
    return new Promise((reject) => {
      reject("err");
    });
  })
  .then(function () {
    console.log(3);
    return prom(1000);
  })
  .then(function () {
    console.log(4);
    return prom(1000);
  })
  .catch(function (error) {
    console.log(error);
  });

// promise example
var users = [
  {
    id: 1,
    name: "Loi Do",
  },
  {
    id: 2,
    name: "Nga Nguyen",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "What day is it today?",
  },
  {
    id: 2,
    user_id: 2,
    content: "It's Thursday.",
  },
];

// fake API
function getComments() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(comments);
    }, 2000);
  });
}

function getUsersByIds(userIds) {
  return new Promise((resolve) => {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    console.log(data);
  });
