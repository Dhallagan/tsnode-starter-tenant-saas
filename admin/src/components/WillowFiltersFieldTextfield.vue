<template>
    <b-form-input v-if="filter.type == 'FilterType.TextField'"  type="text" placeholder="" size="sm"  @change="filter(filter)"></b-form-input>
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
