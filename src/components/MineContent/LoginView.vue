<template>
	<div class="loginView">
		<router-link to="/interface" tag="span">
			<div class="text1">
				<img class="loginimg" src="../../assets/images/d1.png" alt="" />
				<p class="p1">登录/注册</p>
				<img class="loginimg2" src="../../assets/images/phone.png" alt="" />
				<p class="p2">暂无绑定手机</p>
				<span class="right">></span>
			</div>
		</router-link>
		<router-view></router-view>
	</div>
</template>

<script></script>

<style scoped="scoped">
.loginimg {
	width: 70px;
	height: 70px;
	margin-left: 40px;
	margin-top: 40px;
}
.loginimg2{
	width: 25px;
	height: 25px;
	margin-left: 115px;
}
.text1 {
	height: 150px;
	background-color: #02a774;
}
.p1 {
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	text-align: center;
	margin-top: -75px;
	margin-right: 35px;
}
.p2{
	font-size: 18px;
	font-weight: 700;
	color: #fff;
	text-align: center;
	margin-top: -30px;
	margin-left: 45px;
}
.right{
	float: right;
	margin-right: 12px;
	margin-top: -70px;
	font-size: 35px;
	color: white;
	font-weight: bold;
}
</style>
