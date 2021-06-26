# return ：不同位置，不同效果

return 的作用，是返回结果，并且跳出循环。以生活作为比喻：提交工作（return结果）这一动作，是结束当前的动作状态，也是递交了自己的展示成果

因此，如果把return写在循环中，当使用第一个数进行遍历后，就会跳出循环。因此如果想的都循环后的结果，一定要把return写在for循环之外

剑指offer 53
> 二分法参考：第一个有序数组
```
var search = function(nums, target) {
    // 设置存储结果的变量
    let res=0
  for(num of nums){
      if(num==target){
          res++
      }
    
  }
  return res
};

var search1 = function(nums, target) {
    // 设置存储结果的变量
    let res=0
   for (let i=0;i<nums.length;i++){
       if(nums[i]==target){
           res++
       }
   }
   return res
};
```