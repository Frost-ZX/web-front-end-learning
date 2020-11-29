window.onload = function () {

    var itemTabs = document.querySelector('#item-tabs ul');
    var itemList = document.querySelector('#item-list');

    // 分类索引
    var productType = [
        {
            type: "jujia",
            name: "居家优品"
        },
        {
            type: "jingxuan",
            name: "精选"
        },
        {
            type: "shenghuo",
            name: "生活百货"
        },
        {
            type: "zhineng",
            name: "智能先锋"
        },
        {
            type: "shishang",
            name: "时尚达人"
        }
    ]

    // 加载商品
    // 参数：商品数据，商品类型，加载到目标
    function loadItems(data, itemType, target) {
        target.innerHTML = '';
        data[itemType].forEach(function (value) {
            var item = document.createElement('a');            // 商品项
            var itemThumb = document.createElement('div');     // 商品项 - 缩略图
            var itemInfoTitle = document.createElement('div'); // 商品项 - 标题
            var itemInfoPrice = document.createElement('div'); // 商品项 - 价格信息
            var itemTag = document.createElement('div');       // 商品项 - 价格信息 - 子标签
            
            // 商品项
            item.href = '#';
            // 商品项 - 缩略图
            itemThumb.className = 'thumb';
            itemThumb.innerHTML = `<img src="${value['img']}" alt="缩略图" />`;
            // 商品项 - 标题
            itemInfoTitle.className = 'info-title';
            itemInfoTitle.textContent = value['title'];
            // 商品项 - 价格信息
            itemInfoPrice.className = 'info-price';
            itemInfoPrice.innerHTML = `<div class="price"><span>&yen;<i>${value['price']}</i></span></div>`;
            // 商品项 - 价格信息 - 子标签
            itemTag.className = 'tag';
            if (value['isSubtag']) {
                itemTag.innerHTML = `<div class="tag-text">${value['subtag']}</div>`;
            } else if (value['isPlus']) {
                itemTag.innerHTML = `<div class="tag-vip">
                                    <span class="price">&yen;<i>${value['plusPrice']}</i></span>
                                    <img src="./plus.png" alt="会员" /></div>`;
            }

            itemInfoPrice.appendChild(itemTag);

            item.appendChild(itemThumb);
            item.appendChild(itemInfoTitle);
            item.appendChild(itemInfoPrice);

            target.appendChild(item);
        });
    }

    productType.forEach(function (value, index) {
        var tabActiveClass = 'active';
        var item = document.createElement('li');

        if (index == 0) {
            item.className = tabActiveClass; // 类名（激活的选项卡按钮）
        }
        item.dataset.type = value.type;      // 分类 ID
        item.textContent = value.name;       // 文本

        // 事件
        item.onclick = function () {
            var tabItems = this.parentElement.children;
            // 防止重复操作
            if (this.className != tabActiveClass) {
                // 移除原激活按钮 class
                for (var i = 0; i < tabItems.length; i++) {
                    if (tabItems[i].className == tabActiveClass) {
                        tabItems[i].className = '';
                        break;
                    }
                }
                // 激活当前点击的按钮
                this.className = tabActiveClass;

                // 加载对应分类下的商品
                loadItems(products, this.dataset.type, itemList);
            }
        }
        itemTabs.appendChild(item);
    });

    loadItems(products, 'jujia', itemList);

}
