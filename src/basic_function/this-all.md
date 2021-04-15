# this 到底指向哪儿？

## 一般函数
### 调用只有一层，指向全局对象window,严格模式下执行undefined

### 多层调用，this指向上一层

### 构造函数中，返回的是对象，指向该对象。返回的是示例，指向该函数

### new出来的，指向函数本身。new改变了this的指向

## 箭头函数
* 箭头函数的this，指向该函数**所在**的作用域指向的对象。
  >作用域是指函数内部，字面量不是函数

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