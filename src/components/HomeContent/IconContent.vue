<template>
	<div class="iconContent">
		<mt-header title="商品信息">
			<router-link to="/header01" slot="left"><mt-button icon="back">返回</mt-button></router-link>
		</mt-header>
		<br />
		<div class="ic">
			<div class="detail">
				<div class="left"><img class="ball" src="../../assets/images/ball.jpg" alt="" /></div>
				<div class="right">
					<img class="fire" src="../../assets/images/fire.png" alt="" />
					<span>斯伯丁篮球官方正品</span>
					<br />
					<br />
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<br />
					<input class="in1" type="button" value="加入购物车" />
					<input class="in2" type="button" value="立即购买" />
				</div>
			</div>
			<div class="detail">
				<div class="left"><img class="ball" src="../../assets/images/ball.jpg" alt="" /></div>
				<div class="right">
					<img class="fire" src="../../assets/images/fire.png" alt="" />
					<span>斯伯丁篮球官方正品</span>
					<br />
					<br />
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<br />
					<input class="in1" type="button" value="加入购物车" />
					<input class="in2" type="button" value="立即购买" />
				</div>
			</div>
			<div class="detail">
				<div class="left"><img class="ball" src="../../assets/images/ball.jpg" alt="" /></div>
				<div class="right">
					<img class="fire" src="../../assets/images/fire.png" alt="" />
					<span>斯伯丁篮球官方正品</span>
					<br />
					<br />
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<br />
					<input class="in1" type="button" value="加入购物车" />
					<input class="in2" type="button" value="立即购买" />
				</div>
			</div>
			<div class="detail">
				<div class="left"><img class="ball" src="../../assets/images/ball.jpg" alt="" /></div>
				<div class="right">
					<img class="fire" src="../../assets/images/fire.png" alt="" />
					<span>斯伯丁篮球官方正品</span>
					<br />
					<br />
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<br />
					<input class="in1" type="button" value="加入购物车" />
					<input class="in2" type="button" value="立即购买" />
				</div>
			</div>
			<div class="detail">
				<div class="left"><img class="ball" src="../../assets/images/ball.jpg" alt="" /></div>
				<div class="right">
					<img class="fire" src="../../assets/images/fire.png" alt="" />
					<span>斯伯丁篮球官方正品</span>
					<br />
					<br />
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<br />
					<input class="in1" type="button" value="加入购物车" />
					<input class="in2" type="button" value="立即购买" />
				</div>
			</div>
			<div class="detail">
				<div class="left"><img class="ball" src="../../assets/images/ball.jpg" alt="" /></div>
				<div class="right">
					<img class="fire" src="../../assets/images/fire.png" alt="" />
					<span>斯伯丁篮球官方正品</span>
					<br />
					<br />
					<img class="j1" src="../../assets/images/j1.png" alt="" />
					<span class="j2">220元</span>
					<br />
					<br />
					<input class="in1" type="button" value="加入购物车" />
					<input class="in2" type="button" value="立即购买" />
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style scoped="scoped">
	.ic{
		width: 100%;
		height: 560px;
		overflow: scroll;
	}
.detail {
	width: 95%;
	height: 150px;
	border: 1px solid lightgray;
	border-radius: 5%;
	margin: 5px auto;
}
.left {
	width: 30%;
	height: 125px;
	border: 1px solid lightgray;
	margin: 10px;
}
.ball {
	width: 95%;
	height: 120px;
	margin: 3px;
}
.fire {
	width: 20px;
	height: 20px;
}
.right {
	width: 60%;
	height: 125px;
	float: right;
	margin-top: -135px;
}
.j1 {
	width: 20px;
	height: 20px;
	float: left;
}
.j2 {
	float: left;
	margin-left: 7px;
	color: red;
}
.in1 {
	height: 40px;
	width: 90px;
	background: orange;
	border: none;
	margin: 5px;
	border-top-left-radius: 42%;
	border-bottom-left-radius: 42%;
	color: white;
	outline: none;
}
.in2 {
	height: 40px;
	width: 90px;
	background: red;
	border: none;
	margin: 5px;
	border-top-right-radius: 42%;
	border-bottom-right-radius: 42%;
	color: white;
	outline: none;
}
</style>
