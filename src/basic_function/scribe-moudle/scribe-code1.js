/**
 *构造函数模式创建订阅发布模式
 */

// 构造函数：用点为变量添加内容。点后满有内容、函数的是添加新内容，没有的就是引用添加的内容

var salesoffice = {}; //定义售楼处

salesoffice.clientList = []; //缓存列表，存放订阅者的回调函数。触发的操作

//创建listen，存放订阅的消息
salesoffice.listen = function (key, fn) {
  //key代表是第几项，fn是执行函数，用来存放
  //增加订阅者
  if (!this.clientList[key]) {
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn); //订阅的消息添加进缓存列表
};

//发布消息。生成触发条件
salesoffice.trigger = function () {
  var key = Array.prototype.shift.call(arguments); //取出消息类型
  fns = this.clientList[key];
  if (!fns || fns.length === 0) {
    //如果没有订阅改消息，则返回
    return false;
  }
  for (var i = 0, fn; (fn = fns[i++]); ) {
    fn.apply(this, arguments); //arguments  是发布消息时带上的参数
  }
};

//测试例子:如果收到了下面的消息，就执行后面的操作
salesoffice.listen("squareMeter88", function (price) {
  //小明订阅消息
  console.log("价格=" + price);
});

salesoffice.listen("squareMeter110", function (price) {
  //小红订阅消息
  console.log("价格=" + price);
});

// 使用该消息，收到价格为88平方米，价格两千
salesoffice.trigger("squareMeter88", 2000000);
salesoffice.trigger("squareMeter110", 3000000);
