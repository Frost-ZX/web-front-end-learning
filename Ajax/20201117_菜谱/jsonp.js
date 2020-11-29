function jsonp(options) {
    // options
    // url：请求地址
    // data：请求参数
    // success：成功回调函数

    // 随机函数名
    var funName = 'jsonpFn' + Math.random().toString().replace('.', '');

    // 将 success() 变为全局函数
    window[funName] = options.success;

    // 拼接请求参数
    var params = '';
    for (var attr in options.data) {
        params += '&' + attr + '=' + options.data[attr];
    }

    // 创建 script 标签
    var script = document.createElement('script');
    // 设置 src
    script.src = options.url + '?callback=' + funName + params;
    // 添加
    document.body.appendChild(script);
    // 加载完成后移除标签
    script.onload = function () {
        this.remove();
    }
}
