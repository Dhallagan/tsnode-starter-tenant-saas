<template>
<div>

    <div class="row">
       <willow-breadcrumbs :breadcrumbs="breadcrumbs"></willow-breadcrumbs>
    </div>

    <b-row>
      <h2>{{title}}</h2>
    </b-row>

    <div class="row mb-3">
      <div class="col-sm-24">
        <div class="float-left">
          <slot name="action-left"/>
        </div>
        <div class="float-right">
          <slot name="action-right"/>
        </div>
        <br><br>
        </div>
    </div>
</div>
</template>

<script>
// import WillowButtonGroup from "@/components/WillowButtonGroup";
// import WillowButton from "@/components/WillowButton";
// import WillowToolbar from "@/components/WillowToolbar";
export default {
  name: 'willow-page-header',

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
