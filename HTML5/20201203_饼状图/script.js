// 总人数：100
var chartDatas = [
    {
        title: '15-20岁',
        count: 10
    },
    {
        title: '20-25岁',
        count: 56
    },
    {
        title: '25-30岁',
        count: 20
    },
    {
        title: '30岁以上',
        count: 14
    }
];

function PieChart(options) {
    // 数据
    this.data = options.data;

    // Canvas 元素
    this.elem = options.elem;

    // 颜色
    this.colorArr = [];

    this.init();
}

// 获取随机 RGB 颜色
PieChart.prototype.getRandomRGB = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

// 获取随机 HSL 颜色
PieChart.prototype.getRandomHSL = function () {
    var h = Math.floor(Math.random() * 256);
    var s = Math.floor(Math.random() * 101);
    var l = Math.floor(Math.random() * 101);

    return `hsl(${h}, ${s}%, ${l}%)`;
};

// 绘制图例
PieChart.prototype.drawLengend = function (startX, startY, blockW, blockH, marginH, marginV) {
    // startX：起始 X
    // startY：起始 Y
    // blockW：图例矩形宽度
    // blockH：图例矩形高度（字体大小以此为准）
    // marginH：水平间距（标题与矩形的间隔）
    // marginV：垂直间距

    var currentX = startX;
    var currentY = startY;

    for (var i = 0; i < this.pieCount; i++) {
        // 生成并记录随机颜色
        this.colorArr.push(this.getRandomRGB());
        // this.colorArr.push(this.getRandomHSL());

        // 绘制
        this.ctx.beginPath();
        // 矩形
        this.ctx.fillStyle = this.colorArr[i];
        this.ctx.fillRect(currentX, currentY, blockW, blockH);
        // 文本
        this.ctx.font = blockH + 'px monospace';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(this.data[i].title + '（' + this.data[i].count + '）', currentX + blockW + marginH, currentY + blockH / 2);

        currentY += blockH + marginV;
    }
};

// 绘制扇形
PieChart.prototype.drawPie = function (pX, pY, pR) {
    // pX：圆心 X
    // pY：圆心 Y
    // pR：半径

    // 数据总量（每一份的加起来）
    var dataCount = 0;

    // 计算数据总量
    this.data.forEach(function (item) {
        dataCount += item.count;
    });

    // 扇形弧度
    var angleArr = [];
    // 扇形弧度（已有）
    var angleUsed = 0;

    // 计算扇形弧度
    this.data.forEach(function (item) {
        var angle = (2 * Math.PI) * item.count / dataCount;

        angleArr.push(angle);
    });

    // 绘制
    var canvasData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
    var progress = 0.01;
    var draw = setInterval(function () {
        // 清空画布
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        // 放回数据
        this.ctx.putImageData(canvasData, 0, 0);

        for (var i = 0; i < this.pieCount; i++) {
            this.ctx.beginPath();

            this.ctx.moveTo(pX, pY);
            this.ctx.arc(pX, pY, pR, angleUsed * progress, (angleUsed + angleArr[i]) * progress);

            this.ctx.fillStyle = this.colorArr[i];
            this.ctx.fill();

            // 标题
            if (progress == 1) {
                this.drawTitle(angleUsed, angleArr[i], this.data[i].title, this.colorArr[i]);
            }

            // 记录
            angleUsed += angleArr[i];
        }

        angleUsed = 0;
        progress += 0.01;
        progress = parseFloat(progress.toFixed(2));

        if (progress > 1) {
            clearInterval(draw);
        }
    }.bind(this), 10);
};

// 绘制扇形标题
PieChart.prototype.drawTitle = function (angleStart, angleSelf, text, color) {
    // angleStart：开始的弧度
    // angleSelf：扇形所占的弧度
    // text：标题文本
    // color：标题颜色

    // 伸出去的长度
    var edge = this.cR + 20;
    // X轴方向的直角边
    var edgeX = edge * Math.cos(angleStart + angleSelf / 2);
    // Y轴方向的直角边
    var edgeY = edge * Math.sin(angleStart + angleSelf / 2);
    // 伸出去的坐标
    var outX = this.cX + edgeX;
    var outY = this.cY + edgeY;

    this.ctx.beginPath();

    // 线
    this.ctx.moveTo(this.cX, this.cY);
    this.ctx.lineTo(outX, outY);
    this.ctx.strokeStyle = color;
    this.ctx.stroke();

    // 字
    var align = outX > this.cX ? 'left' : 'right';
    this.ctx.font = '16px monospace';
    this.ctx.textAlign = align;
    this.ctx.textBaseline = 'bottom';
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, outX, outY);

    // 字的下划线
    var textW = this.ctx.measureText(text).width;
    this.ctx.moveTo(outX, outY);
    outX = align == 'left' ? outX + textW : outX - textW;
    this.ctx.lineWidth = 2;
    this.ctx.lineTo(outX, outY);
    this.ctx.stroke();
}

// 初始化
PieChart.prototype.init = function () {
    /** @type {HTMLCanvasElement} */
    this.ctx = this.elem.getContext('2d');

    // 宽高
    this.canvasWidth = this.ctx.canvas.width;
    this.canvasHeight = this.ctx.canvas.height;

    // 圆心和半径
    this.cX = this.canvasWidth / 2 + 64;
    this.cY = this.canvasHeight / 2;
    this.cR = 150;

    // 扇形份数
    this.pieCount = this.data.length;

    // 清空画布
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    // 绘制
    this.drawLengend(20, 20, 32, 16, 10, 16);
    this.drawPie(this.cX, this.cY, this.cR);
};

// 调用
window.addEventListener('load', function () {
    var chartElem = document.querySelector('.pie-chart');

    chartElem.width = 600;
    chartElem.height = 400;

    var pieChart = new PieChart({
        data: chartDatas,
        elem: chartElem
    });
});
