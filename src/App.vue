<template>
	<div id="app">
			<router-view></router-view>
		<Tabbar v-show="$route.meta.navShow"></Tabbar>
	</div>
</template>

<script>
import Tabbar from './components/Tabbar.vue';
export default {
	components: {
		Tabbar
	}
};
</script>

<style>
body,html{
	margin:0;
	padding: 0;
	overflow-x: hidden;
}
</style>
