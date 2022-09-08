# 一、git操作

## 提交现有代码到gitee

一：git init

二：git add --all

三：git commit -m '第一次提交'

四：在gitee上建好仓库，复制仓库地址

五：git remote add origin https://gitee.***.git

六：git push -u origin master -f 

## 新建分支

一：git checkout master

二：git checkout -b sqlAPI

三：git push origin sqlAPI

## 分支合并

一：git merge master




## 恢复到指定版本：

一：查看所有历史版本 git log

二：回退本地代码库：git reset --hard ID

三：推送到远程分支：git push -f -u origin dev

四：拉：git pull



# 二、代理

## 1. 连接情况总览

如果在克隆或从远程仓库获取数据时遇到很慢甚至超时的情况，那么此时可能需要配置 Git 的代理。这里讲讲两种情况的代理方法：使用 HTTP/HTTPS 协议和使用 SSH 协议。

- 如果远程仓库的格式像下面那样，这种就是使用 HTTP/HTTPS 协议连接到 Git 仓库的情况

```bash
http://github.com/cms-sw/cmssw.git
https://github.com/cms-sw/cmssw.git
```

- 如果远程仓库的格式像下面那样，这种就是使用 SSH 协议连接到 Git 仓库的情况

```scss
git@github.com:cms-sw/cmssw.git
ssh://git@github.com/cms-sw/cmssw.git
```

## 2. 使用 HTTP 或 HTTPS 协议连接到 Git 仓库的代理方法

### 2.1 针对所有域名的 Git 仓库

```csharp
# HTTP/HTTPS 协议，port 需与代理软件设置的一致
git config –-global http.proxy http://127.0.0.1:port  # 注意修改 port

# SOCKS5 协议，port 需与代理软件设置的一致
git config --global http.proxy socks5://127.0.0.1:port  # 注意修改 port
```

注意：

- `--glboal` 选项指的是修改 Git 的全局配置文件`~/.gitconfig`，而非各个 Git 仓库里的配置文件`.git/config`。
- `port`则为端口号。

### 2.2 针对特定域名的 Git 仓库

```csharp
# HTTP/HTTPS 协议
git config –global http.url.proxy http://127.0.0.1:port
# 以 Github 为例
git config –global http.https://github.com.proxy http://127.0.0.1:port

# SOCKS5 协议
git config –global http.url.proxy socks5://127.0.0.1:port
# 以 Github 为例
git config –global http.https://github.com.proxy socks5://127.0.0.1:port
```

注意：

- `url` 即为需要走代理的仓库域名，url 以 http:// 和 https:// 打头的均用这个方法。
- 网上很多中文教程，可能会告诉你`https://`打头的 url 使用“git config –global https.[https://example.com.proxy](https://example.com.proxy/) protocol://127.0.0.1:port”，这种做法其实是错的！记住一点：Git 不认`https.proxy`，设置`http.proxy`就可以支持 https 了。
- 如果想了解 url 的更多模式，如子域名等的情况，可参照 Git 的官方文档 。网页内容搜索 http..*，即可找到相关信息。





**方式一：修改 `~用户根目录/.gitconfig 文件`**

添加以下内容：



```bash
[http "https://github.com"]
    proxy = http://127.0.0.1:54644
[https "https://github.com"]
    proxy = http://127.0.0.1:54644
```

还原：直接删除上面内容

**方式二：使用命令行**

通过命令修改全局`.gitconfig`文件



```bash
git config --global http.https://github.com.proxy http://127.0.0.1:54644 
git config --global https.https://github.com.proxy http://127.0.0.1:54644 
```

还原：



```bash
git config --global --unset http.https://github.com.proxy
git config --global --unset https.https://github.com.proxy
```
