<template>
  <b-form-checkbox-group  v-if="filter.type == 'FilterType.Checkbox'" stacked   :options="filter.options"  @change="setFilter(filter)"></b-form-checkbox-group>
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
