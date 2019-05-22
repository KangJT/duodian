<template>
  <div>
    <tabs @change="tabChange"  class="content active-list">
          <tab-pane label="多点超市">
             <div class="list">
               <ul>
                 <li
                 v-for="index in 20"
                 :title="'标签 ' + index"
                 :key="index"
                 :class="{active:index===activeIndex}"
                  @click="change(index)" >2</li>
               </ul>
               <van-tabs class="rightlist">
                  <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
                    内容 {{ index }}
                  </van-tab>
                </van-tabs>
             </div>
          </tab-pane>
          <tab-pane label="全球精选">
             323
          </tab-pane>
    </tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  methods: {
    tabChange () {
      console.log(1)
    },
    change (index) {
      this.activeIndex = index
      console.log(index)
      this.$children.forEach((child, i) => {
        if (index === i) {
          this.$children[index].isShow = true
        } else {
          this.$children[i].isShow = false
        }
      })
      this.$emit('change', index)// 传给父组件下标 从而请求数据
    }
  }
}
</script>

<style lang="scss" scoped>

.list{
  width: 100%;
  height: 100%;
  display: flex;
  ul{
    width:30%;
    height: 100%;
    background: #cccccc;
    li{
      width: 100%;
      line-height: 80px;
      text-align: center;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .active{
      border-bottom:1px solid #f0f;
      background: #ffffff;
      font-weight: 20px;
    }
  }
  .rightlist{
    flex: 1;
    background: none;
    font-size: 10px;
  }
}
</style>
