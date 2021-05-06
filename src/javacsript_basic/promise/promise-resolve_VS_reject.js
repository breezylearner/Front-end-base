var p1 = new Promise(function (resolve, reject) {
  resolve(Promise.resolve("resolve")); //返回Promise对象，resolve状态，值为resolve
});

var p2 = new Promise(function (resolve, reject) {
  resolve(Promise.reject("reject")); //返回Promise对象，reject状态，值为reject
});

var p3 = new Promise(function (resolve, reject) {
  reject(Promise.resolve("resolve")); //返回Promise对象，reject状态，值为resolve
});

p1.then(
  function fulfilled(value) {
    console.log("fulfilled: " + value); //输出：fullfilled:resolve  2
  },
  function rejected(err) {
    console.log("rejected: " + err);
  }
);

p2.then(
  function fulfilled(value) {
    console.log("fulfilled: " + value);
  },
  function rejected(err) {
    console.log("rejected: " + err); // 输出rejtcted:reject   3
  }
);

p3.then(
  function fulfilled(value) {
    console.log("fulfilled: " + value);
  },
  function rejected(err) {
    console.log("rejected: " + err); //输出：rejected:resolve  1
  }
); //p3 rejected: [object Promise]

/**
 * 输出顺序：p3,p1,p2。
 */
