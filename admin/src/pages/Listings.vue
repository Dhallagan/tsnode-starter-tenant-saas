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

        <template slot="Action" slot-scope="data">
          <willow-button :url="`/admin/listings/${data.item.id}`" >View</willow-button>
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

export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      listedTable: {
        fields: ['Listed', 'Available', 'Beds', 'Baths', 'Rent', 'Action'],
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
          console.log(res)
          const listedListings = []
          console.log(res)
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
        .catch(err => {
          console.log(err)
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
