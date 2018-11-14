<template>
<div class="drawer-pf"
  :class="{
    'd-none': hidden,
    'drawer-pf-expanded': allowExpand && expanded,
  }">

  <slot name="title">
    <div v-if="title" class="sidebar-heading mt-2y">
      <a v-if="allowExpand" class="drawer-pf-toggle-expand" @click="expanded = !expanded"></a>
      <h6 class="text-center text-muted">{{title}}</h6>
    </div>
  </slot>

  <div>
    <div class="panel-group">
      <slot/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pf-drawer',
  props: {
    hidden: {
      type: Boolean,
      default: true
    },
    allowExpand: Boolean,
    title: String
  },
  data: () => ({
    expanded: false
  })
}
</script>

<style>
.drawer-pf {
  position: fixed;
  height: calc(100vh - 48px);
  overflow-x: hidden;
  z-index: 10;
}
.drawer-pf .panel-group {
  overflow-y: auto;
}

.drawer-pf .panel-body {
  overflow-y: auto;
  max-height: 350px;
}
.drawer-pf {
  background-color: #fafafa;
  border: 1px solid #d1d1d1;
  box-shadow: 0 6px 12px rgba(3, 3, 3, 0.175);
  overflow-y: auto;
  position: absolute;
  right: 0;
  width: 320px;
  z-index: 2000;
}
</style>
