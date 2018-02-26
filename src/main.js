// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import  './config/rem'
import store from './store/'
import FastClick from 'fastclick'
// import './style/common.scss'

// Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  router,
  store
})
