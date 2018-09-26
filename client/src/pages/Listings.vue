<template>
<page>
  <page-header
    title="Listings"
  >
    <!-- <template slot="action-right">
      <willow-button primary>Add Listing</willow-button>
    </template> -->

  </page-header>

  <b-card class="w-100">

  <b-tabs class="mb-2">
    <b-tab title="Listed" active>
      <willow-table hover :rows="listedTable.listed" :headings="listedTable.fields" class="mt-4">
        <template slot="Listed" slot-scope="data">
          {{data.item.listed}}
        </template>

        <template slot="Available" slot-scope="data">
          {{data.item.date_available}}
        </template>

        <template slot="Beds" slot-scope="data">
          {{data.item.beds}}
        </template>

        <template slot="Baths" slot-scope="data">
          {{data.item.baths}}
        </template>

        <template slot="Rent" slot-scope="data">
          {{data.item.rent}}
        </template>

        <template slot="Applicants" slot-scope="data">
          <b-badge variant="primary" pill>{{data.item.applicants}}</b-badge>
        </template>

      </willow-table>

    </b-tab>

    <b-tab title="Unlisted">
      <willow-table hover :rows="unlistedTable.unlisted" :headings="unlistedTable.fields" class="mt-4">
        <template slot="Action" slot-scope="data">
          <willow-button>{{data.item.action}}</willow-button>
        </template>

        <template slot="Unit" slot-scope="data">
          {{data.item.unit}}
        </template>

        <template slot="Property" slot-scope="data">
          {{data.item.property}}
        </template>

        <template slot="Rent" slot-scope="data">
          {{data.item.rent}}
        </template>

      </willow-table>
    </b-tab>

  </b-tabs>

</b-card>

</page>
</template>

<script>
const listed = [
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '3 Industrial Road',
    location: 'Boston, MA',
    beds: 'Studio',
    baths: '2',
    rent: '$300',
    applicants: '14'
  },
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '74 Grove Street',
    location: 'Boston, MA',
    beds: '1',
    baths: '1',
    rent: '$600',
    applicants: ''
  },
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '100 Main Ave',
    location: 'Boston, MA',
    beds: 'Studio',
    baths: '1',
    rent: '$500',
    applicants: '8'
  },
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '100 Main Ave (duplex)',
    location: 'Boston, MA',
    beds: '3',
    baths: '2',
    rent: '$500',
    applicants: ''
  }
]
const unlisted = [
  {
    action: 'List Unit',
    unit: '1A',
    property: '3 Industrial Road - #1',
    location: 'Boston, MA',
    beds: 'Studio',
    rent: '$500'
  },
  {
    action: 'List Unit',
    unit: '1A',
    property: '74 Grove Street - #2',
    location: 'Boston, MA',
    beds: '2',
    rent: '$500'
  },
  {
    action: 'List Unit',
    unit: '1A',
    property: '100 Main Ave - #1',
    location: 'Boston, MA',
    beds: '1',
    rent: '$500'
  },
  {
    action: 'List Unit',
    unit: '1A',
    property: '100 Main Ave (duplex) - #1',
    location: 'Boston, MA',
    beds: '3',
    rent: '$500'
  }
]
export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      listedTable: {
        fields: ['Listed', 'Available', 'Beds', 'Baths', 'Rent', 'Applicants'],
        listed: listed
      },
      unlistedTable: {
        fields: ['Action', 'Unit', 'Property', 'Rent'],
        unlisted: unlisted
      }
    }
  },
  methods: {
    fetch () {
      // fetch listed and unlisted
    }
  }
}
</script>

<style>

</style>
