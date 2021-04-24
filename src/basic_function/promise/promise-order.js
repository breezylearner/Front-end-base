var p = new Promise(function (resolve, reject) {
  resolve("success"); //2. 异步事件
});

p.then(function (value) {
  console.log(value);
});

console.log("which one is called first ?"); // 1.console.log同步时间，先执行

/**
 * which one is called first ?;
 * success
 */
