<template>
  <div class="settings-item">
    <span>{{title}}</span>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>

</style>
