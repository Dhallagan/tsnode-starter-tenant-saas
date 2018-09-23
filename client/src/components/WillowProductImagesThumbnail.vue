<template>
  <div class="col-lg-6 col-md-12 col-xs-12">
    <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" :src="image" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: String
  }
}
</script>

<style>
.thumbnail img {
    max-height: 100%;
    max-width: 100%;
}
</style>
