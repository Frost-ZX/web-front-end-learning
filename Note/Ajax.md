<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# Ajax

- [Ajax](#ajax)
- [运行原理](#运行原理)
- [实现步骤（GET）](#实现步骤-get)
- [安装 Node.js](#安装-node-js)
- [请求报文](#请求报文)
  - [报文头](#报文头)
  - [报文体](#报文体)
- [请求参数格式（POST）](#请求参数格式-post)
  - [传统网站表单提交](#传统网站表单提交)
  - [JSON 格式的字符串提交](#json-格式的字符串提交)
  - [注意](#注意)
    - [对于传统网站表单提交](#对于传统网站表单提交)
    - [对于 JSON 格式的字符串提交](#对于-json-格式的字符串提交)
- [AJAX 状态码](#ajax-状态码)
  - [获取](#获取)
  - [数值](#数值)
- [Node.js 读取文件内容](#node-js-读取文件内容)
- [低版本 IE 浏览器的缓存问题](#低版本-ie-浏览器的缓存问题)
  - [问题](#问题)
  - [解决方案](#解决方案)
- [jQuery 中的 AJAX 方法](#jquery-中的-ajax-方法)
  - [$.ajax()](#ajax-1)
    - [语法](#语法)
  - [$.get()](#get)
  - [$.post()](#post)

# 运行原理

- AJAX 相当于浏览器发送请求与接收响应的代理人，以实现在不影响用户浏览页面的情况下，局部更新页面数据，从而提高用户体验。

# 实现步骤（GET）

1. 创建 AJAX 对象

   ```javascript
   var xhr = new XMLHttpRequest()
   ```

2. 设置 AJAX 请求地址以及请求方式

   ```javascript
   xhr.open('get', 'http://www.example.com')
   ```

3. 发送请求

   ```javascript
   xhr.send()
   ```

4. 获取服务器端传给客户端的响应数据

   ```javascript
   // 方式一（只支持 IE9+）
   xhr.onload = function () {
       console.log(xhr.responseText);
   }
   // 方式二
   xhr.onreadystatechange = function () {
       if (xhr.readyState == 4 && xhr.status == 200) {
           console.log(xhr.responseText);
       }
   }
   ```

# 安装 Node.js

1. 安装 Node.js
2. 打开 cmd 窗口，输入 `node -v` 和 `npm -v` 命令
3. 安装 `cnpm`

   > `npm install -g cnpm --registry=https://registry.npm.taobao.org`

4. 拷贝 `server` 目录，并在 VSCode 的终端打开
5. 安装 `nodemon`

   > `cnpm install nodemon -g`

6. 项目复活：在 server 目录执行 `cnpm i` 或 `npm i` 命令，成功后会出现一个 `node_modules` 目录

   > 只要 `node_modules` 目录还在，下次使用时不再需要进行项目复活操作

7. 在 `server` 目录下执行 `nodemon app.js`（使用 `Ctrl + C` 终止）
8. 在浏览器访问 `127.0.0.1:3000` 或 `localhost:3000`，若有内容则成功

# 请求报文

> 在 HTTP 请求和响应的过程中传递的数据块，包括要传送的数据和一些附加信息，这些数据和信息要遵守规定好的格式。
> 报文头和报文体在请求的过程中，整体被发送到服务器当中。
> 参考文章：https://www.cnblogs.com/myseries/p/11239662.html

## 报文头

- 报文头中存储的是一些键值对信息
- 例如：`xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') `

## 报文体

- 报文体主要存储一些内容
- 例如：POST 请求的参数

# 请求参数格式（POST）

## 传统网站表单提交

> `application/x-www-form-urlencoded`

## JSON 格式的字符串提交

> `application/json`

## 注意

- 需要在 app.js 中引入 body-parser 模块，以获取 POST 的数据

  > `const bodyParser = require('body-parser')`

### 对于传统网站表单提交

- 需要在 `app.js` 中创建 `application/x-www-form-urlencoded` 编码解析

  > `app.use(bodyParser.urlencoded({ extended: false }))`

### 对于 JSON 格式的字符串提交

- 需要在 `app.js` 中创建 `application/json` 编码解析

  > `app.use(bodyParser.json())`

# AJAX 状态码

> 在创建 AJAX 对象、配置 AJAX 对象、发送请求，以及完成接收服务器端响应数据时，每一个步骤都会对应一个数值。

## 获取

- `xhr.readyState`

## 数值

- 0：请求未初始化，未调用 `open()`
- 1：请求已经建立，但未发送，未调用 `send() `
- 2：请求已经发送
- 3：请求正在处理中（通常响应中已经有部分数据可以用了）
- 4：响应已经完成，可以获取并使用服务器响应的数据了

# Node.js 读取文件内容

> `app.js`

```javascript
// 引入 fs 文件模块
const fs = require('fs');

// GET
app.get("/file1", function (req, res) {
    // 使用 fs 模块读取文件内容
    fs.readFile("./public/data.txt", function (error, result) {
        res.send(result);
    })
});

// POST
app.post("/file2", function (req, res) {
    // 使用 fs 模块读取文件内容
    fs.readFile("./public/data.txt", function (error, result) {
        res.send(result);
    })
});
```

# 低版本 IE 浏览器的缓存问题

## 问题

- 在低版本的 IE 浏览器中，AJAX 请求有严重的缓存问题。
- 在请求地址不发生变化的情况下，只有第一次请求会真正发送到服务器端，后续的请求都会从浏览器的缓存中获取结果。
- 即使服务器端的数据更新了，客户端依然拿到的是缓存中的旧数据。

## 解决方案

- 在请求地址的后面加请求参数，保证每一次请求中的请求参数的值不相同。 

  > `xhr.open('get', 'http://www.example.com?t=' + Math.random())`

# jQuery 中的 AJAX 方法

> https://www.runoob.com/jquery/jquery-ref-ajax.html

## $.ajax()

### 语法

> `$.ajax({name: value, name: value, ... })`

名称                         | 值 / 描述
----                         | ---------
`async`                      | 布尔值，表示请求是否异步处理。默认是 `true`。
`beforeSend(xhr)`            | 发送请求前运行的函数。
`cache`                      | 布尔值，表示浏览器是否缓存被请求页面。默认是 `true`。
`complete(xhr,status)`       | 请求完成时运行的函数（在请求成功或失败之后均调用，即在 `success` 和 `error` 函数之后）。
`contentType`                | 发送数据到服务器时所使用的内容类型。默认是：`"application/x-www-form-urlencoded"`。
`context`                    | 为所有 AJAX 相关的回调函数规定 `this` 值。
`data`                       | 规定要发送到服务器的数据。
`dataFilter(data,type)`      | 用于处理 `XMLHttpRequest` 原始响应数据的函数。
`dataType`                   | 预期的服务器响应的数据类型。
`error(xhr,status,error)`    | 如果请求失败要运行的函数。
`global`                     | 布尔值，规定是否为请求触发全局 AJAX 事件处理程序。默认是 `true`。
`ifModified`                 | 布尔值，规定是否仅在最后一次请求以来响应发生改变时才请求成功。默认是 `false`。
`jsonp`                      | 在一个 JSONP 中重写回调函数的字符串。
`jsonpCallback`              | 在一个 JSONP 中规定回调函数的名称。
`password`                   | 规定在 HTTP 访问认证请求中使用的密码。
`processData`                | 布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 `true`。
`scriptCharset`              | 规定请求的字符集。
`success(result,status,xhr)` | 当请求成功时运行的函数。
`timeout`                    | 设置本地的请求超时时间（以毫秒计）。
`traditional`                | 布尔值，规定是否使用参数序列化的传统样式。
`type`                       | 规定请求的类型（GET 或 POST）。
`url`                        | 规定发送请求的 URL。默认是当前页面。
`username`                   | 规定在 HTTP 访问认证请求中使用的用户名。
`xhr`                        | 用于创建 `XMLHttpRequest` 对象的函数。

## $.get()

## $.post()
