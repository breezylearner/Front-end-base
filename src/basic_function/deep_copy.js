/**
 * 思路：利用JS中，素有对象都从Object.prototype继承的特性，
 * （1）利用递归进行编写。
 * （2）typeof运算符用于判断对象的类型
 */

function deepCopy(obj) {
  //判断是否是简单数据类型，如：数字、字符串，本身没任何变化
  if (typeof obj == "object") {
    //复杂数据类型分情况：是数组，方括号，是其他，花括号
    var result = obj.constructor == Array ? [] : {};
    // 遍历形参中每个内容，根据不同内容进行再存储
    for (let i in obj) {
      result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
    }
  } else {
    //简单直接赋值
    var result = obj;
  }
  return result;
}
