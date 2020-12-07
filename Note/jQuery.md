<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# jQuery

- [jQuery](#jquery)
- [入口函数](#入口函数)
    - [方式 1](#方式-1)
    - [方式 2（简写，推荐）](#方式-2-简写-推荐)
- [jQuery 对象与 DOM 对象的区别](#jquery-对象与-dom-对象的区别)
  - [jQuery 对象](#jquery-对象)
  - [DOM 对象](#dom-对象)
  - [jQuery 对象转 DOM 对象](#jquery-对象转-dom-对象)
    - [方法 1](#方法-1)
    - [方法 2](#方法-2)
  - [DOM 对象转 jQuery 对象](#dom-对象转-jquery-对象)
- [选择器](#选择器)
  - [基础选择器](#基础选择器)
  - [层级选择器](#层级选择器)
  - [筛选选择器](#筛选选择器)
    - [筛选方法](#筛选方法)
- [隐式迭代](#隐式迭代)
- [排他思想](#排他思想)
    - [当前元素设置样式，其余的兄弟元素清除样式](#当前元素设置样式-其余的兄弟元素清除样式)
- [链式编程](#链式编程)
- [获取索引号](#获取索引号)
- [样式操作](#样式操作)
  - [获取 / 设置 CSS 样式](#获取-设置-css-样式)
    - [获取](#获取)
    - [设置](#设置)
    - [设置多个](#设置多个)
  - [设置类名](#设置类名)
    - [添加类名](#添加类名)
    - [删除类名](#删除类名)
    - [切换类名](#切换类名)
- [事件切换](#事件切换)
    - [语法](#语法)
- [动画效果](#动画效果)
  - [参数](#参数)
  - [显示隐藏](#显示隐藏)
    - [显示](#显示)
    - [隐藏](#隐藏)
    - [切换](#切换)
  - [上滑下滑](#上滑下滑)
    - [上滑](#上滑)
    - [下滑](#下滑)
    - [切换](#切换-1)
  - [淡入淡出](#淡入淡出)
    - [淡入](#淡入)
    - [淡出](#淡出)
    - [切换](#切换-2)
    - [到指定的不透明度](#到指定的不透明度)
  - [自定义动画](#自定义动画)
    - [方法](#方法)
  - [停止动画队列](#停止动画队列)
    - [方法](#方法-1)
- [操作属性](#操作属性)
  - [操作元素固有属性](#操作元素固有属性)
    - [获取](#获取-1)
    - [设置](#设置-1)
    - [注意](#注意)
  - [操作元素自定义属性](#操作元素自定义属性)
    - [获取](#获取-2)
    - [设置](#设置-2)
    - [删除](#删除)
- [操作 HTML、文本内容](#操作-html-文本内容)
    - [html()](#html)
    - [text()](#text)
    - [val()](#val)
- [遍历](#遍历)
  - [方法](#方法-2)
  - [说明](#说明)
- [元素操作](#元素操作)
  - [遍历元素](#遍历元素)
    - [方法](#方法-3)
    - [说明](#说明-1)
  - [创建元素](#创建元素)
  - [添加元素](#添加元素)
    - [内部添加](#内部添加)
    - [外部添加](#外部添加)
    - [注意](#注意-1)
  - [删除元素](#删除元素)
    - [方法](#方法-4)
    - [注意](#注意-2)
  - [克隆元素](#克隆元素)
    - [方法](#方法-5)
    - [参数说明](#参数说明)
- [尺寸、位置操作](#尺寸-位置操作)
  - [尺寸操作](#尺寸操作)
    - [方法](#方法-6)
    - [注意](#注意-3)
  - [位置操作](#位置操作)
    - [offset()](#offset)
    - [position()](#position)
    - [scrollTop() / scrollLeft()](#scrolltop-scrollleft)
- [事件](#事件)
  - [事件注册](#事件注册)
    - [注册单个事件](#注册单个事件)
  - [事件处理](#事件处理)
    - [绑定事件：on()](#绑定事件-on)
      - [语法](#语法-1)
      - [说明](#说明-2)
      - [优势](#优势)
    - [解绑事件：off()](#解绑事件-off)
      - [语法](#语法-2)
      - [说明](#说明-3)
      - [例如](#例如)
    - [自动触发事件：trigger()](#自动触发事件-trigger)
      - [第一种触发方法：click()](#第一种触发方法-click)
      - [第二种触发方法：trigger()](#第二种触发方法-trigger)
      - [第三种触发方法：triggerHandler()](#第三种触发方法-triggerhandler)
      - [注意](#注意-4)
  - [事件对象](#事件对象)
    - [语法](#语法-3)
    - [阻止默认行为](#阻止默认行为)
    - [阻止冒泡](#阻止冒泡)
- [多库共存](#多库共存)
  - [问题概述](#问题概述)
  - [客观需求](#客观需求)
  - [jQuery 解决方案](#jquery-解决方案)
- [插件扩展机制](#插件扩展机制)
  - [介绍](#介绍)
  - [格式](#格式)
  - [语法](#语法-4)
  - [注意](#注意-5)

# 入口函数

> 如果要在 DOM 结构出现之前操作 DOM，需要使用 jQuery 的入口函数。

### 方式 1

```javascript
$(document).ready(function () {
    console.log('入口函数 - 方式 1');
});
```

### 方式 2（简写，推荐）

```javascript
$(function () {
    console.log('入口函数 - 方式 2');
});
```

# jQuery 对象与 DOM 对象的区别

## jQuery 对象

- 通过 jQuery 方法得到的对象
- 只能使用 jQuery 提供的方法和属性

## DOM 对象

- 通过 DOM 元素获取的对象供的方法和属性
- 只能使用 DOM 元素提供的方法和属性

## jQuery 对象转 DOM 对象

### 方法 1

- `jQuery 对象[索引号]`

  > 索引号从 0 开始

### 方法 2

- `jQuery 对象.get(索引号)`

  > 索引号从 0 开始

## DOM 对象转 jQuery 对象

- `$(DOM 对象)`

# 选择器

> `$('选择器')`
> 里面选择器直接写 CSS 选择器即可，但是要加引号。

## 基础选择器

名称       | 用法            | 描述
---        | ---             | ---
全选选择器 | $('*')          | 匹配所有元素
标签选择器 | $('div')        | 获取同一类标签的所有元素
ID选择器   | $('#id')        | 获取指定 ID 的元素
类选择器   | $('.class')     | 获取同一类 class 的元素
并集选择器 | $('div, p, li') | 获取多个元素
交集选择器 | $('li.current') | 交集元素

## 层级选择器

> 最常用的：`后代选择器` 和 `子代选择器`

名称       | 用法       | 描述
---        | ---        | ---
子代选择器 | $('ul>li') | 使用 `>` 号，获取亲儿子层级的元素<br>（并不会获取孙子层级的元素）
后代选择器 | $('ul li') | 使用 `空格`，代表后代选择器，<br>获取 `ul` 下的所有 `li` 元素，包括孙子等

## 筛选选择器

> 在所有的选项中选择满足条件的进行筛选选择

语法       | 用法          | 描述
---        | ---           | ---
:first     | $('li:first') | 获取第一个 li 元素
:last      | $('li:last')  | 获取最后一个 li 元素
:eq(index) | $('li:eq(2)') | 获取索引号为 2 的 li 元素<br>索引号从 0 开始
:odd       | $('li:odd')   | 获取索引号为奇数的 li 元素<br>索引号从 0 开始
:even      | $('li:even')  | 获取索引号为偶数的 li 元素<br>索引号从 0 开始

### 筛选方法

> 类似 DOM 中的通过一个节点找另外一个节点，父、子、兄以外有所加强。

语法                 | 用法                       | 描述
---                  | ---                        | ---
parent( [表达式] )   | $('li').parent()           | 查找父级（上一级）
parents( [表达式] )  | $('li').parents()          | 查找全部父级（到 `html`）
children( [表达式] ) | $('ul').children('li')     | 相当于 `$('ul>li')`，最近一级（亲儿子）
find( 表达式 )       | $('ul').find('li')         | 相当于 `$('ul li')`，后代选择器
siblings( [表达式] ) | $('.first').siblings('li') | 查找兄弟节点，不包括自己
nextAll( [表达式] )  | $('.first').nextAll()      | 查找当前元素之后所有的同级元素
prevAll( [表达式] )  | $('.last').prevAll()       | 查找当前元素之前所有的同级元素
hasClass( 类名 )     | $('div').hasClass('abc')   | 检查当前的元素是否含有某个特定的类，有则返回 true
eq( 索引号 )         | $('li').eq(2)              | 相当于 `$('li:eq(2)')`，索引号从 0 开始

- **重要：`parent()` 、`children()` 、`find()` 、`siblings()` 、`eq()`**

# 隐式迭代

- 不需要自己写循环，jQuery 会自动遍历内部 DOM 元素（伪数组形式存储）。

# 排他思想

### 当前元素设置样式，其余的兄弟元素清除样式

```javascript
$(this).css('color', 'red');
$(this).siblings().css('color', '')
```

# 链式编程

> 链式编程是为了节省代码量，看起来更优雅。

```javascript
$(this).css('color', 'red').siblings().css('color', '');
```

> **注意：使用链式编程一定要注意是对哪个对象执行**

# 获取索引号

> `$(selector).index( [element] )`
> `$(selector).index( [selector] )`

- 搜索匹配的元素，并返回相应元素的索引值，从 0 开始计数。
- 如果不传递 `element` 参数，返回值是 `$(selector)` 集合中第一个元素相对于其 `同级元素` 的位置。
- 如果 `element` 参数是 `DOM 元素` 或者 `jQuery 对象`，返回值是 `element` 相对于 `$(selector)` 集合的位置。
- 如果 `element` 参数是 `jQuery 对象集合`，返回值是 `element` 集合中第一个元素相对于 `$(selector)` 集合的位置。

# 样式操作

## 获取 / 设置 CSS 样式

> `属性名` 需要加 `引号`
> 如果 `属性值` 是数字，可以不加 `单位` 和 `引号`

### 获取

- `.css(属性名)`

### 设置

> `.css(属性名, 属性值)`

### 设置多个

> `属性名` 使用 `驼峰法` 时，可以不加 `引号`。

```javascript
.css({
    属性名: 属性值,
    属性名: 属性值,
    ...
});
```

## 设置类名

> 作用等同于原生 JavaScript 的 classList 相关方法

```javascript
.className;            // 获取类名
.classList.add();      // 添加类名
.classList.remove();   // 移除类名
.classList.contains(); // 是否包含指定类名
.classList.toggle();   // 切换类名
```

### 添加类名

- `.addClass()`

  > 可同时添加多个，例如：`.addClass('a b c d')`

### 删除类名

- `.removeClass()`

  > 不传参数时删除全部

### 切换类名

- `.toggleClass()`

# 事件切换

> 功能类似 CSS 中的伪类 `:hover`

### 语法

> `hover( in[, out] )`

- **in**：鼠标移入元素时触发的函数
- **out**：鼠标移出元素时触发的函数
- 如果只写 `in`，则鼠标移入和移出元素是都会触发。

# 动画效果

## 参数

- 此处的参数都可以省略（**`fadeTo` 除外，需要 `speed`**），表示无动画直接显示。
- `speed`
  三种预定速度之一的字符串（`slow`、`normal`、`fast`）或表示动画时长的毫秒数值（例如：`1000`）。
- `easing`
  指定动画曲线，默认是 `swing`，可用参数 `linear`。
- `fn`
  回调函数，在动画完成时执行的函数，每个元素执行一次。

## 显示隐藏

### 显示

- `show(speed, easing, fn)`

### 隐藏

- `hide(speed, easing, fn)`

### 切换

- `toggle(speed, easing, fn)`

## 上滑下滑

### 上滑

- `slideUp(speed, easing, fn)`

### 下滑

- `slideDown(speed, easing, fn)`

### 切换

- `slideToggle(speed, easing, fn)`

## 淡入淡出

### 淡入

- `fadeIn(speed, easing, fn)`

### 淡出

- `fadeOut(speed, easing, fn)`

### 切换

- `fadeToggle(speed, easing, fn)`

### 到指定的不透明度

- `fadeTo(speed, opacity, easing, fn)`
  
  > **opactiy**（必需）：透明度，取值为 `0 ~ 1` 之间的数，包括 `0` 和 `1`。

## 自定义动画

### 方法

- `animate( params, [speed], [easing], [fn] )`

  > **params**（必需）：想要执行动画的样式 `属性名` 以及对应的 `属性值`，以 `对象形式` 传递（属性名可以不带引号）。
  > 如果是 `复合属性` 则需要使用 `驼峰命名法`（例如：borderLeft）。
  >
  > **注意**
  > 此方法设置背景颜色时，没有过渡效果，需要使用 `jquery-color` 插件。

## 停止动画队列

> 默认动画效果一旦触发就会执行直到结束，如果多次触发，就导致多个动画或者效果排队执行。

### 方法

- `stop()` 方法用于停止动画或效果
- `stop()` 写到动画或效果的 `前面`，结束上一次的动画。
  （先调用 `stop()`，再调用动画）

# 操作属性

## 操作元素固有属性

> 元素本身自带的属性
> 例如：a 标签的 `href`、input 标签的 `type`

### 获取

- `prop('属性名')`

### 设置

- `prop('属性名', '属性值')`

### 注意

- `prop()` 除了操作普通属性，更适合操作表单属性：
  - disabled
  - checked
  - selected
  - ...

## 操作元素自定义属性

> 用户自己给元素添加的属性
> 例如：给 div 添加 `index="1"`

### 获取

- `attr('属性名')`

  > 类似原生中的 `getAttribute('属性名')`

### 设置

- `attr('属性名', '属性值')`

  > 类似原生中的 `setAttribute('属性名', '属性值')`

### 删除

- `removeAttr('属性名')`

  > 类似原生中的 `removeAttribute('属性名')`

# 操作 HTML、文本内容

> 不加参数时为获取
> 加参数时为设置

### html()

- 获取 / 设置标签内的所有内容

  > 解析 HTML 标签

### text()

- 获取 / 设置标签内的文本内容

  > 不解析 HTML 标签

### val()

- 获取 / 设置表单的值

# 遍历

## 方法

- `$.each( object , function( index , element ) { } )`

## 说明

- `$.each()` 方法可用于遍历任何对象
- 主要用于数据处理，例如：数组、对象
- `index`：每个元素的索引号
- `element`：当前遍历到的项

# 元素操作

## 遍历元素

> 访问一组元素中的每个元素

### 方法

- `.each( function( index, domElement ) { } )`

### 说明

- `each()` 方法主要用于 DOM 处理
- `index`
  每个元素的索引号
- `domElement`
  当前遍历到的 DOM 元素对象
- 如果要对 `domElement` 使用 `jQuery 方法`，需要使用 `$(domElement)` 将其转换为 `jQuery 对象`。

## 创建元素

- `$('<标签名>标签内容</标签名>')`

## 添加元素

### 内部添加

- `element.append('内容')`

  > 把内容放入 `element` 元素内部的最后面
  > 类似原生的 `appendChild()`

- `element.prepend('内容')`

  > 把内容放入 `element` 元素内部的最前面

### 外部添加

- `element.after('内容')`

  > 把内容放到 `element` 元素的后面

- `element.before('内容')`
  
  > 把内容放到 `element` 元素的前面

### 注意

- `内部添加` 元素，生成后，它们是 `父子关系`
- `外部添加` 元素，生成后，它们是 `兄弟关系`

## 删除元素

### 方法

- `element.remove()`

  > 删除 `element` 自身

- `element.empty()`

  > 清空 `element` 的内容

- `element.html('')`

  > 清空 `element` 的内容

### 注意

- `element` 可以是单个元素，也可以是多个元素的集合。
- `empty()` 和 `html()` 作用等价，但 `html()` 可以设置内容。

## 克隆元素

### 方法

- `clone( [true] )`

  > 克隆调用该方法的元素

### 参数说明

- `true` 可选
  - 如果填写，该元素绑定的事件也会被克隆。
  - 如果不填写或为 `false`，只会克隆元素本身。

# 尺寸、位置操作

## 尺寸操作

> 不同的 API 对应不同的盒子模型

### 方法

方法 | 说明
---- | ----
`width(值)`<br>`height(值)` | 元素宽度和高度<br>只算 width / height
`innerWidth(值)`<br>`innerHeight(值)` | 元素宽度和高度<br>包含 padding
`outerWidth(值)`<br>`outerHeight(值)` | 元素宽度和高度<br>包含 padding、border
`outerWidth(值, true)`<br>`outerHeight(值, true)` | 元素宽度和高度<br>包含 padding、border、margin

### 注意

- 参数 `值` 为 `空` 时，获取对应的值，返回 `Number`。
- 参数 `值` 为 `数字` 时，修改对应的值。
- 参数 `值` 可以不写单位

## 位置操作

### offset()

> 用于 `获取` 或 `设置` 元素相对于文档的偏移坐标（与父级没有关系）

- 该方法有 2 个属性：
  - `offset().top`：距离文档顶部的距离
  - `offset().left`：距离文档左侧的距离
- 设置元素的偏移坐标：`offset( { top: 值, left: 值 } )`

### position()

> 用于 `获取` 元素相对于带有非静态定位的父级偏移坐标
> 如果所有父级都没有定位，则以文档为准。

- 该方法有 2 个属性：
  - `position().top`：距离文档顶部的距离
  - `position().left`：距离文档左侧的距离

### scrollTop() / scrollLeft()

> 用于 `获取` 或 `设置` 元素被卷去的顶部距离和左侧距离

- 无参数时获取对应的值
- 参数为不带单位的数字时设置对应的值

# 事件

> **优点：**
> 操作简单，且不用担心事件覆盖等问题。
> **缺点：**
> 普通的事件注册不能做事件委托，且无法实现事件解绑，需要借助其他方法。

## 事件注册

### 注册单个事件

- 语法

  ```javascript
  element.不带on的事件名(function () { })
  ```

- 例如

  ```javascript
  $('div').click(function () { })
  ```

  > 其他事件与原生基本一致
  > `mouseover`、`mouseout`、`blur`、`focus`、`change`、`keydown`、`keyup`、`resize`、`scroll`、...

- 注意

  - 部分原生事件没有在 jQuery 中提供（例如 `input` 事件）

## 事件处理

> 因为普通注册事件方法的不足，jQuery 又开发了多个处理方法：
> `bind()`、`live()`、`delegate()`、`on()` 等，其中最好用的是 `on()`。

### 绑定事件：on()

> 用于在匹配元素上绑定一个或多个事件的事件处理函数

#### 语法

- `element.on(events, [selector], fn)`

#### 说明

- `events`
  一个或多个用空格分隔的事件类型，例如 `click`、`keydown`
- `selector`
  元素的子元素选择器
- `fn`
  回调函数

#### 优势

- 可以绑定多个事件，多个事件处理程序

  > 使用对象的形式写事件名以及对应的事件处理程序

  ```javascript
  $('div').on({
      click: function () { },
      mouseover: function () { },
      mouseout: function () { },
      ...
  });
  ```

  > 如果事件处理程序相同，还可以以空格分隔事件类型

  ```javascript
  $('div').on('mouseover mouseout', function () { });
  ```

- 可以进行事件委派操作

  > 把 `li` 的事件绑定到 `ul` 上

  ```javascript
  $('ul').on('click', 'li', function() { });
  ```

- 可以给动态生成的元素绑定事件

  ```javascript
  $('div').on('click', 'p', function(){
      alert('给动态生成的元素绑定事件');
  });

  $('div').append( $('<p>动态创建的元素</p>') );
  ```

### 解绑事件：off()

> jQuery 提供了多种事件解绑方法：
> `die()`、`undelegate()`、`off()` 等
> 甚至还有只触发一次的事件绑定方法 `one()`

#### 语法

> `$(selector).off(event, selector, function(eventObj), map)`

#### 说明

- `event`
  可选。指定要从被选元素移除的一个或多个事件或命名空间。
  由空格分隔多个事件值，必须是有效的事件。
- `selector`
  可选。指定添加事件处理程序时最初传递给 on() 方法的选择器。
- `function(eventObj)`
  可选。指定当事件发生时运行的函数。
- `map`
  指定事件映射 (`{event:function, event:function, ...}`)，
  包含要添加到元素的一个或多个事件，以及当事件发生时运行的函数。

#### 例如

```javascript
$('p').off();               // 解绑 p 元素上所有事件处理程序
$('p').off('click');        // 解绑 p 元素上的点击事件
$('ul').off('click', 'li'); // 解绑事件委托
```

> **注意：**
> 如果有的事件只需要触发一次，可以使用 `one()` 绑定事件。

### 自动触发事件：trigger()

> 在某些特定的条件下，需要让某些事件能自动触发。
> 例如轮播图模拟点击右侧按钮实现自动轮播，可以利用定时器自动触发右侧按钮的点击事件。
> jQuery 为提供了两个触发事件的方法：`trigger()` 和 `triggerHandler()`

#### 第一种触发方法：click()

- `element.click()`

  > 触发点击事件

#### 第二种触发方法：trigger()

- `element.trigger('type')`

#### 第三种触发方法：triggerHandler()

- `element.triggerHandler('type')`

#### 注意

- `trigger()` 会触发元素的默认行为
- `triggerHandler()` 不会触发元素的默认行为

## 事件对象

> jQuery 对 DOM 中的事件对象进行了封装，兼容性更好，获取更方便，使用方式与原生区别不大。
> 只要事件被触发，就会产生事件对象。

### 语法

- `element.on(event, [selector], function(e) { })`

### 阻止默认行为

- `e.preventDefault()`
- `return false`

### 阻止冒泡

- `e.stopPropagation()`

# 多库共存

## 问题概述

- jQuery 把 `$` 作为标识符，随着 `jQuery` 的流行，其他 JavaScript 库也会把 `$` 作为标识符，一起使用时会导致冲突。

## 客观需求

- 需要一个解决方案，让 jQuery 和其他的 JavaScript 库不产生冲突，可以同时存在，这就叫做 `多库共存`。

## jQuery 解决方案

- 把 `$` 符号统一改为 `jQuery`

  > 例如：`jQuery('div')`

- jQuery 变量规定新的名称：`$.noConflict()` 

  > 例如：`var newName = $.noConflict()`

# 插件扩展机制

## 介绍

- 如果需要实现某一个功能，需要用到一个方法，但是 jQuery 并没有封装这个方法供 jQuery 对象使用，就需要对方法进行扩展。
- jQuery 预留了一个扩展方法的接口

## 格式

- `$.fn.extend(object)`
- `jQuery.fn.extend(object)`

## 语法

```javascript
$.fn.extend({
    方法名: function () { },
    方法名: function () { },
    ...
});
```

> 方法中的 `this` 指向 `jQuery 对象`

## 注意

- 在整个 jQuery 中，除了扩展方法中的 `this` 指向 `jQuery对象`，其它地方都是指向 `DOM 对象`。
 
```javascript
$('#btn').click(function () {
    // 本方法中的 this 是 DOM 对象
    // $(this) 是 jQuery 对象
});
```
