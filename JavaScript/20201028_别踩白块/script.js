function WhiteTileGame(targetSelector) {
    var targetElem = document.querySelector(targetSelector);

    this.scoreElem = targetElem.querySelector('.info .score'); 
    this.speedElem = targetElem.querySelector('.info .speed'); 
    this.tilesElem = targetElem.querySelector('.tiles'); 
    this.rowsElem = targetElem.querySelector('.rows');
    this.btnStart = targetElem.querySelector('.btn-start');
    this.btnPause = targetElem.querySelector('.btn-pause');
    this.btnResume = targetElem.querySelector('.btn-resume');

    // Tiles 的位置
    // 对应 .tiles .rows 的样式
    // top: calc(tilesY % / 4);
    // 向下移动为负数
    this.tilesY = 0;

    this.score = 0;        // 分数
    this.speed = 1;        // 速度根据分数变化
    this.running = null;   // 运行标记（保存定时器 ID）
    this.over = false;     // Game Over 标记

    // 防止点击非最后的黑块
    this.createTileID = 0; // 生成的块 ID
    this.clickTileID = 0;  // 点击的块 ID

    // 初始化
    this.init();
}

WhiteTileGame.prototype = {
    alert: function (content, time) {
        // content：提示内容
        // time：时长（秒）

        var alertBox = document.querySelector('#alert-box');

        time = time === undefined ? 5 : time;

        alertBox.innerHTML = content;
        alertBox.style.opacity = '1';

        setTimeout(function () {
            alertBox.style.opacity = '0';
        }, time * 1000);
    },
    // 根据 this.tilesY 移动 Tiles
    moveTiles: function () {
        this.rowsElem.style.top = `calc(${this.tilesY}% / 4)`;
    },
    // 创建行
    createRow: function () {
        // 随机数（0 - 3），黑块的下标
        var random = Math.floor(Math.random() * 4);
        // 行
        var row = document.createElement('div');

        row.className = 'row';

        // 行 - 块
        for (var i = 0; i < 4; i ++) {
            var tile = document.createElement('div');

            // 行 - 块 - 黑块
            if (i === random) {
                tile.className = 'black';
                tile.dataset.id = this.createTileID;

                this.createTileID += 1;
            }

            row.appendChild(tile);
        }

        this.rowsElem.insertBefore(row, this.rowsElem.children[0]);
        this.tilesY -= 100;
        this.moveTiles();
    },
    // 删除最后一行
    removeLast: function () {
        var rows = this.rowsElem.children;
        rows[rows.length - 1].remove();
    },
    // 更新分数显示和速度
    updateScore: function () {
        // 更新分数
        this.scoreElem.textContent = this.score;
        // 加速
        if (this.score % 5 === 0) {
            this.speed += 0.5;
        }
        this.speedElem.textContent = this.speed;
    },
    // 获取末尾黑块的位置
    getLastPosition: function () {
        var tile = this.rowsElem.querySelectorAll('.black');
        var y = tile[tile.length - 1].offsetTop;

        return y;
    },
    // 开始游戏
    start: function () {
        var self = this;

        if (self.over) {
            self.alert('游戏已结束');
            return false;
        }

        if (self.running != null) {
            self.alert('游戏已开始');
            return false;
        }

        self.running = setInterval(function () {
            self.tilesY += 1 * self.speed;
            self.moveTiles();

            // 生成新行
            if (self.tilesY >= -100) {
                self.createRow();
            }
            // 删除最后一行
            if (self.rowsElem.children.length > 6) {
                self.removeLast();
            }

            // 判断黑块是否达到边缘
            if (self.getLastPosition() >= 400) {
                self.stop(true);
            }
        }, 20);
    },
    // 停止游戏
    stop: function (isOver) {
        // isOver：是否 Game Over

        var self = this;

        clearInterval(self.running);
        self.running = null;

        if (isOver) {
            self.over = true;
            self.alert(`Game Over<br>您的分数为 ${self.score}`, 10);
            self.btnPause.disabled = true;
            self.btnResume.disabled = true;
        }
    },
    // 初始化
    init: function () {
        var self = this;

        self.tilesElem.onclick = function (e) {
            if (self.running === null) {
                return false;
            }

            // 目标
            var target = e.target || window.event.srcElement;
            
            if (target.className == 'black') {
                if (target.dataset.id == self.clickTileID) {
                    target.className = '';

                    self.clickTileID += 1;
                    self.score += 1;
                    self.updateScore();
                }
            } else {
                self.stop(true);
            }
        }

        self.btnStart.onclick = function () {
            self.start();
            this.disabled = true;
            self.btnPause.disabled = false;
        }
        self.btnPause.onclick = function () {
            self.stop(false);
            this.disabled = true;
            self.btnResume.disabled = false;
        }
        self.btnResume.onclick = function () {
            self.start();
            this.disabled = true;
            self.btnPause.disabled = false;
        }
    }
};

WhiteTileGame.prototype.constructor = WhiteTileGame;

var game = new WhiteTileGame('#white-tile-game');
