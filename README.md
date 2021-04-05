# Front-end-base

前端学习笔记

# JavaScript 篇

## [防抖函数](/src/Debouncing.js)

> 用处:防止频繁提交表单，让单次事件多次触发

-     设置时间管理员 timer，初始 timer 为 null，后面使用 clearTimeout 清空之前的内容（apply 是立即执行）。
  > timer 就像一个水龙头，对里面的函数进行有一定条件的控制。判断条件就是开启的条件。
-     timer 具体是使用 setTimeout，执行是指向当前调用的函数，并使用里面的实参，然后回复初始值。
-     setTimeout(执行内容，等待时间)

## [节流函数](/src/throttle.js)

> 保持特定频率连续触发，防止变化频繁。就像是给水管装上了节流器。

和防抖函数最大不同：添加防抖功能的函数,只有特意点击的时候才会执行(如:提交表单);添加节流功能的函数,是在设置专门事件,也会触发的情况(如:动态获取拖拽位置、获取滚动条位置)

- 定时器方案：使用 setTimeout 进行节流

* 时间戳方案：

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

# CSS3 篇

## [三栏布局](https://codepen.io/breezylearner/pen/ZELpNXG)

利用 padding 留出两边空间，将中间内容写在最前面，通过 float 进行填充。

> 编写时可在色块里面添加文字，查看是否有覆盖

## [两栏布局](https://codepen.io/breezylearner/pen/BapLvrm?editors=1100)

利用 margin，留出右边自适应部分。
