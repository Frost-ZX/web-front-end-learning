window.onload = function () {

    // 0：图片
    // 1：块 - 空白
    // 2：块 - 拼图
    // 3：块 - 滑动
    var ctrl = document.querySelectorAll('.ctrl');
    var blockImageWidth = ctrl[2].clientWidth;

    // 图片 URL
    var imageURL = './image.jpg';
    ctrl[0].src = imageURL;
    ctrl[2].style.backgroundImage = `url('${imageURL}')`;

    // 滑块位置极限
    var slideMaxLeft = 0;
    var slideMaxRight = ctrl[3].parentNode.clientWidth - ctrl[3].clientWidth - 2;

    // 生成 min 到 max 之间的随机数
    function randomNum(min, max) {
        max = (max - min) + 1;
        return Math.floor(Math.random() * max + min);
    }

    // 初始化：刷新块的位置
    function captchaBlockInit() {
        // 中心 X 坐标
        var centerX = (slideMaxRight + blockImageWidth) / 2;
        // 生成空白块坐标
        var randomBlankX = randomNum(centerX, slideMaxRight);
        // 生成滑块坐标
        var randomSlideX = randomNum(0, centerX - blockImageWidth);

        // 块位置
        ctrl[1].style.left = randomBlankX + 'px'; // 空白块位置
        ctrl[3].style.left = randomSlideX + 'px'; // 滑块位置
        ctrl[2].style.left = ctrl[3].style.left;  // 拼图块位置
        // 拼图块背景偏移
        ctrl[2].style.backgroundPosition = `-${randomBlankX}px calc(40% - 40px)`;
    }

    // 事件：按住滑块
    ctrl[3].onmousedown = function (e) {
        var clickX = e.pageX;                // 鼠标相对于页面左侧的距离
        var boxX = clickX - this.offsetLeft; // 鼠标相对于滑块左侧的距离
        // 事件：拖动滑块
        this.onmousemove = function (e) {
            var moveX = e.pageX;

            // 滑块位置
            this.style.left = (moveX - boxX) + 'px';
            if (this.offsetLeft < slideMaxLeft) {
                this.style.left = slideMaxLeft + 'px';
            }
            if (this.offsetLeft > slideMaxRight) {
                this.style.left = slideMaxRight + 'px';
            }
            // 拼图块位置
            ctrl[2].style.left = this.style.left;
        }
    }
    // 事件：松开滑块
    ctrl[3].onmouseup = function () {
        this.onmousemove = null;
        // 位置
        var blockLeft = ctrl[2].offsetLeft;
        var imageLeft = ctrl[1].offsetLeft;
        // 检测位置
        if (Math.abs(blockLeft - imageLeft) <= 5) {
            alert('验证成功！');
            this.parentNode.parentNode.parentNode.style.display = 'none';
        } else {
            alert('验证失败，请重新操作！');
            captchaBlockInit();
        }
    }

    captchaBlockInit();

}
