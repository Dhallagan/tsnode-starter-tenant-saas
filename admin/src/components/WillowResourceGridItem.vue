<template>
<div class="col-xs-24 col-lg-8 grid-item mb-4" >
  <b-card class="grid-item-thumbnail" @mouseover="hover = true" @mouseleave="hover = false">
    <b-row>
      <b-col cols="" v-if="$slots.media">
       <!--<slot name="media"/>-->
       <img src="http://dataanalytics.willkie.com/vizportal/api/rest/v1/workbooks/43/thumbnail?1503949502089" class="w-thumbnail-fit"/>
      </b-col>
      <b-col>
      </b-col>
      <b-col cols="3" class="align-self-center mr-1" v-if="shortcutActions !== null">
        <willow-button v-if="persistentActions || hover" variant="light" size="sm" :url="shortcutActions.href" :plain="persistentActions">{{shortcutActions.content}}</willow-button>
      </b-col>
    </b-row>
  </b-card>
  <slot/>
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

<style scoped>
.grid-item {
  min-height: 10rem;
}
/* .grid {
  padding-right: 0px;
  padding-left: 0px;
  padding-bottom: 8px;
}

.grid:nth-child(3n + 1) {
  /* background-color: red; */
/* padding-right: 4px;
  padding-left: 0px;
  padding-bottom: 6px;
}
.grid:nth-child(3n + 2) {
  /* background-color: yellow; */
/* padding-right: 3px;
  padding-left: 2px;
  padding-bottom: 6px;
}
.grid:nth-child(3n + 3) {
  /* background-color: green; */
/* padding-right: 0px;
  padding-left: 4px;
  padding-bottom: 6px;
}*/

.grid-item:hover {
  /* background-color: #f8f9fa; */
}
.grid-item-thumbnail:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.w-thumbnail-fit {
  width: 100%;
  overflow: hidden;
}
</style>
