<template>
  <willow-select
    :value="selected"
    :options="filter.options"
    @change="filter(filter)"
    subdued>
  </willow-select>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object
    }
  },
  data () {
    return {
      selected: null
    }
  }
}
</script>

<style>

</style>
