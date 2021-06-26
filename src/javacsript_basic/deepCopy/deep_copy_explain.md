# 深拷贝
### 手写拷贝设计思路
 * 思路：利用JS中，素有对象都从Object.prototype继承的特性，
 * （1）利用**递归**进行编写。
 * （2）typeof运算符用于判断对象的类型

```
function deepCopy(obj) {
  
  if (typeof obj == "object") {
    //对输入对象进行判断，确定包裹的数据形式
    var result = obj.constructor == Array ? [] : {};
    
    // 遍历输入中每个内容，根据不同内容进行再存储(使用for...in遍历对象)
    for (let i in obj) {
      //如果属于js的规定类型（可识别），就直接放置为result[i]，否则就对里面的内容进行拆分，一直拆解到所有内容都能被识别
      result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
    }

  } else {
    var result = obj;//用不着[]或者{}包裹，直接放到变量中
  }
  return result;//返回最后的结果
}
```

### 深拷贝相关函数
1. JSON.stringify() ：将**对象**与**数组**转换为 JSON 字符串
2. JSON.parse() ： 将**字符串**转换为 JSON


> 参考内容：[深拷贝的终极探索（99%的人都不知道）](https://www.jqhtml.com/16976.html)