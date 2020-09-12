<template>
	<div class="header01">
		<mt-header class="mth" fixed title="我的主页"></mt-header>
		<br />
		<br />
		<Carousel></Carousel>
		<Icon></Icon>
		<br>
		<FoodContent></FoodContent>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
import Carousel from '../HomeContent/Carousel.vue';
import Icon from '../HomeContent/Icon.vue';
import FoodContent from '../HomeContent/FoodContent.vue';
export default {
	components: {
		Carousel,
		Icon,
		FoodContent
	}
};
</script>

<style scoped="scoped">
	.header01{
		
	}
.mth {
	background-color: #02a774;
	z-index: 9999;
}
</style>
