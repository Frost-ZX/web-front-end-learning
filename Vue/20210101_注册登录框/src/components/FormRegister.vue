<template>
    <!-- 注册框 -->
    <div class="form">
        <div class="table">
            <div class="table">
                <input type="text" class="i-account" placeholder="手机号 / 邮箱" v-model="account" />
                <input type="password" class="i-password" placeholder="密码" v-model="password" />
                <input type="password" class="i-password-confirm" placeholder="确认密码" v-model="passwordConfirm" />
            </div>
            <div class="btns">
                <div class="btn-submit">注册</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormRegister',
    data: function () {
        return {
            account: '',
            password: '',
            passwordConfirm: ''
        };
    }
}
</script>
