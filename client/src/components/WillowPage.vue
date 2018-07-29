<template>
<div :class="[{
      'container-fluid':fullWidth,
      'container': !fullWidth
      }]">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'willow-page',

  props: {
    fullWidth: {
      type: Boolean,
      default: false
    },
    title: String
  }
}
</script>
<style scoped>
.container {
  max-width: 1100px;
}
</style>
