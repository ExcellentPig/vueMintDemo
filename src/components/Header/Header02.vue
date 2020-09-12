<template>
	<div class="header02">
		<mt-header class="mth" fixed title="我的收藏"></mt-header>
		<br><br>
		<IconKong></IconKong>
	</div>
</template>

<script>
	import IconKong from '../CollectContent/IconKong.vue';
	export default {
		components:{
			IconKong
		}
	}
</script>

<style scoped="scoped">
.mth {
	background-color: #02a774;
	z-index: 9999;
}
</style>
