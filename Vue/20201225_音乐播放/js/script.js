var lyric = "[00:00.000]作词: 镜千\n[00:01.000]作曲: CMJ\n[00:04.77]制作人：关天天\n[00:07.76]  \n[00:34.12]你眨了下眼睛\n[00:37.01]像夜空 闪烁的恒星\n[00:42.50]为我所有不安\n[00:45.01]找到了 指引\n[00:48.93]\n[00:50.17]我呢喃了一句\n[00:52.46]晚风里 出走的心绪\n[00:57.96]为你每次试探\n[01:00.51]捎去了 回应\n[01:05.31] \n[01:05.99]所念皆星河 辗转里反侧\n[01:09.89]你占领每个 永恒的片刻\n[01:13.74]无垠的宇宙 浩瀚的选择\n[01:17.50]你是最亮那颗\n[01:20.44] \n[01:21.40]所爱如月色 触手而不得\n[01:25.36]将温柔的梦 都投射\n[01:29.29]你眼里有我 对这世间的\n[01:33.38]吝啬\n[01:36.79] \n[01:51.58]你返航的轨迹\n[01:54.51]是所有 等待的意义\n[02:00.10]绕过多少周期\n[02:02.32]从未曾 离心\n[02:06.11] \n[02:07.18]多遥远的距离\n[02:09.98]都不抵 内心的亲密\n[02:15.69]周旋每段关系\n[02:18.11]认出你 身影\n[02:22.53] \n[02:23.12]所念皆星河 辗转里反侧\n[02:27.06]你占领每个 永恒的片刻\n[02:30.99]无垠的宇宙 浩瀚的选择\n[02:34.84]你是最亮那颗\n[02:38.19] \n[02:38.64]所爱如月色 触手而不得\n[02:42.63]将温柔的梦 都投射\n[02:46.75]你眼里有我 对这世间的\n[02:50.48]吝啬\n[02:52.24] \n[03:06.00]所念皆星河 辗转里反侧\n[03:13.75]你占领每个 永恒的片刻\n[03:17.53]无垠的宇宙 浩瀚的选择\n[03:21.21]你是最亮那颗\n[03:24.58] \n[03:25.31]所爱如月色 触手而不得\n[03:29.00]将温柔的梦 都投射\n[03:32.98]你眼里有我 对这世间的\n[03:37.04]吝啬\n[03:41.14]茫茫的星河 终点是你的\n[03:46.84]身侧\n[03:50.37] \n[03:51.41]编曲：关天天\n[03:53.03]总策划：唐晶晶、凌联兴\n[03:54.26]监制：姚政、纤橙\n[03:55.26]统筹：陈莹、小粉\n[03:56.19]企划：潘俊、黄鲲、袁晓童\n[03:57.03]文案：黄果璇 镜千\n[03:57.91]封面：高霄帆\n[03:58.89]吉他：关天天\n[03:59.82]混音：刘城函\n[04:00.73]和声：少年佩\n[04:01.64]伴唱：沙栩帆\n[04:02.50]弦乐：国际首席爱乐乐团\n[04:03.50]制作统筹：OneCandy\n";

