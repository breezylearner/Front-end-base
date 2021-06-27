# React 的生命周期函数
> 生命周期函数:在特定时候不用调用就会启动与结束,好像有生命一样

1. **initiation（初始化）**：初始化自己的数据，就是constructor

2. **mounting（挂载**）：
> 挂载：组件第一次放到页面上。就像是安装，安装前（componentWillMount）和安装后(conponentDidMount)
  * （1）componentWillMount(组件将要增加)：组件即将被挂载时自动执行（挂载前的准备）
  * （2）render:挂载到页面上（里面是页面显示的结构），也是挂载过程中唯一一个被后续数据影响的
  * （3）componentDidMount(组件挂载完毕)：组件被挂载到页面之后自动执行

**3. Updation(组件更新流程)**
  * props（参数）
   * componentWillReceiveProps（组件将接收参数）：一个组件要从父组件接收参数，如果这个组件第一次存在于负组件中，不会被执行；如果这个组件之前已经存在负组件中，才会执行。

* 即，像一个实地反馈员。刚来到超市的时候不用，因为没有数据需要反馈。等数据改变（参数更新）时，就该自己去反馈内容。（剩下执行内容与state相同）
  * state（状态）
   * （1）shouldComponentUpdata(组件应该更新？)：组件准备更新的时候执行（更新之前），需要返回一个布尔值，相当于问：“你的组件需要被更新吗？”
   
```
   shouldComponentUpdate(){
     console.log('shouldComponentUpdate');
     return false
   }
```
> 如果返回的是false，那么下面的流程狗不会更新
> 如果返回的是true（需要更新），就会走下面的：

  * （2）componentWillUpdate(组件将要更新)：该函数在shouldComponentUpdate之后执行，如果前一步是不执行，那么该函数就不被执行（没有通知就不准备）
  * （3）render：上一步执行就立刻执行
  * （4）componentDidUpdate：组件已经执行

**4. Unmounting**
* componentWillUnmount（组件将不挂载）：去除组件，当该组件即将从页面提出的时候，就会执行。
> 形象比喻:相当于做善后工作，专门处理装修队撤退