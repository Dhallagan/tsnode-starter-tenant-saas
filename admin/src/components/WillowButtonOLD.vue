<template>
  <b-button
    :size="size"
    :variant="variant"
    :href="url"
    :disabled="disabled"
  >
    <slot/>
  </b-button>
</template>

<script>
export default {
  name: "Willow-Button",

  props: {
    destructive: Boolean,
    primary: Boolean,
    plain: Boolean,
    variant: String,
    size: String,
    url: String,
    icon: String,
    fullWidth: Boolean,
    disabled: Boolean
  },

  computed: {}
}
</script>

<style>

</style>
