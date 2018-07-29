<template>
<div>
  <willow-filters-fields
    :filters="filters"
    @filter="setFilter"
  ></willow-filters-fields>

  <willow-filters-results
    :filters="activeFilters"
  ></willow-filters-results>
</div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeFilters: []
    }
  },
  computed: {
    showResultFilter () {
      return this.activeFilters.length
    }
  },
  methods: {
    clearFilter (i) {
      this.activeFilters.splice(i, 1)
    },
    clearAllFilters () {
      this.activeFilters = []
    },
    setFilter (filter) {
      console.log(filter)
      this.activeFilters.push(filter)
    }
  },
  watch: {
    filters: {
      handler () {
        this.activeFilters = this.filters.slice()
      },
      immediate: true
    }
  }
}
</script>

<style>

</style>
