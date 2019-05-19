<template>
  <div class="receiving-address">
    <!-- 下拉框 -->
    <div class="position-input">
      <span @click="handleReturn"> &lt;</span>
      <div :class="flag?'select-active':'select-eie'" @click="handleClick">
        <em>{{defaultvalue}}</em>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="position-search">
      <div>
        <span><i class="icon iconfont">&#xe615;</i></span>
        <input ref="input" type="text" v-on:input="handleChange" placeholder="请输入大小街道">
      </div>
      <button>搜索</button>
    </div>
    <!-- 搜索框返回出来的数据列表 -->
    <div  v-if="matching.length>0" class="matching-search">
      <ul>
        <li v-for="item in matching" :key="item.id" @click="positionClick(item)">
          <h3>{{item.name}}</h3>
          <p>{{item.district}}</p>
        </li>
      </ul>
    </div>
     <!-- 定位到当前位置 -->
    <div class="position-current">
      <span @click="localAddress"><i class="icon iconfont">&#xe61c;</i></span> 定位到当前为位置
    </div>
    <!-- <div  v-if="matching.length>0" class="matching-search">
      <ul>
        <li v-for="item in localtionData" :key="item.id" @click="positionClick(item)">
          <h3>{{item.name}}</h3>
          <p>{{item.district}}</p>
        </li>
      </ul>
    </div> -->
    <!-- <div v-is="isShow===false">
        还没有数据
    </div> -->
    <!-- 新增地址 -->
    <div class="add-address"><span>+</span> 新增地址</div>
    <div v-if="flag" class="select-option">
      <ul>
        <li v-for="(item,index) in citys" :key="index" @click="addInput(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import map from '@/utils/map'
export default {
  name: 'addaddress',
  props: ['city'],
  data () {
    return {
      defaultvalue: '请选择',
      options: {},
      value: '',
      isShow: false,
      flag: false,
      matching: [],
      localtionData: [],
      citys: ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台灣', '香港特别行>政区', '澳门特别行政区']
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
    addInput (key) {
      this.defaultvalue = key
      this.flag = !this.flag
    },
    // 点击给个开关
    handleClick () {
      this.flag = !this.flag
    },
    // 返回上一页
    handleReturn () {
      this.$router.push({
        path: '/tohome'
      })
    },
    positionClick (city) {
      console.log(city, 'city')
      localStorage.setItem('location', city.name)
      this.$router.push({
        path: '/tohome'
      })
    },
    handleChange () {
      let that = this
      const keywords = this.$refs.input.value
      AMap.plugin('AMap.PlaceSearch', function () {
        var autoOptions = {
          city: '全国'
        }
        var placeSearch = new AMap.PlaceSearch(autoOptions)
        placeSearch.search(keywords, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          that.matching = result.poiList.pois
          if (result.poiList.length === 0) {
            this.isShow = true
          }
        })
      })
    },
    localAddress () {
      let that = this
      map.geolocation().then(res => {
        // localStorage.setItem('location', res.formattedAddress)
        console.log(res.pois, 'ss')
        that.localtionData = res.pois
        console.log(that.localtionData, 'aaa')
      }).catch(() => {
        Toast('定位失败，请重试')
      })
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
.receiving-address{
  width: 100%;
  height: 100%;
  .position-input{
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    span{
      display: block;
      width: 50px;
      height: 50px;
      background: #333;
      color:#fff;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-size: 50px;
      margin: 0 20px;
    }
    .select-eie{
      width: 300px;
      height: 65px;
      line-height: 65px;
      border-radius: 5px;
      font-size: 34px;
    }
    .select-active{
      @extend .select-eie;
      border:1px solid orange;
    }
  }
  .position-search{
    width: 100%;
    height: 88px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    div{
      @extend .position-search;
      flex: 1;
      display: flex;
      align-items: center;
      border:1px solid #ccc;
      height: 60px;
      margin-right: 10px;
      span{
        font-size: 40px;
      }
      input{
        margin-left: 20px;
        border:0;
        width: 95%;
        height: 95%;
      }
    }
    button{
      width: 150px;
      height: 60px;
      border: 0;
      background: #ccc;
      color: #fff;
      border-radius: 4px;
      outline: none;
    }
  }
  .position-current{
    width: 100%;
    height: 100px;
    line-height: 100px;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 32px;
    span{
      font-size: 50px;
    }
  }
  .add-address{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 88px;
    color: orange;
    line-height: 88px;
    text-align: center;
    font-size: 32px;
  }
  .select-option{
    position: fixed;
    z-index: 20;
    width: 300px;
    height: 94%;
    top:88px;
    left: 90px;
    overflow-y:auto;
    border: 1px solid #ccc;
    background: #fff;
    ul{
      line-height: 65px;
      font-size: 34px;
    }
  }
  .matching-search{
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 87%;
    left: 0;
    top: 180px;
    background: rgba($color: #000000, $alpha: 0.5);
    overflow-y: auto;
    ul{
      background: #fff;
      padding: 0 20px;
      box-sizing: border-box;
      li{
        font-size: 32px;
        line-height: 50px;
        padding: 20px 0;
        box-sizing: border-box;
        p{
          color: grey;
        }
      }
    }
  }
}
</style>
