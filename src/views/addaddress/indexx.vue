<template>
  <div class="receiving-address">
    <!-- ����ѡ�� -->
    <div class="position-input">
      <span @click="handleReturn">?</span>
      <div :class="flag?'select-active':'select-eie'" @click="handleClick">
        <em>��ѡ��</em>
      </div>
    </div>
    <!-- ������ -->
    <div class="position-search">
      <div>
        <span>��</span>
        <input ref="input" type="text" v-on:input="handleChange" placeholder="С�����ֵ�������">
      </div>
      <button>ȡ��</button>
    </div>
    <!-- �������������б� -->
    <div v-if="matching.info==='OK'" class="matching-search">
      <ul>
        <li v-for="item in matching.tips" :key="item.id" @click="positionClick(item)">
          <h3>{{item.name}}</h3>
          <p>{{item.district}}</p>
        </li>
      </ul>
    </div>
    <!-- �����λ��ǰ -->
    <div class="position-current">
      <span>��</span> ��λ����ǰ��ַ
    </div>
    <!-- ������ַ -->
    <div class="add-address"><span>+</span> ������ַ</div>
    <div v-if="flag" class="select-option">
      <ul>
        <li v-for="item in options" :key="item.cityCode">{{item.cityName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { constants } from 'fs'
export default {
  name: 'address',
  props: ['city'],
  data () {
    return {
      options: {},
      value: '',
      flag: false,
      matching: []
    }
  },
  mounted () {
    // ��������
    this.options = this.$store.state.city.data.cityList
  },
  methods: {
    handleClick () {
      this.flag = !this.flag
    },
    handleReturn () {
      this.$router.push({
        path: '/home'
      })
    },
    handleChange () {
      let that = this
      var keywords = this.$refs.input.value
      // ��ȡ��ʾ��Ϣ
      AMap.plugin('AMap.Autocomplete', function () {
        // ʵ����Autocomplete
        var autoOptions = {
          city: 'ȫ��'
        }
        var autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(keywords, function (status, result) {
          // �����ɹ�ʱ��result���Ƕ�Ӧ��ƥ������
          // var node = new PrettyJSON.view.Node({
          //     // el: document.querySelector("#input-info"),
          //     data: result
          // });
          console.log(result)
          that.matching = result
        })
      })
    },
    positionClick (data) {
      console.log(data)
      localStorage.setItem('data', data.name)
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.receiving-address{
  @include w_h_size;
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
import Vue from 'vue'
import Vuex from 'vuex'
import {postLogin, getUser} from '../api'
let list = require('../assets/data/index.json')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showFooter: true,
    city: list
  },
  getters: {},
  mutations: {
    detailsText (state, payload) {
      state.showFooter = false
    }
  },
  actions: {
    async postLogin (context) {
      // ��������
      const result = await postLogin()
      if (result.code === 1) {
        console.log(result)
        localStorage.setItem('token', result.token)
      }
    },
    async getUser (context) {
      // ��������
      const result = await getUser()
      console.log(result)
    }
  }
})
export default store
