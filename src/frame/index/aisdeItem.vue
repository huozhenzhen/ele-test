<template>
        <div class="m-title">
            <div class="left">
                <span>{{message}}</span>
            </div>
            <div class="right">
                <span>全部</span>
                <b class="icon"></b>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'src/style/import.scss';

   .m-title {
        height: 2.6rem;
        line-height: 2.6rem;
        font-size: 0.7rem;
        display: flex;
        background-color:  $bg_color3;
        border-bottom: 4px solid $bg_color4;
        .left {
            span {
                padding: 0 0.2rem;
                border-left: 4px solid $bg_color1;
            }
        }
        .right {
            flex: 1;
            width: 100%;
            padding-right: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            span {
                padding-right: 0.2rem;
            }
            .icon {
                @include mix-arrow-right;
            }
        }
   }
</style>
