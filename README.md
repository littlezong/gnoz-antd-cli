从零开始搭建的基于**webpack + react + react-dom-router + antd + es6/7 + less**工程项目，
表示不想再搭建第二次了，简直吐血。
[这里是demo](https://littlezong.github.io/gnoz-antd-cli/dist)
不管怎么说，这也算一套脚手架了，可以直接拿来用：

 ![预览](./preview.png)

### 项目结构
```
│   .babelrc
│   index.html(模板)
│   package.json
│   webpack.config.js
│
└───build (webpack配置文件目录)
│   │   config.js
│   │   webpack.base.js
│   │   webpack.dev.js
│   │   webpack.prod.js
│   │
│   └───theme (antd自定义主题，暂未搞)
│       │   ...
│
└───dist (打包后生成文件的目录)
│   │   ...
│
└───src (代码实现主目录)
│   │   index.jsx (入口文件)
│   │   router.jsx (路由)
│   │
│   └───assets (静态资源存放目录)
│   │  │   ...
│   │
│   └───components (组件存放目录)
│   │  │   ...
│   │
│   └───style (样式目录)
│   │  │   ...
│   │
│   └───views (页面存放目录)
│   │  │   ...
│   │
│
```


### 使用姿势
```git bash
# 拷贝
$ git clone https://github.com/littlezong/gnoz-antd-cli.git 文件夹

# 进入项目
$ cd 文件夹

# 安装依赖
$ yarn install

# 运行
$ yarn start

# 打包（打包后的文件在dist中）
$ yarn build
```

### 为所欲为
