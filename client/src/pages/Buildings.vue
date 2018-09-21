<template>
<page>

  <page-header
    title="Buildings"
  >
  <template slot="action-right">
    <willow-button size="lg" primary>Add Building</willow-button>
  </template>

  </page-header>

  <b-card class="w-100">

    <willow-table hover :rows="buildings" :headings="fields">

      <template slot="Id" slot-scope="data">
        {{data.item.id}}
      </template>

      <template slot="Property" slot-scope="data">
        {{data.item.property}}
      </template>

      <template slot="Type" slot-scope="data">
        {{data.item.type}}
      </template>

      <template slot="Location" slot-scope="data">
        {{data.item.location}}
      </template>

      <template slot="Owner" slot-scope="data">
        {{data.item.owner}}
      </template>

      <template slot="Action" slot-scope="data">
        <willow-button :url="'/buildings/' + data.item.id" >View</willow-button>
      </template>

    </willow-table>

  </b-card>

</page>
</template>

<script>
export default {
  mounted () {
    this.buildings = [
      {
        id: 1,
        property: '74 Grove Street',
        location: 'Boston, MA',
        owner: 'Larsen',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: 'Studio' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '3' }
        ]
      },
      {
        id: 2,
        property: '100 Main Ave',
        location: 'Boston, MA',
        owner: 'Geneva',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '2' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '1' }
        ]
      },
      {
        id: 3,
        property: '100 Main Ave (duplex)',
        location: 'Boston, MA',
        owner: 'Jami',
        type: 'Residential, Multi-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '2' }
        ]
      },
      {
        id: 1,
        property: '74 Grove Street',
        location: 'Boston, MA',
        owner: 'Larsen',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: 'Studio' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '3' }
        ]
      },
      {
        id: 2,
        property: '100 Main Ave',
        location: 'Boston, MA',
        owner: 'Geneva',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '2' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '1' }
        ]
      },
      {
        id: 3,
        property: '100 Main Ave (duplex)',
        location: 'Boston, MA',
        owner: 'Jami',
        type: 'Residential, Multi-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '2' }
        ]
      },
      {
        id: 1,
        property: '74 Grove Street',
        location: 'Boston, MA',
        owner: 'Larsen',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: 'Studio' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '3' }
        ]
      },
      {
        id: 2,
        property: '100 Main Ave',
        location: 'Boston, MA',
        owner: 'Geneva',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '2' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '1' }
        ]
      },
      {
        id: 3,
        property: '100 Main Ave (duplex)',
        location: 'Boston, MA',
        owner: 'Jami',
        type: 'Residential, Multi-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '2' }
        ]
      },
      {
        id: 1,
        property: '74 Grove Street',
        location: 'Boston, MA',
        owner: 'Larsen',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: 'Studio' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '3' }
        ]
      },
      {
        id: 2,
        property: '100 Main Ave',
        location: 'Boston, MA',
        owner: 'Geneva',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '2' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '1' }
        ]
      },
      {
        id: 3,
        property: '100 Main Ave (duplex)',
        location: 'Boston, MA',
        owner: 'Jami',
        type: 'Residential, Multi-Family',
        units: [
          { unit: '1A', beds: '1' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '2' }
        ]
      }
    ]
  },

  data () {
    return {
      fields: ['Property', 'Type', 'Location', 'Owner', 'Action'],
      buildings: null
    }
  },

  methods: {
    goTo (building, index) {
      console.log(building)
      this.$router.push({ path: '/Buildings/' + building.id })
    }
  }
}
</script>

<style>

</style>
