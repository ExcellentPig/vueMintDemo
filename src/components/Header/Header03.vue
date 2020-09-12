<template>
	<div class="header03">
		<mt-header class="mth" fixed title="搜索"></mt-header>
		<br />
		<br />
		<br />
		<Baidu></Baidu>
		<br />
		<br />
		<Search></Search>
		<br />
		<br />
		<br />
		<br />
		<News></News>
	</div>
</template>

<script>
import Baidu from '../SearchContent/Baidu.vue';
import Search from '../SearchContent/Search.vue';
import News from '../SearchContent/News.vue';
export default {
	components: {
		Baidu,
		Search,
		News
	}
};
</script>

<style scoped="scoped">
.mth {
	background-color: #02a774;
	z-index: 9999;
}
</style>
