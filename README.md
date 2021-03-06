# ps-admin

> Paradise-Soft 後台初始化項目  
> A minimal vue admin template with Element UI & axios & iconfont & permission control & lint

## Introduction

> src/settings.js      一些初始化建置設定檔  
> src/permission.js    以beforeEach 做登入驗證相關檔案 [登錄權限教學](https://juejin.im/post/591aa14f570c35006961acac)  
> src/router/index.js  核心區塊，緩存/麵包屑/標籤都在此設置 [側邊欄文件](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html#%E9%85%8D%E7%BD%AE%E9%A1%B9)  
> src/utils/request    axios與interceptor，Api errorHandler 請在這處理 [打接口文件](https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/error.html#%E9%A1%B5%E9%9D%A2)  
> src/components/headerSlot.vue 擴充Header組件  
> src/components/profileSlot.vue 擴充Avatar下拉選單組件
## Repo Setup  

```bash
# 在PS-admin執行 setup.sh 
# ex: setup.sh rd-admin http://gitlab.paradise-soft.com.tw/frontend/athena-rd-admin.git  
./setup.sh ${name} ${repo url}
```

## Repo Update 

```bash
# 執行update.sh
./update.sh
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

## PSComponents
+ PSContainer
+ QueryContainer
+ PSDialogContainer
+ [PSButton](http://gitlab.paradise-soft.com.tw/frontend/ps-admin/tree/master/src/components/core/PSButton)

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

