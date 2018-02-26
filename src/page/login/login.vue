<template>
    <div>
        <head-top  headTitle="密码登录" goBack='true'></head-top> 
        <div class="m-login">
            <form  class='m-form'>
                <section class="input_container">
                    <input type="text" placeholder="账号">
                </section>
                <section class="input_container"  >
                    <input v-if='!showPassword' type="password" placeholder="密码" v-model="password">
                    <input v-else type="text" placeholder="密码" v-model="password">
                    <div class="botton_switch" :class='{change_to_text:showPassword}' >
                       abc
                       ...
                       <div class="circel_button" :class='{trans_to_right: showPassword}' @click='changePasswordType'></div>
                    </div>
                </section>
                <section class="input_container last_none">
                    <input type="text" placeholder="验证码">
                </section>
            </form>

            <p class='login_tips'>温馨提示：未注册过的账号，登录时将自动注册</p>
            <p class='login_tips'>注册过的用户可凭账号密码登录</p>

            <div class='button_base'>登录</div>
        </div>
    </div>

</template>
<script type="text/javascript">

import headTop from '@/components/head';
import {getcaptchas} from '../../service/getData'

export default {
    data() {
        return {
            showPassword: false,
            password: null
        }
    },
    mounted() {
     
    },
    components:{
        headTop
    },
    created() {
        getcaptchas().then(function (res) {
            debugger
        })
    },
    methods: {
        changePasswordType() {
            this.showPassword = !this.showPassword
        }
    }
}
</script>
<style lang='scss' scoped>
    @import '../../style/mixin';

    .m-login {
        padding-top: 1.95rem;
    }
    
    .m-form {
        background-color: $wc;
        margin: 0.9rem 0;
    }
    .login_tips {
        font-size: 0.5rem;
        line-height: 0.5rem;
        padding: 0.4rem 0.6rem;
        color:$rc; 
    }
    /* 表单 */
    .input_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.6rem 0.8rem;
        border-bottom: 1px solid #f1f1f1;
        input {
            font-size: 0.7rem;
            color: #666;
            width: 80%;
        }
        &.last_none {
            border-bottom: none;
        }
    }
    .botton_switch {
        background-color: #ccc;
        @include wh(2rem, 0.7rem);
        font-size:0.55rem;
        text-align: center;
        border-radius: 0.5rem;
        position: relative;
        .circel_button {
            @include wh(1.2rem, 1.2rem);
            position: absolute;
            z-index: 1;
            border-radius: 50%;
            background-color: #f1f1f1;
            top: -0.25rem;
            left: -0.1rem;
            box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
        }
        
        .trans_to_right{
            transform: translateX(1.3rem);
        }

        &.change_to_text{
            background-color: #4cd964;
        }
    }
</style>