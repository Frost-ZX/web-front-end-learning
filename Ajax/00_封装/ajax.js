function ajax(options) {
    // 设定默认值
    var defaults = {
        // 请求类型（get / post）
        type: 'get',
        // 请求 URL
        url: '',
        // 请求参数（对象）
        data: {},
        // 请求头
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 回调函数 - 成功
        success: function (result) {
            console.log(result);
        },
        // 回调函数 - 错误
        error: function (result) {
            console.log(result);
        }
    }
    Object.assign(defaults, options);

    // 创建 Ajax 对象
    var xhr = new XMLHttpRequest();

    // 请求头
    var reqContentType = defaults.header['Content-Type'];

    // 设置请求参数
    var params = '';
    var isGet = (defaults.type == 'get');
    var isPostForm = (defaults.type == 'post' && reqContentType == 'application/x-www-form-urlencoded');
    var isPostJSON = (defaults.type == 'post' && reqContentType == 'application/json')
    if (isGet || isPostForm) {
        for (attr in defaults.data) {
            params += '&' + attr + '=' + defaults.data[attr]
        }
        params = params.substr(1);
    } else if (isPostJSON) {
        params = JSON.stringify(defaults.data);
    }

    // 请求类型是否为 GET
    if (isGet) {
        // 向 URL 添加请求参数
        defaults.url += '?' + params;
        params = null;
    }

    // 初始化 Ajax 对象
    xhr.open(defaults.type, defaults.url);

    // 请求类型是否为 POST
    if (isPostForm || isPostJSON) {
        // 设置 POST 请求头
        xhr.setRequestHeader('Content-Type', defaults.header['Content-Type']);
    }

    // 发送请求
    xhr.send(params);

    // 处理响应数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // 成功，调用对应的回调函数，返回服务器响应的数据
                
                var resContentType = xhr.getResponseHeader('Content-Type');
                var resultData = xhr.responseText;

                if (resContentType.indexOf('json') != -1) {
                    resultData = JSON.parse(resultData);
                }

                defaults.success(resultData);
            } else {
                // 失败，调用对应的回调函数，返回 Ajax 对象

                defaults.error(xhr);
            }
        }
    }
}
