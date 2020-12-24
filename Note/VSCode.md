<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/style.css">
<script src="./assets/script.js"></script>

## JavaScript

### JSDoc

- [@param](https://jsdoc.app/tags-param.html)
- [@returns](https://jsdoc.app/tags-returns.html)

```javascript
/**
 * 描述
 *
 * @param {数据类型} 参数名 - 参数描述
 * @param {数据类型} [参数名] - 参数描述
 * @param {数据类型} [参数名=默认值] - 参数描述
 * @param {(数据类型1|数据类型2|...)} 参数名 - 参数描述
 * @param {...数据类型} 参数名 - 参数描述
 *
 * @param {Object} 参数名 - 参数描述
 * @param {数据类型} 参数名.对象属性名 - 属性名描述
 *
 * @returns {数据类型} - 返回值描述
 */

// 数据类型：
// *
// boolean, number, string, Object, Promise, Element
// Array, 数据类型[]
```

```javascript
/**
 * 回调函数 callbackFunc 的描述
 *
 * @callback callbackFunc
 * @param {number} num
 * @param {string} str
 */

/**
 * 函数 func 的描述
 * 
 * @param {callbackFunc} cb - 参数描述
 */
function func(cb) {
    ...
}
```

### jsconfig.json

```json
{
    "typeAcquisition": {
        "include": [
            "jquery"
        ]
    }
}
```

### 启用 Canvas 变量代码提示

```javascript
/** @type {HTMLCanvasElement} */
var 变量名 = document.querySelector(Canvas 标签);
```
