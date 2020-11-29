// 显示或隐藏多个元素
// elements：元素（Array）
// isVisble：是否显示（Boolean）
function setVisible(elements, isVisble) {
    elements.forEach(function (element) {
        if (isVisble == true) {
            element.style.visibility = 'visible';
        } else {
            element.style.visibility = 'hidden';
        }
    });
}

// 初始化放大镜
// zoomEle：放大镜元素
// config：放大镜配置
// initAll：是否完全初始化（Boolean）
function zoomInit(zoomEle, config, initAll) {
    // 主体尺寸
    var frameHeight = config.frameSize.height;
    var frameWidth = config.frameSize.width;
    zoomEle.style.height = `${frameHeight}px`;
    zoomEle.style.width = `${frameWidth}px`;

    // 图片盒子
    var imgBox = zoomEle.querySelector('.img-box img');
    imgBox.src = config.image;

    // 遮罩：放大区域
    var maskZoom = zoomEle.querySelector('.mask-zoom');
    var maskZoomHeight = 1 / config.scale * frameHeight;
    var maskZoomWidth = 1 / config.scale * frameWidth;
    maskZoom.style.height = `${maskZoomHeight}px`;
    maskZoom.style.width = `${maskZoomWidth}px`;

    // 遮罩：图片盒子区域
    var maskImage = zoomEle.querySelector('.mask-image');

    // 放大视图
    var zoomView = zoomEle.querySelector('.zoom-view');
    zoomView.style.backgroundImage = `url('${config.image}')`;

    if (!initAll) {
        return true;
    }

    // 事件
    maskImage.onmouseover = function () {
        setVisible([maskZoom, zoomView], true); // 显示

        zoomView.style.backgroundSize = `${config.scale * 100}%`;

        // 鼠标移动
        this.onmousemove = function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            var maskZoomTop = y - maskZoomHeight / 2;
            var maskZoomLeft = x - maskZoomWidth / 2;

            // 边界限制
            if (maskZoomTop < 0) {
                maskZoomTop = 0;
            } else if (maskZoomTop > frameHeight - maskZoomHeight) {
                maskZoomTop = frameHeight - maskZoomHeight;
            }
            if (maskZoomLeft < 0) {
                maskZoomLeft = 0;
            } else if (maskZoomLeft > frameWidth - maskZoomWidth) {
                maskZoomLeft = frameWidth - maskZoomWidth;
            }

            // 遮罩：放大区域
            maskZoom.style.top = `${maskZoomTop}px`;
            maskZoom.style.left = `${maskZoomLeft}px`;

            // 放大视图
            zoomView.style.backgroundPosition = `${maskZoomLeft * config.scale * -1}px ${maskZoomTop * config.scale * -1}px`;
        }
    }
    maskImage.onmouseout = function () {
        setVisible([maskZoom, zoomView], false); // 隐藏
        this.onmousemove = null;
    }
}

// 初始化图片选择
// zoomEle：放大镜元素
// config：放大镜配置
// imgSelEle：图片选择元素
// imgList：图片列表
function viewSelectInit(zoomEle, config, imgSelEle, imgList) {
    var thumbList = imgSelEle.querySelector('ul');

    imgList.forEach(function (value) {
        var thumbItem = document.createElement('li');

        thumbItem.imgSrc = value; // 自定义属性
        thumbItem.innerHTML = `<img src="${value}" />`;

        thumbItem.onmouseover = function () {
            config.image = this.imgSrc; // 修改放大镜配置
            zoomInit(zoomEle, config);  // 初始化放大镜
        }

        thumbList.appendChild(thumbItem);
    });
}

window.onload = function () {
    // 放大镜配置
    var zoomConfig = {
        image: './img/img_01.jpg',
        frameSize: {
            height: 350,
            width: 350
        },
        scale: 2
    }
    // 放大镜元素
    var zoomEle = document.querySelector('#view #zoom');
    // 图片选择元素
    var imgSelEle = document.querySelector('#view #select');
    // 图片列表
    var imgList = [
        './img/img_01.jpg',
        './img/img_02.jpg',
        './img/img_03.jpg',
        './img/img_04.jpg',
        './img/img_01.jpg',
        './img/img_02.jpg'
    ];

    zoomInit(zoomEle, zoomConfig, true);
    viewSelectInit(zoomEle, zoomConfig, imgSelEle, imgList);

    // 测试
    (function () {
        var testCtrl = document.querySelector('#test');

        var sizeAdd = testCtrl.querySelector('.size .increase');
        var sizeRemove = testCtrl.querySelector('.size .decrease');
        var sizeInfo = testCtrl.querySelector('.size .info');

        sizeAdd.onclick = function () {
            if (zoomConfig.frameSize.height >= 500) {
                return false;
            }
            zoomConfig.frameSize.height += 50;
            zoomConfig.frameSize.width += 50;
            sizeInfo.textContent = `(${zoomConfig.frameSize.height}px, ${zoomConfig.frameSize.width}px)`;
            zoomInit(zoomEle, zoomConfig, true);
        }
        sizeRemove.onclick = function () {
            if (zoomConfig.frameSize.height <= 200) {
                return false;
            }
            zoomConfig.frameSize.height -= 50;
            zoomConfig.frameSize.width -= 50;
            sizeInfo.textContent = `(${zoomConfig.frameSize.height}px, ${zoomConfig.frameSize.width}px)`;
            zoomInit(zoomEle, zoomConfig, true);
        }

        var scaleAdd = testCtrl.querySelector('.scale .increase');
        var scaleRemove = testCtrl.querySelector('.scale .decrease');
        var scaleInfo = testCtrl.querySelector('.scale .info');
    
        scaleAdd.onclick = function () {
            if (zoomConfig.scale >= 10) {
                return false;
            }
            zoomConfig.scale += 1;
            scaleInfo.textContent = `(${zoomConfig.scale})`;
            zoomInit(zoomEle, zoomConfig, true);
        }
        scaleRemove.onclick = function () {
            if (zoomConfig.scale <= 1) {
                return false;
            }
            zoomConfig.scale -= 1;
            scaleInfo.textContent = `(${zoomConfig.scale})`;
            zoomInit(zoomEle, zoomConfig, true);
        }
    })();
}
