# mantak
meteor+react+redux+material-ui

# create meteor app
meteor create mantak

# remove meteor packages
meteor remove autopublish insecure

# add meteor packages
meteor add less react-meteor-data

# add npm packages
npm install --save
react
react-dom
react-router
redux
react-redux
redux-logger
redux-thunk
react-addons-pure-render-mixin   ~~react-meteor-data需要~~
react-tap-event-plugin@^2.0.0    ~~material-ui需要~~
material-ui
recharts


# 关于约定
- 样式都存在与less中，尽量不要在react中定义style，可以保持代码的整洁，外观的统一
- imports里的每个模块文件夹都有README.md 简单介绍一下文件夹内容
- imports/client  是client端app各模块通用的内容，其他内容分配到别的模块
- imports/server  是server端app各模块通用的内容，以及基础内容

# 关于项目文件结构
```
▾ client/
    app.html
    app.js
    app.less
▾ imports/
  ▾ client/
    ▸ layout/
    ▸ styles/
      data.js
      home.js
      router.js
      store.js
  ▾ core/
    ▾ client/
      ▸ actions/
      ▸ components/
      ▸ containers/
      ▸ reducers/
        routes.js
        styles.less
    ▸ server/
      collections.js
      README.md
  ▸ server/
▸ node_modules/
▸ private/
▸ public/
▸ server/
  package.json
  README.md
```
