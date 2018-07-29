<template>
  <div class="list-group-item description-list-group-item" >
    <b-row>
      <b-col cols="4">
        <dt class="description-list__term">
          {{item.term}}
        </dt>
      </b-col>
      <b-col>
      <dd>
       {{item.description}}
       </dd>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>
