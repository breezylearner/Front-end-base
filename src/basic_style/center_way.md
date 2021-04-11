# 居中对齐如何实现

## 水平居中
* inline元素：text-align:center（级元素，上下相连）
* block元素：margin:auto（块元素，独立存在）
* absolute（依照父元素定位）：left:50%+margin-left负值（固定在位置上的元素，如之前的圣杯布局）

#### 水平居中实例：

> HTML部分
``` 
<body>
<div class="container container-1">
    <span>一段文字</span>
</div>
<div class="container container-2">
    <div class="item">
        This is block item
    </div>
</div>
<div class="container container-3">
    <div class="item">
        This is absolute item
    </div>
</div>
</body>
```

> CSS 部分
```
/*水平居中对齐*/
.container {
    border: 1px solid cornflowerblue;
    margin: 10px;
    padding: 10px;
}

.item {
    background-color: lightblue;
}

.container-1 {
/*解题：文字，居中对齐*/
    text-align: center;
}

.container-2 .item{
    /*解题：block元素，最有两边自动填充*/
    width: 500px;
    margin: auto;
}

.container-3 {
    position: relative;
    height: 100px;
}

.container-3 .item{
    /*绝对定位对齐*/
    position: absolute;
    width: 300px;
    height: 100px;
    left: 50%;/*先拉到父元素的一半（父元素中轴）*/
    margin-left: -150px;/*减少一半左空白就到了屏幕中间*/
    }

```




## 垂直居中
* inline元素：line-height的值等于height值行距（行距与高度相等）
* absolute元素：
    top:50%+margin-top负值   （必须要知道子元素的宽和高）

* transform(-50%,-50%)  （trankform：旋转div元素）CSS3专属功能

* top,left,bottom, right=0+margin:auto
    即：上下左右全为零，自动填充到中间