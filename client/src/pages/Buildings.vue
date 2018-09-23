<template>
<page>

  <page-header
    title="Buildings"
  >
  <template slot="action-right">
    <willow-button size="lg" primary :url="'/buildings/new'">Add Building</willow-button>
  </template>

  </page-header>

  <b-card class="w-100">

    <willow-table hover :rows="buildings" :headings="fields">

      <template slot="Id" slot-scope="data">
        {{data.item.id}}
      </template>

      <template slot="Property" slot-scope="data">
        {{data.item.Street}}
      </template>

      <template slot="Type" slot-scope="data">
        {{data.item.Type}}
      </template>

      <template slot="Location" slot-scope="data">
        {{data.item.City + ', ' + data.item.State}}
      </template>

      <template slot="Owner" slot-scope="data">
        {{data.item.Owner}}
      </template>

      <template slot="Action" slot-scope="data">
        <willow-button :url="'/buildings/' + data.item.id" >View</willow-button>
      </template>

    </willow-table>

  </b-card>

</page>
</template>

<script>
import api from '@/api/api'

export default {
  mounted () {
    this.fetch()
  },

  data () {
    return {
      fields: ['Property', 'Type', 'Location', 'Owner', 'Action'],
      buildings: null
    }
  },

  methods: {
    fetch () {
      api.getBuildings()
        .then(res => {
          this.buildings = res.data
        })
    },
    goTo (building, index) {
      console.log(building)
      this.$router.push({ path: '/Buildings/' + building.id })
    }
  }
}
</script>

<style>

</style>
