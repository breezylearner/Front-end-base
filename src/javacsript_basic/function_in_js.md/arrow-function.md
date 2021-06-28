# 箭头函数

* es6新语法：
  1. 当箭头函数内的信息是需要返回的，外面就用圆括号。如果是花括号，里面的函数默认不返回，要添加 return 才可以
  2. 默认不返回，返回要添加 return
```
handleInputChange(e) {
    this.setState(()=>{
        return {
            inputValue:e.target.value
        }
    });
  }
```

**如果没有带大括号，则默认带上return，如果带了大括号，则不会默认带上return**