<template>

<div class="row mt-3 border-top ">
    <div class="col-sm-24 mt-4">
      <div class="float-left">
        <slot name="action-left"/>
      </div>
      <div class="float-right">
        <slot name="action-right"/>
      </div>
    </div>
</div>

</template>

<script>
// import WillowButtonGroup from '@/components/WillowButtonGroup';
// import WillowButton from '@/components/WillowButton';
// import WillowToolbar from '@/components/WillowToolbar';
export default {
  name: 'willow-page-actions',

  props: {
    title: { type: String, default: 'Page Title Here' },
    icon: String,
    breadcrumb: String,
    separator: Boolean,
    breadcrumbs: {
      type: Array,
      default () {
        return []
      }
    },
    primaryAction: Object,
    secondaryActions: {
      type: Array,
      default () {
        return []
      }
    },
    pagination: Object,
    actionGroups: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 0px;
  margin-left: -1rem;
  background-color: #f2f2f2;
}

.willow-page-header {
  margin-bottom: 1px;
}
</style>
