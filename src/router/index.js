import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

//
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login');

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		component: App,
		children: [{
			path: '',
			redirect: 'home'
		},{
			path:'/home',
			component: home
		},{
			path: '/login',
			component: login
		}]

	}]
})