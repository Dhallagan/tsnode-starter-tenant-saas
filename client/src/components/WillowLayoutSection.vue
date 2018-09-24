<template>

  <div :class="[{
    'col-sm-24 col-lg-16' : primary,
    'col-sm-24 col-lg-8' : secondary,
    'col-sm-24': !secondary && !primary
    }]">
      <slot></slot>
  </div>

</template>

<script>
export default {
  props: {
    primary: Boolean,
    secondary: Boolean
  }
}
</script>
