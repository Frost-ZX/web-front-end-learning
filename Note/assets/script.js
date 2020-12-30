window.addEventListener('load', function () {
    // 设置 td 标签属性
    // {{属性名=属性值,属性名=属性值,...}}
    (function () {
        var tdElem = document.querySelectorAll('td');
        tdElem.forEach(function (elem) {
            var html = elem.innerHTML;
            var htmlNew = '';
            // 正则
            var reg = new RegExp('(\{\{)(.*)(\}\})', 'g');
            // 正则匹配结果
            var result = '';
            var resultArr = [];

            // 判断是否匹配
            if (!reg.test(html)) {
                return false;
            }

            result = RegExp.$2;

            // 移除
            if (result == 'REMOVE') {
                elem.remove();
                return false;
            }

            htmlNew = html.replace(reg, '');
            resultArr = result.split(',');

            // 设置属性
            resultArr.forEach(function (attr) {
                var arr = attr.split('=');

                elem.setAttribute(arr[0], arr[1]);
            });

            // 更新 HTML 内容
            elem.innerHTML = htmlNew;
        });
    })();

    // 悬浮按钮
    (function () {
        var btnFloat = document.createElement('div');
        btnFloat.classList.add('btn-float');
        document.body.appendChild(btnFloat);

        // 悬浮按钮 - 返回顶部
        (function () {
            var btnTotop = document.createElement('div');
            var isSmooth = false;
            var flagScrolling = false;

            btnTotop.classList.add('btn-totop');
            btnTotop.innerHTML = '顶部';
            btnTotop.onclick = function () {
                window.scrollTo(scrollX, 0);

                if (!isSmooth || flagScrolling) {
                    location.hash = '';
                    return false;
                }

                flagScrolling = true;

                var scrollX = window.scrollX;
                var scrollY = window.scrollY;
                var scrollYHalf = scrollY / 2;
                var speed = 1;

                var scrolling = setInterval(function () {
                    scrollY -= 10 * speed;

                    if (scrollY >= scrollYHalf) {
                        speed += 0.1;
                    } else if (scrollY < scrollYHalf) {
                        speed -= 0.1;
                    }

                    window.scrollTo(scrollX, scrollY);

                    if (scrollY <= 0) {
                        clearInterval(scrolling);
                        flagScrolling = false;
                    }
                }, 20);
            }

            btnFloat.appendChild(btnTotop);
        })();

        // 悬浮按钮 - 返回上一页
        (function () {
            var btnBack = document.createElement('div');

            btnBack.classList.add('btn-back');
            btnBack.innerHTML = '返回';
            btnBack.onclick = function () {
                var hash = location.hash;
                var href = location.href;

                href = href.replace(hash, '');
                href = href.substr(0, href.lastIndexOf('/') + 1)
                location.href = href;
            }

            btnFloat.appendChild(btnBack);
        })();

    })();
});

function getRandomElem(selector) {
    var elems = document.querySelectorAll(selector);
    var random = Math.floor(Math.random() * elems.length)

    return elems[random];
}
