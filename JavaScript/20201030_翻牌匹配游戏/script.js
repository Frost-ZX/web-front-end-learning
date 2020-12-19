/**
 * 翻牌匹配游戏
 * 
 * @param {Object} options 选项
 * @param {number} options.cardCount 已有的卡片总数（根据图片数量设置）
 * @param {Element} options.gameElem 游戏区域元素
 * @param {number} [options.mapSize] 地图大小，默认 4（即：4 * 4）
 */
function FlipGame(options) {
    this.gameElem = options.gameElem;
    this.mapElem = this.gameElem.querySelector('.map');
    this.timeElem = this.gameElem.querySelector('.info .time');
    this.stepElem = this.gameElem.querySelector('.info .step');
    this.progressElem = this.gameElem.querySelector('.info .progress');

    // 已有卡片总数
    this.cardCount = options.cardCount || 0;
    // 地图大小（例如 2 - 2*2，4 - 4*4）
    this.mapSize = options.mapSize || 4;

    // 当前翻开的卡片
    this.cardShowing = [];

    this.init();
}

/**
 * 提示框
 * 
 * @param {string} content 提示的内容
 * @param {number} [time] 时长（秒），默认 5
 */
FlipGame.prototype.alert = function (content, time) {
    var alertBox = this.gameElem.querySelector('.alert-box');

    time = time || 5;

    alertBox.innerHTML = content;
    alertBox.classList.add('active');

    setTimeout(function () {
        alertBox.classList.remove('active');
    }, time * 1000);
};

// 生成 min 到 max 的随机数
FlipGame.prototype.randomNum = function (min, max) {
    max = (max - min) + 1;
    return Math.floor(Math.random() * max + min);
};

// 数组随机排序
FlipGame.prototype.arrShuffle = function (arr) {
    return arr.sort(function () {
        return Math.random() - 0.5;
    });
};

/**
 * 生成卡片序列
 * 
 * @param {number} size 每行 & 每列的个数（实际数量 = size * size）
 * @returns {number[]} 生成的卡片序列信息
 */
FlipGame.prototype.createCards = function (size) {
    // 随机数
    var random = 0;
    // 需要的卡片数量
    var count = size * size / 2;
    // 卡片 ID
    var cardIDs = [];
    // 卡片序列信息，用于返回
    var cardInfo = [];

    // 生成卡片 ID
    for (var i = 0; i < count; i++) {
        // 随机数：1 - 已有卡片总数
        random = this.randomNum(1, this.cardCount);
        cardIDs.push(random);
    }
    // 复制为一对
    cardIDs = cardIDs.concat(cardIDs);
    // 打乱顺序
    cardIDs = this.arrShuffle(cardIDs);

    // 当前取出的位置
    var cardIndex = 0;
    // 行
    for (var i = 0; i < size; i++) {
        // 列
        var row = [];
        for (var j = 0; j < size; j++) {
            // 取出卡片 ID，放到行中
            row.push(cardIDs[cardIndex]);
            cardIndex++;
        }
        // 写入到卡片序列信息
        cardInfo.push(row);
    }

    return cardInfo;
};

// 更新信息（步数、进度）
FlipGame.prototype.updateInfo = function () {
    this.timeElem.textContent = this.usedTime;
    this.stepElem.textContent = this.step;
    this.progressElem.textContent = `${this.progress.current} / ${this.progress.max}`;

    // 是否已完成
    if (this.progress.current == this.progress.max) {
        this.stopGame(true);
    }
};

