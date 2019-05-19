<template>
<div>
  <p>
    <span>&lt;</span>
    登录
  </p>
   <dl class="box">
      <dt>
        <img src="">
      </dt>
      <dd>
        <van-cell-group>
          <div class="first">
            <van-field v-model="value" placeholder="请输入用户名"/>
            <van-button slot="button" size="small" class="small">发送验证码</van-button>
          </div>
          <van-field v-model="value" placeholder="请输入验证码"  />
        </van-cell-group>
      </dd>
  </dl>
  <van-button size="large" class="active">登录</van-button>
</div>

</template>

<script>
// import { Button, Field} from 'vant'
export default {
  components: {
    // [Button.name]: Button,
    // [Field.name]: Field
  }
}
</script>
<style lang="scss" scoped>
 .box{
   @include wh(100%,100%);
   display: flex;
   flex-direction: column;

   dt{
      @include wh(100%,400px);
      background: orange;
   }
   dd{
    width: 100%;
    flex: 1;
    padding: 0 20px;
    box-sizing: border-box;
    .first{
      display: flex;
      margin: 50px 0;
    }
    .small{
      width: 3.222rem;
      height: 80px;
      background: orange;
      margin-left:15px;
    }
   }
 }
 .login{
    width:95%;
    margin:150px 20px;
    box-sizing: border-box;
    color: #fff;
    background: orange;
 }
 .active{
    width:95%;
    margin:150px 20px;
    box-sizing: border-box;
    color: #fff;
    background: #FFB796;
 }

</style>
