# 客户端禁用cookie，session是否还能用？

### 答案：不能用
* 理由。session 存储在服务器，自身的sessinid是通过cookie存到浏览器中，如果客户端禁用cookie，浏览器就无法通过读取sessionid，得到用户身份信息，session失效。
> （cookie像是存放服务端身份的储物柜，session相当于携带信息的邮政人员。禁用cookie，好比关闭快递员的快递柜，邮政人员无法得到信息（session），里面存储的消息失效。

#### 如果禁用cookie，要怎样才能继续使用cookie?
    1. 重写url，将sessionid作为参数放在原url中，直接传输
    2. 服务器的返回数据中包含 sessionid，浏览器发送请求时，携带 sessionid 参数。
    。
