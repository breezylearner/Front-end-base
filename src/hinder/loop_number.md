# 多个循环变量，以哪个未作循环数字？

  以最外边的数字作为

  ```
var k = 0;
for(var i=0,j=0;i<10,j<6;i++,j++){
  k += i + j;
}
console.log(k)    // 以为外边的j作为循环次数。打印结果为 30
  ```

  ```
var k = 0;
for(var i=0,j=0;j<6,i<10;i++,j++){
  k += i + j;
}
console.log(k)    // 打印结果为 90
  ```