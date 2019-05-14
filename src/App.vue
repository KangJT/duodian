<template>
  <div id="app">
    <div id="container">

    </div>
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
#container {width:100%; height:300px; }

</style>
