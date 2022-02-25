# git操作

### 提交现有代码到gitee

一：git init

二：git add --all

三：git commit -m '第一次提交'

四：在gitee上建好仓库，复制仓库地址

五：git remote add origin https://gitee.***.git

六：git push -u origin master -f 

 
### 新建分支

一：git checkout master

二：git checkout -b sqlAPI

三：git push origin sqlAPI



 

### 恢复到指定版本：

一：查看所有历史版本 git log

二：回退本地代码库：git reset --hard ID

三：推送到远程分支：git push -f -u origin dev

四：拉：git pull