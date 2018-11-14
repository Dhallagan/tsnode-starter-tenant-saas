<template>
<div>
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <button @click="show = !show"  class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filters</button>
      <div v-if="dropdown" class="dropdown-menu w-100" :class="{'show': show}" >
        <li  href="#">
          <div class="container-fliud">
            <div class="row p-4 ">
              <b-form-group class="col-sm-24 col-lg-6"  :label="filter.label" v-for="(filter, i) in filters" :key="i"  @click="filter(filter)">
                <willow-filters-field-textfield v-if="filter.type == 'FilterType.TextField'" :filter="filter"></willow-filters-field-textfield>
                <willow-filters-field-select v-if="filter.type == 'FilterType.Select'" :filter="filter"></willow-filters-field-select>
                <willow-filters-field-checkbox v-if="filter.type == 'FilterType.Checkbox'" :filter="filter"></willow-filters-field-checkbox>
              </b-form-group>
            </div>
          </div>
        </li>
        <willow-button @click="show = !show" primary>Apply</willow-button>
      </div>
    </div>
    <input type="text" class="form-control"
      placeholder="Search..."
      :value="searchValue">
  </div>
  <b-collapse v-if="!dropdown" v-model="show" class="mt-2" id="1">
    <b-row>
      <b-form-group class="col-sm-24 col-lg-6"  :label="filter.label" v-for="(filter, i) in filters" :key="i">
        <willow-filters-field-textfield v-if="filter.type == 'FilterType.TextField'" :filter="filter"></willow-filters-field-textfield>
        <willow-filters-field-select v-if="filter.type == 'FilterType.Select'" :filter="filter"></willow-filters-field-select>
        <willow-filters-field-checkbox v-if="filter.type == 'FilterType.Checkbox'" :filter="filter"></willow-filters-field-checkbox>
      </b-form-group>
    </b-row>
    <willow-button @click="show = !show" primary class="float-right mb-2">Apply</willow-button>
  </b-collapse>
</div>
</template>

<script>
export default {
  props: {
    searchValue: {
      type: String,
      default: ''
    },
    filters: {
      type: [Array, Object],
      default () {
        return {}
      }
    },
    dropdown: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false,
      selected: null
    }
  },
  methods: {
    setFilter (filter) {
      console.log('$Emit filter:', filter)
      this.$emit('filter', filter)
    }
  }
}
</script>

<style>

</style>
