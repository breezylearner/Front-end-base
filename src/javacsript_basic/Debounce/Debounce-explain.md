# 防抖函数解析

 * > 用处:防止频繁提交表单，让单次事件多次触发

-     设置时间管理员 timer，初始 timer 为 null，后面使用 clearTimeout 清空之前的内容（apply 是立即执行）。
  > timer 就像一个水龙头，对里面的函数进行有一定条件的控制。判断条件就是开启的条件。
-     timer 具体是使用 setTimeout，执行是指向当前调用的函数，并使用里面的实参，然后回复初始值。
-     setTimeout(执行内容，等待时间)
 


```
/* 防抖函数：timer就像一个控制时间的水龙头*/
// 里面传递两个寒素：1.执行的函数。2.延迟的时间不用传入，是实参，使用时不用传入，但是创建时必须写明
function debounce(fn, delay = 1000) {
  //可以不为delay赋值，将delay设置为形参。
  //默认事件是1秒（一千毫秒）
  let timer = null; //在闭包中 初始化
  // 内部设置一个匿名函数，仅供该函数使用
  return function () {
    // 执行新内容之前，清空当前时间
    if (timer) {
      clearTimeout(timer);
    }
    // setTImeout((执行内容)，等待触发时间)
    timer = setTimeout(() => {
      //时间盒子里设置定时器
      // 绑定this，是之前可能作用与别的函数。意为：指向当前函数，并保留所有参数
      fn.apply(this, arguments); //arguments:实参
      timer = null;
    }, delay); //定时器前面是触发函数，后面是延迟的时间
  };
}

// 检验
input1.addEventListener(
  "keyup",
  debounce(function () {
    console.log(input1.value); //闭包使用，将函数作为参数
  })
);
```
