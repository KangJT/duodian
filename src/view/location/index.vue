<template>
  <div id="map">
     正在定位
  </div>
</template>
<script>
import AMap from 'AMap'
export default {
  props: {

  },
  components: {

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
    AMap.plugin('AMap.Geolocation', () => {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: 'RB'
      })

      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', (data) => {
        // resolve(data)
      })
      AMap.event.addListener(geolocation, 'error', () => {
        // 失败了跳转的页面路由
        // this.$router
      })
    })
  }
}
</script>
<style scoped lang="">
#map{
  width: 100%;height: 600px;
}
</style>
