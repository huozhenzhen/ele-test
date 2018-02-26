<template>
       <div class="m-movies">
          <swiper :options="swiperOption" class="swiper">

            <swiper-slide class="movie" v-for="(item, index) in imageData" v-bind:key="item.id">
                <div class= "item">
                    <img class="img" v-bind:src="item.src" alt="">
                    <div class="name">{{item.name}}</div>
                </div>
            </swiper-slide>
            <swiper-slide class="all-movies">
                <span class="all">
                    全部影片
                </span>
            </swiper-slide>
          </swiper> 
       </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import {movie_1, movie_2} from '@/config/import.js';

    export default {
        data() {

            return {
              swiperOption: {
                // width : fontSize * 6
                slidesPerView : "auto"
              },
              imageData: [{src : movie_1, name:"唐人街探案"},{src : movie_2, name:"寻龙决"},{src: movie_1, name:"唐人街探案"},{src : movie_2, name:"寻龙决"}]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'src/style/import.scss';
    
    .m-movies {
        background-color:  $bg_color3;
        .movie{
            width:5.5rem;
            .img {
                width: 5rem;
                height: 6.5rem;
            },
            .name {
                font-size: 0.6rem;
                text-align: center;
            }
        }
 
        .all-movies {
            width: 2.5rem;
            .all {
                display: inline-block;
                width: 2rem;
                font-size: 0.9rem;
                height: 6.5rem;
                border: 2px solid #999;
                padding: 0.5rem;
            }
        }
    }
 
</style>
