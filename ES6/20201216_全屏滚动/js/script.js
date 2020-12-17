class FullscreenSlide {
    config = {
        // 选择器 - 目标元素
        selector: '.pages',
        // 滑动时长（毫秒）
        slideTime: 1000,
        // 滑动后暂停时长（毫秒）
        pauseTime: 200,
        // 页面配置
        pages: [
            {
                // 背景颜色
                bgColor: '#EEE',
                // 文本颜色
                textColor: '#000'
            }
        ]
    }

    constructor(options) {
        // 覆盖默认配置
        Object.assign(this.config, options);

        // 目标元素
        this.targetElem = document.querySelector(this.config.selector);
        // 页面总数
        this.pageCount = this.targetElem.children.length;
        // 当前页面
        this.currentPage = 0;
        // 标记
        this.flagCanSlide = true;

        // 初始化
        this.init();
    }

    // 设置动画时长
    setAnimateTime() {
        this.targetElem.style.transition = `transform ${this.config.slideTime / 1000}s`;
    }

    // 设置颜色
    setColor() {
        var self = this;

        self.config.pages.forEach(function (item, index) {
            var elem = self.targetElem.children[index];

            elem.style.backgroundColor = item.bgColor;
            elem.style.color = item.textColor;
        });
    }

    // 设置事件
    setEvent() {
        var self = this;

        // 鼠标滚轮事件
        document.addEventListener('mousewheel', function (e) {
            // 检测标记
            if (!self.flagCanSlide) {
                return false;
            }

            // 更新标记
            self.flagCanSlide = false;

            // 判断方向
            e.wheelDelta > 0 ? self.currentPage-- : self.currentPage++;

            // 限制
            var pageMin = 0;
            var pageMax = self.pageCount - 1;
            self.currentPage = self.currentPage < pageMin ? pageMin : self.currentPage > pageMax ? pageMax : self.currentPage;

            // 移动
            self.targetElem.style.transform = `translateY(${self.currentPage * -100}%)`;

            // 更新标记
            setTimeout(function () {
                self.flagCanSlide = true;
            }, self.config.slideTime + self.config.pauseTime);
        });
    }

    // 初始化
    init() {
        console.log('开始初始化');

        this.setAnimateTime();
        this.setColor();
        this.setEvent();

        // 回到顶部
        // setTimeout(function () {
        //     window.scrollTo(0, 0);
        // }, 0);

        console.log('初始化完成');
    }
}

window.addEventListener('load', function () {
    let fs = new FullscreenSlide({
        selector: '.pages',
        slideTime: 500,
        pauseTime: 200,
        pages: [
            {
                bgColor: '#009688',
                textColor: '#FFFFFF'
            },
            {
                bgColor: '#FF5722',
                textColor: '#FFFFFF'
            },
            {
                bgColor: '#00BCD4',
                textColor: '#FFFFFF'
            },
            {
                bgColor: '#4CAF50',
                textColor: '#FFFFFF'
            }
        ]
    });
});
