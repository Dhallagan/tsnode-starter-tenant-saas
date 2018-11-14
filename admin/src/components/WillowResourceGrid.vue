<template>
  <div class="row">

  <willow-resource-grid-item v-for="(item, i) in items" :item="item" :key="i">
    <template slot="media">
        <h1 class=" text-center">{{item.media}}</h1>
      </template>

      <span class="w-thumbnail-title">{{item.title}}</span>
      <div class="w-thumbnail-detail-stats">{{item.location}}</div>
  </willow-resource-grid-item>

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
.w-thumbnail-title {
  color: #367e9c;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
}
.w-thumbnail-detail-stats {
  padding-top: 0;
  height: 16px;
  position: relative;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  color: #999;
}
</style>
