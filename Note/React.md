<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/style.css">
<script src="./assets/script.js"></script>
<div class="contents"></div>

# React

- [React](#react)
- [简介](#简介)
- [相关链接](#相关链接)
- [特点](#特点)
- [用法](#用法)
  - [渲染元素](#渲染元素)
  - [JSX](#jsx)
    - [注释](#注释)
    - [标签属性](#标签属性)
      - [class](#class)
      - [style](#style)
      - [事件](#事件)
      - [列表渲染](#列表渲染)
    - [不在页面中显示的值](#不在页面中显示的值)
  - [类组件](#类组件)
    - [定义组件](#定义组件)
    - [组件通讯](#组件通讯)
      - [父组件 -> 子组件](#父组件-子组件)
      - [子组件 -> 父组件](#子组件-父组件)
      - [注意](#注意)
    - [生命周期](#生命周期)
      - [挂载](#挂载)
      - [更新](#更新)
      - [卸载](#卸载)
      - [错误处理](#错误处理)
  - [表单](#表单)
  - [Fragments](#fragments)

# 简介

用于构建用户界面的 JavaScript 库。

# 相关链接

- 官方中文文档：https://react.docschina.org/
- 菜鸟教程：https://www.runoob.com/react/react-tutorial.html

# 特点

- 可以使用 JSX 语法。

  > JSX：JavaScript XML，JavaScript 语法扩展

- 虚拟 DOM，快速高效，跨浏览器兼容性。
- 组件化，复用性。
- 灵活性（可配合其他库使用）。

# 用法

## 渲染元素

```javascript
ReactDOM.render(根组件, 挂载节点);
```

## JSX

### 注释

```
{/* 注释内容 */}
```

### 标签属性

> 每个属性只能同时存在一个

#### class

- 需要改为 `className`

#### style

> 样式属性名需要使用驼峰式写法

```javascript
let elem = <标签名 style={ { 样式属性名: 样式属性值, 样式属性名: 样式属性值, ... } }></标签名>;
```

```javascript
let style = { 样式属性名: 样式属性值, 样式属性名: 样式属性值, ... };
let elem = <标签名 style={ style }></标签名>;
```

#### 事件

无参数

```javascript
function example(ev) {
    // ev：事件对象
}

let elem = <标签 onClick={ example }></标签>;
```

有参数

```javascript
function example(a, b, ev) {
    // a：1
    // b：2
    // ev：事件对象
}

let elem = <标签 onClick={ example.bind(null, 1, 2) }></标签>;
```

#### 列表渲染

```javascript
let contents = [1, 2, 3, 4, 5];
let listItems = contents.map((value, index) => {
        return <li key="{ index }">{ value }</li>;
    }
);

// 自动展开数组
let elem = <ul>{ listItems }</ul>;
```

### 不在页面中显示的值

- null
- undefined
- 布尔（true、false）

## 类组件

> https://zh-hans.reactjs.org/docs/react-component.html

### 定义组件

> 需要继承 `React.Component`

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, { this.props.name }</h1>;
  }
}
```

### 组件通讯

#### 父组件 -> 子组件

设置

```javascript
let html = <div><Child 属性名="属性值" /></div>;
```

获取

```javascript
// 在子组件中
this.props.属性名
```

#### 子组件 -> 父组件

在父组件中定义处理对应 state 的函数，通过 props 将函数名传入子组件，子组件调用父组件总对应的函数，处理 state。

#### 注意

- 不能修改 `this.props` 的属性

### 生命周期

#### 挂载

> 当组件实例被创建并插入 DOM 中时

1. **constructor()**
2. static getDerivedStateFromProps()
3. **render()**
4. **componentDidMount()**

> **即将过时（应避免使用）**
> UNSAFE_componentWillMount()

#### 更新

> 当组件的 props 或 state 发生变化时会触发更新

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. **render()**
4. getSnapshotBeforeUpdate()
5. **componentDidUpdate()**

> **即将过时（应避免使用）**
> UNSAFE_componentWillUpdate()
> UNSAFE_componentWillReceiveProps()

#### 卸载

> 当组件从 DOM 中移除时

1. **componentWillUnmount()**

#### 错误处理

> 当渲染过程、生命周期，或子组件的构造函数中抛出错误时

1. static getDerivedStateFromError()
2. componentDidCatch()

## 表单

- https://zh-hans.reactjs.org/docs/forms.html

## Fragments 

- https://zh-hans.reactjs.org/docs/fragments.html
