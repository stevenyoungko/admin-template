# ps-admin

> Paradise-Soft 後台初始化項目  
> A minimal vue admin template with Element UI & axios & iconfont & permission control & lint

## Introduction

> src/settings.js      一些初始化建置設定檔  
> src/permission.js    以beforeEach 做登入驗證相關檔案  
> src/router/index.js  核心區塊，緩存/麵包屑/標籤都在此設置  
> src/utils/request    axios與interceptor，Api errorHandler 請在這處理  

## Repo Setup  

```bash
# 先開啟gitlab項目,並且clone
git clone http://gitlab.paradise-soft.com.tw/frontend/${target_repo}.git  

# 新增psadmin遠端
git remote add psadmin http://gitlab.paradise-soft.com.tw/frontend/ps-admin.git  

# 拉psadmin
git fetch psadmin  

# 新開psadmin分支
git checkout -b psadmin psadmin/master

# 切回master & merge psadmin
git checkout master & git merge psadmin

# 推上目標倉庫遠端 
git push -set--upstream origin
```

## Repo Update 

```bash
# 確認是否有remote  
git remote -v

# fetch psadmin最新版
git fetch psadmin

# 建立新版psadmin分支
git checkout -b new-ps psadmin/master

# merge 項目master & fix conflict
git checkout master & git merge new-ps
```


## Build Setup

```bash
# clone the project
git clone http://gitlab.paradise-soft.com.tw/frontend/ps-admin.git

# enter the project directory
cd ps-admin

# install dependency
npm install

# develop
npm run dev || npm run serve
```

This will automatically open http://localhost:9487

## Build Production

```bash
# build for production environment
npm run build
```

## Deploy

> pm2 config => pm2.config.js

```bash
# DevServer Move Package.json, server(dir), dist(dir), .env.development, ecosystem.config.js
npm run initServer  
npm run start:pm2 啟動  
npm run restart:pm2 重啟  
npm run stop:pm2 停止  
# ProductionServer Move Package.json, server(dir), dist(dir), .env.production
npm run initServer  
npm run start
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

Refer to [Documentation](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/deploy.html) for more information

## Extra

If you want router permission && generate menu by user roles , you can use this branch [permission-control](https://github.com/PanJiaChen/vue-admin-template/tree/permission-control)

## Related Project

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

[electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

