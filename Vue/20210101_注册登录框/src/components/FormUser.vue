<template>
    <!-- 注册框 & 登录框 -->
    <div class="form-user">
        <div class="tab">
            <div class="tab-item" :class="{'active': formType == 'FormRegister'}"
                @click="changeForm('FormRegister')">账户注册</div>
            <div class="tab-item" :class="{'active': formType == 'FormLogin'}"
                @click="changeForm('FormLogin')">账户登录</div>
        </div>
        <component :is="formType"></component>
    </div>
</template>

<script>
import FormRegister from './FormRegister.vue'
import FormLogin from './FormLogin.vue'

export default {
    name: 'FormUser',
    components: {
        FormRegister,
        FormLogin
    },
    data: function () {
        return {
            // 表单类型
            // FormLogin - 登录，FormRegister - 注册
            formType: 'FormLogin'
        };
    },
    methods: {
        changeForm: function (type) {
            this.formType = type;
        }
    }
}
</script>

<style>
.form-user {
    display: block;
    position: absolute;
    top: 50px;
    left: 50%;
    width: 350px;
    height: 320px;
    background-color: #FFF;
    text-align: center;
    font-size: 16px;
    transform: translateX(-50%);
    user-select: none;
}

/* 切换 */

.form-user .tab {
    padding: 16px 0;
    border-bottom: 1px solid #EEE;
    font-size: 0;
}

.form-user .tab > div {
    display: inline-block;
    width: 50%;
    font-size: 18px;
    color: #555;
    cursor: pointer;
}

.form-user .tab > div.active {
    font-weight: bold;
    color: #F44336;
}

/* 表单 */

.form-user .form {
    padding-top: 30px;
}

/* 表单 - 输入 */

.form-user .form .table input[type="text"],
.form-user .form .table input[type="password"] {
    margin: 0;
    margin-bottom: 15px;
    padding: 0 10px;
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    border: 1px solid #CCC;
    border-radius: 0;
    outline: none;
    font-size: 14px;
}

/* 表单 - 按钮 */

.form-user .form .btns > div {
    cursor: pointer;
}

.form-user .form .btns > div:hover {
    opacity: 0.8;
}

.form-user .form .btns .btn-forget {
    margin-bottom: 15px;
    padding: 0 25px;
    text-align: right;
    font-size: 14px;
    color: #555;
}

.form-user .form .btns .btn-submit {
    display: inline-block;
    padding: 5px 0;
    width: 300px;
    background-color: #F44336;
    letter-spacing: 1em;
    text-indent: 1em;
    font-size: 18px;
    color: #FFF;
}
</style>
