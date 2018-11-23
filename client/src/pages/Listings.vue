<template>
    <b-container class="bv-example-row">
      <b-card v-for="(listing,index) in listings" :key="index" >
       <b-row >
       <b-col><img src="https://via.placeholder.com/150" alt=""></b-col>
      <b-col cols="9"  >
        <div class="d-flex flex-nowrap">
        <div class="order-1 p-2">
          <p>RENT</p>
          <p><strong>$555</strong></p>
        </div>
        <div class="order-2 p-2">
          <p>SQUARE FEET</p>
          <p><strong>567</strong></p>
        </div>
        <div class="order-3 p-2">
          <p>BED/BATH</p>
          <p><strong>1bd/1ba</strong> </p>
        </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </b-col>
      </b-row>
      <b-row class="float-right">
          <router-link :to="{ name: 'listingDetails', params: { id: listing.value }}"><b-button  >View Details</b-button></router-link>
         <router-link :to="`/apply?listingId=${listing.value}`" ><b-button class="ml-1" >Apply Now</b-button></router-link>
      </b-row>
    </b-card>
</b-container>
</template>

<script>
import api from '@/api/api'

export default {
  mounted () {
    this.fetch()
  },
  props: ['domain'],
  data () {
    return {
      listings: []
    }
  },
  methods: {
    fetch () {
      this.getListings()
    },
    getListings () {
      api
        .getListingsByDomain({ domain: this.domain })
        .then(res => {
          this.listings = res.data.map(listing => {
            return {
              value: listing.ListingId,
              text: listing.Unit.UnitNumber
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="">
  .typo1 {
    width: 6% !important;
    height: 50px;
    border-right: 1px solid #ccc
  }
</style>
