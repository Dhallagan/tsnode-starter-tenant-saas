<template>
<span>
  <willow-menu-item
    :class="showCollapse ? 'collapsed' : null"
    :title="title"
    :icon="icon"
    disclosure
    @click.native="showCollapse = !showCollapse"
  ></willow-menu-item>
  <b-collapse v-model="showCollapse" >
    <ul class="nav flex-column px-4">
      <slot/>
    </ul>
  </b-collapse>
</span>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String
  },

  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style>

</style>