var vm = new Vue({
    el: "#app",
    data: {
        // 音乐信息
        music: {
            playing: false,
            like: true,
            playedPercent: 0
        },
        // 隐藏封面图
        hideCover: false,
        // 歌词当前行
        lyricRow: 0,
        // 歌词是否自动滚动
        lyricAutoScroll: false,
        // 播放模式
        playMode: 'mode-seq',
        // 时间
        time: {
            all: 0,
            current: 0
        }
    },
    methods: {
        // 播放中
        playing: function (e) {
            var data = this.$data;
            var lyricArr = this.lyricArr;

            // 播放时间
            var timeNow = e.target.currentTime;
            var timeAll = e.target.duration;

            data.time.current = timeNow;
            data.time.all = timeAll;

            data.music.playedPercent = timeNow / timeAll * 100;

            // 遍历歌词数组
            for (let i = 0; i < lyricArr.length; i++) {
                // 找不到符合的结果，播放完毕
                if (i == lyricArr.length - 1) {
                    // 更新歌词行
                    data.lyricRow = i;
                    break;
                }

                // 当前行歌词的时间
                let lTimeNow = lyricArr[i].time;
                // 下一行歌词的时间
                let lTimeNext = lyricArr[i + 1].time;

                // 判断是否符合条件
                if (lTimeNext > timeNow && lTimeNow <= timeNow) {
                    // 更新歌词行
                    data.lyricRow = i;
                    break;
                }
            }

            // 自动滚动歌词
            if (data.lyricAutoScroll) {
                var lyricList = this.$refs.lyric;
                var lyricActive = lyricList.querySelector('li.active');

                var lyricListHeight = parseFloat(getComputedStyle(lyricList, null)['height']);
                var lyricListFontSize = parseFloat(getComputedStyle(lyricList, null)['font-size']);

                lyricList.scrollTop = lyricActive.offsetTop - (lyricListHeight / 2) + (lyricListFontSize / 2);

                // 关闭自动滚动歌词，在歌词行数变更时重新开启
                data.lyricAutoScroll = false;

                // console.log('[歌词区域高度]', lyricListHeight);
            }
        },
        // 点击歌词跳转
        jumpTime: function (k) {
            // 歌词对应的时间
            var time = this.lyricArr[k].time;

            // 设置播放时间
            this.$refs.player.currentTime = time;
        },
        // 拖拽进度条
        drapProgress: function (e) {
            var clickX = e.offsetX;
            var maxX = e.currentTarget.offsetWidth;

            var player = this.$refs.player;

            // 设置播放时间
            player.currentTime = clickX / maxX * player.duration;
        },
        // 切换播放模式
        switchPlayMode: function () {
            var data = this.$data;
            var modes = ['mode-seq', 'mode-loop-all', 'mode-loop-single', 'mode-random'];
            var index = modes.indexOf(data.playMode) + 1;

            if (index > modes.length - 1) {
                index = 0;
            }

            data.playMode = modes[index];
        },
        /**
         * 格式化时间
         * 
         * @param {number|string} seconds 秒数
         * @param {string} type 返回值类型，默认 arr
         * @param {string} type arr -> 数组：[分, 秒]
         * @param {string} type str -> 字符串：分:秒
         * @returns {string[]|string} 根据设定的返回值类型返回结果
         */
        formatTime: function (seconds, type) {
            if (!(seconds >= 0)) {
                return false;
            }

            var m = Math.floor(seconds / 60);
            var s = Math.floor(seconds % 60);

            m = m < 10 ? '0' + m : m.toString();
            s = s < 10 ? '0' + s : s.toString();

            if (type == 'str') {
                return m + ':' + s;
            } else {
                return [m, s];
            }
        }
    },
    computed: {
        lyricArr: function () {
            // 拆分歌词 -> 行
            var rows = lyric.split("\n");
            var reg = /\[(\d+):(\d+\.\d+)\](.+)?/;
            var newArray = [];

            rows.forEach(function (rowValue, index) {
                // 空行
                if (!rowValue) {
                    console.log('[歌词拆分] 空行：' + index);

                    return false;
                };

                // 正则匹配
                var regResult = rowValue.match(reg);

                // 不匹配
                if (!regResult) {
                    console.log('[歌词拆分] 正则匹配失败：' + index);

                    return false;
                }

                // 处理匹配到的时间
                var regTime = (parseInt(regResult[1]) * 60) + parseFloat(regResult[2]);

                // 歌词为空
                if (regResult[3] === undefined || regResult[3].trim() == '') {
                    regResult[3] = '...';
                }

                newArray.push({
                    'time': regTime,
                    'str': regResult[3]
                });
            });

            return newArray;
        }
    },
    watch: {
        'hideCover': function () {
            var data = this.$data;

            // 若在播放中，重新开启自动滚动歌词
            // 让歌词滚动到正确的位置
            if (data.music.playing) {
                data.lyricAutoScroll = true;
            }
        },
        'lyricRow': function () {
            var data = this.$data;

            // 若在播放中，重新开启自动滚动歌词
            if (data.music.playing) {
                data.lyricAutoScroll = true;
            }
        },
        'music.like': function (isLike) {
            if (isLike) {
                console.log('收藏');
            } else {
                console.log('取消收藏');
            }
        },
        'music.playing': function (isPlaying) {
            var data = this.$data;
            var refPlayer = this.$refs.player;

            if (isPlaying) {
                // [播放]
                // 开启自动滚动歌词
                data.lyricAutoScroll = true;
                // 播放音频
                refPlayer.play().catch(function (error) {
                    // 播放出错
                    data.music.playing = false; // 二次触发监听
                    console.error('[播放出错] ' + error);
                });
            } else {
                // [暂停]
                // 关闭自动滚动歌词
                data.lyricAutoScroll = false;
                // 暂停音频
                refPlayer.pause();
            }
        }
    },
    mounted: function () {
        var tipsStr = '';

        tipsStr += '使用提示：\n';
        tipsStr += '点击“歌曲名称”可隐藏封面图，展开歌词。\n';

        setTimeout(function () {
            console.log(tipsStr);
        }, 0);
    }
});
