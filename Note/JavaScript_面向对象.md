<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/style.css">
<script src="./assets/script.js"></script>
<div class="contents"></div>

# JavaScript 面向对象

- [JavaScript 面向对象](#javascript-面向对象)
- [面向过程和面向对象的区别](#面向过程和面向对象的区别)
    - [面向过程](#面向过程)
    - [面向对象](#面向对象)
- [使用构造函数批量创建对象](#使用构造函数批量创建对象)
    - [构造函数](#构造函数)
    - [创建对象](#创建对象)
    - [new 关键字](#new-关键字)
- [对象自定义属性](#对象自定义属性)
    - [添加自定义属性](#添加自定义属性)
    - [添加多个自定义属性](#添加多个自定义属性)
    - [获取对象可遍历的属性（键名）](#获取对象可遍历的属性-键名)
    - [获取对象可遍历和不可遍历的属性（键名）](#获取对象可遍历和不可遍历的属性-键名)
    - [获取对象指定属性的属性配置](#获取对象指定属性的属性配置)
    - [获取对象所有属性的属性配置](#获取对象所有属性的属性配置)
- [对象的三大状态](#对象的三大状态)
  - [防扩展](#防扩展)
    - [设置](#设置)
    - [判断](#判断)
  - [密封](#密封)
    - [设置](#设置-1)
    - [判断](#判断-1)
  - [冻结](#冻结)
    - [设置](#设置-2)
    - [判断](#判断-2)
- [静态成员和实例成员](#静态成员和实例成员)
    - [静态成员](#静态成员)
      - [添加静态属性](#添加静态属性)
      - [添加静态方法](#添加静态方法)
      - [访问](#访问)
    - [实例成员](#实例成员)
- [构造函数的问题](#构造函数的问题)
- [构造函数原型（prototype，显式原型）](#构造函数原型-prototype-显式原型)
    - [扩展内置对象方法](#扩展内置对象方法)
    - [同时给原型对象添加多个方法](#同时给原型对象添加多个方法)
- [对象原型（隐式原型）](#对象原型-隐式原型)
- [原型链](#原型链)
    - [原型链的查找机制](#原型链的查找机制)
    - [ES5 使用构造函数原型对象 + call 实现继承](#es5-使用构造函数原型对象-call-实现继承)
      - [继承属性](#继承属性)
      - [继承方法](#继承方法)

# 面向过程和面向对象的区别

### 面向过程

- 想到什么功能就写什么功能，最多把功能封装到函数中，按照步骤一步一步调用函数。
- 面向过程主要注重过程，分步骤。

### 面向对象

- 一种设计思想，把每个功能分配给不同的对象，指挥对象工作。
- 特点：封装（把对象封装到函数中）、继承（子类可以继承父类的属性和方法）、多态（多种形态）

# 使用构造函数批量创建对象

> 构造函数也是函数的一种，但它主要用于创建对象。

### 构造函数

```javascript
function 构造函数名称(参数1, 参数2, ...) {
    this.属性1 = 参数1;             // 动态
    this.属性2 = 属性值;            // 固定

    this.方法名1 = 参数2;           // 动态
    this.方法名2 = function () { }; // 固定
}
```

### 创建对象

```javascript
var 对象名 = new 构造函数名称(参数1, 参数2, ...);
```

### new 关键字

- 构造函数一般会配合 `new` 关键字使用
- `new` 关键字专门用于实例化对象
- `new` 关键字在构造函数中实现了：

  1. 在构造函数中创建一个 `空对象`
  2. 把构造函数中的 `this` 指向这个 `空对象`
  3. 执行构造函数中的代码，给这个 `空对象` 初始化 `属性和方法`（继承构造函数的原型）
  4. 返回这个对象（因此使用 new 关键字后，不需要在构造函数中 return 这个对象）

# 对象自定义属性

### 添加自定义属性

- `Object.defineProperty(原对象, 属性名称, 属性配置)`

  > [MDN - Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
  > 定义后的属性默认不能被修改、删除、遍历
  > 属性配置添加 `writable: true` 后可修改
  > 属性配置添加 `configurable: true` 后可删除
  > 属性配置添加 `enumerable: true` 后可遍历

  ```javascript
  Object.defineProperty(原对象, 属性名称, {
      value: '',           // 值
      writable: false,     // 修改
      configurable: false, // 配置（删除）
      enumerable: false    // 枚举（遍历）
  });
  ```

### 添加多个自定义属性

- `Object.defineProperties(原对象, 属性集合)`

  > [MDN - Object.defineProperties()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

  ```javascript
  Object.defineProperties(原对象, {
      属性名称: {
          value: '',           // 值
          writable: false,     // 修改
          configurable: false, // 配置（删除）
          enumerable: false    // 枚举（遍历）
      },
      属性名称: {
          value: '',           // 值
          writable: false,     // 修改
          configurable: false, // 配置（删除）
          enumerable: false    // 枚举（遍历）
      },
      ...
  });
  ```

### 获取对象可遍历的属性（键名）

- `Object.keys(对象)`

  > 返回一个数组

### 获取对象可遍历和不可遍历的属性（键名）

- `Object.getOwnPropertyNames(对象)`

  > 返回一个数组

### 获取对象指定属性的属性配置

- `Object.getOwnPropertyDescriptor(对象, 属性)`

### 获取对象所有属性的属性配置

- `Object.getOwnPropertyDescriptors(对象)`

# 对象的三大状态

## 防扩展

> 不能添加属性，可删除属性，可修改属性

### 设置

- `Object.preventExtensions(对象)`

### 判断

- `Object.isExtensible(对象)`

  > 返回布尔值

## 密封

> 不能添加、删除属性，可修改属性

### 设置

- `Object.seal(对象)`

### 判断

- `Object.isSealed(对象)`

  > 返回布尔值

## 冻结

> 不能添加、删除、修改属性

### 设置

- `Object.freeze(对象)`

### 判断

- `Object.isFrozen(对象)`

  > 返回布尔值

# 静态成员和实例成员

### 静态成员

- 在构造函数本身上添加的成员，只能由函数本身访问。

#### 添加静态属性

```javascript
构造函数名.属性名 = 属性值
```

#### 添加静态方法

```javascript
构造函数名.方法名 = function () { }
```

#### 访问

- `构造函数名.属性名`
- `构造函数名.方法名()`

### 实例成员

- 在构造函数内部创建的对象成员，只能由实例化的对象访问。

# 构造函数的问题

- 构造方法存在浪费内存的问题
  - 构造函数方法每次创建一个实例，就会单独创建一个空间来存放一个函数。
  - 对象之间的方法不共享，即使是同一个方法。

```javascript
function 构造函数() {
    this.方法 = function () { };
}

var 对象1 = new 构造函数();
var 对象2 = new 构造函数();

console.log(对象1.方法 == 对象2.方法);  // false
console.log(对象1.方法 === 对象2.方法); // false
```

# 构造函数原型（prototype，显式原型）

> 每个构造函数都有一个属性 `prototype`，且值都是对象
> 因此也称 `prototype` 为原型对象
> 主要用于共享方法

```javascript
function 构造函数() { }

构造函数.prototype.方法 = function () { }

var 对象1 = new 构造函数();
var 对象2 = new 构造函数();

console.log(对象1.方法 == 对象2.方法);  // true
console.log(对象1.方法 === 对象2.方法); // true
```

### 扩展内置对象方法

```javascript
Array.prototype.getSum = function () {
    var sum = 0;

    this.forEach(function (item) {
        sum += item;
    });

    return sum;
}

var arr = [10, 20, 30, 40, 50];
var result = arr.getSum();

console.log(result); // 150
```

### 同时给原型对象添加多个方法

# 对象原型（隐式原型）

> 构造函数身上有一个 prototype 属性，称为 `原型对象`。
> 每个实例成员对象身上也有一个 `__proto__`。
> 只要是对象，都是 `__proto__` 属性。
> `__proto__` 是对象原型，用于指向构造函数的原型对象。
> 因为有 `__proto__` 属性的存在，使用实例对象才可以使用构造函数的方法。
> `__proto__` 是非标准属性。

# 原型链

> 因为 `原型对象` 也是对象，所以 `原型对象` 也有一个 `__proto__`（指向上一层构造函数的 `prototype`）。

### 原型链的查找机制

### ES5 使用构造函数原型对象 + call 实现继承

#### 继承属性

#### 继承方法
