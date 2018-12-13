<template>
  <div class="row" style="padding-top: 200px;">
    <div class="col-sm-24 col-lg-10">
      <h1>
        {{heading}}
      </h1>
      <h4>
        <slot/>
      </h4>
      <div class="mt-4">
        <willow-button primary :size="'lg'" :url="primaryAction.url"> {{primaryAction.label}}</willow-button>
      </div>
      <div class="mt-4" v-if="secondaryAction">
        <willow-button plain>{{secondaryAction.label}}</willow-button>
      </div>
    </div>
    <div class="col-sm-24 col-lg-10">
      <img :src="img" style="width: 100%;"/>
      <!-- <img :src="https://images.vexels.com/media/users/3/149878/isolated/preview/65fdeb2244ff3f9d51c68a153d23d2ae-industrial-building-illustration-by-vexels.png" role="presentation" alt="" class="Polaris-EmptyState__Image"> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'Title'
    },
    img: {
      type: String,
      default: ''
    },
    primaryAction: {
      type: Object,
      default () {
        return { label: 'Action', url: 'path' }
      }
    },
    secondaryAction: {
      type: Object,
      default () {
        return null
      }
    }
  }
}
</script>

<style>
.background img {
    position: relative;
    left: -80%;
    width: calc(100% + 40% * 2);
    margin-top: 0;
    z-index: 0;
}
</style>
