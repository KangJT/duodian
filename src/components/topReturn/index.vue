<template>
  <div class="returnBox">
    <i @click="returnUrl" class="returnBtn iconfont">&#xe659;</i>
    <div v-if="isSelect" class="returnRight">
       <putDownMenu :changeVal='changeVal' :provinceList="provinceList" />
    </div>
    <span class="topText" v-if="isText">{{topText}}</span>
  </div>
</template>
<script>
import putDownMenu from './putDownMenu.vue'
export default {
  props: {
    isSelect: {
      type: Boolean,
      default: false
    },
    isText: {
      type: Boolean,
      default: false
    },
    topText: {
      type: String,
      default: ''
    }
  },
  components: {
    putDownMenu
  },
  data () {
    return {
      selectCity: '',
      provinceList: ['请选择', '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台灣', '香港特别行>政区', '澳门特别行政区']
    }
  },
  computed: {

  },
  methods: {
    changeVal (val) {
      this.selectCity = val
    },
    returnUrl () {
      window.history.go(-1)
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
.returnBox {
  @include wh(100%, 88px);
  display: flex;
  position: relative;
  background: #fff;
}
.returnBtn {
  @include wh(64px, 64px);
  border-radius: 50%;
  background: #222;
  position: absolute;
  left: 27px;
  top: 14px;
  color: #fff;
  font-size: 55px;
  text-align: center;
  line-height: 64px;
}
.returnRight {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topText {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
