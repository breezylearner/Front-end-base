# Git 基本操作
> 适用于每个忘记如何使用git的时刻

#### 初始操作：与生成钥匙
<font color="#de8885">ssh-keygen -t rsa</font> 生成的钥匙是该电脑与远程仓库的链接
连接仓库
将远程仓库建在本地：<font color="#de8885">git bash here</font> →<font color="#de8885">git clone ssh</font>地址
进入仓库：<font color="#de8885">cd 远程仓库名称</font>。进入后，才能进行操作

#### 首次操作

  (选择)删除之前的缓存<br/>
  配置自己的信息：git config user.name 用户名<br/>
  配置自己的使用邮箱：git config user.email eeeee@163.com<br/>

***


#### 日常操作
上传操作：<font color="#de8885">git:git add . </font>处有个点，代表“全部”
删除之前提交的内容：<font color="#de8885">git checkout 文件名</font>（如果是所有，就添加为一个英文的点）.
切换分支：<font color="#de8885">checkout 分支名</font>
添加上传信息：<font color="#de8885">git commit -m "修改的信息"  </font>（要添加双引号，对修改做出标题）

显示上传信息：<font color="#de8885">git log </font>
上传到远程仓库：<font color="#de8885">git push origin master </font>
拉下来仓库的代码：<font color="#de8885">git pull origin master</font>

#### 二.新建分支
分支**不会影响**之前的功能
创建分支：<font color="#de8885">git checkout -b 创建的分支名 </font>
进入分支：<font color="#de8885">git branch </font>
提交分支：<font color="#de8885">git push origin 提交的分支名 </font>
添加分支之后，主分支不受影响。添加的功能只有分支才有
添加信息后，要记得更新分支内容

#### 三.合并分支（本地分支已更新）：
  1.切换到要合并的分支：<font color="#de8885">git checkout master</font>
  > 一般是与主分支合并，checkout后面是切换的分支名

  2.取得全部分分支：<font color="#de8885">git fetch </font>（把上传到服务端的分支全部拉到本地。
  拉取之后，可以使用<font color="#de8885">git branch</font> 查看分支是否被拉取。并使用<font color="#de8885">git checkout 分支名</font>，看是否能进入该分支，可以的话，再使用<font color="#de8885">git check master </font>切回主分支（主分支不一定为名为master，也可能为main）。

  3.合并分支：<font color="#de8885">git merge 要合并的分支名</font>，将要合并的分支名，合并到当前分支

  4.(选择)更新分支：使用<font color="#de8885"> git checkout 分支名 </font>,切换到需要更新的分支，使用git add . （最后有个点）更新分支的内容；使用 git commit -m "更新说明" 添加更新信息；使用 git push origin 分支名，更新远处的分支。
> 在本地文件添加注册内容后，同样要使用git add . 提交到git中，并且协商 git commit -m "更新的信息"，然后使用 git checkout 分支名 ，切换到分支进行提交

  5.上传目前主页：
  此时，本地文件应该已经将分支合并在，如果没问题，就将本地文件（master）上传远程仓库，完成合并后master的更新
  
  6.问题冲突：两个人修改到了同一行，vscode会询问改变