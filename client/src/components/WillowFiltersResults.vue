<template>
<div class="form-group">
  <ul class="list-inline" v-if="filters.length > 0">
    <span> Filters: </span>
    <li v-for="(filter, i) in filters" :key="i" variant="primary" class="list-inline-item">
    <span class="badge badge-secondary">
      {{filter.label}} {{filter.operatorText}} {{filter.value}}<icon class="ml-1" name="times" scale="0.5" @click.native="$parent.clearFilter(i)"></icon>
    </span>
    </li>
    <span><willow-button plain @click.native="$parent.clearAllFilters()" v-if="filters.length > 0">Clear All Filters</willow-button>
    </span>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    count: Number,
    filters: {
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
