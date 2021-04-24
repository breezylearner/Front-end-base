var p1 = new Promise(function (resolve, reject) {
  resolve("success1");
  resolve("success2");
});

var p2 = new Promise(function (resolve, reject) {
  resolve("success");
  reject("reject");
});

p1.then(function (value) {
  console.log(value);
}); //success

p2.then(function (value) {
  console.log(value);
}); //success

// 上述p1,p2状态已经发生改变，后续调用值不变
