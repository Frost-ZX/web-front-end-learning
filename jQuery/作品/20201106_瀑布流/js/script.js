// 打乱数组
function arrShuffle(arr) {
    return arr.sort(function () {
        return Math.random() - 0.5;
    });
};

// 创建列到目标瀑布流中
function createColumn(colWidth, target) {
    // colWidth：列宽（默认 240px）
    // target：瀑布流盒子（jQuery 对象，默认 .waterfall）

    colWidth = colWidth || 240;
    target = target || $('.waterfall');

    var windowWidth = $(window).width();
    var colCount = Math.floor( windowWidth / colWidth);

    for (var i = 0; i < colCount; i++) {
        target.append( $('<div class="col"></div>') );
    }

    target.width(colWidth * colCount + 10);
}

// 加载数据到目标瀑布流中
// 自适应列数（.col）
function loadData(data, target, btnMore) {
    // data：数据 JSON 文件地址
    // target：瀑布流盒子（jQuery 对象，默认 .waterfall）
    // btnMore：按钮 - 查看更多（jQuery 对象，默认 .waterfall-more .btn）

    target = target || $('.waterfall');
    btnMore = btnMore || $('.waterfall-more .btn');

    // 禁用按钮
    btnMore.attr('data-enabled', '0');

    // 获取数据
    $.get(data, function (data, status) {
        // 成功
        if (status == 'success') {
            var dataCount = data.length; // 数据个数
            var loadedCount = 0;         // 已加载的个数

            // 测试：打乱数据
            // data = arrShuffle(data);

            data.forEach(function (item) {
                // 创建
                var elem = $(`<div class="card">
                    <div class="thumb" style="background-image: url('${item.thumb}');"></div>
                    <div class="description">${item.description}</div>
                    <div class="info">
                        <div class="left">
                            <span class="avatar" style="background-image: url('${item.avatar}');"></span>
                            <span class="name">${item.author}</span>
                        </div>
                        <div class="right">
                            <span class="like-icon"></span>
                            <span class="like-num">${item.like}</span>
                        </div>
                    </div>
                </div>`);
                // 添加到第一列（缩略图加载完成后根据列高度移动到其他列中）
                elem.appendTo( $(target).find('.col').eq(0) );

                // 卡片缩略图元素宽度
                var cardThumbWidth = $(elem).width();

                $('<img />').attr('src', item.thumb).on('load', function () {
                    // 获取缩略图宽高
                    var imgHeight = this.height;
                    var imgWidth = this.width;

                    // 根据比例设置卡片缩略图元素高度
                    // cardThumbWidth / imgWidth = cardThumbHeight / imgHeight
                    // cardThumbHeight = cardThumbWidth / imgWidth * imgHeight
                    elem.find('.thumb').height(cardThumbWidth / imgWidth * imgHeight);

                    // 找到高度最低的一列
                    var minHeight = null;
                    var minIndex = null;
                    $(target).find('.col').each(function (index, elem) {
                        var elemHeight = $(elem).height();

                        if (minHeight != null && elemHeight < minHeight) {
                            // 已有最小值，且当前高度值小于最小值
                            minHeight = elemHeight;
                            minIndex = index;
                        } else if (minHeight === null) {
                            // 没有最小值，把当前高度值作为最小值
                            minHeight = elemHeight;
                            minIndex = index;
                        }
                    });

                    // 显示卡片
                    elem.appendTo( $(target).find('.col').eq(minIndex) );
                    elem.fadeIn(1000, function () {
                        loadedCount++;

                        if (loadedCount == dataCount) {
                            // 启用按钮
                            btnMore.attr('data-enabled', '1');
                        }
                    });
                });
            });
        }
    });
}

var waterfallElem = $('.waterfall');
var btnMore = $('.waterfall-more .btn');

createColumn(240, waterfallElem);
loadData('./js/data.json', waterfallElem, btnMore);

btnMore.on('click', function () {
    if ( $(this).attr('data-enabled') == '1' ) {
        loadData('./js/data.json');
    }
});
