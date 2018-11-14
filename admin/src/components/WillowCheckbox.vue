<template>
  <div class="custom-control custom-checkbox">
    <label :for="id" >
    <input  type="checkbox" class="custom-control-input"
      :checked="checked"
      :value="value"
      @change="onChange"
    >
      <slot/>
    </label>
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
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: true
    }
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
