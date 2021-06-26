## 节流函数详解
* 保持特定频率连续触发，防止变化频繁。就像是给水管装上了节流器。

* 和防抖函数最大不同：添加防抖功能的函数,只有特意点击的时候才会执行(如:提交表单);添加节流功能的函数,是在设置专门事件,也会触发的情况(如:动态获取拖拽位置、获取滚动条位置)

- 定时器方案：使用 setTimeout 进行节流

* 时间戳方案：