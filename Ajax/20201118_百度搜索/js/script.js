function jsonp(options) {
    // options
    // url：请求地址
    // data：请求参数
    // success：请求成功回调函数

    // 随机函数名
    var funName = 'jsonp' + Math.random().toString().replace('.', '');

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
    script.src = options.url + '?cb=' + funName + params;
    // 添加
    document.body.appendChild(script);
    // 加载完成后移除标签
    script.onload = function () {
        this.remove();
    }
}

window.addEventListener('load', function () {
    var searchInput = document.querySelector('.search .input input[type="text"]');
    var searchSubmit = document.querySelector('.search .btn-search');
    var searchSuggest = document.querySelector('.search .input .word-list');
    var getSuggestion = null;

    // 输入框获得焦点
    searchInput.onfocus = function () {
        if (this.value != '' && searchSuggest.innerHTML != '') {
            // 显示关键词建议列表
            this.classList.add('suggest');
        }
    }

    // 输入时
    searchInput.oninput = function () {
        var self = this;

        clearTimeout(getSuggestion);


        getSuggestion = setTimeout(function () {
            var word = self.value;

            // 输入内容为空时不请求
            if (word == '') {
                self.classList.remove('suggest');
                searchSuggest.innerHTML = "";
                return false;
            }

            // API
            // https://suggestion.baidu.com/su?wd=关键词&cb=JSONP函数名

            // 发送请求
            jsonp({
                url: 'https://suggestion.baidu.com/su',
                data: {
                    wd: word
                },
                success: function (result) {
                    var datas = result.s;

                    // 清空原有
                    searchSuggest.innerHTML = "";

                    // 没有关键词建议
                    if (datas.length === 0) {
                        self.classList.remove('suggest');
                        return false;
                    }

                    // 添加
                    datas.forEach(function (value) {
                        var listItem = document.createElement('div');
                        var reg = new RegExp(word, 'g');

                        value = value.replace(reg, '<span>' + word + '</span>');

                        listItem.innerHTML = value;
                        searchSuggest.appendChild(listItem);
                    });

                    // 显示关键词建议列表
                    self.classList.add('suggest');
                }
            });
        }, 500);
    }

    // 输入框失去焦点
    searchInput.onblur = function () {
        // 隐藏关键词建议列表
        this.classList.remove('suggest');
    }

    // 搜索按钮
    searchSubmit.onclick = function () {
        var searchWord = searchInput.value;
        if (searchWord != '') {
            location.href = "https://www.baidu.com/s?ie=UTF-8&wd=" + searchWord;
        }
    }

    // 点击建议的关键词
    searchSuggest.onclick = function (e) {
        var target = e.target || window.event.srcElement;

        if (target.classList.length === 0) {
            searchInput.value = target.textContent;
        }
    }
});
