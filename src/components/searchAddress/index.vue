<template>
  <div class="searchBox">
    <div class="searchAddress">
      <div class="searchAllBox">
        <div class="searchIpt">
          <i class="iconfont">&#xe615;</i>
          <input @blur="isShow = false" @input="getText" class="ipt" type="text" placeholder="小区、街道、大厦">
        </div>
        <button class="searchBtn">取消</button>
      </div>
    </div>
    <ResultList :listDatas="listData" v-if="isShow"/>
  </div>
</template>
<script>
import store from '@/store'
import Map from '@/utils/map.js'
export default {
  data () {
    return {
      timeout: null,
      isShow: false,
      listData: []
    }
  },
  methods: {
    getText (e) {
      let city = store.state.selectCity
      let addressText = e.target.value
      this.isShow = true
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        Map.searchAddress(city, addressText).then((res) => {
          this.listData = res.tips
          console.log(res.tips)
        })
      }, 1000)
    }
  }
}
</script>
<style scoped lang="scss">
.searchBox {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.searchAddress {
  @include wh(100%, 88px);
  @include flex();
  box-shadow: 0 9px 10px -1px #ddd;
  position:relative;
  z-index: 2;
  background: #fff;
}
.searchAllBox {
  @include wh(95%, 100%);
  @include flex();
}
.searchIpt {
  height: 60px;
  flex: 1;
  border: 1px solid #c8cccd;
  @include flex();
  padding: 0 10px;
}
.ipt {
  flex: 1;
}
i {
  font-size: 40px;
  color: #c8cccd;
  margin-right: 10px;
}
.searchBtn {
  @include wh(128px, 62px);
  border: 0;
  background: #c8cccd;
  color: #fff;
  border-radius: 10px;
  margin-left: 20px;
}
</style>
