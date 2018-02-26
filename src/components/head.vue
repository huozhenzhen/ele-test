<template>
    <div id="m-header">
        <slot name= "logo"></slot>
        <router-link to='/home' class="head_login" v-if='signinUp'>
                 <svg class="user_avatar">
                     <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
                 </svg>
        </router-link>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
                  </svg>
        </section>

        <section v-if="headTitle" class="head_title">
            {{headTitle}}
        </section>
    </div>
</template>
<script type="text/javascript">

export default {
    data() {
        return {
     
        }
    },
    props : ['headTitle','signinUp','goBack'],
    created() {
  
    },
    methods: {
       
    }
}
</script>
<style lang="scss"  scoped>
    @import  '../style/mixin';
    
    #m-header {
        background-color: $blue;
        @include wh(100%, 1.95rem);
        position: fixed;
        left:0;
        right: 0;
        z-index: 100;
        line-height: 1.95rem;

        .user_avatar {
            @include wh(1rem, 1rem);
            fill: $wc;

        }
        .head_login {
            position:absolute;
            right: 0.8rem;
            top: 0.2rem;
        }
        .head_goback {
            width: 1rem;
            height: 1rem;
            position: absolute;
            left: 0.4rem;
            top: 0.3rem;
        }
        .head_title {
            text-align: center;
            color: $wc;
            font-size: 0.8rem;
            font-weight: 800;
        }
    }



</style>