// 查看卡片
FlipGame.prototype.showCard = function (elem) {
    var self = this;
    var cards = [];

    // 禁止重复点击
    if (elem.dataset.show == '1') {
        return false;
    }

    // 游戏未开始
    if (self.timer === null) {
        self.alert('游戏未开始', 1);
        return false;
    }

    // 增加步数
    self.step++;

    // 已显示两张卡片，全部隐藏
    cards = self.cardShowing;
    if (cards.length >= 2) {
        cards.forEach(function (elem) {
            elem.dataset.show = '0';
        });
        self.cardShowing = [];
    }

    // 显示点击的卡片
    elem.dataset.show = '1';
    self.cardShowing.push(elem);

    // 操作后显示两张卡片，增加步数，判断是否匹配
    cards = self.cardShowing;
    if (cards.length == 2) {
        if (cards[0].cardID == cards[1].cardID) {
            // 匹配
            cards.forEach(function (elem) {
                elem.dataset.ok = '1';
            });
            self.cardShowing = [];

            self.progress.current += 1;
        } else {
            // 不匹配
            setTimeout(function () {
                cards.forEach(function (elem) {
                    elem.dataset.show = '0';
                });
            }, 1000);
        }
    }
};

// 游戏开始
FlipGame.prototype.startGame = function () {
    var self = this;

    // 用时
    this.usedTime = 0;
    // 步数
    this.step = 0;
    // 进度
    this.progress = {
        max: self.mapSize * self.mapSize / 2,
        current: 0
    }

    // 计时器
    this.timer = null;

    self.initMap();

    self.timer = setInterval(function () {
        self.usedTime += 1;
        self.updateInfo();
    }, 1000);
};

// 游戏结束
FlipGame.prototype.stopGame = function (isOver) {
    clearInterval(this.timer);
    this.timer = null;

    if (isOver) {
        var str = `[游戏通关]<br>总用时 ${this.usedTime} 秒，一共用了 ${this.step} 步`;
        str += `<br>能达到的最少步数为 ${this.progress.max * 2} 步`;
        this.alert(str, 8);
    }
};

// 初始化地图
FlipGame.prototype.initMap = function () {
    var self = this;
    var size = self.mapSize;
    var cards = self.createCards(size);

    // 清空已有内容
    this.mapElem.innerHTML = '';

    // 遍历生成元素
    cards.forEach(function (row) {
        var rowElem = document.createElement('div');

        rowElem.className = 'row';
        rowElem.style.height = `${100 / size}%`;

        row.forEach(function (id) {
            var lineElem = document.createElement('div');

            // 卡片图片
            lineElem.innerHTML = `<span style="background-image: url('./images/${id}.png');"></span>`;
            // 卡片大小
            lineElem.style.width = `${100 / size}%`;
            // 事件
            lineElem.onclick = function () {
                self.showCard(this);
            }
            // 记录卡片 ID
            lineElem.cardID = id;

            rowElem.appendChild(lineElem);
        });

        self.mapElem.appendChild(rowElem);
    });
};

// 初始化事件
FlipGame.prototype.initEvents = function () {
    var self = this;
    var selDifficulty = self.gameElem.querySelector('#ctrl-difficulty');
    var btnStart = self.gameElem.querySelector('#btn-startgame');
    var btnNew = self.gameElem.querySelector('#btn-newgame');

    // 选择难度
    selDifficulty.onchange = function () {
        var selected = parseInt(this.value);

        // 未选择
        if (selected == -1) {
            return false;
        }

        // 已选择
        self.stopGame(false);
        self.mapSize = selected;

        // 提示
        self.alert('已设置难度', 1);
    }

    // 开始游戏
    btnStart.onclick = function () {
        if (self.timer == null) {
            self.startGame();
        } else {
            self.alert('游戏已经开始', 1);
        }
    }
    // 新游戏
    btnNew.onclick = function () {
        self.stopGame(false);
        self.startGame();
        self.alert('开始新的游戏', 1);
    }
};

// 初始化游戏
FlipGame.prototype.init = function () {
    this.initEvents();
    this.alert('游戏已载入完成<br>请在左侧选择难度后<br>点击“开始游戏”开始', 3);
};

var game = new FlipGame({
    gameElem: document.querySelector('#flip-game'),
    cardCount: 20,
    mapSize: 4
});
