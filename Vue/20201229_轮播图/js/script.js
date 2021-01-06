Vue.component('my-carousel', {
    props: ['imgs', 'direction', 'normalcolor', 'activecolor', 'auto', 'interval'],
    data: function () {
        return {
            // 过渡类名前缀
            name: 'right',
            // 当前图片
            currentIndex: 0,
            // 自动轮播
            flagAuto: true,
            // 滑动节流
            flagSlide: true
        }
    },
    methods: {
        // 上一张
        prevImg: function () {
            // 节流
            if (!this.flagSlide) {
                return false;
            } else {
                this.flagSlide = false;
            };

            if (this.direction == 'vertical') {
                // 垂直轮播
                this.name = "up";
            } else {
                // 水平轮播
                this.name = 'right';
            }

            // 更新下标
            this.currentIndex--;

            // 若在第一张之前，回到最后一张
            if (this.currentIndex < 0) {
                this.currentIndex = this.imgs.length - 1;
            }
        },
        // 下一张
        nextImg: function () {
            if (!this.flagSlide) {
                return false;
            } else {
                this.flagSlide = false;
            };

            if (this.direction == 'vertical') {
                this.name = "down";
            } else {
                this.name = 'left';
            }

            this.currentIndex++;

            if (this.currentIndex > this.imgs.length - 1) {
                this.currentIndex = 0;
            }
        },
        // 过渡完毕
        afterLeave: function () {
            this.flagSlide = true;
        },
        // 手动跳转
        clickDot: function (e, index) {
            var data = this.$data;

            // 节流
            if (!data.flagSlide || index === data.currentIndex) {
                return false;
            } else {
                data.flagSlide = false;
            };

            var direction = this.direction;
            var isNext = (index > data.currentIndex);

            if (direction == 'vertical') {
                data.name = isNext ? 'down' : 'up';
            } else {
                data.name = isNext ? 'left' : 'right';
            }

            data.currentIndex = index;
        },
        // 开关自动轮播
        switchAuto: function (isOn) {
            var data = this.$data;

            if (isOn) {
                data.flagAuto = true;
            } else {
                data.flagAuto = false;
            }
        }
    },
    mounted: function () {
        var self = this;
        var isAuto = (self.auto === 'yes');
        var autoInterval = self.interval;

        if (isAuto) {
            setInterval(function () {
                if (self.$data.flagAuto) {
                    self.$refs['btn-next'].click();
                }
            }, autoInterval);
        }
    },
    template: `
        <div class="banner" @mouseenter="switchAuto(false)" @mouseleave="switchAuto(true)">
            <transition-group :name="name" tag="ul" @after-enter="afterLeave">
                <li v-for="(img, k) in imgs" :key="'img' + k" v-show="currentIndex == k">
                    <img :src="img" />
                </li>
            </transition-group>
            <div class="ctrl">
                <button class="btn-prev" title="上一张" @click="prevImg" ref="btn-prev">&lt;</button>
                <button class="btn-next" title="下一张" @click="nextImg" ref="btn-next">&gt;</button>
            </div>
            <div class="dot">
                <span v-for="(img, k) in imgs" @click="clickDot($event, k)"
                      :style="{'backgroundColor': currentIndex == k ? activecolor : normalcolor}">{{ k + 1 }}</span>
            </div>
        </div>
    `
});

var vm = new Vue({
    el: "#app",
    data: {
        imgs: ['./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg']
    }
});
