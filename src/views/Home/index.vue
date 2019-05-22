<template>
    <div>
       <div @click="handleClick">
          配送到家:<i>{{this.address}}</i>
      </div>
      <div>
          <tabs @change="tabChange"  class="content active-list" animated>
            <tab-pane label="多点超市">
              <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
              </van-swipe>
            </tab-pane>
            <tab-pane label="全球精选"></tab-pane>
         </tabs>
      </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem, Tab, Tabs } from 'vant'

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data () {
    return {
      address: '',
      scrollFlg: true,
      list: []
    }
  },

  mounted () {
    this.positionDta()
    // this.address = this.$store._devtoolHook.initialState.user.gps_location
  },
  methods: {
    tabChange (index) {
      console.log(index)
    },
    clickHandler () {
      this.isStyleControl = !this.isStyleControl
    },
    positionDta () {
      let data = localStorage.getItem('location')
      this.address = data
    },
    handleClick () {
      this.$router.push({
        path: '/addaddress'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper{
  width: 100%;
  height: 230px;
  background: yellow;
}
</style>
