<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/style.css">
<script src="./assets/script.js"></script>
<div class="contents"></div>

# Less

- [Less](#less)
- [简介](#简介)
- [相关网站](#相关网站)
- [使用方式](#使用方式)
  - [使用 Visual Studio Code 插件转换为 CSS](#使用-visual-studio-code-插件转换为-css)
  - [浏览器使用 JavaScript 解析 Less](#浏览器使用-javascript-解析-less)
    - [注意](#注意)
    - [步骤](#步骤)
  - [webpack less-loader](#webpack-less-loader)
- [语法](#语法)
  - [变量](#变量)
    - [声明变量](#声明变量)
    - [使用变量](#使用变量)
      - [属性值](#属性值)
      - [插值](#插值)
    - [运算](#运算)
  - [嵌套](#嵌套)
  - [继承](#继承)
  - [混合器（mixin）](#混合器-mixin)
    - [方式一](#方式一)
    - [方式二](#方式二)
    - [方式三](#方式三)
  - [递归](#递归)
  - [判断条件（when）](#判断条件-when)
    - [用法](#用法)
    - [注意](#注意-1)
  - [导入（import）](#导入-import)
- [内置函数](#内置函数)
  - [Logical Functions](#logical-functions)
    - [...](#)
  - [String Functions](#string-functions)
    - [URLEncode](#urlencode)
    - [...](#-1)
  - [List Functions](#list-functions)
    - [...](#-2)
  - [Math Functions](#math-functions)
    - [平均值](#平均值)
    - [...](#-3)
  - [Type Functions](#type-functions)
    - [...](#-4)
  - [Misc Functions](#misc-functions)
    - [...](#-5)
  - [Color Definition Functions](#color-definition-functions)
    - [...](#-6)
  - [Color Channel Functions](#color-channel-functions)
    - [...](#-7)
  - [Color Operation Functions](#color-operation-functions)
    - [...](#-8)
  - [Color Blending Functions](#color-blending-functions)
    - [...](#-9)

# 简介

- Less（Leaner Style Sheets 的缩写）是一门向后兼容的 CSS 扩展语言。

# 相关网站

- http://lesscss.org/
- https://less.bootcss.com/

# 使用方式

## 使用 Visual Studio Code 插件转换为 CSS

- Easy LESS（mrcrowl.easy-less）
- Sass/Less/Stylus/Typescript/Javascript/Jade/Pug Compile Hero Pro（wscats.eno）

## 浏览器使用 JavaScript 解析 Less

> http://lesscss.org/usage/#using-less-in-the-browser

### 注意

- 需要以 Server 方式访问（协议不能为 file，否则会有跨域问题）

### 步骤

- 下载 `less.js`（https://github.com/less/less.js/archive/master.zip）
- 将 `less.js` 放入项目文件夹中
- 在需要使用 Less 的 HTML 文件的 `head` 标签中添加以下内容（注意顺序）

  ```html
  <link rel="stylesheet/less" type="text/css" href=".less 文件路径" />
  <script src="less.js 文件路径" type="text/javascript"></script>
  ```

## webpack less-loader

- 参考：[webpack - less-loader](./webpack.html#less-loader)

# 语法

## 变量

### 声明变量

```less
@变量名: 变量值;
```

### 使用变量

#### 属性值

```less
@变量名: 属性值;

选择器 {
    CSS属性名: @变量名;
}
```

#### 插值

> 用法：`@{变量名}`

- 选择器

  ```less
  @变量名: 选择器;

  // 作为 ID
  #@{变量名} {
      ...
  }

  // 作为类名
  .@{变量名} {
      ...
  }

  // 可与其他选择器一起使用
  .example .@{变量名} {
      ...
  }
  ```

- 属性名

  ```less
  @变量名: 属性名; // 属性名可以只是一部分

  选择器 {
      // 直接使用
      @{变量名}: CSS属性值;
      // 可加入其他内容
      border-radius-@{变量名}: CSS属性值;
  }
  ```

- 属性值（插值方式）

  ```less
  // 以文件路径为例
  @变量名: "文件路径";

  选择器 {
      // 直接使用
      CSS属性名: url("@{变量名}");
      // 可加入其他内容
      CSS属性名: url("@{变量名}example.png");
  }
  ```

- 变量

  ```less
  @变量名一: 变量值;
  @变量名二: 变量名一;

  // 例
  选择器::before {
      content: @@变量名二;
  }
  ```

### 运算

```less
@red: #FF0000 - #550000;

选择器 {
    color: @red;
}
```

```less
@w: 200px + 20px;

选择器 {
    width: @w;
}
```

## 嵌套

- 一个选择器嵌套另外一个选择器
- 可在选择器中使用 `&` 表示 `&` 所在级的上一级
- 使用 `& &` 选择器，自动生成父元素的并集选择器所有可能的组合

  ```less
  // Less
  div, p {
      & & {
          color: #000;
      }
  }
  ```

  ```css
  /* CSS */
  div div,
  div p,
  p div,
  p p {
      color: #000;
  }
  ```

## 继承

> 把继承的样式生成 `并集选择器`
> 只继承 `一层`

```less
选择器1 {
    ...
}

选择器2:extend(选择器1) {
    ...
}
```

## 混合器（mixin）

> 生成时，代码会合并（`复制` 一份到混合位置）。

### 方式一

```less
选择器1 {
    ...
}

选择器2 {
    选择器1;
    ...
}
```

### 方式二

> 使用此方式（混合器的选择器后添加 `()`），
> 代码合并后，`不保留` 混合器自身。

```less
选择器1() {
    ...
}

选择器2 {
    选择器1;
    ...
}
```

### 方式三

> 可传递参数

```less
.bg(@color) {
    background-color: @color;
}

选择器1 {
    .bg(#2196F3);
}

选择器2 {
    .bg(#FF5722);
}
```

> 设置参数默认值

```less
.bg(@color: #FFFFFF) {
    background-color: @color;
}
```

## 递归

> 例（借助了 `混合器`）

```less
// Less

.mix(@index) when (@index <= 8) {
    .box ul li:nth-child(@{index}) {
        width: 50px * @index;
    }

    // 递归调用
    .mix(@index + 1);
}

// 初始样式
.box {
    ul {
        li {
            background-color: #2196F3;
            color: #FFF;
        }
    }
}

// 调用
.mix(1);
```

```css
/* CSS */

.box ul li {
    background-color: #2196F3;
    color: #FFF;
}

.box ul li:nth-child(1) {
    width: 50px;
}
.box ul li:nth-child(2) {
    width: 100px;
}
...
.box ul li:nth-child(8) {
    width: 400px;
}
```

## 判断条件（when）

### 用法

```less
选择器 when (条件) {
    ...
}

// 例
.box when (@var > 10){
	
}
```

### 注意

- 使用 `and` 表示 `与`

  ```less
  选择器 when (条件1) and (条件2) and (条件3), ... {
      ...
  }
  ```

- 使用 `,` 分隔表示 `或`

  ```less
  选择器 when (条件1), (条件2), (条件3), ... {
      ...
  }
  ```

- 使用 `not` 表示 `非`

  ```less
  选择器 when not (条件) {
      ...
  }
  ```

  ```less
  选择器 when not (条件1) and not (条件2) {
      ...
  }
  ```

## 导入（import）

> 文件扩展不同，作用不同。

```less
// 不编译，直接输出为 @import "文件名.css";
@import "文件名.css";

// 作为 Less 对象导入
// 对于普通的选择器，自动编译合并到输出的文件中。
// 对于混合器，只在被调用后才编译合并到输出的文件中。
@import "文件名.less";

// 如果没有扩展名，则为 .less
@import "文件名";
```

# 内置函数

> https://less.bootcss.com/functions/

## Logical Functions

### ...

## String Functions

### URLEncode

```less
escape("a=1"); // a%3D1
```

### ...

## List Functions

### ...

## Math Functions

### 平均值

```less
average(值1, 值2);
```

### ...

## Type Functions

### ...

## Misc Functions

### ...

## Color Definition Functions

### ...

## Color Channel Functions

### ...

## Color Operation Functions

### ...

## Color Blending Functions

### ...
