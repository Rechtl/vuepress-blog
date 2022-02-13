:: 确保脚本抛出遇到的错误
:: set -e

::  生成静态文件
npm run build

::  进入生成的文件夹
cd .\docs\.vuepress\dist
::  如果是发布到自定义域名
::  echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

:: 关联远程仓库
git remote add github https://github.com/scauZero/scauZero.github.io.git

:: push 至远程仓库
git push -f -u github master 

::  如果你想要部署到 https://USERNAME.github.io
git push git@github.com:scauZero/scauZero.github.io.git master

::  如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
::  git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages