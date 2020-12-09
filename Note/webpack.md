<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../note/style.css">
<script src="../note/script.js"></script>
<div class="contents"></div>

# webpack

- [webpack](#webpack)
- [简介](#简介)
- [相关网站](#相关网站)
- [安装](#安装)
    - [webpack 本体](#webpack-本体)
    - [webpack 命令工具](#webpack-命令工具)
- [文件](#文件)
  - [配置文件](#配置文件)
  - [项目源文件](#项目源文件)
  - [输出文件夹](#输出文件夹)
- [执行](#执行)
  - [普通方式](#普通方式)
    - [对于全局安装的 webpack](#对于全局安装的-webpack)
    - [对于本地安装的 webpack](#对于本地安装的-webpack)
  - [通过 npm 执行](#通过-npm-执行)
- [环境模式](#环境模式)
  - [development（开发环境）](#development-开发环境)
  - [production（生产环境）](#production-生产环境)
  - [设置](#设置)
- [loader](#loader)
  - [css-loader](#css-loader)
    - [安装](#安装-1)
    - [配置](#配置)
  - [less-loader](#less-loader)
    - [安装](#安装-2)
    - [配置](#配置-1)
  - [sass-loader](#sass-loader)
    - [安装](#安装-3)
    - [配置](#配置-2)
  - [file-loader](#file-loader)
    - [安装](#安装-4)
    - [配置](#配置-3)
  - [url-loader](#url-loader)
    - [安装](#安装-5)
    - [配置](#配置-4)
  - [babel-loader](#babel-loader)
    - [安装](#安装-6)
    - [配置](#配置-5)
- [插件](#插件)
  - [html-webpack-plugin](#html-webpack-plugin)
    - [安装](#安装-7)
    - [配置](#配置-6)
  - [mini-css-extract-plugin](#mini-css-extract-plugin)
    - [安装](#安装-8)
    - [配置](#配置-7)
- [dev-server](#dev-server)
    - [安装](#安装-9)
    - [配置](#配置-8)

# 简介

- webpack 是一个前端资源加载 / 打包工具。
- 它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。
- 可进行代码压缩、优化、混淆等操作。

# 相关网站

- https://webpack.js.org/
- https://www.webpackjs.com/

# 安装

> `--save-dev` 安装到开发环境（推荐），`-g` 安装到全局。
> `--save-dev` 可缩写为 `-D`，`install` 可缩写为 `i`。
> 若安装速度慢，可使用 `cnpm`，或添加参数 `--registry=https://registry.npm.taobao.org`。

### webpack 本体

```
npm install webpack --save-dev
```

### webpack 命令工具

```
npm install webpack-cli --save-dev
```

# 文件

## 配置文件

- 默认：`webpack.config.js`

- 空的配置文件

  ```javascript
  module.exports = { }
  ```

- 示例配置文件（`config/webpack.config.js`）

  ```javascript
  // 加载 path 模块
  const path = require('path');

  module.exports = {
      // 打包入口 - 单入口
      // entry: './src/index.js',

      // 打包入口 - 多入口
      entry: {
          index: './src/index.js',
          procuct: './src/product.js'
      },

      // 打包出口
      output: {
          // 打包文件输出路径（绝对路径，可通过 path.resolve() 获取）
          // __dirname 为本配置文件所在路径
          path: path.resolve(__dirname, '../dist/'),

          // 打包后的文件名
          // 可使用 [name]、[hash] 占位符，[name] 默认为 main.js，多入口时为入口键名
          // 多入口时需要使用占位符
          filename: 'bundle.js'
      }
  }
  ```

## 项目源文件

- 默认：`src` 文件夹

## 输出文件夹

- 默认：`dist` 文件夹

# 执行

## 普通方式

### 对于全局安装的 webpack

```
webpack
```

### 对于本地安装的 webpack

```
# Bash
node_modules/.bin/webpack

# CMD
node_modules\.bin\webpack
```

## 通过 npm 执行

- 修改 `package.json`

  ```json
  "scripts": {
    ...
  }
  ```

  添加一行

  ```json
  "build": "webpack --config=webpack.config.js"
  ```

  > `build`：`npm run` 的子命令，可修改
  > `webpack.config.js`：相对于项目根目录的配置文件路径，根据实际修改

- 执行命令：`npm run build`

# 环境模式

> https://www.webpackjs.com/concepts/mode/

## development（开发环境）

- 会将 `process.env.NODE_ENV` 的值设为 `development`
- 启用 `NamedChunksPlugin` 和 `NamedModulesPlugin`

## production（生产环境）

- 默认模式，优化代码
- 会将 `process.env.NODE_ENV` 的值设为 `production`
- 启用 `FlagDependencyUsagePlugin`、`FlagIncludedChunksPlugin`、`ModuleConcatenationPlugin`、`NoEmitOnErrorsPlugin`、`OccurrenceOrderPlugin`、`SideEffectsFlagPlugin`、`UglifyJsPlugin`

## 设置

> 在配置文件中设置
> 一般在 `module.exports` 的第一行

```javascript
module.exports = {
    mode: '环境模式'
}
```

# loader

> 扩展功能，用于对模块的源代码进行转换。
> webpack 本身只能打包 JavaScript 文件，对于其他资源（例如 CSS、图片）是不能加载的，
> 这就需要对应的 loader 将资源转换，以便加载。

## css-loader

> 解析 CSS 文件
> 需要安装 `style-loader`（`npm install style-loader --save-dev`）

### 安装

```
npm install css-loader --save-dev
```

### 配置

- `webpack.config.js`

  ```javascript
  module.exports = {
      module: {
          // 规则
          rules: [
              {
                  // 文件匹配规则（正则）
                  test: /\.css$/,
                  // 匹配到的文件要使用的 loader
                  use: [
                      { loader: 'style-loader' },
                      { loader: 'css-loader' }
                  ]
              }
          ]
      }
  }
  ```

- 入口文件（例如：`index.js`）

  ```javascript
  import 'CSS 文件名';
  ```

## less-loader

> 解析 `.less` 文件
> 需要安装 `style-loader`、`css-loader`、`less`

### 安装

```
npm install less-loader --save-dev
```

### 配置

- `webpack.config.js`

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  test: /\.less$/,
                  use: [
                      { loader: 'style-loader' },
                      { loader: 'css-loader' },
                      { loader: 'less-loader' }
                  ]
              }
          ]
      }
  }
  ```

- 入口文件（例如：`index.js`）

  ```javascript
  import 'Less 文件名';
  ```

## sass-loader

> 解析 `.sass`、`.scss` 文件，使用方式与 `less-loader` 相似
> 需要安装 `style-loader`、`css-loader`、`node-sass`

### 安装

```
npm install sass-loader --save-dev
```

### 配置

- `webpack.config.js`

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  test: /\.(sass|scss)$/,
                  use: [
                      { loader: 'style-loader' },
                      { loader: 'css-loader' },
                      { loader: 'sass-loader' }
                  ]
              }
          ]
      }
  }
  ```

- 入口文件（例如：`index.js`）

  ```javascript
  import 'Sass 文件名';
  ```

## file-loader

> 打包文件

### 安装

```
npm install file-loader --save-dev
```

### 配置

> 以打包图片为例

- `webpack.config.js`

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  test: /\.(gif|jpg|jpeg|png|webp)$/,
                  use: [
                      { loader: 'file-loader' }
                  ]
              }
          ]
      }
  }
  ```

- 入口文件（例如：`index.js`）

  ```javascript
  import 自定义名称 from '图片文件路径';

  // 创建元素并添加
  var imgElem = document.createElement('img');

  imgElem.src = 自定义名称;
  document.body.appendChild(imgElem);
  ```

## url-loader

> `file-loader` 的升级版
> 需要安装 `file-loader`

### 安装

```
npm install url-loader --save-dev
```

### 配置

> 以打包图片为例

- `webpack.config.js`

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  test: /\.(gif|jpg|jpeg|png|webp)$/,
                  use: [
                      {
                          loader: 'url-loader',
                          options: {
                              // 图片大小限制，单位 byte
                              // 图片小于设定值时会被转换为 base64，
                              // 否则使用 file-loader 方式处理
                              limit: 102400
                          }
                      },
                  ]
              }
          ]
      }
  }
  ```

- 入口文件（例如：`index.js`）

  ```javascript
  import 自定义名称 from '图片文件路径';

  // 创建元素并添加
  var imgElem = document.createElement('img');

  imgElem.src = 自定义名称;
  document.body.appendChild(imgElem);
  ```

## babel-loader

> 可进行语法转换（例如 ES6 转 ES5）
> 需要安装 `babel-core`、`babel-preset-env`
> ``使用时要注意版本``
> `babel-loader@8 requires Babel 7.x (the package '@babel/core').`
> `If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.`

### 安装

```
npm install babel-loader --save-dev
```

### 配置

- `webpack.config.js`

  ```javascript
  module.exports = {
      module: {
          rules: [
              {
                  test: /\.js$/,
                  // 排除文件夹
                  exclude: /(node_modules|bower_components)/,
                  use: [
                      {
                          loader: 'babel-loader',
                          options: {
                              // 预设
                              // env：ES6 转换为 ES5
                              presets: ['env']
                          }
                      }
                  ]
              }
          ]
      }
  }
  ```

# 插件

> 插件是 webpack 的支柱功能
> 插件目的在于解决 loader 无法实现的其他事

## html-webpack-plugin

> `html-webpack-plugin` 是处理 HTML 模板的插件

### 安装

```
npm install html-webpack-plugin --save-dev
```

### 配置

- `webpack.config.js`

  ```javascript
  // 引入 html-webpack-plugin 插件
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
      plugins: [
          // 通过构造函数传递参数
          new HtmlWebpackPlugin({
              // 网页标题
              // 需要修改 HTML 文件
              // <title><%= htmlWebpackPlugin.options.title %></title>
              title: 'html-webpack-plugin 插件',

              // 模板文件路径（相对于项目根目录）
              template: './src/template.html',

              // 插入打包的 JavaScript 文件
              // true：script 标签位于 HTML 文件的 body 标签底部，默认值
              // body：script 标签位于 HTML 文件的 body 标签底部
              // head：script 标签位于 HTML 文件的 head 标签中
              // false：不插入打包的 JavaScript 文件
              inject: true,

              // 压缩规则
              minify: {
                  // 是否移除空格
                  collapseWhitespace: true,
                  // 是否移除属性值的引号
                  removeAttributeQuotes: false,
                  // 是否移除注释
                  removeComments: true
              },
  
              // 输出的 HTML 文件名，可使用 [name]、[hash]
              filename: 'index.html'
          })
      ]
  }
  ```

## mini-css-extract-plugin

> `mini-css-extract-plugin` 是分离 CSS 的插件
> 需要安装 `style-loader`、`css-loader`

### 安装

```
npm install mini-css-extract-plugin --save-dev
```

### 配置

- `webpack.config.js`

  ```javascript
  // 引入 mini-css-extract-plugin 插件
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  module.exports = {
      module: {
          rules: [
              // 修改 CSS / Less / Sass 的 loader 处理配置
              // 'style-loader' -> MiniCssExtractPlugin.loader
              {
                  test: /\.css$/,
                  use: [
                      { loader: MiniCssExtractPlugin.loader },
                      { loader: 'css-loader' }
                  ]
              }
          ]
      },

      plugins: [
          new MiniCssExtractPlugin({
              // 输出的 CSS 文件名，可使用 [name]、[hash]
              filename: 'bundle.css'
          })
      ]
  }
  ```

# dev-server

### 安装

```
npm install webpack-dev-server --save-dev
```

### 配置

- `package.json: `

  ```json
  "scripts": {
      "dev": "webpack serve --config=webpack.config.js"
  }
  ```

  > `webpack.config.js`：相对于项目根目录的配置文件路径，根据实际修改

- `webpack.config.js`

  ```javascript
  module.exports = {
      devServer: {
          // 打包文件的输出路径
          // __dirname 为本配置文件所在路径
          contentBase: path.resolve(__dirname, '../dist/'),
          // 压缩
          compress: true,
          // 端口
          port: 9000,
          // 是否自动打开浏览器
          open: false
      }
  }
  ```
