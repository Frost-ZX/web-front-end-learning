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
- [组件](#组件)
  - [transition 组件](#transition-组件)
    - [单元素 / 组件的过渡（transition）](#单元素-组件的过渡-transition)
      - [简介](#简介-6)
      - [过渡的类名](#过渡的类名)
      - [JavaScript 钩子函数](#javascript-钩子函数)
    - [列表的进入 / 离开过渡（transition-group）](#列表的进入-离开过渡-transition-group)
      - [简介](#简介-7)

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

# 组件

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
