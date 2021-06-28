# Front-end-base
> 前端学习笔记

## (JavaScript)
### 函数篇
1. [for..in/of：遍历函数之间的区别](src/javacsript_basic/function_in_js.md/for_ofAndIn.md)
2. [数组相关操作](src/javacsript_basic/function_in_js.md/array_operate.md)

### 功能篇
1. 防抖函数
  [实现代码](src/javacsript_basic/Debounce/Debounce-function.js)
  [解说](src/javacsript_basic/Debounce/Debounce-explain.md)

2. 节流函数
  [实现代码](/src/javacsript_basic/throttle/throttle_code.js)
  [解说](src/javacsript_basic/throttle/throttle_explain.md)


3. 深拷贝函数
  [实现代码](src/javacsript_basic/deepCopy/deep_copy_function.js)
  [解说](src/javacsript_basic/deepCopy/deep_copy_explain.md)


4. call apply bind 三兄弟：改变指向三兄弟

> 三个函数都是用来改变原先指向指向，不过 bind 函数需要调用才能执行
* [call 代码](src/javacsript_basic/call-bind-apply/call.js)
* [bind 代码](src/javacsript_basic/call-bind-apply/bind.js)
* [apply 代码](src/javacsript_basic/call-bind-apply/apply.js)
* [解说](src/javacsript_basic/call-bind-apply/call-bind-allpy_explain.md)
    参考：[js 实现call和apply方法，超详细思路分析](https://www.cnblogs.com/echolun/p/12144344.html)

5.  Promise 基本使用
    [promise 实现红绿灯](/src/basic_function/promise_traffic_signal.js)
> promise 的本质是 ES6 的语法糖，状态一旦转变，就绝不会改变
* 根据promise的使用方法，将 setTimeout 用来设置延时，使用resolve状态，启动显示颜色的函数，达到“红绿灯”效果
*  [完整效果显示](https://codepen.io/breezylearner/pen/vYgWgEq)
  
6. [图片懒加载](/src/basic_function/picture_lazyload/picture_lazyload_explain.md)
> 图片不一次性加载完，而是滚动到视窗时加载。pnterest使用图片加载方式
> * 好处：减少资源浪费，当图片数目非常多时

7. [手写简易ajax](/src/basic_function/simple_ajax.js)
  [实现代码](src/javacsript_basic/simple_ajax/simple_ajax_code.js)
  [解说](src/javacsript_basic/simple_ajax/simple_ajax_explain.md)

***  

## 样式篇(CSS)
### 布局
1. [float三栏布局](https://codepen.io/breezylearner/pen/ZELpNXG)
> 编写时可在色块里面添加文字，查看是否有覆盖,利用 padding 留出两边空间，将中间内容写在最前面，通过 float 进行填充。

2. [float两栏布局](https://codepen.io/breezylearner/pen/BapLvrm?editors=1100)

>利用 margin，留出右边自适应部分。

3. [伪元素与伪类](src/basic_style/pseudo_classAndElemrnt.md)

4. [居中对齐实现方式](src/CSS_basic/center_way.md)

5. [盒模型相关](src/CSS_basic/box_problem.md)

***

## 前端常用 Linux/Git 命令
1. [Linux:以上传测试环境为例](/src/Linux/lunix_usually.md)
2. [Git常规操作](/src/git_about/git_base.md)

***

## 计算机网络

1. [跨域与同源策略](src/knowledge/cross-domain.md)

2. [客户端禁用cookie，session是否还能用？](src/knowledge/cookie_session.md)

***

## React 相关

1. [react的生命周期函数](src/react_knowledge/react_life_function.md)

***

## 硌脚的小石头
> 那些不得不重视的小问题

1. [coding:return的位置](src/hinder/for_and_return.md)
