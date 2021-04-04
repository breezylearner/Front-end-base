# Front-end-base

前端学习笔记

- [防抖函数](src\Debouncing.js)
  思路； 1.设置时间管理员 timer，初始 timer 为 null，后面使用 clearTimeout 清空之前的内容（apply 是立即执行）。
  2.timer 具体是使用 setTimeout，执行是指向当前调用的函数，并使用里面的实参，然后回复初始值。
  3.setTimeout(执行内容，等待时间)
