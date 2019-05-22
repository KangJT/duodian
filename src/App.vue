<template>
  <div id="app">
    <keep-alive include="AddAddress">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    // this.$store.dispatch('user/getUser')
    // this.$store.dispatch('cart/getCartList')
  },
  mounted () {
    // var map = new AMap.Map('container')
  }
}
</script>
<style>
#app {
  color: #2c3e50;
}
.info{
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  /* border:1px solid red; */
  background: red;
  position: absolute;
  bottom: 65px;
  right: 23%;
  color: #fff;
  display: block;
  border-radius:50%;
}
</style>
