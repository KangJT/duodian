<template>
 <div class="selectBox">
  <select name="" id="" v-model="selVal" @change="changeVal(selVal)">
    <option :value="item" v-for="item in provinceList" :key="item">{{item}}</option>
  </select>
   <i class="iconfont selecticon">&#xe65a;</i>
 </div>
</template>
<script>
export default {
  props: {
    provinceList: {
      type: Array
    },
    changeVal: {
      type: Function
    }
  },
  components: {

  },
  data () {
    return {
      selVal: '请选择'
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
.selectBox {
  position: relative;
}
select {
  @include wh(387px, 80px);
  border: 0;
  font-size: 34px;
  appearance:none;
  padding-left: 20px;
}
.selecticon {
  position: absolute;
  right: 10px;
  top: 25px;
}
i {
  font-size: 35px;
  color: #dce0e0;
}
</style>
