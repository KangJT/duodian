<template>
  <div class="loginPage">
    <header>
      <span class="back">
        <van-icon name="arrow-left" size="23px"/>
      </span>
      <span>验证手机</span>
    </header>
    <div class="max-con">
      <div class="img">
        <img src="//img.dmallcdn.com/common/1b1dac60-5a99-450c-b18c-c5f576fedcb9_750H" alt>
      </div>
      <div class="step">
        <van-cell-group>
          <van-field size="large" v-model="moblie" center clearable placeholder="请输入您的手机号" type="number" value="">
            <van-button plain slot="button" class="color" size="normal" type="primary" :disabled="disabled" @click="sendCode">{{btntxt}}</van-button>
          </van-field>
          <van-field v-model="value" placeholder="请输入验证码" size="large"/>
        </van-cell-group>
      </div>
      <div class="tips">
        验证手机视为已阅读并同意<span class="agree">用户协议</span>
      </div>
      <div class="jrow">
        <van-button size="large" @click="clickSure">确定</van-button>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line standard/object-curly-even-spacing
import { Icon, Field, Button, CellGroup} from 'vant'
// eslint-disable-next-line standard/object-curly-even-spacing
import { mapActions, mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      moblie: '',
      code: '',
      btntxt: '获取验证码',
      disabled: false,
      time: 0,
      value: ''
    }
  },
  components: {
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup
  },
  computed: {
    ...mapState({
      msgCode: state => state.user.msgCode
    })
  },
  methods: {
    ...mapMutations({
      updateState: 'user/updateState'
    }),
    ...mapActions({
      getMsgCode: 'user/getMsgCode',
      getLogin: 'user/getLogin'
    }),
    // 发送验证码
    sendCode () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.moblie === '') {
        this.$toast('手机号不能为空')
      } else if (!reg.test(this.moblie)) {
        this.$toast('手机号格式不正确')
      } else {
        this.time = 60
        this.disabled = true
        // 验证码的时间设置 可有可无
        this.timer()
        // 接口 验证码
        this.getMsgCode({
          phone: this.moblie
        })
      }
    },
    // 验证码的倒计时
    timer () {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's后获取'
        setTimeout(this.timer, 1000)
      } else {
        this.time = 0
        this.btntxt = '获取验证码'
        this.disabled = false
      }
    },
    // 点击确定按钮
    clickSure () {
      this.getLogin({
        phone: this.moblie,
        code: this.code
      }).then(res => {
        console.log(res, 1111)
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.loginPage {
  @include wh(100%, 100%);
  @include flexs;
  @include bgColor(#f8f8f8);
}
header {
  @include wh(100%, 88px);
  @include shadow(0, 0, 10px, rgba(0, 0, 0, 0.2));
  font-size: 32px;
  @include bgColor(#fff);
  z-index: 999;
  @include center(88px, center);
}
.back .van-icon {
  width: 64px;
  height: 64px;
  position: absolute;
  top: 10px;
  left: 10px;
  @include bgColor(#333);
  @include rounded(32px);
  background-position: 2px -300px;
  color: #fff;
  @include center(64px, center);
}
.max-con {
  @include wh(100%, auto);
  .img {
    @include wh(100%, 345px);
    img {
      width: 100%;
    }
  }
  .step {
    @include bgColor(#fff);
    margin-top: 10px;
    width: 95%;
    display: block;
    margin:50px 20px;
  }
}
.color{
  color:#ff712b;
  border-color:#ff712b;
}
.tips {
    text-align: right;
    padding-right: 20px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 40px;
    font-size: 26px;
    color: grey;
    .agree {
    color: #ff712b;
    text-decoration: underline;
    cursor: pointer;
}
}
.jrow {
    box-sizing: border-box;
    display: block;
    padding: 20px;
    width: 100%;
    margin-top: 20px;
    .van-button-large{
      height:80px;
      @include bgColor(#ff712b);
      color:#fff;
      line-height:80px;
      font-size:28px;
    }
}
</style>
