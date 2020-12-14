<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# ES6（ECMAScript 6.0）

- [ES6（ECMAScript 6.0）](#es6-ecmascript-6-0)
- [简介](#简介)
- [相关网站](#相关网站)
- [变量](#变量)
  - [块级作用域](#块级作用域)
  - [声明变量](#声明变量)
    - [let](#let)
    - [const](#const)
      - [注意](#注意)
- [this](#this)
  - [globalThis](#globalthis)
- [模板字符串](#模板字符串)
  - [简介](#简介-1)
  - [例子](#例子)
- [函数](#函数)
  - [参数默认值](#参数默认值)
    - [设置默认值](#设置默认值)
    - [注意](#注意-1)
  - [rest 参数](#rest-参数)
    - [简介](#简介-2)
    - [例子](#例子-1)
  - [name 属性](#name-属性)
  - [严格模式](#严格模式)
  - [箭头函数](#箭头函数)
    - [基本用法](#基本用法)

# 简介

- ECMAScript 6.0 是 JavaScript 语言的下一代标准，在 2015 年 6 月正式发布。
- 它的目标是使 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

# 相关网站

- https://es6.ruanyifeng.com/
- https://www.runoob.com/w3cnote/es6-concise-tutorial.html

# 变量

## 块级作用域

## 声明变量

### let

- 它的用法类似于 `var`，但是所声明的变量只在 `let` 所在的代码块内有效（块级作用域）。
- `let` 声明的常量不存在变量提升。
- `let` 不允许在 `相同作用域` 内 `重复声明` 同一个变量。

### const

- `const` 声明一个只读的常量，所声明的常量只在 `const` 所在的代码块内有效（块级作用域）。
- 一旦声明，常量的值就不能被改变（必须在声明常量的同时对其进行赋值）。
- `const` 声明的常量与 `let` 一样不存在变量提升。
- `const` 声明的常量与 `let` 一样不可重复声明。

#### 注意

- `const` 实际上保证的，并不是变量的值不得改动，而是变量指向的那个 `内存地址` 所保存的数据不得改动。
- 对于 `简单类型` 的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
- 但对于 `复合类型` 的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
  `const` 只能 `保证` 这个 `指针是固定的`（即总是指向另一个固定的地址），但 `不能保证` 它指向的 `数据结构不可变` 。

# this

> 代表当前对象

## globalThis

# 模板字符串

## 简介

- 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
- 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
- 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
- 模板字符串中嵌入变量，需要将变量名写在 `${}` 之中。
- `${}` 内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
- 如果 `${}` 中的值不是字符串，将按照一般的规则转为字符串。
  （例如，大括号中是一个对象，将默认调用对象的 `toString()` 方法）
- 模板字符串可嵌套。

## 例子

```javascript
var str1 = 'a';
var str2 = 'b';
var str3 = `${str1}${str2}`;
console.log(str3); // 'ab'
```

# 函数

## 参数默认值

### 设置默认值

```javascript
function 函数名(形参1 = 值1, 形参2 = 值2, ...) {
    ...
}
```

### 注意

- 如果参数没有默认值，也没有传递参数值，值为 `undefined`。
- 默认值赋值，如果传入的参数是 `null` 会赋值为 `null`；
  如果传入的参数是 `undefined`，会使用默认值。
- 最好把 `没有默认值` 的形参写在 `前面`，`有默认值` 的形参写在 `后面`。
- 属性 `函数名.length` 获取函数形参的数量，若某个形参有默认值，`length` 将 `不包括` 它以及它之后的形参。
- 使用参数默认值时，函数 `不能` 有 `同名` 参数。
- 参数默认值不是传值的，而是每次都重新计算默认值表达式的值（`惰性求值`）。

## rest 参数

### 简介

- ES6 引入 `rest` 参数（形式为 `...变量名`），用于获取函数的多余参数，这样就不需要使用 `arguments` 了。
- rest 参数搭配的变量是一个 `数组`，该变量将多余的参数放入数组中。

### 例子

```javascript
function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

add(2, 5, 3); // 10
```

## name 属性

- 可通过函数的 `name` 属性获取该函数的 `函数名`。
- ES6 对这个属性的行为做出了一些修改。
  如果将一个 `匿名函数` 赋值给一个变量，`ES5` 的 name 属性返回 `空字符串`，而 `ES6` 的 `name` 属性返回 `实际的函数名`。

  ```javascript
  var fn = function () { };

  // ES5
  console.log(fn.name); // ""

  // ES6
  console.log(fn.name); // "fn"
  ```

## 严格模式

- 从 `ES5` 开始，函数内部可以设定为 `严格模式`。

  ```javascript
  function 函数名() {
    'use strict'; // 设定严格模式
    ...
  }
  ```

- `ES2016` 做了一点修改，规定只要函数参数使用了 `默认值`、`解构赋值` 或者 `扩展运算符`，
  那么函数内部就 `不能` 显式设定为 `严格模式`，否则会报错。

## 箭头函数

### 基本用法

- ES6 允许使用“箭头” `=>` 定义函数。

  ```javascript
  var f = v => v;
  // 等同于
  var f = function (v) {
      return v;
  };
  ```

- 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

  ```javascript
  var f = () => 5;
  // 等同于
  var f = function () {
      return 5
  };
  ```

  ```javascript
  var sum = (num1, num2) => num1 + num2;
  // 等同于
  var sum = function(num1, num2) {
      return num1 + num2;
  };
  ```
