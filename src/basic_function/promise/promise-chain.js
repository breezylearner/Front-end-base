var p = new Promise(function (resolve, reject) {
  resolve(1);
}); //pending，resolve=1

// 第一个then
p.then(function (value) {
  console.log(value); // 输出1
  return value * 2; //赋值value为2，并返回该值
})

  //第二个then
  .then(function (value) {
    console.log(value); //输出2
  })

  /*------promise的值可在下下个链式中使用吗？不能，只能根据生曾结果执行，不能根据上上层结果执行------ */
  //第三个then
  .then(function (value) {
    console.log(value); //输出undefined。上面的Promise未定义value(只能用紧挨着的，不能用上上面的)
    return Promise.resolve("resolve"); //生成新promise，状态为resolve状态，且赋值为“resolve”
  })

  //第四个then
  .then(function (value) {
    console.log(value); //输出resolve。上面的Promise
    return Promise.reject("reject"); //返回新Promise，状态为reject，并赋值。
  })

  //第五个then
  .then(
    //从这里开始要做判断：then 方法接收的是哪个参数？
    function (value) {
      console.log("resolve: " + value);
    }, //resolve
    function (err) {
      console.log("reject: " + err); //输出reject:reject。上面连接的Promise为失败状态
    }
  );
