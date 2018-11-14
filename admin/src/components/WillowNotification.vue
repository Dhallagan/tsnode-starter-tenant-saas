<template>
  <div class="alert toast" :class="'alert-' + type">
    <icon name=""/>
    <slot/>
    <button @click="dismiss" type="button" class="close" data-dismiss="alert" aria-hidden="true">
      <icon name="times" class="ml-4"></icon>
    </button>
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
    }
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
