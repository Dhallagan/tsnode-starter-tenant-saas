<template>
  <div :class="'alert alert-' + type" role="alert">
    <icon :name="icon"/>
    <slot/>
    <button v-if="dismissable" type="button" aria-label="Close" class="close" @click="dismiss()">×</button>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    type: {
      type: String,
      default: 'info'
    },
    delay: {
      type: Number,
      default: 8000
    },
    dismissable: {type: Boolean}
  },
  computed: {
    alertClass () {
      return `alert-${this.type || 'info'}`
    }
  },
  methods: {
    dismiss () {
      this.$emit('dismiss', this)
      // workaround race conditions in event dispatching and handling in parent component
      if (this.$parent.notifications && this.$parent.notifications.length) {
        setTimeout(this.dismiss, 250)
      }
    }
  }
}
</script>

<style>

</style>
