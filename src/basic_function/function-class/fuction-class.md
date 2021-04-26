# class 与构造函数
  > 有点像 java 里面的class构造函数

## JS 构造函数
  创建形式和普通函数一样，通过prototype（原型）的方式添加功能函数
```
<!-- 创建函数-->
function MathHandle(x,y) {
	this.x = x;
	this.y = y;
}
<!-- 为上面创造的函数添加相关功能 -->
MathHandle.prototype.add = function () {
	return this.x + this.y;
};
<!-- new出实例 -->
var m = new MathHandle(1, 2);
<!-- 调用 -->
console.log(m.add()); // 3

```

## ES6 语法糖：class
  class里面有一个构造器**constructor**，能优先执行里面的函数，一般首字母要大写，
