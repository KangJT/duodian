<template>
  <div>
    <slot></slot>
    <span class="showtoast" v-show="loading">正在加载数据...</span>
  </div>
</template>

<script>
export default {
  name: 'ScrollView',
  props: {
    //  为了请求数据   开关到达底部的到达底部请求数据的时候不允许请求多次，请求完毕的时候打开开关
    flg: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  watch: {
    flg (newVal) {
      this.loading = !newVal
    }
  },
  mounted () {
    this.initEvent()
  },
  methods: {
    _scroll (event) {
      const scrollTop = window.scrollY
      const bodyHeight = document.body.scrollHeight // clinentheight如果不设置高100%
      const windowHeight = window.outerHeight
      if (bodyHeight - scrollTop <= windowHeight) {
        this.scrollBottom()
      }
    },
    initEvent () {
      this.scrollWrap = this.$refs.scrollWrap
      window.addEventListener('scroll', this._scroll, true)
    },
    scrollBottom () {
      this.$emit('scroll')
    }
  }
}
</script>

<style lang="scss" scoped>
// .showtoast {
//   position: fixed;
//   top: 50%;
//   left: 40%;
//   background: rgb(31, 30, 30);
//   padding: 5px 10px;
//   color: #fff;
// }
</style>
