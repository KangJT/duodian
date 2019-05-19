<template>
<div class="banner">
  <swiper>
    <!-- :options="swiperOption"
    class="swiper-wrap"
    ref="mySwiper"
    v-if="banner.length!=0"> -->
  <swiper-slide v-for="(item,index) in banner" :key="index" >
    <img :src="item.image" alt="" />
  </swiper-slide>
  <!-- 常见的小圆点 -->
  <div class="swiper-pagination"  v-for="(item,index) in banner" :key="index" slot="pagination" ></div>
  </swiper>
  <!-- 显示数字 -->
  <!-- <div class="number">
    {{imgIndex}}/{{detailimages.length}}
  </div> -->
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  props: {

  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.banner{
  width: 100%;
  height: 100px;
  background: yellow;

}
</style>
