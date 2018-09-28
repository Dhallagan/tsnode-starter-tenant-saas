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
    <b-tab title="Listed" active @click="getListedListings()">
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

    <b-tab title="Unlisted" @click="getUnlistedListings()">
      <willow-table hover :rows="unlistedTable.unlisted" :headings="unlistedTable.fields" class="mt-4">
        <template slot="Action" slot-scope="data">
          <willow-button @click.native="listListing(data.item)">{{data.item.action}}</willow-button>
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
import api from '@/api/api'
import {format} from 'date-fns'
// const listed = [
//   {
//     listed: '08/17/2018',
//     date_available: '01/01/2018',
//     property: '3 Industrial Road',
//     location: 'Boston, MA',
//     beds: 'Studio',
//     baths: '2',
//     rent: '$300',
//     applicants: '14'
//   },
//   {
//     listed: '08/17/2018',
//     date_available: '01/01/2018',
//     property: '74 Grove Street',
//     location: 'Boston, MA',
//     beds: '1',
//     baths: '1',
//     rent: '$600',
//     applicants: ''
//   },
//   {
//     listed: '08/17/2018',
//     date_available: '01/01/2018',
//     property: '100 Main Ave',
//     location: 'Boston, MA',
//     beds: 'Studio',
//     baths: '1',
//     rent: '$500',
//     applicants: '8'
//   },
//   {
//     listed: '08/17/2018',
//     date_available: '01/01/2018',
//     property: '100 Main Ave (duplex)',
//     location: 'Boston, MA',
//     beds: '3',
//     baths: '2',
//     rent: '$500',
//     applicants: ''
//   }
// ]
// const unlisted = [
//   {
//     action: 'List Unit',
//     unit: '1A',
//     property: '3 Industrial Road - #1',
//     location: 'Boston, MA',
//     beds: 'Studio',
//     rent: '$500'
//   },
//   {
//     action: 'List Unit',
//     unit: '1A',
//     property: '74 Grove Street - #2',
//     location: 'Boston, MA',
//     beds: '2',
//     rent: '$500'
//   },
//   {
//     action: 'List Unit',
//     unit: '1A',
//     property: '100 Main Ave - #1',
//     location: 'Boston, MA',
//     beds: '1',
//     rent: '$500'
//   },
//   {
//     action: 'List Unit',
//     unit: '1A',
//     property: '100 Main Ave (duplex) - #1',
//     location: 'Boston, MA',
//     beds: '3',
//     rent: '$500'
//   }
// ]
export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      listedTable: {
        fields: ['Listed', 'Available', 'Beds', 'Baths', 'Rent', 'Applicants'],
        listed: []
      },
      unlistedTable: {
        fields: ['Action', 'Unit', 'Property', 'Rent'],
        unlisted: []
      }
    }
  },
  methods: {
    fetch () {
      this.getListedListings()
    },
    getListedListings () {
      api.getListedListings()
        .then(res => {
          const listedListings = []
          res.data.forEach(list => {
            const listing = {
              id: list.ListingId,
              listed: format(list.ListedDate, 'MMMM D, YYYY'),
              date_available: format(list.AvailableDate, 'MMMM D, YYYY'),
              unit: list.Unit.UnitNumber,
              property: list.Unit.Property.Street,
              location: list.Unit.Property.City + ', ' + list.Unit.Property.State,
              beds: list.Unit.Bedrooms,
              baths: list.Unit.Baths,
              rent: list.ListedRent,
              applicants: ''
            }
            listedListings.push(listing)
          })

          this.listedTable.listed = listedListings
          console.log(listedListings)
        })
    },
    getUnlistedListings () {
      api.getUnlistedListings()
        .then(res => {
          const unlistedListings = []
          res.data.forEach(list => {
            const listing = {
              id: list.ListingId,
              action: 'List Unit',
              unit: list.Unit.UnitNumber,
              property: list.Unit.Property.Street,
              location: list.Unit.Property.City + ', ' + list.Unit.Property.State,
              beds: list.Unit.Bedrooms,
              rent: list.ListedRent
            }
            unlistedListings.push(listing)
          })

          this.unlistedTable.unlisted = unlistedListings
          console.log(unlistedListings)
        })
    },
    listListing (listing) {
      api.listListing(listing.id)
        .then(res => {
          this.getUnlistedListings()
        })
    }
  }
}
</script>

<style>

</style>
