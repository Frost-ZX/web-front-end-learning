window.addEventListener('load', function () {
    var questElem = document.createElement('div');

    questElem.classList.add('random-question');

    questElem.innerHTML = `
    <div class="question"></div>
    <div class="ctrl">
        <div class="btn-get-new">获取题目</div>
        <div class="btn-go-detail">查看答案</div>
    </div>`;

    document.body.appendChild(questElem);

    var questText = questElem.querySelector('.question');
    var btnGetNew = questElem.querySelector('.btn-get-new');
    var btnGoDetail = questElem.querySelector('.btn-go-detail');
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
        questElem.classList.remove('show');
    });

    // 悬浮按钮 - 随机出题
    (function () {
        var btnFloat = document.querySelector('.btn-float');
        var btnQuest = document.createElement('div');

        btnQuest.classList.add('btn-quest');
        btnQuest.innerHTML = '随机';
        btnQuest.onclick = function () {
            questElem.classList.add('show');
        }

        btnFloat.appendChild(btnQuest);
    })();
});