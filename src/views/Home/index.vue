<template>
<div>
 <div @click="handleClick">配送到家:<i>{{this.address}}</i></div>
 <div>
   <ul>
     <li>索索</li>
     <li>搜索</li>
   </ul>
   <Banner/>
 </div>
 <Banner>

 </Banner>
</div>

</template>
<script>
export default {
  components: {

  },
  data () {
    return {
      address: ''
    }
  },

  mounted () {
    this.positionDta()
    // this.address = this.$store._devtoolHook.initialState.user.gps_location
  },
  methods: {
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
<style scoped>

</style>
