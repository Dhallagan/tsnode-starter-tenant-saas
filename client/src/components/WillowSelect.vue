<template>
  <div>
    <label class="col-form-label pt-0">{{label}}</label>
    <select
      class="form-control" :class="{subdued: subdued}"
      :id="realId"
      :name="name"
      :value="value"
      :disabled="disabled"
      @change="onChange">

        <option v-for="option in options" :key="option"
          :value="option.value"
        >
          {{ option.text }}
        </option>

    </select>
    <small v-if="helpText" class="form-text text-muted">{{helpText}}</small>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    label: String,
    labelAction: Object,
    labelHidden: Boolean,
    helpText: String,
    id: String,
    name: String,
    error: [Boolean, String],
    disabled: Boolean,
    value: String,
    placeholder: String,
    subdued: Boolean
  },

  methods: {
    onChange (e) {
      this.$emit('change', e.currentTarget.value)
    }
  }
  // data () {
  //   return {
  //     value: null
  //   }
  // }
}
</script>

<style>
.subdued {
  background-color: rgb(248, 249, 250);
}

</style>
