window.addEventListener('load', function () {
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
