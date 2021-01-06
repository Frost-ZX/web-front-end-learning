<template>
    <!-- 登录框 -->
    <div class="form">
        <div class="table">
            <input type="text" class="i-account" placeholder="邮箱 / 用户名 / 登录手机" v-model="account" />
            <input type="password" class="i-password" placeholder="密码" v-model="password" />
        </div>
        <div class="btns">
            <div class="btn-forget">忘记密码</div>
            <div class="btn-submit">登录</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormLogin',
    data: function () {
        return {
            account: '',
            password: ''
        };
    }
}
</script>
