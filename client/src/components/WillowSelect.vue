<template>
  <div>
    <label class="col-form-label pt-0" :class="{heading: heading}">{{label}}</label>

    <select
      class="form-control" :class="{subdued: subdued}"
      id=""
      :name="name"
      :value="value"
      :disabled="disabled"
      placeholder="State"
      @change="onChange"
      >
        <option v-if="placeholder" value="" disabled selected>{{placeholder}}</option>
        <option v-for="option in options" :key="option"
          :value="option.value"
        >
          {{ option.text }}
        </option>

    </select>
    <p v-if="helpText" class="form-text text-muted">{{helpText}}</p>
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
    subdued: Boolean,
    heading: Boolean
  },

  methods: {
    onChange (e) {
      console.log(e)
      this.$emit('change', e.currentTarget.value)
    }
  }
}
</script>

<style>
.subdued {
  background-color: rgb(248, 249, 250);
}

</style>
