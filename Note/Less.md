<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../note/style.css">
<script src="../note/script.js"></script>
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
  - [混合（mix）](#混合-mix)
  - [递归](#递归)

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

- 路径

  ```less
  @变量名: "文件路径";

  选择器 {
      // 直接使用
      CSS属性名: url("@{变量名}");
      // 可加入其他内容
      CSS属性名: url("@{变量名}example.png");
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

> 把继承的样式生成并集选择器
> 只继承 `一层`

```less
选择器1 {
    ...
}

选择器2:extend(选择器1) {
    ...
}
```

## 混合（mixin）

- 做一个混合代码，在另外一个选择器引入。
- 生成时，代码会合并（复制一份到混合位置）。

```less
选择器1 {
    ...
}

选择器2 {
    选择器1;
    ...
}
```

> 使用此方式（混合代码的选择器后添加 `()`），
> 代码合并后，不保留混合代码自身。

```less
选择器1() {
    ...
}

选择器2 {
    选择器1;
    ...
}
```

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

## 递归

> 例

```less
// Less

.mix(@index) when (@index <= 8) {
    .box ul li:nth-child(@{index}) {
        width: 50px * @index;
    }

    .mix(@index + 1);
}

.box {
    ul {
        li {
            background-color: #2196F3;
            color: #FFF;
        }
    }
}

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
