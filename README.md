# Front-end-base

前端学习笔记

# 功能篇

## [防抖函数](/src/Debouncing.js)

> 用处:防止频繁提交表单，让单次事件多次触发

-     设置时间管理员 timer，初始 timer 为 null，后面使用 clearTimeout 清空之前的内容（apply 是立即执行）。
  > timer 就像一个水龙头，对里面的函数进行有一定条件的控制。判断条件就是开启的条件。
-     timer 具体是使用 setTimeout，执行是指向当前调用的函数，并使用里面的实参，然后回复初始值。
-     setTimeout(执行内容，等待时间)

## 节流函数
* [代码](/src/basic_function/throttle/throttle_code.js)
* [解说](src/basic_function/throttle/throttle_code.js)


## [深拷贝函数](/src/deep_copy.js)

> 思路：利用 JS 原型的原理

## [call apply bind 三兄弟]

> 三个函数都是用来改变原先指向指向，不过 bind 函数需要调用才能执行

    参考：[js 实现call和apply方法，超详细思路分析](https://www.cnblogs.com/echolun/p/12144344.html)

#### 步骤：

- 改变 this 指向
- 传参

* 特别：判断是否为有效对象：如果是能原型中能找到的就直接用，不是就在全局搜索

```
  obj = obj ? Object(obj) : window;

```
## [promise 实现红绿灯](/src/basic_function/promise_traffic_signal.js)
> promise 的本质是 ES6 的语法糖，状态一旦转变，就绝不会改变
* 根据promise的使用方法，将 setTimeout 用来设置延时，使用resolve状态，启动显示颜色的函数，达到“红绿灯”效果
*  [完整效果显示](https://codepen.io/breezylearner/pen/vYgWgEq)
  
## [图片懒加载](/src/basic_function/picture_lazyload/picture_lazyload_explain.md)
> 图片不一次性加载完，而是滚动到视窗时加载。pnterest使用图片加载方式
> * 好处：减少资源浪费，当图片数目非常多时

# 样式篇

## [三栏布局](https://codepen.io/breezylearner/pen/ZELpNXG)

利用 padding 留出两边空间，将中间内容写在最前面，通过 float 进行填充。

> 编写时可在色块里面添加文字，查看是否有覆盖

## [两栏布局](https://codepen.io/breezylearner/pen/BapLvrm?editors=1100)

利用 margin，留出右边自适应部分。

## [伪元素与伪类](src/basic_style/pseudo_classAndElemrnt.md)

## [居中对齐实现方式](src/basic_style/center_way.md)

## [盒模型相关](src/basic_style/box_problem.md)

# 前端常用 Linux 命令
[以上传测试环境为例](/src/Linux/lunix_usually.md)

# 计算机网络

### [客户端禁用cookie，session是否还能用？](src/knowledge/cookie_session.md)

# React 相关

## [react的生命周期函数](src/react_comprehend/react_life_function.md)