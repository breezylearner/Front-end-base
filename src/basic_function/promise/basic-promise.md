# Promise 的基本使用与特性

## 1.Promise 结构
  封装好的构造函数，创建就会执行，无需另外调用。里面有两个函数：resolve和reject，分别在里面函数成功或者失败后调用
> 其实就是别人已经造好的工具，直接拿来用就可以了
```
var p =new Promise(function(resolve,reject){  //()表示里面的内容可以使用Promise的特性
  console.log("具体执行函数")
  resolve(xxxx) //当上面的console.log执行顺利执行后执行
  reject(yyyy)  //当console.log执行失败后执行
})
```

## 2.Promise 三种状态
  将成功执行的结果成为fulfilled（满足），被失败的结果成为rejected
* pending（刚构建好） →fulfilled(执行成功) /rejected（执行失败）
#### 状态何时改变？
* 当Promise中的参数参与了另外两种状态，pending就发生改变。
*   当传入函数参与resolve，pending就变成resolve
*   当传入函数参与reject，pending就变成reject

[例题：判断控制台输出内容](../promise/promise-change.js)
> 描述Promise时，需要讲出当前状态和结果。当有在控制台打印时，用“输出”作为标记


## 3.Promise 状态不可逆
  一旦pending的状态改变，就不会发生改变，且结果没有时效性。因此当Promise状态发生改变后，后面调用的值不变。
> 相当于是既成事实不发生改变！

[例题：调用promise结果](../promise/promise-reversible.js)

## 4. Promise 链式调用
  当Promise结果发生改变时，会根据状态执行resolve或reject函数。
  then方法作为promise的链式调用，会生成一个新的Promise（相当于then也是一个Promise函数，不过使用的条件是上一个连接的Promise执行了）接收**其中一个**产生的函数（resolve或reject）。且函数的返回值会
  > 一个promise也只能产生一个结果，就行一个承诺不可能既成功又失败。
  
  
  <mark>注意：不是只有在fullfilled状态下，才执行then方法<mark>