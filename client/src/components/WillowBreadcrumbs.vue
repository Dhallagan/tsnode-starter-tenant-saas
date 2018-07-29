<template>
<div class="breadcrumb-container">
  <ol class="breadcrumb">
    <li v-for="(crumb, i) in breadcrumbs" :key="i">
       <strong><icon class="mr-1" name="chevron-left" scale="0.7"></icon> <router-link class="breadcrumbs" :to="crumb.href">{{crumb.text}}</router-link> </strong>
    </li>
  </ol>
</div>
</template>

<script>
export default {
  name: 'breadcrumbs',
  props: ['breadcrumbs']
}
</script>

<style>
/* .breadcrumbs {
  font-size: 15px;
}
.breadcrumb-container:first-child {
  padding-left: 20px;
}

.breadcrumb-container {
  padding-left: 20px;
  border-bottom: 1px solid #d1d1d1;
  background: #fafafa;
  height: 40px;
}

.breadcrumb a {
  color: #000;
} */
</style>
