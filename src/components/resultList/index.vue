<template>
  <ul class="resultListBox">
    <li class="dataList" v-for="item in listDatas" :key="item.id">
      <p>{{item.name}}</p>
      <p>{{item.district}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      listData: []
    }
  },
  props: {
    listDatas: {
      type: Array
    }
  }
}
</script>
<style scoped lang="scss">
.resultListBox {
  flex: 1;
  background: rgba(0, 0, 0, .3);
  overflow: scroll;
  position: relative;
  z-index: 99;
}
.dataList {
  @include wh(100%, 140px);
  background: #f6f6f6;
  border-bottom: 1px solid #eee;
  padding-left: 20px;
}
.dataList p {
  height: 60px;
  line-height: 60px;
}
</style>
