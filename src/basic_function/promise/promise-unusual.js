var p1 = new Promise(function (resolve, reject) {
  foo.bar();
  resolve(1);
});

p1.then(
  function (value) {
    console.log("p1 then value: " + value); //第一执行：then err:foo.bar()is not defined
  },
  function (err) {
    console.log("p1 then err: " + err);
  }
).then(
  function (value) {
    console.log("p1 then then value: " + value); //第三执行：p1 then then value:undefined
  },
  function (err) {
    console.log("p1 then then err: " + err);
  }
);

var p2 = new Promise(function (resolve, reject) {
  resolve(2);
});

p2.then(
  function (value) {
    console.log("p2 then value: " + value); //第二执行：输出：2。 内容成功执行，且赋值为2
    foo.bar();
  },
  function (err) {
    console.log("p2 then err: " + err);
  }
)
  .then(
    function (value) {
      console.log("p2 then then value: " + value);
    },
    function (err) {
      console.log("p2 then then err: " + err); //第四执行：pe then err:undefined
      return 1; //此时返回value为1
    }
  )
  .then(
    function (value) {
      console.log("p2 then then then value: " + value); //第五输出：1
    },
    function (err) {
      console.log("p2 then then then err: " + err);
    }
  );
