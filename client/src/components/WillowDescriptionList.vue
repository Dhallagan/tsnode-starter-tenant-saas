<template>
   <div class="description-list-group mb-2">
   <!--DESCRIPTION LIST -->
    <willow-description-list-item v-for="(item, i) in items" :item="item" :key="i">

    </willow-description-list-item>
   </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>

</style>
