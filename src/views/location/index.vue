<template>
<div>
  <div class="locationBox">
    <img src="http://static.dmall.com/kayak-project/address/dist/address/common/image/logo-slogan-new.png" alt="">
  </div>
   <div id="map">
      正在定位
     <div class="boxA"></div>
  </div>
</div>

</template>
<script>
import { Toast } from 'vant'
import map from '@/utils/map'
export default {
  props: {

  },
  mounted () {
    map.geolocation().then(res => {
      localStorage.setItem('location', res.formattedAddress)
      this.$router.replace({
        path: '/tohome'
      })
      // store.state.gps_location = res.formattedAddress
      // this.$store.commit('user/set_local', res.aois[0])
      // this.$router.replace({
      //   path: this.$route.query.callback
      // })
      // this.show = res
      // this.showSite = true
    }).catch(() => {
      Toast('定位失败，请重试')
    })
  }
}
</script>
<style scoped lang="scss">
#map{
  width: 100%;height: 600px;
}
.locationBox {
  @include wh(100%, 100%);
  background: #F6F6F6;
  margin-top: 30px;
}

.boxA {
    width: 300px;  /*宽高尺寸任意增减*/
    height: 100px;
    background:url("http://img.mukewang.com/565d07490001365329660269.png") no-repeat;
    background-size: 400% 100%;  /*这项是关键，用来撑开拼凑起来的序列帧，一行4帧图就是400%*/
    -webkit-animation: bird-slow .5s steps(3) infinite;  /*发生了3次位移steps就是3*/
    animation: bird-slow .5s steps(3) infinite;
    }

@keyframes bird-slow {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 99% 0%;  /*整张图是100%，3次位移每一次是33%，第三次就是99%*/
    }
}
@-webkit-keyframes bird-slow {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: 99% 0%;
    }
}
</style>
