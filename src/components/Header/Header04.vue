<template>
	<div class="header04">
		<mt-header class="mth" fixed title="我的信息"></mt-header>
		<br><br>
		<LoginView></LoginView>
		<NumView></NumView>
		<Option></Option>
	</div>
</template>

<script>
	import LoginView from '../MineContent/LoginView.vue';
	import NumView from '../MineContent/NumView.vue';
	import Option from '../MineContent/Option.vue';
	export default {
		components:{
			LoginView,
			NumView,
			Option
		}
	}
</script>

<style scoped="scoped">
	.mth{
		background-color: #02a774;
		z-index: 9999;
	}
</style>
