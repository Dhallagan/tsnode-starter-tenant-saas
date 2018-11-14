<template>
  <div class="theme-config">
    <div class="theme-config-box" :class="{'show': show}">
        <div class="spin-icon" @click="show = !show">
            <icon name="cog" spin class="config-spin"></icon>
        </div>
        <div class="skin-settings">
            <slot/>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>

</style>
