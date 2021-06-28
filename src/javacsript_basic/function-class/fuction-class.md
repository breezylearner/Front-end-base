# ES6新特性：使用class构造函数
  > 参考 java 里面的class构造函数，继承

## ES6 语法糖：class
&ensp; &ensp;class里面有一个构造器**constructor**，能优先执行里面的函数，一般首字母要大写。
&ensp; &ensp;定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。同时方法之间不需要逗号分隔，加了会报错。<br/>

#### 1. 创建模板
* 例如：
 ```
/*构建类。这个类的名字叫Student，参数是名字和学号，功能是sayHi,打印内容*/
class Plant {
  // 通过 constrctor 创建基本特性：名字，颜色
  constructor(name, color) {
    // 该植物的名字和颜色使用传入的值
    this.name = name;
    this.color = color;
  }
  // 设置该动物能做的事情
  // 美元符号绑定使用变量，反引号拼接所有字符串
  say() {
    console.log(`名字是${this.name}，颜色是${this.color}`);
  }
}
// 创建实例
let flower = new Plant("三色堇", "红色的");
flower.say(); //调用里面的函数


```
#### 2. 继承
   类与类之间的继承，使用 **extends**，通过 **super**,使用父类的属性
* 例如
```
class Leaf extends Plant {
  constructor(name, color) {
    super(name); //对Leaf 里面的name处理，与Plant里面的一样
    this.color = color;
  }
  say() {
    console.log(`这里的叶子是${this.name}，颜色是${this.color}`);
  }
}
let lea = new Leaf("银莲花", "蓝色");
lea.say();

```

***

## JS 构造函数
&ensp; &ensp; class本质上，相当于一个模板。使用constructor（制造者），构建属性、方法。
好比建设了一种户型，里面与基本的房间数、之后依照户主的的习惯进行操作。例如户型是两室一厅，里面有装修了不同的样式。<br/>

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



* 参考
  1.[JS es6的Class类详解](https://blog.csdn.net/weixin_44691513/article/details/108416033)
  2.[ES6 的 class 继承为什么一定要写 super()？super代表什么？](http://01vh0.cn/2ckLq)