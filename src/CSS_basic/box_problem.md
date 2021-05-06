# 两种盒模型的概念与使用
> 两种盒模型使用 box-sizing 进行切换

## 盒模型种类
### 标准盒模型（默认W3C标准）
* 特点:每各部分分开计算。即，一个块的总宽度为：width+padding+border+boeder

* 应用：默认情况，一般无特殊规定都用该方式体现

### 怪异盒模型（IE）
* 特点：从内容到边框，视为一个整体。即，一个盒子的宽度为：width+margin。其中，width=padding(内边距) 和 border（线框）

* 应用：设置/计算 offsetWidth (可见区域)时使用。
* offsetWidth:可见区域，去掉外间距margind。通过 doceument.body.offsetWidth 获取
* 例如：将可见区域面积固定，当值宽度因内容发生改变。



## margin(外间距)纵向重叠问题
* 上下留白重叠：相邻元素的margin-top和margin-bottom会发生重叠,以面积大的为最后留白结果（叠在一起，像树叶一样，取面积大的显示）

* 多个空白元素重叠,只显示一条.如多个<p></p>进累积,只显示一条空白.

* [例:上下留白与多个空白元素重叠](https://codepen.io/breezylearner/pen/gOgvNxJ)
  > 例题效果在上面的链接,点击可在codepen查看
```
<body>
  <p>第一条显示</p>
  <p></p>
  <p></p>
  <p></p>
  <p>最后一条显示</p>
</body>

/* CSS部分*/
p{
  margin-top:10px;
  margin-botton:25px
}

```

## margin 负值问题
* 1.margin-top和margin-left负值，元素向上，向左移动。
* 2.margin-right负值，右侧元素左移，自身元素不受影响。
* 3.margin-bottom负值，下方元素上移，自身不受影响。

* 即,margin代表的是留白，只有向上和向左会改变自身，其他的都会影响相邻元素。因为元素的位置，是计算上面和左边的距离（默认是最左与最上）。 