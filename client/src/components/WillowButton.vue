<template>
 <b-button :variant="variant" :size="size" :disabled="disabled" :to="url" :block="fullWidth">
  <icon v-if="icon" :name="icon" style="margin-right: 6px;"></icon>
  <slot/>
  <icon v-if="disclosure" name="caret-down" style="margin-left: 6px;"></icon>
</b-button>
</template>

<script>
// * Props *
// X destructive : boolean - Indicates dangerous action
// x disabled: boolean - Disables the button
// x disclosure: boolean - Adds a disclosure icon
// external: boolean - Force new tab for link
// x fullWidth: boolean - Allows the button to be full width of container
// x icon: string - Font Awesome icon to be shown on left
// loading: boolean - Adds spinner to button while task is performed
// x outline: boolean - adds sublety
// x plain: boolean - Renders a button that looks like a link
// primary: boolean - Adds boldness
// size: string - One of ["defaul","large","small"]
// url: string - Destination link
export default {
  name: 'WillowButton',

  props: {
    destructive: Boolean,
    primary: Boolean,
    plain: Boolean,
    outline: Boolean,
    icon: String,
    size: {
      type: String,
      default: 'sm'
    },
    disabled: Boolean,
    disclosure: Boolean,
    url: String,
    fullWidth: Boolean
  },

  computed: {
    variant () {
      if (this.destructive) {
        return 'danger'
      } else if (this.primary) {
        return 'primary'
      } else if (this.plain) {
        return 'link'
      } else if (this.outline) {
        return 'outline-primary'
      } else {
        return 'light'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
