# this 到底指向哪儿？

## 一般函数

* 调用只有一层，指向全局对象window,严格模式下执行undefined

* 多层调用，this指向上一层

* 构造函数中，返回的是对象，指向该对象。返回的是实例，指向该函数

* new出来的，指向函数本身。new改变了this的指向

## 箭头函数
* 箭头函数的this，指向该函数**所在**的作用域指向的对象。函数内部的this执向始终会和函数的this执向保持一致（在定义的时候）
  >作用域是指函数内部，字面量不是函数。因此当箭头函数和字面量中定义，实际使用的是全局变量。
* this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。

*  箭头函数与setTimeout:

    一般而言，setTimeout第一个参数是一个方法，传入的这个方法内部的this会被改写指向window。但是对于箭头函数，指向的不发生变化，如果后面用call，就是call里面的值。
*     

## 习题
1. 箭头函数：字面量做包裹
 ```
var name = 'win'; 

var A = {
   name: 'A',
   sayHello: () => {
      console.log(this.name)
   }
}

A.sayHello();// 指向全局变量win。作用域是函数内部，，sayHello最外面没有函数包裹（var A 是字面量），因此指向的是全局变量
 ```

2. 箭头函数：函数包裹（函数声明）
```
var name = 'window'; 

var A = {
   name: 'A',
   sayHello: function(){
      var s = () => console.log(this.name)
      return s//返回箭头函数s
   }
}

var sayHello = A.sayHello();
sayHello();// 输出A
```

* 参考
  1. [ES6箭头函数的this指向详解](https://zhuanlan.zhihu.com/p/57204184)
  2. [彻底理解js中this的指向，不必硬背](https://www.cnblogs.com/pssp/p/5216085.html)