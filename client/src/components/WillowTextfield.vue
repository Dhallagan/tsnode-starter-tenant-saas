<template>
  <div>
    <label class="col-form-label pt-0" :class="{heading: heading}">{{label}}</label>

    <input
      class="form-control" :class="{subdued: subdued}"
      :id="realId"
      :name="name"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleChange"
      />
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
    handleChange (e) {
      console.log('newValue', e)
      var target = e.target || e.srcElement
      this.$emit('change', target.value)
    }
  }
}
</script>

<style>
.subdued {
  background-color: rgb(248, 249, 250);
}

</style>
