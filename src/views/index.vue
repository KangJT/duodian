<template>
  <div>
    <router-view/>
    <Footers :footerData="footerData" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      footerData: [
        {
          url: '/tohome',
          id: 'tohome',
          icon: '\ue60b',
          name: '配送到家'
        },
        {
          url: '/foodtype',
          id: 'foodtype',
          icon: '\ue622',
          name: '分类'
        },
        {
          url: '/vipfood',
          id: 'vipfood',
          icon: '\ue711',
          name: '会员'
        },
        {
          url: '/shopcar',
          id: 'shopcar',
          icon: '\ue70e',
          name: '购物车'
        },
        {
          url: '/myself',
          id: 'myself',
          icon: '\ue64a',
          name: '我的'
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
