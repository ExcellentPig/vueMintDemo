<template>
  <div class="carousel">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <a :href="item.href">
          <img :src="item.url" class="img"/>
          <span class="desc"></span>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'mint-ui'
  import 'mint-ui/lib/style.css'

  export default {
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem
    },
    data () {
      return {
        items: [{
          id:0,
          href: 'https://uland.taobao.com',
          url: require('../../assets/images/g1.jpg')
        },
				{
          id:1,
          href: 'https://uland.taobao.com',
         url: require('../../assets/images/g2.jpg')
        },
				{
				  id:2,
				  href: 'https://uland.taobao.com',
				 url: require('../../assets/images/g3.jpg')
				},
				{
				  id:3,
				  href: 'https://uland.taobao.com',
				 url: require('../../assets/images/g4.jpg')
				}
				]
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
  .mint-swipe {
    height: 150px;
  }
  .desc {
    font-weight: 600;
    opacity: .9;
    padding: 5px;
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: #fff;
    position: absolute;
    bottom: 0;
  }
	img{
		height: 150px;
	}
</style>