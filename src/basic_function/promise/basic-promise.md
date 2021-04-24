# Promise 的基本使用与特性

## 1.Promise 结构
* 封装好的构造函数，
```
var p =new Promise(function(resolve,reject){  //()表示里面的内容可以使用Promise的特性
  console.log("具体执行内容")
  resolve("")
})
```

## 2.Promise 三种状态
* pending（刚构建好） →resolve(执行成功) /reject（执行失败）
#### 状态何时改变？
* 当Promise中的参数参与了另外两种状态，pending就发生改变。
*   当传入函数参与resolve，pending就变成resolve
*   当传入函数参与reject，pending就变成reject
[例题：判断控制台输出内容](../promise/promise-change.js)
> 描述Promise时，需要讲出当前状态和结果。当有在控制台打印时，用“输出”作为标记


## 3.Promise 状态不可逆
* 一旦pending的状态改变，就不会发生改变，且结果没有时效性。因此当Promise状态发生改变后，后面调用的值不变。
> 相当于是既成事实不发生改变！
[例题：](../promise/promise-reversible.js)

## 4. Promise 链式调用
    当