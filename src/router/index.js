import Vue from 'vue'
import VueRouter from 'vue-router'

import Header01 from '../components/Header/Header01.vue'
import Header02 from '../components/Header/Header02.vue'
import Header03 from '../components/Header/Header03.vue'
import Header04 from '../components/Header/Header04.vue'
import News from '../components/SearchContent/News.vue'
import NewsContent from '../components/SearchContent/NewsContent.vue'
import IconContent from '../components/HomeContent/IconContent.vue'
import Interface from '../components/MineContent/Interface.vue'
import Login1 from '../components/MineContent/Login1.vue'
import Login2 from '../components/MineContent/Login2.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes:[
		{
			path:'/header01',
			component:Header01,
			meta: { navShow: true, cname: '一级页面' }
		},
		{
			path:'/header02',
			component:Header02,
			meta: { navShow: true, cname: '一级页面' }
		},
		{
			path:'/header03',
			component:Header03,
			meta: { navShow: true, cname: '一级页面' }
		},
		{
			path:'/header04',
			component:Header04,
			meta: { navShow: true, cname: '一级页面' }
		},
		{
			path:'/newsContent',
			component:NewsContent,
			meta: { navShow: false, cname: '二级页面' }
		},
		{
			path:'/iconContent',
			component:IconContent,
			meta: { navShow: false, cname: '二级页面' }
		},
		{
			path:'/interface',
			component:Interface,
			meta: { navShow: false, cname: '二级页面' },
			children:[
				{
					path:'/login1',
					component:Login1,
					meta: { navShow: false, cname: '三级页面' }
				},
				{
					path:'/login2',
					component:Login2,
					meta: { navShow: false, cname: '三级页面' }
				},
				{
					path:'/',
					redirect:'/login1'
				}
			]
		},
		{
			path:'/',
			redirect:'/header01'
		}
	]
})