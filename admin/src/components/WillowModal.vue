<template>
  <portal to="modal">
    <b-modal id="modallg" size="lg" :title="title" ok-title="Cancel" centered>
     <slot/>
     <template slot="modal-footer">
      <slot name="modal-footer"/>
     </template>
  </b-modal>
  <!---<h2><slot/></h2>-->
  </portal>
</template>

<script>
export default {
  props: {
    title: String,
    primaryAction: String
  }
}
</script>

<style>

</style>
