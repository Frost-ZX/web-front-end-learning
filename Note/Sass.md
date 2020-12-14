<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# Sass

- [Sass](#sass)
- [简介](#简介)
- [相关网站](#相关网站)
- [使用方式](#使用方式)
  - [使用 Visual Studio Code 插件转换为 CSS](#使用-visual-studio-code-插件转换为-css)
  - [webpack sass-loader](#webpack-sass-loader)
- [语法](#语法)
  - [变量](#变量)
    - [声明变量](#声明变量)
    - [使用变量](#使用变量)
      - [属性值](#属性值)
      - [插值](#插值)
  - [嵌套](#嵌套)
  - [混合器](#混合器)
    - [定义](#定义)
    - [使用](#使用)
  - [函数](#函数)
    - [语法](#语法-1)
    - [例](#例)
  - [判断条件](#判断条件)
    - [语法](#语法-2)
    - [例](#例-1)
  - [循环](#循环)
    - [for](#for)
      - [语法](#语法-3)
      - [注意](#注意)
      - [例](#例-2)
    - [each](#each)
      - [语法](#语法-4)
      - [例](#例-3)
  - [继承（extend）](#继承-extend)
    - [语法](#语法-5)
    - [例](#例-4)
  - [导入（import）](#导入-import)

# 简介

- Sass 是一种 CSS 的预编译语言。
- 它提供了变量（variables）、嵌套（nested rules）、混合（mixins）、函数（functions）等功能，并且完全兼容 CSS 语法。
- Sass 能够使复杂的样式表变得更有条理， 并且易于在项目内部或跨项目共享设计。
- 旧版本：`.sass`（严格模式）
- 新版本：`.scss`（宽松模式）
- 本笔记基于 `新版本` Sass

# 相关网站

- https://sass-lang.com/
- https://sass.bootcss.com/

# 使用方式

## 使用 Visual Studio Code 插件转换为 CSS

- Sass/Less/Stylus/Typescript/Javascript/Jade/Pug Compile Hero Pro（wscats.eno）

## webpack sass-loader

- 参考：[webpack - sass-loader](./webpack.html#sass-loader)

# 语法

## 变量

### 声明变量

```scss
$变量名: 变量值;
```

### 使用变量

#### 属性值

```scss
$变量名: 属性值;

选择器 {
    CSS属性名: $变量名;
}
```

#### 插值

> 用法： `#{$变量名}`

- 选择器
- 属性名
- 属性值（插值方式）

## 嵌套

- 一个选择器嵌套另外一个选择器
- 可在选择器中使用 `&` 表示 `&` 所在级的上一级
- 使用 `& &` 选择器，自动生成父元素的并集选择器所有可能的组合

## 混合器

> 适用于需要多次使用的 CSS 样式。
> 使用时，不保留混合器自身。

### 定义

> 参数可选

```scss
@mixin 混合器名称(参数) { }
```

### 使用

```scss
选择器 {
    @include 混合器名称(参数);
}
```

## 函数

> https://sass.bootcss.com/documentation/at-rules/function
> 函数内部不能定义 CSS 属性和选择器。
> 一般用于计算，返回 CSS 属性值。

### 语法

```scss
@function 函数名(参数) {
    ...
    @return 返回值;
}

选择器 {
    CSS属性名: 函数名(参数);
}
```

### 例

```scss
@function changeSize($fontSize) {
    $fontSize: $fontSize + 10px;
    @return $fontSize;
}

span {
    font-size: changeSize(20px);
}
```

## 判断条件

> 可在嵌套、混合、函数等地方中使用。

### 语法

```scss
@if (条件) {
    ...
} @else if (条件) {
    ...
} @else {
    ...
}
```

### 例

```scss
$num: 150;

@if ($num > 200) {
    .a {
        font-size: 50px
    }
} @else if ($num > 150) {
    .a {
        font-size: 40px
    }
} @else if ($num > 100) {
    .b {
        font-size: 30px
    }
} @else {
    .b {
        font-size: 20px
    }
}
```

## 循环

### for

#### 语法

```scss
@for 变量 from 开始 to 结束 {
    ...
}
```

#### 注意

- `结束` 值需要 `+1`（不到 `结束`）

#### 例

```scss
// Sass
ul {
    @for $num from 1 to 5 {
        li:nth-child(#{$num}) {
            color: #2196F3;
        }
    }
}
```

```css
/* CSS */
ul li:nth-child(1) {
  color: #2196F3;
}
ul li:nth-child(2) {
  color: #2196F3;
}
ul li:nth-child(3) {
  color: #2196F3;
}
ul li:nth-child(4) {
  color: #2196F3;
}
```

### each

#### 语法

```scss
@each 变量 in 值1, 值2, 值3, ... {
    ...
}
```

#### 例

```scss
// Sass
ul {
    @each $var in red, green, blue {
        li.#{$var} {
            color: $var;
        }
    }
}
```

```css
/* CSS */
ul li.red {
  color: red;
}
ul li.green {
  color: green;
}
ul li.blue {
  color: blue;
}
```

## 继承（extend）

> 把继承的样式生成 `并集选择器`

### 语法

```scss
@extend 要继承的选择器;
```

### 例

```scss
// Less

.example {
    color: #2196F3;
}

.box {
    @extend .example;
    background-color: #F5F5F5;
}
```

```css
/* CSS */

.example, .box {
  color: #2196F3;
}

.box {
  background-color: #F5F5F5;
}
```

## 导入（import）

> 与 `Less` 相似
> 文件扩展不同，作用不同。

```scss
// 不编译，直接输出为 @import url("文件名.css");
@import url("文件名.css");

// 作为 Sass 对象导入
// 对于普通的选择器，自动编译合并到输出的文件中。
// 对于混合器，只在被调用后才编译合并到输出的文件中。
@import "文件名.scss";

// 如果没有扩展名，则为 .scss
@import "文件名";
```
