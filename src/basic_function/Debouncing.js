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
