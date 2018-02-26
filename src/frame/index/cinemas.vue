<template>
       <div class="m-cinema">
            <ul class="cinemea-list">
                <li class= "item" v-for="item in cinemaList">
                    <div class="cinema">
                        <span class="name">{{item.name}}</span>
                        <span class= "dui" v-if="item.dui">兑</span>
                        <span class="seat" v-if="item.zuo">座</span>
                    </div>
                    <div class="ad ellipsis">{{item.ad}}</div>
                    <div class="info">
                        <div class="price">￥{{item.price}}</div>
                        <div class="distance">
                            <b class="icon"></b>
                            <span>{{item.len}}km</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="all-cinema">
                <span>查看全部影院</span>
                <b class="icon"></b>
            </div>
       </div>
</template>

<script>

    export default {
        computed: {
            cinemaList() {
                return this.$store.state.cinemaList
            }
        },
 
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'src/style/import.scss';
    .m-cinema {
        background-color: $bg_color3;
        padding-left: 0.6rem;
        .all-cinema {
            height: 2.6rem;
            line-height: 2.6rem;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            span {
                margin-right: 0.2rem;
            }
            .icon {
                @include mix-arrow-right;
            }
        }
        .cinemea-list {
            .item {
                .cinema {
                    font-size: 0.4rem;
                    height: 2rem;
                    line-height: 2rem;
                    .name {
                        font-size: 0.8rem;

                    }
                    .dui {
                        padding: 0.2rem;
                        color: $color3;
                        background-color: $bg_color1;
                        border-radius: 0.2rem;
                    }
                    .seat {
                       padding: 0.2rem;
                       color: $color3;
                       background-color: $bg_color5;
                       border-radius: 0.2rem; 
                    }
                }
                .ad {
                    font-size: 0.7rem;
                }
                .info {
                    font-size: 0.7rem;
                    display: flex;
                    height: 1.5rem;
                    line-height: 1.5rem;
                    justify-content: space-between;
                    .distance {
                        margin-right: 1rem;
                        display: flex;
                        align-items: center;
                        .icon {
                            @include mix-location;
                        }
                    }     
                }
                border-bottom: 1px solid $bg_color2;
            }
        }
        
    }
    
 
</style>
