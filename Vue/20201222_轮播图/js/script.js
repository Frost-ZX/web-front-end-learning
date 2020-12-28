var vm = new Vue({
    el: '#app',
    data: {
        count: 5,           // 图片总数
        current: 1,         // 当前位置
        isAnimate: true,    // 标记：开启过渡效果
        isSliding: false,   // 标记：滑动中
        isAuto: true,       // 是否自动轮播
        autoInterval: 2000  // 自动轮播间隔（毫秒）
    },
    methods: {
        // 切换图片
        switchImg: function (direction) {
            var data = this.$data;

            // 检测标记
            if (data.isSliding) {
                return false;
            } else {
                data.isSliding = true;
            }

            if (direction == 'pre') {
                // 前
                data.current--;
            } else if (direction == 'next') {
                // 后
                data.current++;
            }
        },
        // 滑动结束
        handleEnd: function () {
            var data = this.$data;

            var count = data.count;
            var current = data.current;

            if (current === 0) {
                data.isAnimate = false;
                data.current = count;
            } else if (current === count + 1) {
                data.isAnimate = false;
                data.current = 1;
            }

            setTimeout(function () {
                data.isAnimate = true;
            }, 0);

            // 标记
            data.isSliding = false;
        }
    },
    mounted: function () {
        // 自动轮播
        var data = this.$data;
        var btnNext = document.querySelector('.btn-next');

        setInterval(function () {
            if (data.isAuto) {
                btnNext.click();
            }
        }, data.autoInterval);
    }
});
