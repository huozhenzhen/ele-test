<template>
    <div>
        <head-top signin-up='home'>
                <span slot = "logo" class="head-logo" >eleme</span>
        </head-top> 
    </div>
</template>
<script type="text/javascript">

import headTop from '@/components/head';
import {cityGuess, hotcity, groupcity} from '../../service/getData'

export default {
    data() {
        return {
     
        }
    },
    mounted() {
        // cityGuess().then(function (argument) {
        //     // body...
        // })
    },
    components:{
        headTop
    },
    created() {
    },
    methods: {
       
    }
}
</script>
<style lang='scss' scoped>
    @import '../../style/mixin';

    .head-logo {
        color: $wc;
        font-size: 0.7rem;
        padding-left :0.4rem;
    }
</style>