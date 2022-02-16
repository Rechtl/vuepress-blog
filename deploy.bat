:: 确保脚本抛出遇到的错误
:: set -e

::  生成静态文件
npm run build

::  进入生成的文件夹
cd .\docs\.vuepress\dist
::  如果是发布到自定义域名
::  echo 'www.yourwebsite.com' > CNAME

:: 不提交 img 和 logo
echo img @echo logo > .gitignore

git init
git add -A
git commit -m 'deploy'

:: 关联博客展示仓库
git remote add githubShow https://github.com/scauZero/scauZero.github.io.git
:: push 至远程仓库
git push -f -u githubShow master 

:: 关联博客代码仓库
git remote add githubCode https://github.com/scauZero/vuepress-blog.git
:: push 至远程仓库
git push -f -u githubCode master 




::  如果你想要部署到 https://USERNAME.github.io
git push git@github.com:scauZero/scauZero.github.io.git master

::  如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
::  git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages