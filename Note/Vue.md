<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/style.css">
<script src="./assets/script.js"></script>
<div class="contents"></div>

# Vue.js（2.x）

- [Vue.js（2.x）](#vue-js-2-x)
- [简介](#简介)
- [相关网站](#相关网站)
- [data（数据对象）](#data-数据对象)
    - [访问](#访问)
    - [注意](#注意)
- [模板语法](#模板语法)
  - [插值](#插值)
    - [文本](#文本)
    - [HTML](#html)
- [指令](#指令)
  - [v-bind](#v-bind)
    - [简介](#简介-1)
    - [用法](#用法)
  - [v-on](#v-on)
    - [简介](#简介-2)
    - [用法](#用法-1)
    - [事件修饰符](#事件修饰符)
    - [按键修饰符](#按键修饰符)
    - [系统修饰键](#系统修饰键)
  - [v-if（条件渲染）](#v-if-条件渲染)
    - [简介](#简介-3)
    - [用法](#用法-2)
    - [注意](#注意-1)
  - [v-show（条件显示）](#v-show-条件显示)
    - [简介](#简介-4)
    - [用法](#用法-3)
    - [注意](#注意-2)
  - [v-for（列表渲染）](#v-for-列表渲染)
    - [简介](#简介-5)
    - [用法](#用法-4)
    - [维护状态](#维护状态)
    - [数组更新检测](#数组更新检测)
      - [变更方法](#变更方法)
      - [注意事项](#注意事项)
  - [v-model（表单输入绑定）](#v-model-表单输入绑定)
    - [基础用法](#基础用法)
    - [修饰符](#修饰符)
- [事件处理方法](#事件处理方法)
    - [用法](#用法-5)
    - [注意](#注意-3)
- [计算属性](#计算属性)
  - [简介](#简介-6)
  - [基础用法](#基础用法-1)
  - [setter](#setter)
- [侦听器](#侦听器)
  - [简介](#简介-7)
  - [用法](#用法-6)
- [组件](#组件)
  - [简介](#简介-8)
  - [基础用法](#基础用法-2)
    - [定义](#定义)
    - [使用](#使用)
    - [注意](#注意-4)
  - [data](#data)
  - [通过 Prop 向子组件传递数据](#通过-prop-向子组件传递数据)
    - [简介](#简介-9)
    - [使用方式](#使用方式)
    - [单向数据流](#单向数据流)
    - [Prop 验证](#prop-验证)
  - [访问元素 & 组件](#访问元素-组件)
    - [访问子组件实例或子元素（$refs）](#访问子组件实例或子元素-refs)
    - [触发父组件的自定义事件（$emit）](#触发父组件的自定义事件-emit)
      - [使用方式](#使用方式-1)
      - [例子](#例子)
  - [插槽（slot）](#插槽-slot)
    - [默认插槽](#默认插槽)
      - [例子](#例子-1)
    - [具名插槽](#具名插槽)
      - [例子](#例子-2)
      - [注意](#注意-5)
    - [作用域插槽（slot-scope）](#作用域插槽-slot-scope)
  - [动态组件 & 异步组件](#动态组件-异步组件)
    - [动态组件](#动态组件)
  - [transition 组件](#transition-组件)
    - [单元素 / 组件的过渡（transition）](#单元素-组件的过渡-transition)
      - [简介](#简介-10)
      - [过渡的类名](#过渡的类名)
      - [JavaScript 钩子函数](#javascript-钩子函数)
    - [列表的进入 / 离开过渡（transition-group）](#列表的进入-离开过渡-transition-group)
      - [简介](#简介-11)
- [过滤器](#过滤器)
  - [定义过滤器](#定义过滤器)
    - [局部](#局部)
    - [全局](#全局)
  - [使用](#使用-1)
    - [普通方式](#普通方式)
    - [串联](#串联)
    - [接收参数](#接收参数)
- [生命周期](#生命周期)
  - [生命周期图示](#生命周期图示)
  - [生命周期钩子](#生命周期钩子)
    - [beforeCreate](#beforecreate)
    - [created](#created)
    - [beforeMount](#beforemount)
    - [mounted](#mounted)
    - [beforeUpdate](#beforeupdate)
    - [updated](#updated)
    - [beforeDestroy](#beforedestroy)
    - [destroyed](#destroyed)
    - [注意](#注意-6)
- [Vue CLI（脚手架）](#vue-cli-脚手架)
  - [简介](#简介-12)
  - [相关链接](#相关链接)
  - [配置 webpack](#配置-webpack)
    - [代理服务器](#代理服务器)
- [Vue Router（路由）](#vue-router-路由)
  - [相关链接](#相关链接-1)
  - [安装](#安装)
    - [直接下载 / CDN](#直接下载-cdn)
    - [NPM](#npm)
    - [注意](#注意-7)
  - [配置](#配置)
    - [router/index.js](#router-index-js)
      - [例子](#例子-3)
    - [动态路由匹配](#动态路由匹配)
    - [重定向（redirect）和别名（alias）](#重定向-redirect-和别名-alias)
    - [路由组件传参（props）](#路由组件传参-props)
      - [布尔模式](#布尔模式)
      - [对象模式](#对象模式)
      - [函数模式](#函数模式)
    - [嵌套路由（children）](#嵌套路由-children)
    - [编程式导航](#编程式导航)
      - [router.push()](#router-push)
      - [router.replace()](#router-replace)
      - [router.go()](#router-go)
    - [导航守卫](#导航守卫)
      - [全局前置守卫（beforeEach）](#全局前置守卫-beforeeach)
      - [全局解析守卫（beforeResolve）](#全局解析守卫-beforeresolve)
      - [全局后置钩子（afterEach）](#全局后置钩子-aftereach)
      - [路由独享的守卫（beforeEnter）](#路由独享的守卫-beforeenter)
      - [组件内的守卫](#组件内的守卫)
  - [router-link](#router-link)
    - [to 属性](#to-属性)
    - [replace 属性](#replace-属性)
    - [append 属性](#append-属性)
    - [tag 属性](#tag-属性)
    - [active-class 属性](#active-class-属性)
    - [exact-active-class 属性](#exact-active-class-属性)
    - [exact 属性](#exact-属性)
    - [event 属性](#event-属性)
    - [接收数据](#接收数据)
  - [router-view](#router-view)
- [Vuex](#vuex)
  - [相关链接](#相关链接-2)
  - [安装](#安装-1)
    - [直接下载 / CDN](#直接下载-cdn-1)
    - [NPM](#npm-1)
    - [Vue](#vue)
  - [State](#state)
  - [Getters](#getters)
  - [Mutations](#mutations)
  - [Actions](#actions)
  - [Modules](#modules)

# 简介

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

# 相关网站

- https://cn.vuejs.org/
- https://www.runoob.com/vue2/vue-tutorial.html

# data（数据对象）

```javascript
new Vue({
    el: '...',
    data: {
        // 数据对象
        ...
    }
});
```

### 访问

- `实例对象.$data.属性名`
- `实例对象._data.属性名`

### 注意

- Vue 对 `data` 对象中的属性递归设置 `getter` & `setter` 观察数据变化
- 不会观察 `prototype` 原型中的数据变化
- 不推荐把 DOM 元素设置为 `data` 对象中的属性值

# 模板语法

> https://cn.vuejs.org/v2/guide/syntax.html

## 插值

### 文本

- 数据绑定最常见的形式就是使用 `Mustache` 语法 (双大括号) 的文本插值：

  ```html
  <span>Message: {{ msg }}</span>
  ```

  > Mustache 标签将会被替代为对应 `数据对象` 上 `msg` 属性的值。
  > 
  > 无论何时，绑定的数据对象上的 `msg` 属性发生了改变，插值处的内容都会更新。
  > 通过使用 `v-once` 指令，可以执行一次性插值，当数据改变时，插值处的内容不会更新。
  > 注意：这会影响到该节点上的其它数据绑定。

  ```html
  <span v-once>Message: {{ msg }}</span>
  ```

- 也可以使用 `v-text` 指令显示文本

  ```html
  <span v-text="msg"></span>
  ```

### HTML

- `双大括号` 会将数据解析为 `普通文本`，而非 HTML 代码。
- 为了输出真正的 `HTML`，需要使用 `v-html` 指令：

  ```html
  <span v-html="rawHtml"></span>
  ```

- 注意

  - 在站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。
  - 建议只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。

# 指令

## v-bind

### 简介

`v-bind` 指令可以用于响应式地更新 `HTML attribute`

### 用法

- `v-bind:参数="表达式"`

  > `参数` 为 HTML 标签属性名
  > `表达式` 可以是 `data` 对象中的属性名，也可以是表达式（例如 `num * num`、`num > 10`）

  ```html
  <a v-bind:href="url">...</a>
  ```

  ```javascript
  new Vue({
      ...
      data: {
          url: '链接'
      }
  });
  ```

- 动态参数：`v-bind:[属性名]="表达式"`

  > `属性名` 为 `data` 对象中的属性名
  > `属性名` 会被转换为小写，因此不能使用大写字母
  > 动态参数表达式有一些语法约束，某些字符（例如空格、引号）是无效的。

  ```html
  <a v-bind:[attr_name]="url">...</a>
  ```

  ```javascript
  new Vue({
      ...
      data: {
          attr_name: 'href',
          url: '链接'
      }
  });
  ```

- 添加类名（对象方式）
  `v-bind:class="{类名: 表达式, 类名: 表达式, ...}"`

  > 当表达式结果为 `true` 时添加对应的类名

- 添加类名（数组方式）
  `v-bind:class="[{类名: 表达式, 类名: 表达式, ...}, 表达式, '类名', ...]"`

  > 数组中可以写 `对象`、`表达式`，也可以直接写 `类名`

- 通过 `v-bind` 指令添加的类名与通过 `class` 属性添加的类名共存。

- 添加样式：`v-bind:style="表达式"`

  - 表达式有以下写法

    - `{'属性名': '属性值', '属性名': '属性值', ...}`

    - `{属性名, 属性名, ...}`
      属性名为 `data` 对象中的属性名（获取对应的变量值）

    - `{'属性名': ['属性值', '属性值', ...]}`
      多重值，主要用于兼容（自动选择浏览器支持的最后一个值）

    - 直接写 `data` 对象中的属性名（获取对应的对象）

  - 若 `属性名` 有 `-`，需要使用驼峰命名法
  - 通过 `v-bind` 指令添加的样式会根据实际自动添加兼容性前缀（`-webkit-`、`-moz-`、`-ms-`、`-o-`、）

- `v-bind:` 可缩写为 `:`

  ```html
  <!-- 完整 -->
  <a v-bind:href="url">...</a>

  <!-- 缩写 -->
  <a :href="url">...</a>
  <a :[key]="url">...</a>
  ```

## v-on

### 简介

`v-on` 指令用于绑定监听事件

### 用法

- `v-on:事件名.事件修饰符="表达式"`
- 当表达式为调用事件处理方法，且不需要传递参数时，可省略方法名后的 `()`（第一个参数为原生事件对象）。
- 当表达式为调用事件处理方法，且需要传递参数时，可通过形参 `$event` 传递原生事件对象。
- `v-on:` 可缩写为 `@`

  ```html
  <!-- 完整 -->
  <a v-on:click="doSomething">...</a>
  
  <!-- 缩写 -->
  <a @click="doSomething">...</a>
  <a @[event]="doSomething">...</a>
  ```

### 事件修饰符

`事件修饰符` 是可选的，有以下值可用（多个值可串联使用）：

- `.stop` - 阻止冒泡
- `.prevent` - 阻止默认行为
- `.capture` - 使用事件捕获模式
- `.self` - 只在 `event.target` 是当前元素时才触发
- `.once` - 事件将只会触发一次
- `.passive` - 跳过检查是否阻止冒泡、是否阻止默认行为，可提升移动端 scroll 事件的性能

  > `.passive` 会告诉浏览器不想阻止事件的默认行为，因此不要把 `.passive` 和 `.prevent` 一起使用，
  > 否则 `.prevent` 将会被忽略，同时浏览器可能展示一个警告。

### 按键修饰符

- 在监听键盘事件时，可能需要判断按下的按键。
- Vue 允许为 `v-on` 在监听 `键盘事件` 时添加按键修饰符：

  ```html
  <!-- 只有在 key 是 Enter 时调用事件处理方法 submit() -->
  <input v-on:keyup.enter="submit">
  ```

- 可以直接将 `KeyboardEvent.key` 暴露的任意有效按键名转换为 `kebab-case` 来作为修饰符：

  ```html
  <!-- 只有在 $event.key 等于 PageDown 时调用事件处理方法 onPageDown() -->
  <input v-on:keyup.page-down="onPageDown">
  ```

- 按键码

  - 使用 `keyCode attribute` 是允许的

    > `keyCode` 的事件用法已经被废弃了并可能不会被最新的浏览器支持

    ```html
    <input v-on:keyup.13="submit">
    ```

  - 为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名

    - `.enter`
    - `.tab`
    - `.delete` - 捕获 `删除` 和 `退格` 键
    - `.esc`
    - `.space`
    - `.up`
    - `.down`
    - `.left`
    - `.right`

### 系统修饰键

- 可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器

  - `.ctrl`
  - `.alt`
  - `.shift`
  - `.meta`

  > **注意**
  > 
  > 在 Mac 系统键盘上，`meta` 对应 command 键 (`⌘`)。
  > 在 Windows 系统键盘 `meta` 对应 Windows 徽标键 (`⊞`)。
  > 在 Sun 操作系统键盘上，`meta` 对应实心宝石键 (`◆`)。
  > 在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品（例如 Knight、space-cadet），`meta` 被标记为“META”。
  > 在 Symbolics 键盘上，`meta` 被标记为“META”或者“Meta”。
  > 
  > `修饰键` 与 `常规按键` 不同，在和 `keyup` 事件一起用时，事件触发时 `修饰键` 必须处于 `按下` 状态。
  > 换句话说，只有在按住 `Ctrl` 的情况下释放其它按键，才能触发 `keyup.ctrl`。

  ```html
  <!-- Alt + C -->
  <input v-on:keyup.alt.67="clear">
  
  <!-- Ctrl + 点击 -->
  <div v-on:click.ctrl="doSomething">Do something</div>
  ```

- `.exact` 修饰符（控制由精确的系统修饰符组合触发的事件）

  ```html
  <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
  <button v-on:click.ctrl="onClick">A</button>

  <!-- 有且只有 Ctrl 被按下的时候才触发 -->
  <button v-on:click.ctrl.exact="onCtrlClick">A</button>

  <!-- 没有任何系统修饰符被按下的时候才触发 -->
  <button v-on:click.exact="onClick">A</button>
  ```

- 鼠标按钮修饰符（限制处理函数仅响应特定的鼠标按钮）

  - `.left` - 左键
  - `.right` - 右键
  - `.middle` - 中建

## v-if（条件渲染）

### 简介

- `v-if` 指令用于条件性地渲染一块内容
- 当指令的表达式值为 `true` 时渲染内容
- 当指令的表达式值为 `false` 时 DOM 元素被移除

### 用法

- `v-if="表达式"`

  ```html
  <h1 v-if="isShow">条件渲染</h1>
  ```

- 可以使用 `v-else` 添加一个 `else` 块

  ```html
  <h1 v-if="isShow">条件渲染（if）</h1>
  <h1 v-else>条件渲染（else）</h1>
  ```

- 可以使用 `v-else-if`，充当 `v-if` 的 `else-if` 块（可以连续使用）

  ```html
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A / B / C</div>
  ```

### 注意

- 在 `v-if` ... `v-else-if` ... `v-else` 之间不能加入非 `v-if` 指令的元素。
- 类似于 `v-else`，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。

## v-show（条件显示）

### 简介

另一个用于根据条件展示元素的选项是 `v-show` 指令，用法大致一样。
不同的是：带有 `v-show` 的元素始终会被渲染并保留在 DOM 中，`v-show` 只是简单地切换元素的 CSS 的 `display` 属性。

### 用法

- `v-show="表达式"`

  ```html
  <h1 v-show="isShow">条件显示</h1>
  ```

### 注意

- `v-show` 不支持 `<template>` 元素，也不支持 `v-else`。

## v-for（列表渲染）

### 简介

- 可以用 `v-for` 指令基于一个数组来渲染一个列表，类似于 `forEach()`。
- `v-for` 指令需要使用 `item in items` 形式的特殊语法（`items` - 源数据数组，`item` - 被迭代的数组元素的别名）。

### 用法

- `v-for="item in items"`

  ```html
  <ul>
      <li v-for="item in info" v-bind:data-id="item.id">{{ item.message }}</li>
  </ul>
  ```

  ```javascript
  new Vue({
      ...
      data: {
          info: [
              { id: 1, message: '一' },
              { id: 2, message: '二' },
              { id: 3, message: '三' },
              { id: 4, message: '四' }
          ]
      }
  });
  ```

  ```html
  <!-- 结果 -->
  <ul class="list-1">
      <li data-id="1">一</li>
      <li data-id="2">二</li>
      <li data-id="3">三</li>
      <li data-id="4">四</li>
  </ul>
  ```

- 在 `v-for` 块中，可以访问所有父作用域的 `property`。

- `v-for` 还支持一个可选的第二个参数（当前项的索引）。

  ```html
  <ul>
      <li v-for="(item, index) in items">{{ index }} - {{ item.message }}</li>
  </ul>
  ```

  ```html
  <!-- 结果 -->
  <ul class="list-2">
      <li data-id="1">0 - 一</li>
      <li data-id="2">1 - 二</li>
      <li data-id="3">2 - 三</li>
      <li data-id="4">3 - 四</li>
  </ul>
  ```

- 可以用 `of` 替代 `in` 作为分隔符（它更接近 JavaScript 迭代器的语法）

  ```html
  <ul>
      <li v-for="item of info">{{ item.message }}</li>
  </ul>
  ```

- 可以用 `v-for` 来遍历一个对象的 `property`

  > `object` 为对象，`value` 为属性值。

  ```html
  <ul>
      <li v-for="value in object">{{ value }}</li>
  </ul>
  ```

  > 可以提供第二个参数作为对象的属性名

  ```html
  <ul>
      <li v-for="(value, name) in object">{{ name }}: {{ value }}</li>
  </ul>
  ```

  > 还可以提供第三个参数作为索引

  ```html
  <ul>
      <li v-for="(value, name, index) in object">{{ index }} - {{ name }}: {{ value }}</li>
  </ul>
  ```

### 维护状态

- 当 Vue 更新使用 `v-for` 渲染的元素列表时，它默认使用 `就地更新` 的策略。
- 如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。
- 这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。
- 为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，需要为每项提供一个唯一 `key` 属性：

  ```html
  <div v-for="item in items" v-bind:key="item.id"> ... </div>
  ```

- 尽可能在使用 `v-for` 时提供 `key` 属性，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。
  因为它是 Vue 识别节点的一个通用机制，`key` 并不仅与 `v-for` 特别关联，它还具有其它用途。
- 不要使用对象或数组之类的非基本类型值作为 `v-for` 的 `key`，需要使用 `字符串` 或 `数值` 类型的值。

### 数组更新检测

#### 变更方法

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。
这些被包裹过的方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

#### 注意事项

- 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。

- `data` 对象中的数据通过绑定 `getter` 和 `setter` 观察数据变化并同步更新到页面中，
  但是数组中的元素没有 `getter` 和 `setter`，所以如果通过下标更新数组数据，页面数据不会跟随改变。

- 如果需要手动更新数组数据并同步到页面中，有以下的方式：
  - 使用被 Vue 包裹过的方法
  - 直接替换整个数组（可使用 `展开` 保留原有数据）
  - 使用 Vue 对象或 Vue 的静态 `set`、`delete` 方法

    > `vm` 为实例化的 Vue 对象

    - `vm.$set(vm.数组, 下标，值)`
    - `vm.$delete(vm.数组, 下标)`
    - `Vue.set(vm.数组, 下标, 值)`
    - `Vue.delete(vm.数组, 下标)`

- 如果需要手动更新对象数据并同步到页面中，有以下的方式：
  - 直接替换整个对象（可使用 `展开` 保留原有数据）
  - 使用 Vue 对象或 Vue 的静态 `set`、`delete` 方法

    > `vm` 为实例化的 Vue 对象

    - `vm.$set(vm.对象, 属性名，属性值)`
    - `vm.$delete(vm.对象, 属性名)`
    - `Vue.set(vm.对象, 属性名, 属性值)`
    - `Vue.delete(vm.对象, 属性名)`

## v-model（表单输入绑定）

> https://cn.vuejs.org/v2/guide/forms.html

### 基础用法

- 可以用 `v-model` 指令在表单元素（`<input>`、`<textarea>`、`<select>`）上创建双向数据绑定。

  - 它会根据控件类型自动选取正确的方法来更新元素。
  - 尽管有些神奇，但 v-model 本质上是语法糖。
  - 它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

- `v-model` 总是将 Vue 实例的数据作为数据来源，会忽略所有表单元素的 `value`、`checked`、`selected` 属性的初始值。
  因此应该通过 JavaScript 在组件的 `data` 对象中声明初始值。

- `v-model` 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

  - `text` 和 `textarea` 元素使用 `value` 属性和 `input` 事件
  - `checkbox` 和 `radio` 元素使用 `checked` 属性和 `change` 事件
  - `select` 元素使用 `value` 属性和 `change` 事件
  - 对于需要使用输入法（例如中文、日文、韩文等）的语言，`v-model` 不会在输入法组合文字过程中得到更新。
    如果要处理这个过程，需要使用 `input` 事件。

### 修饰符

- `.lazy`

  - 在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步（除了输入法组合文字时）。
  - 可以添加 `.lazy` 修饰符，从而转为在 `change` 事件之后进行同步。

    ```html
    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="msg">
    ```

- `.number`

  - 如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符。
  - 这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。
  - 如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

    ```html
    <input v-model.number="age" type="number">
    ```

- `.trim`

  - 如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符

    ```html
    <input v-model.trim="msg">
    ```

# 事件处理方法

### 用法

```javascript
new Vue({
  ...
  methods: {
    方法名: function (参数) {
      ...
    },
    方法名: function (参数) {
      ...
    },
    ...
  }
});
```

### 注意

- 事件处理方法中的 `this` 指向当前的 Vue 对象。

# 计算属性

> https://cn.vuejs.org/v2/guide/computed.html

## 简介

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
在模板中放入太多的逻辑会让模板过重且难以维护。
所以，对于任何复杂逻辑，都应当使用计算属性。

## 基础用法

```html
<div id="app">
    <p>原始内容：{{ msgOrigin }}</p>
    <p>新的内容：{{ msgNew }}</p>
</div>
```

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        msgOrigin: 'example'
    },
    computed: {
        msgNew: function () {
            // this 指向 vm 实例
            return this.msgOrigin.split('').reverse().join('');
        }
    }
});
```

```html
<!-- 结果 -->
<div id="app">
    <p>原始内容：example</p>
    <p>新的内容：elpmaxe</p>
</div>
```

## setter

计算属性默认只有 `getter`，如果需要，可以提供一个 `setter`

```javascript
new Vue({
    ...
    computed: {
        example: {
            // getter
            get: function () {
                return ...
            },
            // setter
            set: function () {
                ...
            }
        }
    }
});
```

# 侦听器

## 简介

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
因此 Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。
当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

## 用法

```javascript
new Vue({
    ...
    watch: {
        侦听属性名: function (newValue, oldValue) {
            ...
        }
    }
});
```

# 组件

## 简介

组件是可复用的 Vue 实例，且带有一个名字。
可以在一个通过 `new Vue` 创建的 Vue 根实例中，把这个组件作为自定义元素来使用。

## 基础用法

### 定义

```javascript
// 方式一（全局）

Vue.component('组件名称', {
    template: '内容' // 例如：<h2>这是一个标题</h2>
});

// 方式二（局部）

new Vue({
    ...
    components: {
        '组件名称': {
            template: '内容'
        }
    }
});
```

### 使用

```html
<组件名称></组件名称>
```

### 注意

- 组件模板（`template`）有且只有一个根节点。
- 组件中可以有子组件，且父组件可调用子组件。

  ```javascript
  new Vue({
      ...
      components: {
          '组件名称': {
              template: '内容',
              '组件名称': {
                  template: '内容'
              }
          }
      }
  });
  ```

## data

一个组件的 `data` 选项必须是一个函数，因此每个实例可以维护一份被返回对象的 `独立` 的拷贝。
否则，进行操作时可能会影响到其它所有的实例（因为对象是引用类型）。

```javascript
Vue.component('组件名称', {
    ...
    data: function () {
        return {
            属性名1: 属性值1,
            属性名2: 属性值2,
            ...
        }
    }
});
```

## 通过 Prop 向子组件传递数据

> https://cn.vuejs.org/v2/guide/components-props.html)

### 简介

Prop 是在组件上注册的一些自定义 attribute。

### 使用方式

当一个值传递给一个 `prop` attribute 的时候，它就变成了那个组件实例的一个 `property`。

```javascript
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});
```

一个组件默认可以拥有任意数量的 `prop`，任何值都可以传递给任何 `prop`。
一个 `prop` 被注册之后，就可以像这样把数据作为一个自定义 `attribute` 传递到子组件：

```html
<!-- 静态 -->
<blog-post title="标题1"></blog-post>
<blog-post title="标题2"></blog-post>
<!-- 动态 -->
<blog-post :title="data 中的属性名"></blog-post>
<blog-post :title="data 中的属性名"></blog-post>
```

### 单向数据流

所有的 `prop` 都使得其父子 `prop` 之间形成了一个单向下行绑定：

- 父级 prop 的更新会向下流动到子组件中，但是反过来则不行。
- 这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 `prop` 都将会刷新为最新的值。
这意味着不应该在一个子组件内部改变 `prop`，否则 Vue 会在浏览器的控制台中发出警告。

### Prop 验证

> https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81

## 访问元素 & 组件

### 访问子组件实例或子元素（$refs）

> https://cn.vuejs.org/v2/guide/components-edge-cases.html#访问子组件实例或子元素

尽管存在 `prop` 和事件，有的时候仍可能需要在 JavaScript 里直接访问一个子组件。
为了达到这个目的，可以通过 `ref` 这个 `attribute` 为子组件赋予一个 ID 引用，例如：

```html
<base-input ref="usernameInput"></base-input>
```

在已经定义了这个 `ref` 的组件里，可以使用：

```javascript
this.$refs.usernameInput
```

来访问这个 `<base-input>` 实例，以便不时之需（例如程序化地从一个父级组件聚焦这个输入框）。
该 `<base-input>` 组件也可以使用一个类似的 `ref` 提供对内部这个指定元素的访问，例如：

```html
<input ref="input">
```

甚至可以通过其父级组件定义方法：

```javascript
new Vue({
    ...
    methods: {
        // 从父级组件聚焦输入框
        focus: function () {
            this.$refs.input.focus();
        }
    }
});
```

这样就允许父级组件通过下面的代码聚焦 `<base-input>` 里的输入框：

```javascript
this.$refs.usernameInput.focus()
```

> 通过 `$refs` 获取同名 `ref` 的普通元素时，只能获取最后一个。
> 当 `ref` 和 `v-for` 一起使用的时候，得到的 `ref` 将会是一个包含了对应数据源的这些子组件的数组。
> 
> `$refs` 只会在组件渲染完成之后生效，并且它们不是响应式的。
> 这仅作为一个用于直接操作子组件的“逃生舱”，应该避免在模板或计算属性中访问 `$refs`。

### 触发父组件的自定义事件（$emit）

> https://cn.vuejs.org/v2/api/#vm-emit

#### 使用方式

- `vm.$emit( eventName, […args] )`

  - 触发当前实例上的事件
  - 附加参数都会传给监听器回调

- `vm.$on( eventName, fn )`

  - 监听事件 `eventName` 触发后调用 `fn()`

#### 例子

```javascript
Vue.component('welcome-btn', {
    // 事件名：welcome
    // 参数：张三
    template: `<button v-on:click="$emit('welcome', '张三')">欢迎</button>`
});

new Vue({
    el: '#emit-example-simple',
    methods: {
        // 事件处理方法
        sayHi: function (name) {
            alert(`您好，${name}！`)
        }
    }
});
```

```html
<div id="emit-example-simple">
    <!--
        事件名：welcome
        回调（事件处理方法）：sayHi()
    -->
    <welcome-btn v-on:welcome="sayHi"></welcome-btn>
</div>
```

## 插槽（slot）

> https://cn.vuejs.org/v2/guide/components-slots.html

### 默认插槽

#### 例子

模板

> 如果没有包含一个 `<slot>` 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。

```html
<a v-bind:href="url" class="nav-link">
  <slot></slot>
</a>
```

页面

```html
<navigation-link url="/profile">
  <span class="fa fa-user"></span>
  Your Profile
</navigation-link>
```

结果

```html
<a href="/profile" class="nav-link">
  <span class="fa fa-user"></span>
  Your Profile
</a>
```

### 具名插槽

#### 例子

模板

> `<slot>` 元素有一个特殊的 attribute：`name`
> 这个 attribute 可以用来定义额外的插槽
> 一个不带 `name` 的 `<slot>` 出口会带有隐含的名称 `default`

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

页面

> 在向具名插槽提供内容的时候，可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称。
> `<template>` 元素中的所有内容都将会被传入相应的插槽。
> 任何没有被包裹在带有 `v-slot` 的 `<template>` 中的内容都会被视为默认插槽的内容。

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

> 仍然可以在一个 `<template>` 中包裹默认插槽的内容：

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

结果

```html
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

#### 注意

- `v-slot` 只能添加在 `<template>` 上（只有一种例外情况），这一点和已经废弃的 `slot` attribute 不同。

### 作用域插槽（slot-scope）

> https://cn.vuejs.org/v2/guide/components-slots.html#作用域插槽

## 动态组件 & 异步组件

### 动态组件

```html
<component v-bind:is="组件名称"></component>
```

## transition 组件

> https://cn.vuejs.org/v2/guide/transitions.html

### 单元素 / 组件的过渡（transition）

#### 简介

Vue 提供了 `transition` 的封装组件，在以下的情形中，可以给任何元素和组件添加进入 / 离开过渡：

- 条件渲染 (使用 `v-if)`
- 条件显示 (使用 `v-show`)
- 动态组件
- 组件根节点

当插入或删除包含在 `transition` 组件中的元素时，Vue 将会做以下处理：

- 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加 / 删除 CSS 类名。
- 如果过渡组件提供了 `JavaScript 钩子函数`，这些钩子函数将在恰当的时机被调用。
- 如果没有找到 `JavaScript 钩子函数` 并且也没有检测到 CSS 过渡或动画，DOM 操作（插入 / 删除）在下一帧会立即执行。
  （注意：此指浏览器逐帧动画机制，和 Vue 的 `nextTick` 概念不同）

#### 过渡的类名

在 `进入` / `离开` 的过渡中，会有 6 个 `class` 切换：

- `v-enter`

  - 定义进入过渡的开始状态。
  - 在元素被插入之前生效，在元素被插入之后的下一帧移除。

- `v-enter-active`

  - 定义进入过渡生效时的状态。
  - 在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡动画完成之后移除。
  - 这个类可以被用来定义进入过渡的过程时间、延迟和曲线函数。

- `v-enter-to`

  - 定义进入过渡的结束状态（2.1.8 版及以上）。
  - 在元素被插入之后下一帧生效（与此同时 `v-enter` 被移除），在过渡动画完成之后移除。

- `v-leave`

  - 定义离开过渡的开始状态。
  - 在离开过渡被触发时立刻生效，下一帧被移除。

- `v-leave-active`

  - 定义离开过渡生效时的状态。
  - 在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡动画完成之后移除。
  - 这个类可以被用来定义离开过渡的过程时间、延迟和曲线函数。

- `v-leave-to`

  - 定义离开过渡的结束状态（2.1.8 版及以上）。
  - 在离开过渡被触发之后下一帧生效（与此同时 `v-leave` 被删除），在过渡动画完成之后移除。

![过渡](./assets/note-vue/transition.png)

对于这些在过渡中切换的类名，如果使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的 `默认前缀`。
如果使用了 `<transition name="example">`，前缀会变为 `example-`（`v-enter` 变为 `example-enter`）。
`v-enter-active` 和 `v-leave-active` 可以控制进入 / 离开过渡的不同的缓和曲线。

#### JavaScript 钩子函数

> https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90

可以在 `attribute` 中声明 JavaScript 钩子（`v-on:事件="事件处理函数"`）

```html
<transition
    v-on:before-enter="beforeEnter" v-on:enter="enter"
    v-on:after-enter="afterEnter" v-on:enter-cancelled="enterCancelled"
    v-on:before-leave="beforeLeave" v-on:leave="leave"
    v-on:after-leave="afterLeave" v-on:leave-cancelled="leaveCancelled"
>
    ...
</transition>
```

这些钩子函数可以结合 CSS `transitions` / `animations` 使用，也可以单独使用。

> 当只用 JavaScript 过渡的时候，在 `enter` 和 `leave` 函数中必须使用 `done` 进行回调。
> 否则，它们将被同步调用，过渡会立即完成。
> 
> 推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。
> 这也可以避免过渡过程中 CSS 的影响。

### 列表的进入 / 离开过渡（transition-group）

#### 简介

特点：

- 不同于 `<transition>`，它会以一个真实元素呈现：默认为一个 `<span>`（可以通过 `tag` 属性更换为其他元素）。
- `过渡模式` 不可用，因为不再相互切换特有的元素。
- 内部元素需要提供唯一的 `key` 属性值。
- CSS 过渡的类将会应用在内部的元素中，而不是这个组 / 容器本身。

# 过滤器

## 定义过滤器

### 局部

```javascript
new Vue({
    ...
    filters: {
        // capitalize：过滤器名称
        // value：原始值
        // return：返回过滤操作后的内容
        capitalize: function (value) {
            if (!value) {
                return '';
            }
            return value.charAt(0).toUpperCase() + value.substr(1);
        },
        // substr：过滤器名称
        // value：原始值
        // start、length：参数
        // return：返回过滤操作后的内容
        substr: function (value, start, length) {
            if (!value) {
                return '';
            }
            return value.substr(start, length);
        }
    }
});
```

### 全局

```javascript
Vue.filter('capitalize', function (value) {
    if (!value) {
        return '';
    }
    return value.charAt(0).toUpperCase() + value.substr(1);
});

new Vue({
    ...
});
```

## 使用

### 普通方式

```html
<!-- 方式一 -->
{{ 原始值 | 过滤器名称 }}

<!-- 方式二 -->
<div v-bind:属性名="原始值 | 过滤器名称"></div>
```

### 串联

```html
{{ 原始值 | 过滤器1 | 过滤器2 | ... }}
```

原始值 -> 过滤器1 -> 过滤器2 -> ...

### 接收参数

```html
{{ 原始值 | 过滤器名称(参数1, 参数2, ...) }}
```

```javascript
Vue.filter('过滤器名称', function (value, 参数1, 参数2, ...) {
    return ...
});
```

# 生命周期

## 生命周期图示

![生命周期图示](./assets/note-vue/lifecycle.png)

## 生命周期钩子

每个 Vue 实例在被创建时都要经过一系列的初始化过程：设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。
同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

### beforeCreate

在实例初始化之后，数据观测（data observer）和 event / watcher 事件配置之前被调用。

### created

在实例创建完成后被立即调用。
在这一步，实例已完成以下的配置：

- 数据观测（data observer）
- property 和方法的运算
- watch / event 事件回调

然而，挂载阶段还没开始，`$el` property 目前尚不可用。

### beforeMount

在挂载开始之前被调用：相关的 render 函数首次被调用。
该钩子在服务器端渲染期间不被调用。

### mounted

实例被挂载后调用，这时 `el` 被新创建的 `vm.$el `替换了。
如果根实例挂载到了一个文档内的元素上，当 `mounted` 被调用时 `vm.$el` 也在文档内。

注意：

- `mounted` 不会保证所有的子组件也都一起被挂载。
- 如果希望等到整个视图都渲染完毕，可以在 `mounted` 内部使用 `vm.$nextTick`：

  ```javascript
  mounted: function () {
      this.$nextTick(function () {
          ...
      });
  }
  ```

> 该钩子在服务器端渲染期间不被调用。

### beforeUpdate

数据更新时调用，发生在虚拟 DOM 打补丁之前。
这里适合在更新之前访问现有的 DOM（例如手动移除已添加的事件监听器）。

> 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。

### updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
当这个钩子被调用时，组件 DOM 已经更新，所以现在可以执行依赖于 DOM 的操作。
然而在大多数情况下，应该避免在此期间更改状态。
如果要相应状态改变，通常最好使用 `计算属性` 或 `watcher` 取而代之。

注意：

- `updated` 不会保证所有的子组件也都一起被重绘。
- 如果希望等到整个视图都重绘完毕，可以在 `updated` 内部使用 `vm.$nextTick`：

  ```javascript
  updated: function () {
     this.$nextTick(function () {
         ...
     });
  }
  ```

> 该钩子在服务器端渲染期间不被调用。

### beforeDestroy

被 `keep-alive` 缓存的组件激活时调用。

> 该钩子在服务器端渲染期间不被调用。

### destroyed

被 `keep-alive` 缓存的组件停用时调用。

> 该钩子在服务器端渲染期间不被调用。

### 注意

不要在选项 `property` 或回调上使用箭头函数，例如：

```javascript
created: () => {
    console.log(this.a);
}
```

```javascript
vm.$watch('a', newValue => this.myMethod());
```

因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，
经常导致 `Uncaught TypeError: Cannot read property of undefined`
或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。

# Vue CLI（脚手架）

## 简介

Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：

- 通过 `@vue/cli` 实现的交互式的项目脚手架。
- 通过 `@vue/cli` + `@vue/cli-service-global` 实现的零配置原型开发。
- 一个运行时依赖 (`@vue/cli-service`)，该依赖：
  - 可升级；
  - 基于 webpack 构建，并带有合理的默认配置；
  - 可以通过项目内的配置文件进行配置；
  - 可以通过插件进行扩展。
- 一个丰富的官方插件集合，集成了前端生态中最好的工具。
- 一套完全图形化的创建和管理 Vue.js 项目的用户界面。

Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject。

## 相关链接

- https://cli.vuejs.org/zh/

## 配置 webpack

### 代理服务器

```javascript
module.exports = {
    // 配置 webpack
    configureWebpack: {
        // 配置开发服务器
        devServer: {
            // 配置代理
            proxy: {
                // 请求路径
                '/example/a': {
                    // 实际请求的服务器根地址
                    target: 'https://example.com',
                    // 是否修改 origin（解决跨域）
                    changeorigin: true
                }
            }
        }
    }
}
```

# Vue Router（路由）

## 相关链接

- https://cn.vuejs.org/v2/guide/routing.html
- https://router.vuejs.org/zh/

## 安装

### 直接下载 / CDN

- `https://unpkg.com/vue-router/dist/vue-router.js`
- 在 `Vue` 后面引入 `vue-router`

  ```html
  <script src="/path/to/vue.js"></script>
  <script src="/path/to/vue-router.js"></script>
  ```

### NPM

- `npm install vue-router --save`

### 注意

如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：

```javascript
import Vue from 'vue'；
import VueRouter from 'vue-router'；

Vue.use(VueRouter)；
```

如果使用全局的 `script` 标签，则不需要进行该操作。

## 配置

### router/index.js

#### 例子

```javascript
// 导入 Vue
import Vue from 'vue';
// 导入 VueRouter
import VueRouter from 'vue-router';
// 导入组件
// @ 表示 /src
import Home from '@/pages/Home.vue';

// 使用 VueRouter 插件
Vue.use(VueRouter);

// 路由节点
const routes = [
    {
        // 路由路径标记（匹配字符串，以 / 开头）
        // string
        path: '/',
        // 当前路由匹配时显示的路由组件
        // Component
        component: Example,
        // 路由名称，设置为具名路由
        // string，可选
        name: '',
        // 路由重定向
        // string | Location | Function，可选
        redirect: '',
        // 路由组件传参
        // boolean | Object | Function，默认值为 false，可选
        props: '',
        // 路由别名
        // string | Array < string >，可选
        alias: '',
        // 嵌套路由
        // Array < RouteConfig >，可选
        children: [],
        // 路由守卫
        // 可选
        beforeEnter: (to: Route, from: Route, next: Function) => void,
        // 匹配规则是否大小写敏感
        // boolean，默认值为 false，可选
        caseSensitive: false
    },
    {
        path: '/',
        name: 'Default',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // 导入并使用组件
        // 代码拆分方式，会为此路由生成一个独立的 chunk 文件（about.[hash].js）
        // 访问时使用 lazy-loaded 加载方式
        component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
    }
];

// 创建路由对象
const router = new VueRouter({
    routes,
    // 模式
    // hash：默认，使用锚标记（#），刷新后可保持
    // history：使用 BOM 对象 history
    mode: 'hash',
    // 全局设置匹配路由时（匹配一部分即可）的链接标签类名
    linkActiveClass: 'router-link-active',
    // 全局设置匹配路由时（需要全匹配）的链接标签类名
    linkExactActiveClass: 'router-link-extract-active'
});

// 导出
export default router;
```

### 动态路由匹配

> https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html

有时候需要把某种模式匹配到的所有路由，全都映射到相同的组件中。
例如：有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。
那么，可以在 vue-router 的路由路径中使用“动态路径参数”（dynamic segment）来达到这个效果：

```javascript
const User = {
    template: '<div>User</div>'
};

const router = new VueRouter({
    routes: [
        {
            // 动态路径参数，以冒号开头
            path: '/user/:id',
            component: User
        }
    ];
});
```

之后，`/user/*` 都会映射到相同的路由（例如 `/user/foo`、`/user/bar`）。

一个“路径参数”使用冒号 `:` 标记。
当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内使用。
因此可以通过以下方法输出当前用户的 ID：

```javascript
const User = {
    template: '<div>User ID: {{ $route.params.id }}</div>'
};
```

### 重定向（redirect）和别名（alias）

> https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html

### 路由组件传参（props）

> https://router.vuejs.org/zh/guide/essentials/passing-props.html

#### 布尔模式

#### 对象模式

#### 函数模式

### 嵌套路由（children）

> https://router.vuejs.org/zh/guide/essentials/nested-routes.html

```text
/user/foo/profile        /user/foo/posts
+------------------+     +------------------+
| User             |     | User             |
| +--------------+ |     | +--------------+ |
| | Profile      | |     | | Posts        | |
| |              | |     | |              | |
| +--------------+ |     | +--------------+ |
+------------------+     +------------------+
```

### 编程式导航

> https://router.vuejs.org/zh/guide/essentials/navigation.html

除了使用 `<router-link>` 创建标签来定义导航链接，还可以借助 `router` 的实例方法，通过编写代码来实现。

> 注意：
> 在 Vue 实例内部可以通过 `$router` 访问路由实例，
> 因此，可以使用 `this.$router`。

#### router.push()

用法：

`router.push(location, onComplete?, onAbort?)`

#### router.replace()

用法：

`router.replace(location, onComplete?, onAbort?)`

#### router.go()

用法：

`router.go(n)`

### 导航守卫

> https://router.vuejs.org/zh/guide/advanced/navigation-guards.html

#### 全局前置守卫（beforeEach）

可以使用 `router.beforeEach()` 注册全局前置守卫：

```javascript
const router = new VueRouter({
    ...
});

router.beforeEach((to, from, next) => {
    ...
});
```

当一个导航触发时，全局前置守卫按照创建顺序调用。
守卫是 `异步解析执行`，此时导航在所有守卫 `resolve` 完之前一直处于 `等待中`。

每个守卫方法接收三个参数：

- `to: Route`

  即将要进入的目标 `路由对象`

- `from: Route`

  当前导航正要离开的 `路由对象`

- `next: Function`

  调用该方法来 `resolve` 这个钩子（必须）
  执行效果依赖 `next` 方法的调用参数

  - `next()`

    进行管道中的下一个钩子。
    如果全部钩子执行完了，则导航的状态就是 `confirmed`（确认的）。

  - `next(false)`

    中断当前的导航。
    如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 `from` 路由对应的地址。

  - `next('/')` 或 `next({ path: '/' })`

    跳转到一个不同的地址。
    当前的导航被中断，然后进行一个新的导航。
    可以向 `next` 传递任意位置对象，且允许设置如 `replace: true`、`name: 'home'` 之类的选项，
    以及任何用在 `router-link` 的 `to` 属性或 `router.push()` 中的选项。

  - `next(error)`（2.4.0+）

    如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止，且该错误会被传递给 `router.onError()` 注册过的回调。

  > 确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。
  > 它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错。

#### 全局解析守卫（beforeResolve）

> 2.5.0 新增

可以使用 `router.beforeResolve()` 注册全局解析守卫。
这和 `router.beforeEach()` 类似，区别是：
在导航被确认之前，同时在所有 `组件内守卫` 和 `异步路由组件` 被解析之后，解析守卫就被调用。

#### 全局后置钩子（afterEach）

可以使用 `router.afterEach()` 注册全局后置钩子。
与守卫不同的是，这些钩子不会接受 `next` 函数，也不会改变导航本身。

```javascript
const router = new VueRouter({
    ...
});

router.afterEach((to, from) => {
    ...
});
```

#### 路由独享的守卫（beforeEnter）

可以在路由配置上直接定义 beforeEnter 守卫
这些守卫与 `全局前置守卫` 的方法参数相同

```javascript
const router = new VueRouter({
    routes: [
        {
            path: '/example',
            component: Example,
            beforeEnter: (to, from, next) => {
                ...
            }
        }
    ];
});
```

#### 组件内的守卫

可以在路由组件内直接定义以下路由导航守卫

- `beforeRouteEnter`

  - 在渲染该组件的对应路由被 confirm 前调用
  - **不能获取组件实例 `this`**（在守卫执行前，组件实例还没被创建）

- `beforeRouteUpdate`（2.2 新增）

  - 在当前路由改变，但是该组件被复用时调用
    
    > 例如：
    > 对于一个带有动态参数的路径 `/example/:id`，在 `/example/1` 和 `/example/2` 之间跳转时，
    > 由于会渲染同样的 `Example` 组件，组件实例会被复用，而这个钩子就会在这个情况下被调用。

  - 可以访问组件实例 `this`

- `beforeRouteLeave`

  - 导航离开该组件的对应路由时调用
  - 可以访问组件实例 `this`

```javascript
const Foo = {
    template: ...,
    beforeRouteEnter (to, from, next) {
        ...
    },
    beforeRouteUpdate (to, from, next) {
        ...
    },
    beforeRouteLeave (to, from, next) {
        ...
    }
}
```

## router-link

### to 属性

```html
<router-link :to="{ ... }"></router-link>
```

```javascript
{
    // 要跳转到的锚标记路径
    path: '',
    // 要跳转到的具名路由名称
    name: '',
    // 锚标记
    hash: '',
    // 通过 GET 方式方式传递参数
    query: {
        属性名: 属性值,
        属性名: 属性值,
        ...
    },
    // 通过路由传递参数（需要 name）
    // 刷新后会丢失
    params: {
        属性名: 属性值,
        属性名: 属性值,
        ...
    }
}
```

### replace 属性

- 默认值为 `false`
- 属性值为 `true` 时，路由的跳转将以替换的形式跳转到下一个页面
  （下一个路由会把当前浏览器历史记录栈中的 URL 替换成将要跳转的路由）

### append 属性

- 默认值为 `false`
- 属性值为 `true` 时，若当前路由是相对路径（开头没有 `/`）路由的跳转将会基于当前路径进行下一级的跳转（附加）

### tag 属性

- 默认值为 `a`
- 指定该 `router-link` 标签渲染时的 DOM 元素

### active-class 属性

- 设置匹配路由时（匹配一部分即可），`router-link` 的类名。

### exact-active-class 属性

- 设置匹配路由时（需要全匹配），`router-link` 的类名。

### exact 属性

- 默认值为 `false`
- 指定当前 `router-link` 元素使用严格匹配
  此时 `active-class` 只能在严格匹配的模式下被激活

### event 属性

- 默认值为 `click`
- 指定可以用来触发当前 `router-link` 元素导航事件的事件
  可以是一个字符串，也可以是一个字符串数组

### 接收数据

- `this.$route.query`（接收 `to - query`）
- `this.$route.params`（接收 `to - params`）
- 组件 `props`（接收 `to - params`）

> 注意：
> `$route` - 当前路由对象
> `$router` - 全局路由对象

## router-view

当路由路由路径发生改变时，根据当前 VueRouter 的配置渲染对应的路由视图组件。
`router-view` 组件是一个 `functional` 组件，渲染路径匹配到的视图组件。
`router-view` 渲染的组件还可以内嵌自己的 `router-view`，根据嵌套路径，渲染嵌套组件。
其他属性（除 `name` 以外的非 `router-view` 使用的属性）都可以直接传给渲染的组件，很多时候，每个路由的数据都包含在路由参数中。
因为它是个组件，所以也可以配合 `<transition>` 和 `<keep-alive>` 使用（如果两个结合一起用，要确保在内层使用 `<keep-alive>`）。

# Vuex

## 相关链接

- https://vuex.vuejs.org/zh/

## 安装

### 直接下载 / CDN

- `https://unpkg.com/vuex`
- 在 `Vue` 后面引入 `vuex`

  ```html
  <script src="/path/to/vue.js"></script>
  <script src="/path/to/vuex.js"></script>
  ```

### NPM

- `npm install vuex --save`

### Vue

- `vue add vuex`（改变项目结构）

## State

## Getters

## Mutations

## Actions

## Modules

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。
当应用变得非常复杂时，`store` 对象就有可能变得相当臃肿。
为了解决以上问题，Vuex 允许将 `store` 分割成模块（`module`）。
每个模块拥有自己的 `state`、`mutation`、`action`、`getter`，甚至是嵌套子模块（从上至下进行同样方式的分割）。
