<template>
  <div>
    <div class="boxA"></div>
  </div>
</template>
<script>
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

  }
}
</script>
<style scoped lang="scss">
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
