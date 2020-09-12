<template>
	<div class="login1">
		<input type="text" placeholder="手机/邮箱/用户名" />
		<br />
		<br />
		<input type="password" placeholder="密码" />
		<br />
		<br />
		<input type="text" placeholder="验证码" />
		<br />
		<br />
		<br />
		<router-link to="/header04"><mt-button class="mt" type="primary">登录</mt-button></router-link>
	</div>
</template>

<script></script>

<style scoped="scoped">
input {
	margin-left: 28px;
	width: 80%;
	height: 22px;
	border-radius: 25px;
	outline: none;
	padding: 10px;
}
.mt {
	width: 80%;
	margin-left: 32px;
}
</style>
