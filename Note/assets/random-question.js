window.addEventListener('load', function () {
    /**
     * 切换是否显示
     * 
     * @param {Element} elem 要操作的元素
     * @param {boolean} isShow 是否显示
     */
    function switchShow(elem, isShow) {
        if (!elem) {
            return false;
        }

        if (isShow) {
            elem.classList.add('show');
            elem.classList.remove('hide');
        } else {
            elem.classList.add('hide');
            elem.classList.remove('show');
        }

        return true;
    }

    var questElem = document.createElement('div');

    questElem.classList.add('random-question');
    questElem.innerHTML = `
    <div class="question"></div>
    <textarea class="anwser"></textarea>
    <div class="ctrl">
        <div class="btn-get-new">获取题目</div>
        <div class="btn-go-detail">查看答案</div>
        <div class="btn-close">关闭</div>
    </div>`;

    document.body.appendChild(questElem);

    var questText = questElem.querySelector('.question');
    var btnGetNew = questElem.querySelector('.btn-get-new');
    var btnGoDetail = questElem.querySelector('.btn-go-detail');
    var btnClose = questElem.querySelector('.btn-close');
    // 锚点
    var hash = '';

    btnGetNew.addEventListener('click', function () {
        // 随机获取标题
        var questTitle = getRandomElem('h4');

        questText.innerHTML = questTitle.innerHTML;
        hash = questTitle.id;
    });

    btnGoDetail.addEventListener('click', function () {
        location.hash = '#' + hash;
        switchShow(questElem, false);
    });

    btnClose.addEventListener('click', function () {
        switchShow(questElem, false);
    });

    // 悬浮按钮 - 随机出题
    (function () {
        var btnFloat = document.querySelector('.btn-float');
        var btnQuest = document.createElement('div');

        btnQuest.classList.add('btn-quest');
        btnQuest.innerHTML = '随机';
        btnQuest.onclick = function () {
            switchShow(questElem, true);
        }

        btnFloat.appendChild(btnQuest);
    })();
});