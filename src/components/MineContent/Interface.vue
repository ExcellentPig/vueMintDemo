<template>
	<div class="interface">
		<mt-header title="请登录">
			<router-link to="/header04" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<img src="../../assets/images/d1.png" alt="">
		<div class="r1">
			<router-link  to="/login1" tag="span">登录/</router-link>
			<router-link  to="/login2" tag="span">注册</router-link>
		</div>
		<br>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	img{
		width: 100px;
		height: 100px;
		margin-top: 32px;
		margin-left: 120px;
	}
	.r1{
		margin-top: 42px;
		margin-left: 110px;
	}
	span{
		text-decoration: none;
		font-size: 24px;
		color: darkcyan;
		
	}
</style>
