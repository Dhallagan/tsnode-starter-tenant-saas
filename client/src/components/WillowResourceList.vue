<template>
  <div class="list-group mb-2">
    <slot/><!-- slot for future search?-->
    <willow-resource-list-item v-for="(item, i) in items" :key="i"
      :shortcutActions="item.shortcutActions"
      :persistentActions="true"
    >
      <template slot="media">
        <h1>{{item.media}}</h1>
      </template>

      <h4>{{item.title}}</h4>
      <div>{{item.location}}</div>

    </willow-resource-list-item>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>

</style>
