<template>
   <section class="pbd">
        <header class="m-header">
            <div class="layer">
            <router-link :to="{path: '/city'}">
                <div class="layout-1">
                    <span class="city ellipsis">{{city}}</span>
                    <b class="icon"></b>
                </div>
            </router-link>  
           
                <div class="layout-2">
                    <b class="icon"></b>
                </div>
            </div>
        </header>
        <swiper :options="swiperOption" class="swiper">
          <swiper-slide><img src="../../assets/banner_0.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/banner_1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/banner_0.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/banner_1.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="m-hot">
            <asideItem message = "正在热映"></asideItem>
            <movies></movies>  
        </div>
        <div class="m-cinemas">
            <asideItem message = "推荐影院"></asideItem>
            <cinemas></cinemas>
        </div>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import asideItem from './aisdeItem.vue';
import movies from './movies.vue';
import cinemas from './cinemas.vue';
// import '@/style/import.scss';


export default {
    data() {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop : true,
            autoplay: 3000,
            speed: 1000
          }
        }
    },
    computed: {
        city() {
            return this.$store.state.city
        }
    },
    components: {
        asideItem,
        movies,
        cinemas
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'src/style/import.scss';

    .m-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        background :linear-gradient(180deg, #555, transparent);
        .layer {
            height: 3rem;
            line-height: 3rem;
            display: flex;
            .layout-1 {
                display: flex;
                align-items: center;
                .city {
                    display: inline-block;
                    padding-left: 1rem;
                    max-width: 5rem;
                    font-size: .8rem;
                    color: #fff;
                    text-align: center;
                }
                .icon {
                    margin-right: 0.5rem;
                    margin-left: 0.3rem;
                     @include mix-arrow-down;
                }
            }
            .layout-2 {
                display: flex;
                flex: 1;
                justify-content: center;
                align-items:center;
                .icon {
                    @include mix-logo;  
                }
            }
        }
    }
    .m-hot {
        margin-bottom: 0.5rem;
    }
    .swiper{
        img {
            width: 100%;
            height: 11.5rem;
        }
        .swiper-pagination-bullet-active {
            background-color: $bg_color1;
        }
    }
</style>
