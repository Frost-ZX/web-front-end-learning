<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>
<div class="contents"></div>

# ES6（ECMAScript 6.0）

- [ES6（ECMAScript 6.0）](#es6-ecmascript-6-0)
- [简介](#简介)
- [相关网站](#相关网站)
- [变量](#变量)
  - [声明变量](#声明变量)
    - [let](#let)
    - [const](#const)
      - [注意](#注意)
  - [块级作用域：`{ ... }`](#块级作用域)
  - [解构赋值](#解构赋值)
    - [数组](#数组)
      - [基本用法](#基本用法)
      - [默认值](#默认值)
    - [对象](#对象)
      - [基本用法](#基本用法-1)
      - [默认值](#默认值-1)
    - [字符串](#字符串)
    - [数值和布尔值](#数值和布尔值)
    - [函数参数](#函数参数)
- [this](#this)
  - [globalThis](#globalthis)
- [函数](#函数)
  - [参数默认值](#参数默认值)
    - [设置默认值](#设置默认值)
    - [注意](#注意-1)
  - [rest 参数](#rest-参数)
    - [简介](#简介-1)
    - [例子](#例子)
  - [name 属性](#name-属性)
  - [严格模式](#严格模式)
  - [箭头函数](#箭头函数)
    - [基本用法](#基本用法-2)
    - [注意](#注意-2)
- [字符串](#字符串-1)
  - [模板字符串](#模板字符串)
    - [简介](#简介-2)
    - [例子](#例子-1)
  - [新增方法](#新增方法)
    - [includes()](#includes)
      - [简介](#简介-3)
      - [语法](#语法)
      - [参数值](#参数值)
      - [返回值](#返回值)
    - [startsWith()](#startswith)
      - [简介](#简介-4)
      - [语法](#语法-1)
      - [参数值](#参数值-1)
      - [返回值](#返回值-1)
    - [endsWith()](#endswith)
      - [简介](#简介-5)
      - [语法](#语法-2)
      - [参数值](#参数值-2)
      - [返回值](#返回值-2)
- [数组](#数组-1)
  - [新增方法](#新增方法-1)
    - [find()](#find)
      - [定义和用法](#定义和用法)
    - [findIndex()](#findindex)
      - [定义和用法](#定义和用法-1)
    - [includes()](#includes-1)
      - [定义和用法](#定义和用法-2)
      - [语法](#语法-3)
      - [参数](#参数)
- [Symbol](#symbol)
  - [简介](#简介-6)
  - [使用](#使用)
  - [作为属性名](#作为属性名)
  - [Symbol.prototype.description](#symbol-prototype-description)
  - [Symbol.for()、Symbol.keyFor()](#symbol-for-symbol-keyfor)
    - [Symbol.for()](#symbol-for)
    - [Symbol.keyFor()](#symbol-keyfor)
    - [全局注册](#全局注册)
- [对象](#对象-1)
  - [属性的简洁表示法](#属性的简洁表示法)
  - [属性名表达式](#属性名表达式)
  - [新增方法](#新增方法-2)
    - [`Object.assign()`](#object-assign)
    - [`Object.is()`](#object-is)
- [Class](#class)
  - [基本语法](#基本语法)
  - [静态方法](#静态方法)
  - [私有方法和私有属性](#私有方法和私有属性)
    - [现有的解决方案](#现有的解决方案)
    - [私有属性的提案](#私有属性的提案)
- [Promise 对象](#promise-对象)
  - [Promise 的含义](#promise-的含义)
  - [Promise 对象的特点](#promise-对象的特点)
  - [Promise 优缺点](#promise-优缺点)
    - [优点](#优点)
    - [缺点](#缺点)
  - [Promise 基本用法](#promise-基本用法)
  - [Promise 对象的方法](#promise-对象的方法)
    - [Promise.prototype.then()](#promise-prototype-then)
    - [Promise.prototype.catch()](#promise-prototype-catch)
    - [Promise.prototype.finally()](#promise-prototype-finally)
    - [Promise.all()](#promise-all)
    - [Promise.any()](#promise-any)
    - [Promise.race()](#promise-race)
    - [Promise.allSettled()](#promise-allsettled)
    - [Promise.resolve()](#promise-resolve)
    - [Promise.reject()](#promise-reject)
- [Generator](#generator)
  - [简介](#简介-7)
- [async 函数](#async-函数)
  - [简介](#简介-8)
- [Set 和 Map 数据结构](#set-和-map-数据结构)
  - [Set](#set)
    - [简介](#简介-9)
  - [Map](#map)
    - [简介](#简介-10)
- [Proxy](#proxy)
  - [简介](#简介-11)
- [Reflect](#reflect)
  - [简介](#简介-12)
- [Module（模块）](#module-模块)
  - [简介](#简介-13)
  - [命令](#命令)
    - [export](#export)
    - [import](#import)
    - [export default](#export-default)

# 简介

- ECMAScript 6.0 是 JavaScript 语言的下一代标准，在 2015 年 6 月正式发布。
- 它的目标是使 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

# 相关网站

- https://es6.ruanyifeng.com/
- https://www.runoob.com/w3cnote/es6-concise-tutorial.html

# 变量

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

## 块级作用域：`{ ... }`

- `ES5` 只有 `全局作用域` 和 `函数作用域`，没有块级作用域，这带来很多不合理的场景。
- `ES6` 的 `let` 实际上为 JavaScript 新增了 `块级作用域`。
- `ES6` 允许块级作用域的任意嵌套，`内层作用域` 可以定义 `外层作用域` 的同名变量。
- 块级作用域的出现，使得获得广泛应用的 `匿名立即执行函数表达式`（匿名 IIFE）不再必要了。
- `ES5` 规定，函数只能在 `顶层作用域` 和 `函数作用域` 之中声明，不能在块级作用域声明。
  `ES6` 引入了块级作用域，明确允许在 `块级作用域` 之中声明函数。
  `ES6` 规定，块级作用域之中，函数声明语句的行为类似于 `let`，在块级作用域之外不可引用。

  > 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。
  > 如果确实需要，也应该写成函数表达式，而不是函数声明语句。

## 解构赋值

> ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

### 数组

#### 基本用法

```javascript
// a = 1
// b = 2
// c = 3
let [a, b, c] = [1, 2, 3];
```

- 可以从数组中提取值，按照对应位置，对变量赋值。
- 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
- 如果解构不成功，变量的值为 `undefined`。
- 如果等号左边的模式只匹配等号右边的数组的一部分，解构依然可以成功。
- 如果等号的右边不是数组（或者严格地说，`不是可遍历的结构`），那么将会 `报错`。
- 如果默认值是一个表达式，那么这个表达式是 `惰性求值` 的（只有在用到的时候，才会求值）。
- 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

#### 默认值

- 解构赋值允许指定默认值

  ```javascript
  let [变量 = 默认值, 变量 = 默认值, ...] = [值, 值, ...];

  let [foo = true] = [];               // foo = true
  let [x, y = 'b'] = ['a'];            // x = "a", y = "b"
  let [x, y = 'b'] = ['a', undefined]; // x = "a", y = "b"
  ```

  > ES6 内部使用严格相等运算符（`===`）判断一个位置是否有值。
  > 只有当一个数组成员严格等于 `undefined` 时，默认值才会 `生效`。

### 对象

#### 基本用法

- 解构不仅可以用于数组，还可以用于对象。

  ```javascript
  let { a, b } = { a: 'aaa', b: 'bbb' }; // a = "aaa", b = "bbb"
  ```

- 对象的解构与数组有一个重要的不同：

  - `数组` 的元素是 `按次序排列` 的，变量的取值由它的位置决定。
  - `对象` 的属性 `没有次序`，变量必须与属性同名，才能取到正确的值。

    ```javascript
    let { b, a } = { a: 'aaa', b: 'bbb' }; // a = "aaa", b = "bbb"
    let { c } = { a: 'aaa', b: 'bbb' };    // c = undefined
    ```

- 如果解构失败，变量的值为 `undefined`。
- 实际上，对象的解构赋值是以下形式的简写

   ```javascript
   let { a: a, b: b, ... } = { a: 'aaa', b: 'bbb', ... };
   ```

   > 对象的解构赋值的内部机制是先找到同名属性，然后再赋给对应的变量。
   > 真正被赋值的是后者，而不是前者。

   ```javascript
   let { x: y } = { x: 'aaa', y: 'bbb' }; // y = "aaa"
   ```

- 与数组一样，解构也可以用于嵌套结构的对象。

#### 默认值

- 对象的解构也可以指定默认值。

### 字符串

- 字符串也可以解构赋值。
- 因为此时字符串被转换成了一个类似数组的对象。

  ```javascript
  const [a, b, c, d, e] = 'hello';
  // a = "h"
  // b = "e"
  // c = "l"
  // d = "l"
  // e = "o"
  ```

- 类似数组的对象都有一个 `length` 属性，因此还可以对这个属性解构赋值。

  ```javascript
  let {length : len} = 'hello'; // len = 5
  ```

### 数值和布尔值

### 函数参数

# this

## globalThis

- ES2020 在语言标准的层面引入 `globalThis` 作为顶层对象。
- 在任何环境下，`globalThis` 都是存在的，都可以从它拿到顶层对象，指向全局环境下的 `this`。

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

- ES6 引入 `rest 参数`（形式为 `...变量名`），用于获取函数的多余参数，这样就不需要使用 `arguments` 了。
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
      return 5;
  };
  ```

  ```javascript
  var sum = (num1, num2) => num1 + num2;
  // 等同于
  var sum = function(num1, num2) {
      return num1 + num2;
  };
  ```

- 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 `return` 语句返回。
  （由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错）

  ```javascript
  var sum = (num1, num2) => { return num1 + num2; }
  ```

### 注意

- 函数体内的 `this` 对象，就是定义时所在的对象，而不是使用时所在的对象。
  箭头函数 `没有` 自己的 `this`，因此其内部的 `this` 就是外层代码块的 `this`。
- 不可以使用 `call()`、`apply()`、`bind()` 这些方法改变箭头函数中 `this` 的指向。
- 不可以当作构造函数（因此不可以使用 `new` 命令），否则会抛出一个错误。
- 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果需要使用，可以用 `rest 参数` 代替。
- 不可以使用 `yield` 命令（因此箭头函数不能用作 `Generator` 函数）。

# 字符串

## 模板字符串

### 简介

- 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
- 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
- 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
- 模板字符串中嵌入变量，需要将变量名写在 `${}` 之中。
- `${}` 内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
- 如果 `${}` 中的值不是字符串，将按照一般的规则转为字符串。
  （例如，大括号中是一个对象，将默认调用对象的 `toString()` 方法）
- 模板字符串可嵌套。

### 例子

```javascript
var str1 = 'a';
var str2 = 'b';
var str3 = `${str1}${str2}`;
console.log(str3); // 'ab'
```

## 新增方法

### includes()

#### 简介

- `includes()` 方法用于判断字符串是否包含指定的子字符串。
- `includes()` 方法对大小写敏感。

#### 语法

- `string.includes(searchString, start)`

#### 参数值

参数           | 描述
----           | ----
`searchString` | 必需，要查找的字符串。
`start`        | 可选，开始查找的位置，默认为 `0`。

#### 返回值

类型      | 描述
----      | ----
`Boolean` | 如果找到匹配的字符串返回 `true`，否则返回 `false`。

### startsWith()

#### 简介

- `startsWith()` 方法用于检测字符串是否以指定的子字符串开始。
- `startsWith()` 方法对大小写敏感。

#### 语法

- `string.startsWith(searchString, start)`

#### 参数值

参数           | 描述
----           | ----
`searchString` | 必需，要查找的字符串。
`start`        | 可选，开始查找的位置，默认为 `0`。

#### 返回值

类型      | 描述
----      | ----
`Boolean` | 如果字符串以指定的子字符串开始，返回 `true`，否则返回 `false`。

### endsWith()

#### 简介

- `endsWith()` 方法用于检测字符串是否以指定的子字符串结束。
- `endsWith()` 方法对大小写敏感。

#### 语法

- `string.endsWith(searchString, length)`

#### 参数值

参数           | 描述
----           | ----
`searchString` | 必需，要查找的字符串。
`length`       | 可选，指定字符串的长度。

#### 返回值

类型      | 描述
----      | ----
`Boolean` | 如果字符串以指定的子字符串结束，返回 `true`，否则返回 `false`。

# 数组

## 新增方法

### find()

#### 定义和用法

- `find()` 方法返回数组中符合条件的第一个元素的值。
- `find()` 方法为数组中的每个元素都调用一次函数执行：
  - 当数组中的元素在测试条件时返回 `true` 时, `find()` 返回符合条件的元素，之后的值不会再调用执行函数。
  - 如果没有符合条件的元素，返回 `undefined`。
- `find()` 对于空数组，函数是不会执行的。
- `find()` 并没有改变数组的原始值。

### findIndex()

#### 定义和用法

- `findIndex()` 方法返回数组中符合条件的第一个元素的位置。
- `findIndex()` 方法为数组中的每个元素都调用一次函数执行：
  - 当数组中的元素在测试条件时返回 `true` 时, `findIndex()` 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
  - 如果没有符合条件的，元素返回 `-1`。
- `findIndex()` 对于空数组，函数是不会执行的。
- `findIndex()` 并没有改变数组的原始值。

### includes()

#### 定义和用法

- `includes()` 方法用来判断一个数组是否包含一个指定的值。
- 如果包含指定的值，返回 `true`，否则返回 `false`。

#### 语法

- `arr.includes(searchElement, fromIndex)`

#### 参数

参数            | 描述
----            | ----
`searchElement` | 必需，需要查找的元素值。
`fromIndex`     | 可选，从该索引处开始查找 `searchElement`。<br>如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜索。<br>默认为 `0`。

# Symbol

## 简介

- `ES5` 的对象属性名都是字符串，这容易造成属性名的冲突。

  > 例如，在使用他人提供的对象时想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。
  > 如果有一种机制，保证每个属性的名字都是 `独一无二` 的就好了，这样就从根本上防止属性名的冲突。
  > 这就是 ES6 引入 Symbol 的原因。

- `ES6` 引入了一种新的原始数据类型 `Symbol`，表示独一无二的值。
- 它是 JavaScript 语言的第 7 种数据类型。

  > 前 6 种数据类型：`undefined`、`null`、布尔值（`Boolean`）、字符串（`String`）、数值（`Number`）、对象（`Object`）

- Symbol 的值通过 `Symbol()` 函数生成。

  > 这就是说，对象的属性名现在可以有两种类型：一种是原来就有的 `字符串`，另一种就是新增的 `Symbol` 类型。
  > 凡是属性名属于 `Symbol` 类型，就都是 `独一无二` 的，可以保证不会与其他属性名产生冲突。

## 使用

- `Symbol()` 可以接受一个 `字符串` 作为参数，表示对 Symbol 实例的 `描述`，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

  ```javascript
  let s1 = Symbol('a');       // Symbol(a)
  let s2 = Symbol('b');       // Symbol(b)
  let s3 = Symbol('1');       // Symbol(1)
  let s4 = Symbol('2');       // Symbol(2)

  // 如果不加参数，它们在控制台的输出都是 Symbol()，不利于区分。
  // 有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。

  console.log(s1.toString()); // "Symbol(a)"
  console.log(s2.toString()); // "Symbol(b)"
  console.log(s3.toString()); // "Symbol(1)"
  console.log(s4.toString()); // "Symbol(2)"
  ```

- `Symbol()` 前不能使用 `new` 命令，否则会报错。

  > 这是因为生成的 Symbol 是一个 `原始类型` 的值，`不是对象`。
  > 也就是说，由于 Symbol 值不是对象，所以不能添加属性。
  > 基本上，它是一种类似于字符串的数据类型。

- `Symbol()` 的参数只是表示对当前 Symbol 值的描述，因此相同参数的 `Symbol()` 的返回值是不相等的。

  ```javascript
  // 没有参数
  let s1 = Symbol();
  let s2 = Symbol();

  console.log(s1 === s2) // false
  ```

  ```javascript
  // 有参数
  let s1 = Symbol('a');
  let s2 = Symbol('a');

  console.log(s1 === s2); // false
  ```

- Symbol 值不能与其他类型的值进行运算
- Symbol 值可以显式转为字符串（`.toString()`）
- Symbol 值可以转为布尔值（`true`）

## 作为属性名

- 于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
- 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

  ```javascript
  let mySymbol = Symbol();

  // 第一种写法
  let a = {};
  a[mySymbol] = 'Hello!';

  // 第二种写法
  let a = {
    [mySymbol]: 'Hello!'
  };

  // 第三种写法
  let a = {};
  Object.defineProperty(a, mySymbol, { value: 'Hello!' });

  // 以上写法都得到同样结果
  console.log(a[mySymbol]); // "Hello!"
  ```

- Symbol 值作为 `对象属性名` 时，不能用 `点运算符`。

## Symbol.prototype.description

- 创建 Symbol 的时候，可以添加一个描述：`Symbol('描述')`
- 但是，读取这个描述需要将 Symbol 显式转为字符串：`.toString()`，不是很方便。
- ES2019 提供了一个实例属性 `description`，直接返回 Symbol 的描述。

  ```javascript
  let s1 = Symbol('a');

  console.log(s1.description); // "a"
  ```

## Symbol.for()、Symbol.keyFor()

### Symbol.for()

- 有时，我们希望重新使用同一个 Symbol 值，`Symbol.for()` 方法可以做到这一点。
- 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
- 如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其 `注册到全局`。

  ```javascript
  let s1 = Symbol.for('foo');
  let s2 = Symbol.for('foo');

  console.log(s1 === s2); // true
  
  // s1 和 s2 都是 Symbol 值，但是它们都是由同样参数的 Symbol.for 方法生成的，所以实际上是同一个值。
  ```

### Symbol.keyFor()

- `Symbol.keyFor()` 方法返回一个已注册的（使用 `Symbol.for()` 创建的）Symbol 类型值的 `key`。

  ```javascript
  let s1 = Symbol.for('a');
  console.log(Symbol.keyFor(s1)); // "a"

  let s2 = Symbol('b');
  console.log(Symbol.keyFor(s2)); // undefined
  ```

### 全局注册

- `Symbol.for()` 为 Symbol 值注册的名字，是全局环境的，不管有没有在全局环境运行。

  ```javascript
  function foo() {
    return Symbol.for('bar');
  }

  let x = foo();
  let y = Symbol.for('bar');

  console.log(x === y); // true

  // Symbol.for('bar') 是函数内部运行的，但是生成的 Symbol 值是注册在全局环境的。
  // 所以第二次运行 Symbol.for('bar') 可以取到这个 Symbol 值。
  ```

- `Symbol.for()` 的这个全局注册特性，可以用在不同的 `iframe` 或 `service worker` 中取到同一个值。

  ```javascript
  // iframe 窗口生成的 Symbol 值，可以在主页面得到。

  let iframe = document.createElement('iframe');

  iframe.src = String(window.location);
  document.body.appendChild(iframe);

  console.log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')); // true
  ```

# 对象

## 属性的简洁表示法

- ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
- 这样的书写更加简洁。

```javascript
let foo = 'bar';
let baz = { foo };

// 等同于
let baz = {foo: foo};
```

## 属性名表达式

## 新增方法

### `Object.assign()`

- `Object.assign()` 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

  ```javascript
  let target = { a: 1 };
  let source1 = { b: 2 };
  let source2 = { c: 3 };

  Object.assign(target, source1, source2);

  console.log(target); // {a:1, b:2, c:3}
  ```

- `Object.assign()` 方法的第一个参数是目标对象，后面的参数都是源对象。

  - 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
  - 如果只有一个参数，`Object.assign()` 会直接返回该参数。
  - 如果该参数不是对象，则会先转成对象，然后返回。
  - 由于 `undefined` 和 `null` 无法转成对象，所以如果它们作为参数，就会报错。

- `Object.assign()` 拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（`enumerable: false`）。
- `Object.assign()` 方法实行的是 `浅拷贝`，而不是深拷贝。

  - 如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
  - 这个对象的任何变化，都会反映到目标对象上面。

### `Object.is()`

- ES5 比较两个值是否相等，只有两个运算符：相等运算符（`==`）和严格相等运算符（`===`）。

  - 它们都有缺点，前者会自动转换数据类型，后者的 `NaN` 不等于自身，以及 `+0` 等于 `-0`。
  - JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

- ES6 提出 `Same-value equality`（同值相等）算法，用来解决这个问题。

  - `Object.is()` 就是部署这个算法的新方法。
  - 它用来比较两个值是否 `严格相等`，与严格比较运算符（`===`）的行为基本一致。
  - 不同之处只有两个：一是 `+0` 不等于 `-0`，二是 `NaN` 等于自身。

# Class

> 面向对象编程

## 基本语法

- ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。
- 通过 `class` 关键字，可以定义类。
- 基本上，ES6 的 Class 可以看作只是一个 `语法糖`，它的绝大部分功能 ES5 都可以做到。
- 新的 Class 写法只是让 `对象原型` 的写法更加清晰、更像面向对象编程的语法。

  ```javascript
  class 类名 {
    // 构造函数
    constructor() {
        ...
    }

    // 属性和方法
    ...
  }
  ```

- 使用的时候，也是直接对类使用 `new` 命令，跟 `构造函数` 的用法完全一致。

  ```javascript
  class Person {
      constructor(myName) {
          this.myName = myName;
      }

      introduce() {
          console.log('我是' + this.myName);
      }
  }

  const p1 = new Person('张三');

  p1.introduce(); // "我是张三"
  ```

- 构造函数的 `prototype` 属性，在 ES6 的“类”上面继续存在。

  - 事实上，类的所有方法都定义在类的 `prototype` 属性上面。

    ```javascript
    class Point {
        constructor() {
            ...
        }
        
        toString() {
            ...
        }
        
        toValue() {
            ...
        }
    }
    
    // 等同于
    
    function Point() {
        ...
    }

    Point.prototype = {
        constructor() {
            ...
        },
        toString() {
            ...
        },
        toValue() {
            ...
        },
    };
    ```

## 静态方法

- 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
- 如果在一个方法前，加上 `static` 关键字，就表示该方法不会被实例继承，而是直接通过 `类` 来调用，这就称为“静态方法”。

## 私有方法和私有属性

### 现有的解决方案

- 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。
- 这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。

  - 一种做法是在命名上加以区别：

    - 在属性名或方法名的前面加下划线（`_`），表示这是一个只限于内部使用的私有方法。
    - 但是，这种命名是不保险的，在类的外部还是可以调用到这个方法。

  - 另一种方法就是索性将私有方法移出类，因为类内部的所有方法都是对外可见的。

### 私有属性的提案

- 目前，有一个提案，为 `class` 加了私有属性。
- 方法是在属性名或方法名之前添加 `#`。

# Promise 对象

> [MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Promise 的含义

- Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
- 它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象。
- 所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
- 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
- Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

## Promise 对象的特点

- 对象的状态 `不受外界影响`。

  - Promise对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和 `rejected`（已失败）。
  - 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都 `无法改变` 这个状态。
  - 这也是 Promise 这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

- 一旦状态改变，就 `不会再变`，任何时候都可以得到这个结果。

  - Promise 对象的状态改变，`只有` 两种可能：从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected`。
  - 只要这两种情况发生，状态就 `凝固` 了，不会再变了，会一直 `保持` 这个结果，这时就称为 `resolved`（已定型）。
  - 如果改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。
  - 这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

## Promise 优缺点

### 优点

- 有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
- 此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。

### 缺点

- 无法取消 Promise，一旦新建它就会 `立即执行`，无法中途取消。
- 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
- 当处于 `pending` 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## Promise 基本用法

- ES6 规定，Promise 对象是一个 `构造函数`，用来生成 Promise 实例。
- 创造一个 Promise 实例：

  ```javascript
  const promise = new Promise(function (resolve, reject) {

    ...

    if (异步操作成功的条件){
        resolve(参数);
    } else {
        reject(参数);
    }
  });
  ```

  > Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 `resolve` 和 `reject`。
  > 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
  > 
  > **`resolve` 函数的作用：**
  > 将 Promise 对象的状态从 `未完成` 变为 `成功`（即从 `pending` 变为 `resolved`），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
  > 
  > **`reject` 函数的作用：**
  > 将 Promise 对象的状态从 `未完成` 变为 `失败`（即从 `pending` 变为 `rejected`），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

- 在 Promise 实例生成后，可以用 `then()` 方法分别指定 `resolved` 状态和 `rejected` 状态的回调函数：

  ```javascript
  promise.then(function(value) {
      // 成功状态的回调函数
  }, function(error) {
      // 失败状态的回调函数
  });
  ```

  > `then()` 方法可以接受两个回调函数作为参数：
  > 第一个回调函数是 Promise 对象的状态变为 `resolved` 时调用（必需）
  > 第二个回调函数是 Promise 对象的状态变为 `rejected` 时调用（可选）
  > 其中，第二个回调函数是可选的，不一定要提供。
  > 这两个函数都接受 Promise 对象传出的值作为参数。

- Promise 在新建后就会立即执行，`then()` 方法指定的回调函数将在当前脚本所有同步任务执行完才会执行。

  ```javascript
  let promise = new Promise(function(resolve, reject) {
      console.log('Promise');
      resolve();
  });

  promise.then(function() {
      console.log('resolved.');
  });

  console.log('Hi!');

  // Promise
  // Hi!
  // resolved
  ```

## Promise 对象的方法

### Promise.prototype.then()

### Promise.prototype.catch()

- `Promise.prototype.catch()` 方法是 `.then(null, rejection)` 或 `.then(undefined, rejection)` 的别名
- 用于指定发生错误时的回调函数

### Promise.prototype.finally()

- `finally()` 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
- 该方法是 ES2018 引入标准的。

### Promise.all()

- `Promise.all()` 方法接受一组 Promise 实例（一般为数组）作为参数，包装成一个新的 Promise 实例。

  ```javascript
  const p = Promise.all([p1, p2, p3]);
  ```

- 如果元素不是 Promise 实例，就会先调用 `Promise.resolve()` 方法，将参数转为 Promise 实例，再进一步处理。
- `Promise.all()` 方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。
- `p` 的状态由 `p1`、`p2`、`p3` 决定，有两种情况：

  - 只有 `p1`、`p2`、`p3` 的状态都是 `fulfilled` 时，`p` 的状态才会变成 `fulfilled`

    > 此时 `p1`、`p2`、`p3` 的返回值组成一个数组，传递给 `p` 的回调函数。

  - 只要 `p1`、`p2`、`p3` 之中有一个的状态都是 `rejected`，`p` 的状态就变成 `rejected`
  
    > 此时第一个被 `reject` 的实例的返回值会传递给 `p` 的回调函数。

### Promise.any()

- ES2021 引入了 `Promise.any()` 方法。
- `Promise.any()` 方法接受一组 Promise 实例（一般为数组）作为参数，包装成一个新的 Promise 实例。
- 只要参数实例有一个变成 `fulfilled` 状态，包装实例就会变成 `fulfilled` 状态。
- 如果所有参数实例都变成 `rejected` 状态，包装实例就会变成 `rejected` 状态。
- `Promise.any()` 跟 `Promise.race()` 方法很像，只有一点不同：不会因为某个 Promise 变成 `rejected` 状态而结束。

### Promise.race()

- `Promise.race()` 方法接受一组 Promise 实例（一般为数组）作为参数，包装成一个新的 Promise 实例。

  ```javascript
  const p = Promise.all([p1, p2, p3]);
  ```

- `Promise.race()` 方法的参数与 `Promise.all()` 方法一样，如果不是 Promise 实例就会先调用 `Promise.resolve()` 方法将参数转为 Promise 实例，再进一步处理。
- 只要 `p1`、`p2`、`p3` 之中有一个实例率先改变状态，`p` 的状态就跟着改变。
- 率先改变的 Promise 实例的返回值会传递给 `p` 的回调函数。

### Promise.allSettled()

- ES2020 引入了 `Promise.allSettled()` 方法。
- `Promise.allSettled()` 方法接受一组 Promise 实例（一般为数组）作为参数，包装成一个新的 Promise 实例。
- 只有等到所有这些参数实例都返回结果（不管是 `fulfilled` 还是 `rejected`），包装实例才会结束。

### Promise.resolve()

- 有时需要将现有对象转为 Promise 对象，`Promise.resolve()` 方法就起到这个作用。

### Promise.reject()

- `Promise.reject()` 方法也会返回一个新的 Promise 实例，该实例的状态为 `rejected`。

# Generator

## 简介

- Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
- Generator 函数有多种理解角度。

  - 语法上，Generator 函数是一个 `状态机`，封装了多个内部状态。

    - 执行 Generator 函数会返回一个 `遍历器` 对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
    - 返回的遍历器对象，可以 `依次遍历` Generator 函数内部的 `每一个状态`。

  - 形式上，Generator 函数是一个 `普通函数`，但是有两个特征：

    - `function` 关键字与函数名之间有一个星号 `*`。
    - 函数体内部使用 `yield` 表达式，定义不同的内部状态。

# async 函数

> [ECMAScript 6 入门 - async 函数](https://es6.ruanyifeng.com/#docs/async)
> [MDN - AsyncFunction](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)
> [理解 JavaScript 的 async / await](https://segmentfault.com/a/1190000007535316)

## 简介

- ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
- async 函数是 Generator 函数的语法糖。
- async 函数对 Generator 函数的改进，体现在以下四点：

  - 内置执行器
  - 更好的语义
  - 更广的适用性
  - 返回值是 Promise

# Set 和 Map 数据结构

## Set

### 简介

- ES6 提供了新的数据结构 Set，它类似于数组，但是成员的值都是 `唯一` 的，`没有重复` 的值。
- Set 本身是一个 `构造函数`，用来生成 Set 数据结构。

## Map

### 简介

- JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键，这给它的使用带来了很大的限制。
- 为了解决这个问题，ES6 提供了 Map 数据结构：

  - 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
  - 也就是说，Object 结构提供了 `字符串 - 值` 的对应，Map 结构提供了 `值 - 值` 的对应，是一种更完善的 Hash 结构实现。
  - 对于 `键值对` 的数据结构，Map 比 Object 更合适。

# Proxy

## 简介

- Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
- Proxy 可以理解为在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截。
- 因此，Proxy 提供了一种机制，可以对外界的访问进行过滤和改写。
- Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

# Reflect

## 简介

- Reflect 对象与 Proxy 对象一样，也是 ES6 为了操作对象而提供的新 API。
- Reflect 对象的设计目的：

  - 将 Object 对象的一些明显属于语言内部的方法（例如 `Object.defineProperty()`），放到 Reflect 对象上。

    > 现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。
    > 也就是说，从 Reflect 对象上可以拿到语言内部的方法。

  - 修改某些 Object 方法的返回结果，让其变得更合理。

    > 例如 `Object.defineProperty()` 在无法定义属性时，会抛出一个错误，而 `Reflect.defineProperty()` 则会返回 `false`。

  - 让 `Object` 操作都变成函数行为。

    > 某些 Object 操作是命令式，例如 `name in obj` 和 `delete obj[name]`。
    > 而 `Reflect.has(obj, name)` 和 `Reflect.deleteProperty(obj, name)` 让它们变成了函数行为。

  - Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。

    > 这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。
    > 也就是说，不管 Proxy 怎么修改默认行为，总可以在 Reflect 上获取默认行为。

# Module（模块）

## 简介

- 历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。
- 其他语言都有这项功能，例如 Ruby 的 `require`、Python 的 `import`，甚至就连 CSS 都有 `@import`，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。
- 在 ES6 之前，社区制定了一些模块加载方案，最主要的有 `CommonJS` 和 `AMD` 两种，前者用于服务器，后者用于浏览器。
- ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 `CommonJS` 和 `AMD` 规范，成为浏览器和服务器通用的模块解决方案。
- ES6 模块的设计思想是尽量的 `静态化`，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
- `CommonJS` 和 `AMD` 模块都只能在运行时确定这些东西（例如 `CommonJS` 模块就是对象，输入时必须查找对象属性）。
- ES6 的模块自动采用 `严格模式`，不管有没有在模块的头部加上 `"use strict";`。

## 命令

- 模块功能主要由两个命令构成：`export` 和 `import`。
- `export` 命令用于规定模块的对外接口，`import` 命令用于输入其他模块提供的功能。

### export

- 一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。
- 如果希望外部能够读取模块内部的某个变量，就必须使用 `export` 关键字输出该变量。

  ```javascript
  // profile.js，保存了用户信息。
  // ES6 将其视为一个模块，里面用 export 命令对外部输出了三个变量。
  export var firstName = 'Michael';
  export var lastName = 'Jackson';
  export var year = 1958;
  ```

- `export` 的写法，除了像上面这样，还有另外一种：

  ```javascript
  // 在 export 命令后面，使用大括号指定所要输出的一组变量。
  // 它与前一种写法是等价的，但是应该优先考虑使用这种写法。
  // 因为这样就可以在脚本尾部一眼看清楚输出了哪些变量。
  var firstName = 'Michael';
  var lastName = 'Jackson';
  var year = 1958;

  export { firstName, lastName, year };
  ```

- `export` 命令除了输出变量，还可以输出函数或类（class）。

  ```javascript
  // 对外输出一个函数 multiply
  export function multiply(x, y) {
    return x * y;
  };
  ```

- 通常情况下，`export` 输出的变量就是本来的名字，但是可以使用 `as` 关键字重命名。

  ```javascript
  // 使用 as 关键字，重命名了函数 v1 和 v2 的对外接口。
  // 重命名后，v2 可以用不同的名字输出两次。
  function v1() { ... }
  function v2() { ... }

  export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
  };
  ```

- `export` 语句输出的接口，与其对应的值是 `动态绑定` 关系（通过该接口，可以取到模块内部实时的值）。

  > 这一点与 CommonJS 规范完全不同。
  > CommonJS 模块输出的是值的缓存，不存在动态更新。

  ```javascript
  // 输出变量 foo，值为 bar，500 毫秒之后值变为 baz
  export var foo = 'bar';
  setTimeout(() => foo = 'baz', 500);
  ```

- `export` 命令可以出现在模块的 `任何位置`，只要处于 `模块顶层`。

  > 如果处于块级作用域内，就会报错，`import` 命令也是如此。
  > 这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。

### import

- 使用 `export` 命令定义了模块的对外接口以后，其他 JavaScript 文件就可以通过 `import` 命令加载这个模块。

  ```javascript
  // main.js
  // import 命令用于加载 profile.js 文件，并从中输入变量。
  import { firstName, lastName, year } from './profile.js';

  function setName(element) {
    element.textContent = firstName + ' ' + lastName;
  }
  ```

- `import` 命令接受一对大括号，里面指定要从其他模块导入的变量名。

  > 大括号里面的变量名，必须与被导入的模块的对外接口的名称相同。

- 如果想为输入的变量重新取一个名字，`import` 命令要使用 `as` 关键字，将输入的变量重命名。

  ```javascript
  import { lastName as surname } from './profile.js';
  ```

- `import` 命令输入的变量都是 `只读` 的，因为它的本质是输入接口。

  > 也就是说，不允许在加载模块的脚本里面，改写接口。
  > 但是如果变量是一个对象，改写其属性是允许的，并且其他模块也可以读到改写后的值。
  > 不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。

- `import` 后面的 `from` 指定模块文件的位置。

  > 可以是相对路径，也可以是绝对路径。
  > 如果不带有路径，只是一个模块名，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

- `import` 命令具有 `提升` 效果，会提升到整个模块的头部，首先执行。

- `import` 是静态执行，不能使用表达式和变量这些只有在运行时才能得到结果的语法结构。

  ```javascript
  // 报错
  import { 'f' + 'oo' } from 'my_module';

  // 报错
  let module = 'my_module';
  import { foo } from module;

  // 报错
  if (x === 1) {
      import { foo } from 'module1';
  } else {
      import { foo } from 'module2';
  }
  ```

- `import` 语句会执行所加载的模块，但是不输入任何值。

  > 多次 `重复` 执行同一句 `import` 语句，只会 `执行一次`，而不会执行多次。

- 除了指定加载某个输出值，还可以使用 `整体加载`，即用星号（`*`）指定一个对象，所有输出值都加载在这个对象上面。

  ```javascript
  import * as circle from './circle';

  console.log('圆面积：' + circle.area(4));
  console.log('圆周长：' + circle.circumference(14));
  ```

### export default

- 使用 `import` 命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
- 但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
- 为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到 `export default` 命令，为模块指定默认输出。
- 其他模块加载该模块时，`import` 命令可以为该模块指定 `任意名字`。
- 本质上，`export default` 就是输出一个叫做 `default` 的变量或方法，然后系统允许你为它取任意名字。

  > 因此，它的后面不能跟变量声明语句。
