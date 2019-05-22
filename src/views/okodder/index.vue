<template>
  <div>
    <p class="title">
      <span @click="goHistory">&lt;</span>
      <span>订单确认</span>
    </p>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>

</template>
<script>
import { AddressEdit, SubmitBar } from 'vant'
export default {
  data () {
    return {
      areaList,
      searchResult: []
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit,
    [SubmitBar.name]: SubmitBar
  },
  methods: {
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    },
    goHistory () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="scss">
.title{
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
  align-items: center;
  span{
    flex:1;
  }
}
</style>
