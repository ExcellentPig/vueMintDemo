<template>
	<div class="option">
		<div class="first">
			<div class="second">
				<img src="../../assets/images/s2.png" alt="">
				<span>我的订单</span>
				<span class="right">></span>
			</div>
			<div class="second">
				<img src="../../assets/images/s3.png" alt="">
				<span>我的评价</span>
				<span class="right">></span>
			</div>
			<div class="second">
				<img src="../../assets/images/s4.png" alt="">
				<span>退款/售后</span>
				<span class="right">></span>
			</div>
			<div class="second" style="border-bottom: none;">
				<img src="../../assets/images/s1.png" alt="">
				<span>设置</span>
				<span class="right">></span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.first{
		height: 240px;
		border-bottom: 1px solid lightgrey;
	}
	.second{
		height: 60px;
		border-bottom: 1px solid lightgrey;
	}
	.right{
		float: right;
		font-size: 30px;
		font-weight: bold;
		margin-right: 10px;
	}
	img{
		width: 30px;
		height: 30px;
		margin-top: 15px;
		margin-left: 10px;
		float: left;
	}
	span{
		margin-left: 6px;
		line-height: 61px;
		font-size: 18px;
		float: left;
	}
</style>
