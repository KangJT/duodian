<template>
  <ul class="footerBox">
    <li
     :class="index === nowCheck?'checked':''"
     :to="item.url"
     v-for="(item, index) in footerData"
     :key="item.id"
     @click="checks(index, item.url)"
    >
      <i class="iconfont footerIcon">{{item.icon}}</i>
      <span class="footerText">{{item.name}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    footerData: {
      type: Array,
      required: true
    }
  },
  methods: {
    checks (index, url) {
      this.nowCheck = index
      this.$router.push({path: url})
    }
  },
  data () {
    return {
      nowCheck: 0
    }
  }
}
</script>
<style lang="scss" scoped>
  .footerBox {
  @include wh(100%, 100px);
  background: $color-background-default;
  box-shadow: 0 -8px 12px 0 rgba(0,0,0,0.06);
  @include fixedBottom();
  @include flex(row, inherit, inherit)
}
.footerBox li {
  @include flexOne;
  @include flex(column);
}
.footerIcon {
  font-size: $icon-size-l;
}
.footerText {
  font-size: $text-size-l;
}
.checked {
  color: $color-text-checked;
}
</style>
