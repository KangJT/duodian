<template>
  <div class="tabs">
    <Sticky :top="0">
    <header class="tabs-header">
      <nav ref="navitem">
        <a
          v-for="(item, index) in menu"
          :key="index"
          :class="{active: index === activeIndex}"
          @click="change(index)"
          href="javascript:;"
        >
          {{item}}
        </a>
      </nav>
      <b class="line" :style="styles"></b>
    </header>
    </Sticky>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  components: {
  },
  props: {
    defaultActive: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      activeIndex: 0,
      menu: []
    }
  },
  mounted () {
    this.$children = this.$children.filter((child) => {
      return child.$vnode.tag.indexOf('TabPane') !== -1
    })
    this.initMenu()
  },
  computed: {
    // 样式横线
    styles () {
      const width = window.innerWidth / this.menu.length
      return {
        left: width * this.activeIndex + (width * 0.5 / 2) + 'px',
        width: width * 0.5 + 'px'
      }
    }
  },
  methods: {
    // 找到所对应的显示
    initMenu () {
      this.menu = this.$children.map(child => child.label)
      this.$children[this.activeIndex].isShow = true
    },
    change (index) {
      // 通过下标改变样式
      this.activeIndex = index
      this.$children.forEach((child, i) => {
        if (index === i) {
          this.$children[index].isShow = true
        } else {
          this.$children[i].isShow = false
        }
      })
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  @include wh(100%, auto);
  .tabs-header {
    @include wh(100%, 88px);
    background: #fff;
    display: flex;
    position: relative;
    nav {
      width: 100%;
      line-height: 88px;
      display: flex;
      >a {
        flex: 1;
        font-size: 28px;
        text-align: center;
        color: $link-default-color;
        &.active {
          color:$color-warning;
        }
      }
    }
    .line {
      @include wh(auto, 2px);
      background:$color-warning;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: left .5s ease;
    }
  }
}
</style>
