var p1 = Promise.resolve(1); //普通值，直接调用函数的对象
var p2 = Promise.resolve(p1); //参数本身为Promise,返回的是Promise的对象
// 通过构造函数创建的，全是新对象，不能直接返回
var p3 = new Promise(function (resolve, reject) {
  resolve(1);
});
var p4 = new Promise(function (resolve, reject) {
  resolve(p1);
});

// 有相等的内容，输出一般为true或false
console.log(p1 === p2); //true。返回的都是value=1
console.log(p1 === p3); //false
console.log(p1 === p4); //false
console.log(p3 === p4); //false

/**
 * 这里需要考虑顺序。应该为p2,p1,p4
 * p4的resolve中接收的参数是一个Promise对象p1，resolve会对p1”拆箱“，获取p1的状态和值，但这个过程是异步的
 */
p4.then(function (value) {
  console.log("p4=" + value); //输出p4=1
});

p2.then(function (value) {
  console.log("p2=" + value); //输出p2=1
});

p1.then(function (value) {
  console.log("p1=" + value); //输出p1=1
});
