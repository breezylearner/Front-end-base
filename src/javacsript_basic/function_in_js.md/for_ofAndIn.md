# for...in/of：遍历函数之间的区别

#### for...in
  1. 规则： 用于遍历对象，读取的是键值名。
  2. 强制使用：若对数组使用，返回的是数组索引。

#### for...of
  1. 规则：用于遍历数组，读取的是存储的内容。
  2. 强制使用：会报错
   
***
例1：遍历对象
```
const obj = {
        a: 1,
        b: 2,
        c: 3
    }
  
    for (let i in obj) {
        console.log(i)
        // a
        // b
        // c
    }
    for (let i of obj) {
        console.log(i)// Uncaught TypeError: obj is not iterable 报错了
    }
```

例2：遍历数组
```
    const arr = ['a', 'b', 'c']
    // for in 循环
    for (let i in arr) {
        console.log(i)
        // 0
        // 1
        // 2
    }
    
    // for of
    for (let i of arr) {
        console.log(i)
        // a
        // b
        // c
    }
```
