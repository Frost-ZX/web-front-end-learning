window.onload = function () {
    var inputs = document.querySelectorAll('#register .input input');
    var notices = document.querySelectorAll('#register .input .notice');
    var btnSubmit = document.querySelector('#submit');

    // 正则表达式
    var reg = {
        phone: /^0?1[3-9]\d{9}$/,
        nickname: /^[\dA-Za-z\u4e00-\u9fa5]{1,8}$/,
        password: /^[\w\.\?\!\$]{6,16}$/,
        passwordConfirm: /.*/
    };

    // 设置元素显示与隐藏
    // 参数：元素，是否显示
    function setVisible(element, isVisible) {
        if (isVisible) {
            element.style.visibility = 'visible';
        } else {
            element.style.visibility = 'hidden';
        }
    }

    // 检查表单
    function checkForm() {
        var fails = 0; // 失败次数

        // 表单内容
        var info = {
            phone: inputs[0].value,
            nickname: inputs[1].value,
            password: inputs[2].value,
            passwordConfirm: inputs[3].value
        };

        var pos = 0;

        // 正则验证
        for (var key in info) {
            if (info[key] != '' && !reg[key].test(info[key])) {
                fails++;
                setVisible(notices[pos], true);
            } else {
                setVisible(notices[pos], false);
            }
            pos++;
        }

        // 验证两次输入的密码
        if (info.passwordConfirm != '' && info.password != info.passwordConfirm) {
            fails++;
            setVisible(notices[3], true);
        } else {
            setVisible(notices[3], false);
        }

        // 若有验证失败
        if (fails > 0) {
            return false;
        }
    }

    // 输入时
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].oninput = function () {
            checkForm();
        }
    }

    // 提交按钮
    btnSubmit.onclick = function () {
        return checkForm();
    }
}
