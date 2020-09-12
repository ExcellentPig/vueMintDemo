<template>
	<div class="foodContent">
			<router-link class="div1"  to="/iconContent" tag="p">
				<img class="ball" src="../../assets/images/ball.jpg" alt="" />
				<div class="p">
					<p>斯伯丁篮球官方正品</p>
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<mt-button class="mtb1" type="primary">查看详情</mt-button>
				</div>
			</router-link>
			<br>
			<router-link class="div1"  to="/iconContent" tag="p">
				<img class="ball" src="../../assets/images/ball.jpg" alt="" />
				<div class="p">
					<p>斯伯丁篮球官方正品</p>
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<mt-button class="mtb1" type="primary">查看详情</mt-button>
				</div>
			</router-link>
			<br>
			<router-link class="div1"  to="/iconContent" tag="p">
				<img class="ball" src="../../assets/images/ball.jpg" alt="" />
				<div class="p">
					<p>斯伯丁篮球官方正品</p>
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<mt-button class="mtb1" type="primary">查看详情</mt-button>
				</div>
			</router-link>
			<br>
			<router-link class="div1"  to="/iconContent" tag="p">
				<img class="ball" src="../../assets/images/ball.jpg" alt="" />
				<div class="p">
					<p>斯伯丁篮球官方正品</p>
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<mt-button class="mtb1" type="primary">查看详情</mt-button>
				</div>
			</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			num: 1
		};
	},
	methods: {
		handleChange(value) {
			console.log(value);
		}
	}
};
</script>

<style scoped="scoped">
	.foodContent{
		
	}
.div1 {
	width: 90%;
	height: 115px;
	border: 1px solid gainsboro;
	border-radius: 10%;
	margin: 0 auto;
	padding: 10px;
}
.ball {
	width: 30%;
	height: 110px;
	float: left;
}
.j1 {
	width: 20px;
	height: 20px;
	float: left;
	margin-left: 30px;
}
.j2 {
	float: left;
	margin-left: 7px;
	color: red;
}
.j3 {
	float: left;
	margin-left: 30px;
	margin-top: 10px;
}
.p {
	text-align: right;
	margin-top: -15px;
	margin-right: 50px;
}
p {
	color: darkcyan;
}
.mtb1 {
	float: right;
	margin-top: 10px;
	margin-right: -40px;
}
</style>
