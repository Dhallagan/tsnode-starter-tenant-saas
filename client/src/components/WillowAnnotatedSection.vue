<template>
<div class="col-sm-24">
  <div class="row">
    <div class="col-sm-24 col-md-8">
        <!---<p> -->
            <h4>{{ title }}</h4>
            <p v-if="description">{{ description }}</p>
            <slot name="description"/>
    </div>
    <div class="col-md-16">
        <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Title' },
    description: { type: String, default: '' }
  }
}
</script>
