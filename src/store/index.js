import Vue from 'vue'
import Vuex from "vuex"
import {movie_1, movie_2} from '@/config/import.js';

Vue.use(Vuex)

const state = {
	city: "陕西",
	cinemaList: [{
		name: "wodeyingyuan",
		dui: true,
		zuo: true,
		ad: "西丽镇366大街商城2楼西丽镇366大街商城2楼西丽镇366大街商城2楼西丽镇366大街商城2楼", 
		price: 29.9,
		len: 1.69
	},{
		name: "wodeyingyuan",
		dui: false,
		zuo: false,
		ad: "西丽镇366大街商城2楼西丽镇366大街商城2楼西丽镇366大街商城2楼西丽镇366大街商城2楼", 
		price: 29.9,
		len: 1.69
	},{
		name: "我的影院",
		dui: true,
		zuo: false,
		ad: "西丽镇366大街商城2楼西丽镇366大街商城2楼西丽镇366大街商城2楼西丽镇366大街商城2楼", 
		price: 29.9,
		len: 1.69
	}]
}

export default new Vuex.Store({
	state
})