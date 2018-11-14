<template>
   <div class="container">
      <div class="row text-center text-lg-left">
         <willow-product-images-thumbnail v-for="(image, i) in images" :image="image" :key="i">{{image}}</willow-product-images-thumbnail>
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
