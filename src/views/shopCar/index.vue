<template>
    <div class="shop">
       <!-- <div>
         还没有购物
       </div> -->
       <h4>
           <span @click="goHistory">&lt;</span>
           <span>地址</span>
           <span>
               多点超市(海淀区超市)
               <span></span>
           </span>
       </h4>
       <ul class="list">
           <li>
               <van-checkbox v-model="checked">全选</van-checkbox>
               <div class="info">
                   <div>
                       <div class="name">雪花勇闯天涯迷彩听啤 330ml</div>
                       <span class="price">￥
                           <strong>1.75</strong>
                           <em>仅剩1件</em>
                       </span>
                   </div>
                   <div class="j-num">
                       <i>-</i>
                       <span>1</span>
                       <i>+</i>
                   </div>
               </div>
           </li>
       </ul>
       <div class="zon">
           <div class="count">
               <div class="orange">
                   合计<span>￥</span><strong>9.34</strong>（不含运费）
               </div>
               <div>
                   促销已抵扣金额：￥0.00
               </div>
           </div>
           <van-notice-bar :scrollable="false"  left-icon="volume-o">
              先充值在购物能省就省啊奥奥乖乖呢哈哈哈哈啊省钱最好啦
           </van-notice-bar>
           <div>
            <span class="xuan" @click="OkSure">
               选好了
            </span>
           </div>

       </div>
   </div>
</template>

<script>
import { NoticeBar, Checkbox } from 'vant'

export default {
  name: 'component_name',
  data () {
    return {
      checked: '',
      display: true
    }
  },
  components: {
    [Checkbox.name]: Checkbox,
    [NoticeBar.name]: NoticeBar
  },
  methods: {
    OkSure () {
      this.$router.push({
        path: '/okodder'
      })
    },
    goHistory () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
    h4{
        margin-top: 0.2rem;
        border-bottom: 1px solid #f0f0f0;
        height: 0.84rem;
        line-height: 0.84rem;
        font-size: 0.27rem;
        font-weight: 400;
        color: grey;
        padding-left: 0.76rem;
        padding-right: 30p0.57remx;
        background: #fff;
    }
    .list{
        background: #fff;
        font-size: 0.27rem;
        li{
        border-top: 1px solid #f0f0f0;
        padding-left: 0.76rem;
        overflow: hidden;
        position: relative;
      }
    }

    .info{
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
    .name{
        max-width: 100%;
        overflow: hidden;
        padding: 3px 0;
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .j-num{
        padding-left: 0.38rem;
        position: absolute;
        right: 0.2rem;
        top: 50%;
        margin-top: -0.28rem;
        height: 0.57rem;
        line-height: 0.57rem;
         i{
        font-style: normal;
        display: inline-block;
        border: 1px solid #FFBEAB;
        width: 0.53rem;
        height: 0.38rem;
        text-align: center;
        line-height: 0.38rem;
      }
    }
    .zon{
        border-top: 1px solid #f0f0f0;
        font-size: 0.24rem;
        padding: 10px;
        color: grey;
        font-size: 0.2rem;
        background: #fff;
        position: relative;
    }
    .count{
        position: relative;
    }
    .orange{
        font-size: 0.27rem;
        margin-bottom: 0.1rem;
        color: #ff712b;
        strong{
        font-size: 0.34rem;
        margin-left: 0.1rem;
      }
    }
    .xuan{
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -20px;
        overflow: hidden;
        cursor: pointer;
        padding: 0 0.4rem;
        height: 0.84rem;
        line-height: 0.84rem;
        background: #ff712b;
        color: #fff;
        border-radius: 0.1rem;
        border: none;
        font-size: 0.27rem;
    }
</style>
