<template>
  <div class="row">
      <template v-if="sectioned" v-for="(slot, name) in $slots">
          <willow-layout-section :key="name">
              <slot  :name="name"></slot>
          </willow-layout-section>
      </template>
      <template v-if="!sectioned" v-for="(slot, name) in $slots">
          <slot :name="name"></slot>
      </template>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'willow-layout',

  props: {
    sectioned: {
      type: Boolean,
      default: false
    }
  }
}
</script>
