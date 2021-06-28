// 创建一个动物模板
class Plant {
  // 通过 constrctor 创建基本特性：名字，颜色
  constructor(name, color) {
    // 该植物的名字和颜色使用传入的值
    this.name = name;
    this.color = color;
  }
  // 设置该动物能做的事情
  // 美元符号绑定使用变量，反引号拼接所有字符串
  say() {
    console.log(`名字是${this.name}，颜色是${this.color}`);
  }
}
// 创建实例
let flower = new Plant("三色堇", "红色的");
flower.say(); //调用里面的函数

/**------------继承--------------- */

class Leaf extends Plant {
  constructor(name, color) {
    super(name); //对Leaf 里面的name处理，与Plant里面的一样
    this.color = color;
  }
  say() {
    console.log(`这里的叶子是${this.name}，颜色是${this.color}`);
  }
}
let lea = new Leaf("银莲花", "蓝色");
lea.say();
