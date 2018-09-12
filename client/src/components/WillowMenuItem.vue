<template>
  <li class="nav-item">
    <a class="nav-link text-nowrap dark" @click="goTo(href)">
      <icon class="mr-2" :name="icon"></icon>
      <span vmini>{{title}}</span>
      <icon class="ml-1" v-if="disclosure" scale="0.6" name="caret-down"></icon>
      <b-badge class="ml-2" variant="primary" pill>{{badge}}</b-badge>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    href: String,
    disclosure: Boolean,
    badge: String,
    mini: Boolean
  },

  methods: {
    goTo (link) {
      this.$router.push({ path: link })
    }
  }
}
</script>
