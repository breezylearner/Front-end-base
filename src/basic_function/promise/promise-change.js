var p1 = new Promise(function (resolve, reject) {
  resolve(1);
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 500);
});
var p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(3);
  }, 500);
});

//promise是立即执行，无需调用。上面的没有在控制台打印，因此
console.log(p1); // reslove状态，值为1
console.log(p2); // pending状态，值未定义（参数没在resolve中使用）
console.log(p3); // pendding状态，值未定义
/* ----------此处要注意执行顺序！---------- */
// then方法也是异步执行的，和setTimeout一样是异步函数,两者执行看谁先做完
//相同的setTimeout，按照上下执行顺序(单线程)
// 因此该部分输出内容是1（then赋值远小于1秒），2，3（按照线程顺序执行）
setTimeout(function () {
  console.log(p2);
}, 1000); //2

setTimeout(function () {
  console.log(p3);
}, 1000); //3

p1.then(function (value) {
  console.log(value);
}); //resolve状态，值为1
/**------------------------------- */
p2.then(function (value) {
  console.log(value);
}); //resolve状态，值为2
p3.catch(function (err) {
  console.log(err);
}); //rejrct状态，值为3
