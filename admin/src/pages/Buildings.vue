<template>
<page>
<template v-if="this.buildings.length > 0">
  <page-header
    title="Buildings"
  >
  <!-- <template slot="action-left">
    <willow-button size="lg" plain :url="'/Admin/buildings/new'"> <icon name="arrow-up" class="pr-1"></icon>Export</willow-button>
    <willow-button size="lg" plain :url="'/Admin/buildings/new'"> <icon name="arrow-down" class="pr-1"></icon>Import</willow-button>
  </template> -->

  <template slot="action-right">
    <willow-button size="lg" primary :url="'/Admin/buildings/new'">Add Building</willow-button>
  </template>

  </page-header>

  <b-card class="w-100">

    <willow-table hover :rows="buildings" :headings="fields">

      <template slot="Id" slot-scope="data">
        {{data.item.id}}
      </template>

      <template slot="Property" slot-scope="data">
        {{data.item.street}}
      </template>

      <template slot="Type" slot-scope="data">
        {{data.item.type}}
      </template>

      <template slot="Location" slot-scope="data">
        {{data.item.city + ', ' + data.item.state}}
      </template>

      <template slot="Owner" slot-scope="data">
        {{data.item.owner}}
      </template>

      <template slot="Action" slot-scope="data">
        <willow-button :url="'/Admin/buildings/' + data.item.id" >View</willow-button>
      </template>

    </willow-table>

  </b-card>
  </template>

  <template v-else>
    <willow-empty-state
      :heading="'Add your buildings'"
      :img="'https://images.vexels.com/media/users/3/149878/isolated/preview/65fdeb2244ff3f9d51c68a153d23d2ae-industrial-building-illustration-by-vexels.png'"
      :primaryAction="{ label: 'Add Building', url: '/Admin/buildings/New' }"
      :secodaryAction="{ label: 'two', url: 'Admin/buildings/New' }"
    >
      Get closer to listing your properties by adding a building, or import your building inventory.
    </willow-empty-state>
  </template>
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
          this.buildings = res.data.map(building => {
            return {
              id: building.Id,
              street: building.Street,
              apartmentsuite: building.ApartmentSuite,
              city: building.City,
              state: building.State,
              zipcode: building.Zipcode,
              owner: building.Owner,
              type: building.Type
            }
          })
        })
    },
    goTo (building, index) {
      console.log(building)
      this.$router.push({ path: '/Admin/Buildings/' + building.id })
    }
  }
}
</script>

<style>

</style>
