<template>
	<div class="login2">
		<mt-field label="用户名" placeholder="请输入用户名"></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
		<br /><br>
		<router-link to="/header04">
			<mt-button class="mt1" type="primary">注册</mt-button>
		</router-link>
	</div>
</template>

<script></script>

<style scoped="scoped">
.mt1{
	width: 80%;
	margin-left: 32px;
}
</style>
