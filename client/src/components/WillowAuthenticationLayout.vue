<template>
    <div id="app" :class="{
        'body-bg_white': white
        }
    ">
      <router-view/>
    </div>
</template>

<script>
export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    white (val) {
      if (val === true) {
        document.body.classList.add('body-bg_white')
      } else {
        document.body.classList.remove('body-bg_white')
      }
    }
  }
}
</script>

<style>
#logout_sidebar_button {
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 15px;
}
.scroll-box {
  overflow-y: scroll;
  height: 600px;
  padding: 1rem;
}
</style>

<style>

</style>
