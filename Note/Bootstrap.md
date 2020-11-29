<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./markdown_style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# Bootstrap

- [Bootstrap](#bootstrap)
- [补充内容](#补充内容)
  - [rem 单位](#rem-单位)
    - [简介](#简介)
    - [优势](#优势)
    - [例子](#例子)
  - [媒体查询](#媒体查询)
    - [简介](#简介-1)
    - [语法规范](#语法规范)
      - [媒体类型（mediatype）](#媒体类型-mediatype)
      - [关键字](#关键字)
      - [媒体特性](#媒体特性)
      - [书写规则](#书写规则)
      - [使用媒体查询引入不同的样式表](#使用媒体查询引入不同的样式表)
- [Bootstrap](#bootstrap-1)
  - [Bootstrap 相关网站](#bootstrap-相关网站)
    - [官网](#官网)
    - [中文网](#中文网)
  - [布局容器](#布局容器)
    - [.container](#container)
    - [.container-fluid](#container-fluid)
  - [栅格](#栅格)

# 补充内容

## rem 单位

### 简介

- `rem (root em)` 是一个相对于根元素（html）的字体大小单位，类似 `em`（em 相对于自身字体大小）。

### 优势

- 可以通过修改根元素的字体大小控制整个页面的元素大小。

### 例子

- 根元素（html）设置 `font-size=12px`，非根元素设置 `font-size=2rem` 则实际为 `font-size=24px`

  ```css
  /* 根元素字体大小 12px */
  html {
      font-size: 12px;
  }
  /* 此时 div 的字体大小为 24px */      
  div {
      font-size: 2rem;
  }
  ```

## 媒体查询

### 简介

- 媒体查询（Media Query）是 CSS3 新语法。
- 使用 @media 媒体查询，可以针对不同的媒体类型定义不同的样式。
- @media 媒体查询可以针对不同的屏幕尺寸设置不同的样式。
- 在重置浏览器窗口大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 。
- 目前针对苹果手机、Android 手机，平板等设备都需要用到多媒体查询。

### 语法规范

```css
@media mediatype and|not|only (media feature) {
  CSS-Code;
}
```

- 以 `@media` 开头
- 媒体类型（mediatype）：`all`、`print`、`screen`
- 关键字：`and`、`not`、`only`
- 媒体特性（media feature）：`width`、`min-width`、`max-width`、...（必须被小括号包裹）

#### 媒体类型（mediatype）

- 将不同的终端设备划分成不同的类型，称为媒体类型。
- 常用 `screen`

#### 关键字

- 关键字将媒体类型或多个媒体特性连接到一起作为媒体查询的条件。
- `and`
  可以将多个媒体特性连接到一起，相当于“且”。
- `not`
  排除某个媒体类型，相当于“非”（可以省略）。
- `only`
  指定某个特定的媒体类型（可以省略）。

#### 媒体特性

- 每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。
- 注意
  - 媒体特性必须被小括号 `()` 包裹
  - 媒体特性属性名与属性值之间使用 `:` 号分隔，而不是 `=` 号
  - 部分媒体特性属性值需要带 `px` 单位（例如：`width`、`min-width`、`max-width`）
  - 需要在 HTML 中加入 `视口` 属性标记，否则媒体查询会失效。
  - `min-width` - 大于等于，`max-width` - 小于等于

#### 书写规则

- 为了防止混乱，媒体查询要按照 `从小到大` 或 `从大到小` 的顺序来写
- 常用：从小到大

#### 使用媒体查询引入不同的样式表

- 当样式比较繁多的时候，可以针对不同的媒体使用不同样式表。
- 原理：直接在 `link` 中判断设备的尺寸，然后引入不同的 CSS 文件

- 语法规范

  ```html
  <link rel="stylesheet" media="mediatype and|not|only (media feature)" href="CSS 文件路径">
  ```

- 例子

  ```html
  <link rel="stylesheet" media="screen and (min-width: 400px)" href="style_1.css">
  ```

# Bootstrap

## Bootstrap 相关网站

### 官网

- https://getbootstrap.com/

### 中文网

- https://v4.bootcss.com/
- https://code.z01.com/v4/

## 布局容器

- 使用 Bootstrap 时需要为页面内容和栅格系统包裹一个 `.container` 或者 `.container-fluid` 容器
- 这两个类是 Bootstrap 提供的预定义类

### .container

> 固定自适应方式

### .container-fluid

> 流体 100% 自适应方式

- 流式布局容器，宽度 100%
- 占据全部视口（viewport）的容器
- 适合于单独做移动端开发

## 栅格

