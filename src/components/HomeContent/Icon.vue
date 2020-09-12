<template>
	<div class="icon">
		<div class="ul">
			<router-link to="/iconContent">
				<ul>
					<li v-for="item in list" :key="item.id">
						<img :src="item.idView" class="image" />
						<br />
						<span>{{ item.id }}</span>
					</li>
				</ul>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ id: '体育', idView: require('../../assets/images/h1.png') },
				{ id: '住宿', idView: require('../../assets/images/h2.png') },
				{ id: '充值', idView: require('../../assets/images/h3.png') },
				{ id: '外卖', idView: require('../../assets/images/h4.png') },
				{ id: '购物', idView: require('../../assets/images/h5.png') },
				{ id: '超市', idView: require('../../assets/images/h6.png') },
				{ id: '药品', idView: require('../../assets/images/h7.png') },
				{ id: '天猫', idView: require('../../assets/images/h8.png') }
			]
		};
	}
};
</script>

<style scoped="scoped">
.ul {
	width: 100%;
	height: 220px;
	padding: 5px;
	margin: 0 auto;
	border-bottom: 1px solid gainsboro;
}
li {
	list-style: none;
	float: left;
	margin-right: 35px;
	margin-bottom: 50px;
	width: 45px;
	height: 45px;
}
img {
	width: 30px;
	height: 30px;
}
span {
	line-height: 30px;
	text-align: center;
}
</style>
