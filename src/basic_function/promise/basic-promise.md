# Promise 的基本使用与特性

## 1.Promise 结构
* 封装好的构造函数，创建就会执行，无需另外调用。
* 里面有两个函数：resolve和reject，分别在里面函数成功或者失败后调用
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
*   当传入函数参与resolve，pending就变成fullfilled / resolvedd
*   当传入函数参与reject，pending就变成rejected
#### 状态产生参数
* fullfilled 产生参数value
* rejected 产生err保存失败信息

[例题：判断控制台输出内容](../promise/promise-change.js)
> 描述Promise时，需要讲出当前状态和结果。当有在控制台打印时，用“输出”作为标记


## 3.Promise 状态不可逆
  一旦pending的状态改变，就不会发生改变，且结果没有时效性。因此当Promise状态发生改变后，后面调用的值不变。
> 相当于是既成事实不发生改变！

[例题：调用promise结果](../promise/promise-reversible.js)

## 4. Promise 链式调用
  当Promise结果发生改变时，会根据状态执行resolve或reject函数。

  then方法作为promise的链式调用，会生成一个新的Promise（相当于then也是一个Promise函数，不过使用的条件是上一个连接的Promise执行了）接收**其中一个**产生的函数（resolve或reject），函数的返回值会作为then的参数。
  且如果有多个链式，，then使用的参数是紧挨着的Promise，不能是上上层的Promise
  > 一个promise也只能产生一个结果，就行一个承诺不可能既成功又失败。

  链式调用有下面三种情况：
    1. return 一个同步值（能直接用）。如果有明确的return，返回的就是return的值，如果没有明确定义return ，返回的就是undefined
    2. 返回另一个Promise（有状态和过程），then方法创建一个新Promise，作为下面then的执行参数。例：then里面再使用Promise
     ```
     return Promise.resolve("resolve")
     ```
     3.throw 一个同步异常，表示连接的Promise执行失败

  <mark>注意：then方法是Promose的链式方法（Promise执行之后可以就会调用），会根据状态执行不同操作，而不是只有在fullfilled状态下才执行<mark>

  ## 5.执行顺序：Promise then()回调异步性
    Promise 是同步函数，创建就能执行，不同判断条件。Promise then()是异步函数，要根据前面Promise返回的结果执行。因此根据**事件循环机制**，promise then执行时间晚于同步时间
  
  [例题：判断代码执行顺序](promise-order.js)

  ## 6.Promise 中的异常
    Promise中的异常由第二个回调函数（Promise执行失败的回调，一般参数为err）处理。
    异常一旦得到处理，then返回的后续Promise对象将恢复正常，并会被Promise执行成功的回调函数处理。

    [例题：判断输出结果](promise-unusual.js)

## 7.Promise.resolve()
* Promise.resolve(...)可以接收一个值或者是一个Promise对象作为参数。当参数是普通值时，它返回一个resolved状态的Promise对象，对象的值就是这个参数。
* 当参数是一个Promise对象时，它直接返回这个Promise参数。
* 通过构造函数创建的，全是新对象，不能直接调用里面的resolve,不能直接相等。

## 8.resolve vs reject