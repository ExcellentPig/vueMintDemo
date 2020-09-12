import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Mint);
Vue.use(ElementUI)

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})
