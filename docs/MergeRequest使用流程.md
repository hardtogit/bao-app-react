1. git clone git@git.devbao.cn:project-admin/mobile-react.git
2. git checkout develop  // 从develop分支开始开发
3. git checkout -b `<developerName>` // 在develop分支的基础上开新分支（自己命名）
4. git push -u origin `<developerName>` // 当前分支推到remote
5. add，commit，push（正常的git使用流程）
6. 在[http://git.devbao.cn/project-admin/mobile-react](http://git.devbao.cn/project-admin/mobile-react)发起Merge Requests
7. （通常情况下每天一次即可，比如早上）更新develop分支到自己的分支：

  git fetch origin

  git merge origin/develop

8. 日常开发中重复以上步骤567
