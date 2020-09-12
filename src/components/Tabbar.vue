<template>
	<div class="tabbar">
		<mt-tabbar v-model="selected" fixed>
				<router-link class="link" to="/header01">
					<mt-tab-item id="homePage">
						<img slot="icon" src="../assets/images/homePage.png" />
						主页
					</mt-tab-item>
				</router-link>
				<router-link class="link" to="/header02">
					<mt-tab-item id="collection">
						<img slot="icon" src="../assets/images/collection.png" />
						收藏
					</mt-tab-item>
				</router-link>
				<router-link class="link" to="/header03">
					<mt-tab-item>
						<img slot="icon" src="../assets/images/search.png" />
						搜索
					</mt-tab-item>
				</router-link>
				<router-link class="link" to="/header04">
					<mt-tab-item id="mine">
						<img slot="icon" src="../assets/images/mine.png" />
						我的
					</mt-tab-item>
				</router-link>
		</mt-tabbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selected: 'homePage'
		};
	}
};
</script>

<style scoped="scoped">
.tabbar{
		width: 100%;
	}
.link {
	text-decoration: none;
	color: black;
	width: 100px;
}
</style>
