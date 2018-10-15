<template>
  <div class="col-lg-6 col-md-12 col-xs-12 px-1">
    <div class="d-block mb-4 h-100 product-image__base">
      <span class="close product-image__close" title="Remove">&times;</span>
      <img class="img-fluid img-thumbnail" :src="img">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String
  }
}
</script>

<style>
.product-image__base {
  position: relative;
}

.product-image__close {
  opacity: 1;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: white;
  border: 2px solid white;
  border-bottom-left-radius: 5px;
}

.product-image__trash{
  opacity: 1;
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: white;
  border: 2px solid white;
  border-bottom-left-radius: 5px;
}
</style>
