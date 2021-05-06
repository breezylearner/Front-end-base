// js 本身是有call方法的，因此模拟的时候，需要重新命名call
Function.prototype.call_ = function (obj) {
  // 模拟this功能：当前内容中能找到该参数吗？能就
  obj = obj ? Object(obj) : window; //判断是否为有效对象：如果是能原型中能找到的就直接用，不是就在全局搜索
  obj.fn = this;
  // 利用拓展运算符直接将arguments转为数组
  let args = [...arguments].slice(1);
  let result = obj.fn(...args);

  delete obj.fn;
  return result;
};
