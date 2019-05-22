<template>
  <div class="artile-list">
     <list>
      <list-item
        v-for="(item, index) in list"
        :key="index"
        :items="item"
        :isStyleControl="isStyleControl"
      >
      </list-item>
    </list>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    isStyleControl: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    gotopage () {
      this.$router.push({
        path: '/goosd/detail'
      })
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style scoped lang="scss">
.artile-list {
  width: 100%;
  @include hidden
}
</style>
