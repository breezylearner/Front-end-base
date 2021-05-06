function ajax(url) {
  //异步请求Promise
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //浏览器通过XMLHttpRequest对象进行http通信
    xhr.open("GET", "url", true); //确定为POST类型，url表示执行地址
    xhr.onreadystatechange = function () {
      //分情况执行下面函数。根据情况执行，onreadystatechange是情况，添加括号就是函数了
      if (xhr.readyState === 4) {
        //如果加载成功
        if (xhr.status === 200) {
          //且成功处理请求
          resolve(
            //那么就是成功的结果，执行下面的操作
            JSON.parse(xhr.responseText)
          );
        } else if (xhr.status === 404) {
          reject(new Error("404 nit found"));
        }
      }
    };
    xhr.send(null); //这是Promise执行的结果，后面的都要根据此来判断
  });
  return p; //此时，Promise函数结束，返回Promise 的结果
}

const url = "js/aText.json";
ajax(url)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/*XMLHttpRequest() 是创建好的构造函数，onreadystatechange()是里面的以相内容,创建的变量xhr是建好的新房子
使用open（），根据不同情况执行内容
做完结构，记得发送请求，最后返回Promise的结果*/
