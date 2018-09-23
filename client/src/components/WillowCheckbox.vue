<template>
  <div class="custom-control custom-checkbox custom-control-inline">
    <label :for="id" class="custom-control-label">
    <input type="checkbox" class="custom-control-input" :value="value" checked>
    {{label}}</label>
    </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },

  props: {
    id: String,
    label: String,
    value: String,
    checked: Boolean,
    disabled: Boolean
  },

  methods: {
    onChange (e) {
      console.log(e)
      this.$emit('change', e.currentTarget.checked)
    }
  }
}
</script>

<style>

</style>
