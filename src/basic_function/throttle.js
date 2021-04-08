// 参考：https://segmentfault.com/a/1190000019577510

/* ----------------1.定时器方案----------- */
function throttle(fn, delay) {
  var timer = null;
  // 记得添加 return！要返回这个函数的结果！不能只是运行，但没有返回结果！！
  return function () {
    var context = this;
    var args = arguments;
    // 如果没有水龙头,就加上设置的这个!
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}
// 测试与使用
function handle() {
  console.log(Math.random());
}
// 对 handle函数使用节流
window.addEventListener("mousemove", throttle(handle, 1000));

/*-------------------- 2.时间戳方案------------- */
function throttle(fn, delay) {
  var pre = Date.now();
  return function () {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - pre >= delay) {
      fn.apply(context, args);
      pre = Date.now();
    }
  };
}
// 调试
function handle() {
  console.log(Math.random());
}
window.addEventListener("mousemove", throttle(handle, 1000));
