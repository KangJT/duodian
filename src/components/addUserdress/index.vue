<template>
  <div class="adduserdress">
    <i class="iconfont newAddress">&#xe651;</i>
    <span class="newText">新增地址</span>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.adduserdress {
  @include wh(100%, 88px);
  background: #fff;
  @include flex();
  color: #ff712b;
}
.newAddress {
  font-size: 15px;
}
.newText {
  line-height: 20px;
  margin-left: 10px;
}
</style>
