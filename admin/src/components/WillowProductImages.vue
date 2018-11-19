<template>
<div class="container">
  <div class="row text-center text-lg-left">
    <willow-product-images-thumbnail v-for="(image, i) in images" :img="image.Url" :key="i" close @remove-img="$emit('remove-img', {image, i})"></willow-product-images-thumbnail>
  </div>
</div>
</template>

<script>
export default {
  props: {
    images: Array
  }
}
</script>

<style>

</style>
