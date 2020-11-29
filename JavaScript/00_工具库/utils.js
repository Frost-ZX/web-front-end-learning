// 工具库
var utils = {
    words: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z',
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ],

    // 自动补零
    // 参数：数字，位数
    addZero: function(num, figure) {
        figure = Math.floor(figure);
        if (figure > 0) {
            var add = Math.pow(10, figure);
            // 判断是否满足需要补零的条件
            if (num < add) {
                num += add;
                num = num.toString().slice(1); // 截取
                return num;
            } else {
                return num;
            }
        } else {
            return false;
        }
    },

    // 从数组中随机获取一个元素
    getRandomElement: function (arr) {
        var max = arr.length;
        // 生成 0 - max 的随机数
        var index = Math.floor(Math.random() * max);
        return arr[index];
    },

    // 随机生成 n 位验证码, 可以自定义排除不生成的验证码字符
    // 生成的验证码不能存在相同的字符
    createValidCode: function (n, filter) {
        var validCode = ''; // 存放结果

        if (!filter) {
            filter = [];
        }

        for (var i = 1; i <= n; i++) {
            // 当前获取的元素
            var created = this.getRandomElement(this.words);
            // 判断元素是否在排除列表中，是否在已生成的字符中
            if (filter.indexOf(created) > -1 || validCode.indexOf(created) > -1) {
                i--;                  // 回退
            } else {
                validCode += created; // 拼接
            }
        }
        return validCode;
    },

    // 首字母大写
    capitalize: function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    },

    // 判断闰年
    // 是闰年返回 true，否则返回 false
    isLeapYear: function (year) {
        // 年份是 4 的倍数，且不是 100 的倍数
        // 年份是 400 的倍数
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    },

    // 过滤对象的字段，返回被过滤之后的对象
    filterObject: function (obj, filter) {
        // obj：被过滤的对象，Object
        // filter：过滤字段数组，Array
        filter.forEach(function (value) {
            // 判断属性是否存在对象中
            // 属性名 in 对象
            if (value in obj) {
                delete obj[value];
            }
        });
        return obj;
    },

    // 格式化日期
    formatDate: function (date, format) {
        // date：日期对象，Object
        // format：格式化规则，String

        // 正则
        var reg = {
            year: /(y{1,4})/,
            month: /(M+)/,
            day: /(d+)/,
            hours: /(h+)/,
            minutes: /(m+)/,
            seconds: /(s+)/
        }
        // 时间
        var time = {
            year: date.getFullYear().toString(),
            month: (date.getMonth() + 1),
            day: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        }

        // 匹配并替换
        for (var key in reg) {
            if (reg[key].test(format)) {
                var content = RegExp.$1; // 组匹配的内容
                if (content) {
                    // 截取
                    var sliced;
                    if (key == 'year') {
                        sliced = time[key].slice(time[key].length - content.length);
                    } else {
                        sliced = this.addZero(time[key], content.length);
                    }
                    // 替换
                    format = format.replace(content, sliced);
                }
            }
        }

        return format;
    },

    // 获取一个元素的宽度和高度
    // 返回对象：{height: 高度, width: 宽度}
    getElementSize: function (selector, isMargin) {
        // 如果 isMargin 为 true，则宽度和高度包括外边距、边框、内边距和内容
        // 如果 isMargin 为 false，则宽度和高度只包括内容
        var element = document.querySelector(selector);
        var size = {};

        var style = getComputedStyle(element);
        var height;
        var width;

        height = parseFloat(style.height);
        width = parseFloat(style.width);

        if (isMargin === true) {
            // 外边距
            var marginVertical = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
            var marginHorizon = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
            // 边框
            var borderVertical = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
            var borderHorizon = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
            // 内边距
            var paddingVertical = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
            var paddingHorizon = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            height += marginVertical + borderVertical + paddingVertical;
            width += marginHorizon + borderHorizon + paddingHorizon;
        }

        size.height = height;
        size.width = width;

        return size;
    },

    // 生成 min 到 max 之间的随机数
    randomNum: function(min, max) {
        max = (max - min) + 1;
        return Math.floor(Math.random() * max + min);
    },

    // 获取节点或者设置节点文本内容
    text: function(selector, text) {
        // selector：CSS 选择器，String
        // text：设置的文本内容，String
        // 如果不传递 text，则表示获取节点文本内容；如果传递 text，则表示修改节点文本内容

        if (selector === undefined) {
            console.error('选择器为空');
            return false;
        }

        var elements = document.querySelectorAll(selector);
        var texts = [];

        for (var i = 0; i < elements.length; i++) {
            if (text !== undefined) {
                elements[i].textContent = text;
            } else {
                texts.push(elements[i].textContent);
            }
        }

        if (texts.length > 0) {
            return texts;
        }
    },

    // 获取节点或者设置节点 HTML 内容
    html: function (selector, html) {
        // selector: CSS 选择器，String
        // html: 设置的 html 内容，String
        // 如果不传递 html，则表示获取节点 HTML 内容；如果传递 html ，则表示修改节点 HTML 内容

        if (selector === undefined) {
            console.error('选择器为空');
            return false;
        }

        var elements = document.querySelectorAll(selector);
        var htmls = [];

        for (var i = 0; i < elements.length; i++) {
            if (html !== undefined) {
                elements[i].innerHTML = html;
            } else {
                htmls.push(elements[i].innerHTML);
            }
        }

        if (htmls.length > 0) {
            return htmls;
        }
    }
};

// 例子

// utils.filterObject({a: 1, b: 2, c: 3}, ['b', 'c']); // 期望结果：{a: 1}

// var date = new Date();
// utils.formatDate(date, 'yyyy-MM-dd');              // 期望结果格式：'2020-09-12'
// utils.formatDate(date, 'yyyy-MM-dd hh:mm:ss');     // 期望结果格式：'2020-09-02 02:14:06'
// utils.formatDate(date, 'yyyy-M-dd hh:m:s');        // 期望结果格式：'2020-9-02 02:14:6'
