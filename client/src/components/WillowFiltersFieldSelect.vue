<template>
  <b-form-select v-model="selected" :options="filter.options" class="mb-3" size="sm" @change="filter(filter)"/>
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
