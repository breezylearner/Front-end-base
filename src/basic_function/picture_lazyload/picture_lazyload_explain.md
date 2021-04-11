# 图片懒加载实现方式

## 原生JS实现
* 原理：通过<img>标签中的 src 属性，进入可视区时发动加载请求，达到图片进入可视时，体图片才进行加自的效果

* 使用API 
*     1.获取可视区域高度：document.documentElement.clientHeight
      2.获取元素相对于文档顶部的高度:element.offsetTop
      3.获取滚动条距离：滚动条滚动的距离
      4.

* 执行条件：offsetTop-scroolTop<clientHeight
  
  ```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 设置图片基本样式 -->
    <title>图片懒加载</title>
    <style>
        img {
            display: block;
            width: 100%;
            height: 300px;
            margin-bottom: 20px;
        }
    </style>
</head>
<!-- 假设获取的图片 -->
<body>
    <img data-src="./images/1.jpg" alt="">
    <img data-src="./images/2.jpg" alt="">
    <img data-src="./images/3.jpg" alt="">
    <img data-src="./images/4.jpg" alt="">
    <img data-src="./images/5.jpg" alt="">
    <img data-src="./images/6.jpg" alt="">
    <img data-src="./images/7.jpg" alt="">
    <img data-src="./images/8.jpg" alt="">
    <img data-src="./images/9.jpg" alt="">
    <img data-src="./images/10.jpg" alt="">
    <img data-src="./images/1.jpg" alt="">
    <img data-src="./images/2.jpg" alt="">
</body>

<script>
        var imgs = document.querySelectorAll('img');

        //offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
        function getTop(e) {
            var T = e.offsetTop;
            while(e = e.offsetParent) {
                T += e.offsetTop;
            }
            return T;
        }
        // 当进入可视窗时，为scr进行赋值并加载图片
        function lazyLoad(imgs) {
            var H = document.documentElement.clientHeight;//获取可视区域高度
            var S = document.documentElement.scrollTop || document.body.scrollTop;
            for (var i = 0; i < imgs.length; i++) {
                if (H + S > getTop(imgs[i])) {
                    imgs[i].src = imgs[i].getAttribute('data-src');
                }
            }
        }

        window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
            lazyLoad(imgs);
        }
</script>
</html>
```

>参考：参考：[原生js实现图片懒加载（lazyLoad）](https://zhuanlan.zhihu.com/p/55311726) 


## React 框架中
> 使用组件react-lazyload们直接完成加载

* 安装react模块
  ```
yarn add react-lazyload
  ```

* 使用组件
```
import LazyLoad from 'react-lazyload';
...
<Grid
  data={categoryList}
  columnNum={2}
  square={false}
  hasLine={false}
  className="not-square-grid"
  itemStyle={{height: '100px'}}
  renderItem={(dataItem: any) => (
    <LazyLoad
      scrollContainer='.category_content'
      scroll={true}
      // offset={100}
      height={100}
      placeholder={<img width="100%" height="100%" src={DreamLogo} alt="logo"/>}
    >
      <img
        src={dataItem.cover}
        onClick={() => history.push(`/categoryPage/category/list?id=${dataItem.theme_id}`)}
        style={{ width: '100%' }}
        alt=""
      />
    </LazyLoad>
  )}
/>
```

> 参考：https://www.cnblogs.com/crazycode2/p/12641773.html 