<template>
	<div class="numview">
		<div class="div1">
			<div class="div2">
				<p class="num1">0.00<span>元</span></p>
				<p class="num2">余额</p>
			</div>
			<div class="div3">
				<p class="num1" style="color: lightgreen;">0<span>张</span></p>
				<p class="num2">优惠卷</p>
			</div>
			<div class="div4">
				<p class="num1" style="color: darkorange; margin-left: 35px;">0<span>分</span></p>
				<p class="num2" style="margin-left: 25px;">我的积分</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.div1{
		height: 100px;
		border-bottom: 1px solid lightgrey;
	}
	.div2{
		width: 33%;
		height: 100px;
		border-right: 1px solid lightgrey;
		float: left;
	}
	.div3{
		width: 33%;
		height: 100px;
		border-right: 1px solid lightgrey;
		float: left;
	}
	.div4{
		height: 100px;
		float: left;
	}
	.num1,
	.num2{
		text-align: center;
	}
	.num1{
		color: red;
		font-size: 31px;
		margin-top: 15px;
	}
	span{
		font-size: 16px;
		font-weight: bold;
		color: darkcyan;
	}
	.num2{
		color: #666;
		margin-top: -15px;
	}
</style>
