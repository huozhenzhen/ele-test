<template>
    <header class="header">
          <div class="layout-1">
              <span>陕西</span>
              <b class="icon"></b>
          </div>
          <div class="layout-2"></div>
    </header>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App++++++++++++++'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'src/style/common.scss';
    
    .header {
        height: 3rem;
        line-height: 3rem;
        .layout-1 {
            width: 3rem;
            .icon {
                 // @include mix-arrow-down-black;  
            }
          }
    }
</style>
