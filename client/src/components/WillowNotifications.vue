<template>
  <div :class="{'toast-notification-list': true}" v-show="$slots.default || notifications.length" class="mt-1">

        <willow-notification v-for="(notification, i) in notifications" :key="i"
          title="Notification"
          @dismiss="dismiss(i)"
        >
          {{notification.message}}
        </willow-notification>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notifications: [
        // { type: "primary", message: "test1" },
        // { type: "danger", message: "test2" },
        // { type: "info", message: "test3" },
        // { type: "primary", message: "test1" },
        // { type: "danger", message: "test2" },
        // { type: "info", message: "test3" },
        // { type: "primary", message: "test1" },
        // { type: "danger", message: "test2" },
        // { type: "info", message: "test3" },
        // { type: "primary", message: "test1" },
        // { type: "danger", message: "test2" },
        // { type: "info", message: "test3" },
        // { type: "primary", message: "test1" },
        // { type: "danger", message: "test2" },
        // { type: "info", message: "test3" }
      ]
    }
  },

  methods: {
    add (notification, type = 'info', persistent = false) {
      if (typeof notification === 'string') {
        notification = {
          message: notification,
          type: type,
          persistent: persistent
        }
      }
      this.notifications.push(notification)
    },
    dismiss (i) {
      if (typeof i === 'object') {
        const obj = i
        i = this.notifications.indexOf(obj)
        if (i < 0) {
          return
        }
      }
      this.notifications.splice(i, 1)
    }
  }
}
</script>

<style>

</style>
