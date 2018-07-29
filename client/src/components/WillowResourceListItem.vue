<template>
  <div class="list-group-item list-group-item-action" @mouseover="hover = true" @mouseleave="hover = false">
    <b-row>
      <b-col cols="1" class="align-self-center mr-0" v-if="selectable">
        <b-form-checkbox></b-form-checkbox>
      </b-col>
      <b-col cols="2" v-if="$slots.media" class="text-center">
       <slot name="media"/>
      </b-col>
      <b-col>
        <slot/>
      </b-col>
      <b-col cols="3" class="align-self-center mr-1" v-if="shortcutActions !== null">
        <willow-button v-if="persistentActions || hover" variant="light" size="sm" :url="shortcutActions.href" :plain="persistentActions">{{shortcutActions.content}}</willow-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    url: String,
    shortcutActions: {
      type: Object,
      default () {
        return null
      }
    },
    persistentActions: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      hover: false
    }
  }
}
</script>

<style>

</style>
