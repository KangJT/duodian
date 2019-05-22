<template>
  <div class="sticky">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sticky'
}
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>
