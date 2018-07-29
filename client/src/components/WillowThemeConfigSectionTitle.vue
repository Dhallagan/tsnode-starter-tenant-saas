<template>
<span>
    <div class="title">{{title}}<br>
      <small v-if="description" style="text-transform: none;font-weight: 400;">
          {{description}}
      </small>
    </div>
    <slot/>
</span>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
}
</script>

<style>

</style>
