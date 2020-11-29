<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./markdown_style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# CSS3

- [CSS3](#css3)
- [选择器](#选择器)
  - [属性选择器](#属性选择器)
    - [与 CSS2 属性选择器的区别](#与-css2-属性选择器的区别)
  - [结构伪类选择器](#结构伪类选择器)
    - [nth-child(n)](#nth-child-n)
    - [nth-of-type(n)](#nth-of-type-n)
  - [伪元素选择器](#伪元素选择器)
  - [伪元素（E::before 和 E::after）](#伪元素-e-before-和-e-after)
  - [锚点（:target）](#锚点-target)
- [盒子阴影（box-shadow）](#盒子阴影-box-shadow)
    - [语法](#语法)
    - [注意](#注意)
- [文本阴影（text-shadow）](#文本阴影-text-shadow)
    - [语法](#语法-1)
    - [注意](#注意-1)
- [边框圆角（border-radius）](#边框圆角-border-radius)
    - [设置多个](#设置多个)
    - [设置单个](#设置单个)
- [盒子模型（box-sizing）](#盒子模型-box-sizing)
    - [box-sizing: content-box](#box-sizing-content-box)
    - [box-sizing: border-box](#box-sizing-border-box)
- [过渡（transition）](#过渡-transition)
    - [作用](#作用)
    - [语法](#语法-2)
    - [注意](#注意-2)
- [变形（transform）](#变形-transform)
  - [设置元素变形原点：transform-origin()](#设置元素变形原点-transform-origin)
    - [语法](#语法-3)
  - [移动：translate()](#移动-translate)
    - [语法](#语法-4)
    - [注意](#注意-3)
  - [旋转：rotate()](#旋转-rotate)
    - [语法](#语法-5)
    - [注意](#注意-4)
  - [缩放：scale()](#缩放-scale)
    - [语法](#语法-6)
    - [注意](#注意-5)
  - [倾斜：skew()](#倾斜-skew)
    - [语法](#语法-7)
    - [注意](#注意-6)
  - [同时使用多个变形属性值](#同时使用多个变形属性值)
    - [注意](#注意-7)
  - [3D 变形](#3d-变形)
    - [相关属性](#相关属性)
      - [语法](#语法-8)
- [动画（animation）](#动画-animation)
  - [创建动画](#创建动画)
    - [方式一](#方式一)
    - [方式二](#方式二)
  - [使用动画](#使用动画)
    - [语法](#语法-9)
    - [animation-timing-function](#animation-timing-function)
- [背景](#背景)
  - [渐变](#渐变)
    - [线性渐变](#线性渐变)
    - [径向渐变](#径向渐变)
  - [background-attachment](#background-attachment)
    - [语法](#语法-10)
  - [background-size](#background-size)
    - [语法](#语法-11)
  - [background-origin](#background-origin)
    - [语法](#语法-12)
  - [background-clip](#background-clip)
    - [语法](#语法-13)
  - [多背景](#多背景)
- [边框图片](#边框图片)
    - [语法](#语法-14)
- [Web 字体](#web-字体)
  - [定义字体](#定义字体)
    - [语法](#语法-15)
- [多列](#多列)
    - [多列属性](#多列属性)
- [弹性盒子](#弹性盒子)
- [绘制三角形](#绘制三角形)
    - [上](#上)
    - [下](#下)
    - [左](#左)
    - [右](#右)

# 选择器

> 注意：类选择器、属性选择器、伪类选择器的权重为 10

## 属性选择器

选择器               | 说明
------               | ----
`[attribute^=value]` | 选择每一个 attribute 属性的值以 `value` 开头的元素
`[attribute$=value]` | 选择每一个 attribute 属性的值以 `value` 结尾的元素
`[attribute*=value]` | 选择每一个 attribute 属性的值包含子字符串 `value` 的元素

### 与 CSS2 属性选择器的区别

- 主要是 `[attribute~=value]` 与 `[attribute*=value]` 以及 `[attribute|=value]` 与 `[attribute^=value]` 的区别
- CSS2 的属性选择器以 `单词` 为单位，CSS3 的属性选择器以 `字符串` 为单位

## 结构伪类选择器

选择器           | 说明
------           | ----
E:first-child    | 匹配父元素中的第一个子元素 E
E:last-child     | 匹配父元素中最后一个子元素 E
E:nth-child(n)   | 匹配父元素中的第 n 个子元素 E
E:first-of-type  | 指定类型 E 的第一个
E:last-of-type   | 指定类型 E 的最后一个
E:nth-of-type(n) | 指定类型 E 的第 n 个

### nth-child(n)

- n 可以是数字、关键字和公式
- n 为数字时，则选择第 n 个（从 1 开始）
- 常用的关键字：`even`（偶数）、`odd`（奇数）
- n 为公式时，n 从 `0` 开始 `自动递增` 计算，但为 `0`、`负数` 或 `超出元素的个数` 时会被忽略
- 常用的公式

  公式 | 取值
  ---- | ----
  2n   | 偶数
  2n+1 | 奇数
  5n   | 0、5、10、15、...
  n+5  | 从第 5 个开始（包含第五个），到最后
  -n+5 | 前 5 个（包含第 5 个）

> 注意：`nth-child` 从所有子级开始计算（可能不是同一种类型的标签）

### nth-of-type(n)

- `nth-of-type` 指定同一种类型的子级标签
- 例如：`ul li:nth-of-type(2)` 选择第 2 个 li

## 伪元素选择器

选择器          | 说明
------          | ----
E::first-letter | 文本的第一个字符
E::first-line   | 文本的第一行
E::selection    | 选中的文本

> 注意：`E::selection` 只可以应用于少数的 CSS 属性（`color`、`background-color`、`text-shadow`）

## 伪元素（E::before 和 E::after）

- 在 E 元素内部的开始位置或末尾位置创建一个元素。
- 创建的元素为行内元素，且必须要结合 `content` 属性使用。

## 锚点（:target）

- 结合锚点进行使用，处于当前锚点的元素会被选中。

# 盒子阴影（box-shadow）

### 语法

```css
选择器 {
    box-shadow: h-shadow v-shadow blur spread color inset;
    box-shadow: 阴影水平位置 阴影垂直位置 模糊距离 阴影尺寸 阴影颜色 阴影类型;
}
```

### 注意

- 可以同时添加多个盒子阴影，多个阴影之间使用 `,` 分隔。
- `h-shadow` 和 `v-shadow` 必须填写，其余可省略。
- 默认阴影类型是外阴影 (outset) ，不需要设置。

# 文本阴影（text-shadow）

### 语法

```css
选择器 {
    text-shadow: h-shadow v-shadow blur color;
    text-shadow: 阴影水平位置 阴影垂直位置 模糊距离 阴影颜色;
}
```

### 注意

- 可以同时添加多个文本阴影，多个阴影之间使用 `,` 分隔。
- `h-shadow` 和 `v-shadow` 必须填写，其余可省略。

# 边框圆角（border-radius）

### 设置多个

- 四个角相同

  - `border-radius：值`

- 左上角、右上角、右下角、左下角

  - `border-radius: 值 值 值 值`

- 左上角和右下角、右上角和左下角

  - `border-radius: 值 值`

- 左上角、右上角和左下角、右下角

  - `border-radius: 值 值 值`

### 设置单个

- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-left-radius`
- `border-bottom-right-radius`

> 这四个属性的值可以为 1 个或 2 个
> 第 1 个值表示水平半径，第 2 个值表示垂直半径。
> 如果设置 1 个值，表示水平半径与垂直半径相等。

# 盒子模型（box-sizing）

### box-sizing: content-box

- 盒子大小为：元素大小 + padding + border
- content-box 为 `默认值`，让元素维持 W3C 的标准 `Box Mode`

### box-sizing: border-box

- 盒子大小为：元素大小（padding 和 border 包含到元素大小中）

# 过渡（transition）

### 作用

- 当元素从一种样式变换为另一种样式时有过渡效果（补间动画）。

### 语法

- `transition: property duration timing-function delay`
- 可以有多组属性变化，使用 `,` 分隔。

属性                       | 描述
----                       | ----
transition                 | 简写属性，用于在一个属性中设置四个过渡属性。
transition-property        | 定义应用过渡的 CSS 属性的名称。<br>（`all` 可表示所有的属性）
transition-duration        | 定义过渡效果花费的时间，默认是 `0`。
transition-timing-function | 定义过渡效果的时间曲线，默认是 `ease`。
transition-delay           | 定义过渡效果何时开始，默认是 `0`。

### 注意

- 只能产生从 `某个值` 到另外一个 `具体值` 的过渡

# 变形（transform）

> 参考：
> https://www.runoob.com/cssref/css3-pr-transform.html
> https://www.runoob.com/css3/css3-2dtransforms.html
> https://www.runoob.com/css3/css3-3dtransforms.html
>
> 注意：
> 变形时不影响其他元素

## 设置元素变形原点：transform-origin()

### 语法

- `transform-origin(x, y, z)`
- x、y、z 可以是 `带单位的具体值`
- x 可以是 `left`、`center`、`right`、`百分比`
- y 可以是 `top`、`center`、`bottom`、`百分比`

## 移动：translate()

### 语法

值                   | 描述
--                   | ----
translate(x, y)      | 定义 2D 转换
translate3d(x, y, z) | 定义 3D 转换
translateX(x)        | 定义沿着 X 轴的 3D 旋转
translateY(y)        | 定义沿着 Y 轴的 3D 旋转
translateZ(z)        | 定义沿着 Z 轴的 3D 旋转

### 注意

- 对 `行内元素` 没有效果
- `z` 只能使用具体的带单位数值（不能使用百分比）

## 旋转：rotate()

### 语法

值                       | 描述
--                       | ----
rotate(angle)            | 定义 2D 旋转（沿着 Z 轴）
rotate3d(x, y, z, angle) | 定义 3D 旋转（沿着自定义轴）
rotateX(angle)           | 定义沿着 X 轴的 3D 旋转
rotateY(angle)           | 定义沿着 Y 轴的 3D 旋转
rotateZ(angle)           | 定义沿着 Z 轴的 3D 旋转

### 注意

- `angle` 单位为 `deg`
- `angle` 可以是负数

## 缩放：scale()

### 语法

值               | 描述
--               | ----
scale(x, [y])    | 定义 2D 缩放转换
scale3d(x, y, z) | 定义 3D 缩放转换
scaleX(x)        | 通过设置 X 轴的值来定义缩放转换
scaleY(y)        | 通过设置 Y 轴的值来定义缩放转换
scaleZ(z)        | 通过设置 Z 轴的值来定义 3D 缩放转换

### 注意

- x、y、z 不带单位
- 值 > 1 时放大，值 > 0 且 < 1 时缩小，值 < 0 时先缩小后放大并翻转
- 只填一个参数时，同时设置 x 和 y

## 倾斜：skew()

### 语法

值                     | 描述
----                   | ----
skew(x angle, y angle) | 沿 X 轴和 Y 轴倾斜
skewX(angle)           | 沿 X 轴倾斜
skewY(angle)           | 沿 Y 轴倾斜

### 注意

- `angle` 单位为 `deg`
- `angle` 可以是负数

## 同时使用多个变形属性值

- 可同时使用多个变形属性
- 多个属性值之间使用空格分隔

### 注意

- 先写位移，后写旋转。
- 如果先写旋转，会改变坐标轴方向。

## 3D 变形

### 相关属性

属性                | 描述
----                | ----
backface-visibility | 定义元素在不面对屏幕时是否可见
perspective         | 规定 3D 元素的透视效果（给父元素设置）<br>默认为 0px，数值越小表示距离越近，一般为 500px - 1000px。
perspective-origin  | 规定 3D 元素的底部位置
transform-style     | 指定嵌套元素是怎样在三维空间中呈现

#### 语法

- `transform-style: flat | preserve-3d`

  值          | 描述
  --          | ----
  flat        | 表示所有子元素在 2D 平面呈现（默认）
  preserve-3d | 表示所有子元素在 3D 空间中呈现

# 动画（animation）

> 参考：
> https://www.runoob.com/css3/css3-animations.html
> https://www.runoob.com/cssref/css3-pr-animation.html

## 创建动画

### 方式一

```css
@keyframes 动画名称 {
    from {
        样式属性名: 样式属性值;
        样式属性名: 样式属性值;
        ...
    }
    to {
        样式属性名: 样式属性值;
        样式属性名: 样式属性值;
        ...
    }
}
```

### 方式二

```css
@keyframes 动画名称 {
    百分比 {
        样式属性名: 样式属性值;
        样式属性名: 样式属性值;
        ...
    }
    百分比 {
        样式属性名: 样式属性值;
        样式属性名: 样式属性值;
        ...
    }
    ...
}
```

## 使用动画

### 语法

- `animation: name duration timing-function delay iteration-count direction fill-mode play-state`

值                        | 说明
--                        | ----
animation-name            | 指定要绑定到选择器的关键帧的名称
animation-duration        | 动画指定需要多少秒或毫秒完成
animation-timing-function | 设置动画将如何完成一个周期
animation-delay           | 设置动画在启动前的延迟间隔
animation-iteration-count | 定义动画的播放次数
animation-direction       | 指定是否应该轮流反向播放动画
animation-fill-mode       | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时）<br>应用到元素的样式
animation-play-state      | 指定动画是否正在运行或已暂停
initial                   | 设置属性为其默认值 [关于 initial 的介绍](https://www.runoob.com/cssref/css-initial.html)
inherit                   | 从父元素继承属性 [关于 initinherital 的介绍](https://www.runoob.com/cssref/css-inherit.html)

> 注意：可同时使用多个动画，使用 `,` 分隔。

### animation-timing-function

值                        | 描述
--                        | ----
linear                    | 动画从头到尾的速度都相同
ease                      | 默认值，动画以低速开始，然后加快，在结束前变慢。
ease-in                   | 动画以低速开始
ease-out                  | 动画以低速结束
ease-in-out               | 动画以低速开始和结束
cubic-bezier(n, n, n, n)  | 在 cubic-bezier 函数中自己的值（从 0 到 1 的数值）
steps(n, [ start / end ]) | 第一个参数 n 表示阶跃次数（正整数）<br>第二个参数表示阶跃点<br>start：一开始就先进行阶跃，end：默认，每阶段完成后再进行阶跃

# 背景

## 渐变

### 线性渐变

- `background-image: linear-gradient(direction, color-stop-1, color-stop2, ...);`
- `background-image: repeating-linear-gradient(angle | to side-or-corner, color-stop1, color-stop2, ...);`

### 径向渐变

- `background-image: radial-gradient(shape size at position, start-color, ..., last-color);`
- `background-image: repeating-radial-gradient(shape size at position, start-color, ..., last-color);`

## background-attachment

### 语法

值      | 描述
--      | ----
scroll  | 背景图片随着页面的滚动而滚动，默认值
fixed   | 背景图片不会随着页面的滚动而滚动
local   | 背景图片会随着元素内容的滚动而滚动
initial | 设置该属性的默认值
inherit | 指定 `background-attachment` 的设置应该从父元素继承

## background-size

### 语法

> `background-size: length | percentage | cover | contain;`

值         | 描述
--         | ----
length     | 设置背景图片高度和宽度<br>第一个值设置宽度，第二个值设置高度。<br>如果只给出一个值，第二个值自动设置为 auto。
percentage | 将计算相对于背景定位区域的百分比<br>第一个值设置宽度，第二个值设置高度。<br>如果只给出一个值，第二个值自动设置为 auto。
cover      | 保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小
contain    | 保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小

## background-origin

### 语法

> `background-origin: padding-box | border-box | content-box;`

值          | 描述
--          | ----
padding-box | 背景图像填充框的相对位置
border-box  | 背景图像边界框的相对位置
content-box | 背景图像的相对位置的内容框

## background-clip

### 语法

> `background-clip: border-box | padding-box | content-box;`

值          | 说明
--          | ----
border-box  | 背景绘制在边框方框内（剪切成边框方框），默认值
padding-box | 背景绘制在衬距方框内（剪切成衬距方框）
content-box | 背景绘制在内容方框内（剪切成内容方框）

## 多背景

- 一个元素可以设置多组背景图像属性值。
- 每组属性值之间使用 `,` 分隔。
- 如果设置的多重背景图之间存在交集（重叠），前面的背景图会覆盖在后面的背景图上。
- 如果需要设置背景色，通常定义在最后一组属性值上。

# 边框图片

### 语法

> `border-image: source slice width outset repeat|initial|inherit;`

值                  | 描述
--                  | ----
border-image-source | 用于指定要用于绘制边框的图像的位置
border-image-slice  | 图像边界向内偏移
border-image-width  | 图像边界的宽度
border-image-outset | 用于指定在边框外部绘制 border-image-area 的量
border-image-repeat | 用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）

# Web 字体

> https://www.runoob.com/css3/css3-fonts.html

## 定义字体

### 语法

> `@font-face { }`

描述符        | 值            | 描述
------        | --            | ----
font-family   | name          | 必需，定义字体的名称。
src           | URL           | 必需，定义字体文件的 URL。
font-stretch  | normal<br>condensed<br>ultra-condensed<br>extra-condensed<br>semi-condensed<br>expanded<br>semi-expanded<br>extra-expanded<br>ultra-expanded | 可选，定义如何拉伸字体，默认 `normal`。
font-style    | normal<br>italic<br>oblique | 可选，定义字体的样式，默认 `normal`。
font-weight   | normal<br>bold<br>100<br>200<br>300<br>400<br>500<br>600<br>700<br>800<br>900 | 可选，定义字体的粗细，默认 `normal`。
unicode-range | unicode-range | 可选，定义字体支持的 UNICODE 字符范围，默认 `U+0-10FFFF`。

# 多列

> https://www.runoob.com/css3/css3-multiple-columns.html

### 多列属性

- column-count
- column-gap
- column-rule-style
- column-rule-width
- column-rule-color
- column-rule
- column-span
- column-width

# 弹性盒子

> http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
> http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
> https://www.runoob.com/css3/css3-flexbox.html

# 绘制三角形

### 上

```css
选择器 {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #2196F3;
}
```

<div style="width: 0; height: 0;
border-left: 50px solid transparent;
border-right: 50px solid transparent;
border-bottom: 100px solid #2196F3;"></div>

### 下

```css
选择器 {
    width: 0;
    height: 0;
    border-top: 100px solid #2196F3;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
}
```

<div style="width: 0; height: 0;
border-top: 100px solid #2196F3;
border-left: 50px solid transparent;
border-right: 50px solid transparent;"></div>

### 左

```css
选择器 {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 100px solid #2196F3;
    border-bottom: 50px solid transparent;
}
```

<div style="width: 0; height: 0;
border-top: 50px solid transparent;
border-right: 100px solid #2196F3;
border-bottom: 50px solid transparent;"></div>

### 右

```css
选择器 {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid #2196F3;
    border-bottom: 50px solid transparent;
}
```

<div style="width: 0; height: 0;
border-top: 50px solid transparent;
border-left: 100px solid #2196F3;
border-bottom: 50px solid transparent;"></div>
