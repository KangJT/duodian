<template>
  <div class="component-list">
     <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
  }
}
</script>
<style scoped lang="scss">
.component-list{
   margin-bottom:80px;
 }
 </style>
