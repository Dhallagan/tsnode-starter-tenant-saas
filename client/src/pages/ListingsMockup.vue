<template>
<page>
  <page-header
    title="Listings"
  >
  <template slot="action-right">
    <willow-button primary>Add Listing</willow-button>
  </template>

  </page-header>

  <b-card class="w-100">

<b-tabs class="mb-2">
  <b-tab title="Listed" active>
    <b-form-input  class="mt-2"
      placeholder="Search..."
    ></b-form-input>
    <willow-button outline v-b-toggle.collapse1  class="mb-2 mt-2" >Filters +</willow-button>
    <b-collapse id="collapse1" class="mt-2">
        <p class="card-text">Advanced Options:</p>
        <b-row>
          <b-col cols="6">
          <b-form-group id="fieldsetHorizontal"
                        description="Less Than"
                        label="Price"
                        label-for="inputHorizontal">
              <b-select :options="[{ value: null, text: '$1000' },{ value: 'a', text: '$2000' }]"></b-select>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="fieldsetHorizontal"
                        description="Number of Bedrooms"
                        label="Beds"
                        label-for="inputHorizontal">
              <b-select :options="[{ value: null, text: '1' },{ value: 'a', text: '2' }]"></b-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group id="fieldsetHorizontal"
                        description="City"
                        label="City"
                        label-for="inputHorizontal">
              <b-select :options="[{ value: null, text: 'Newark' },{ value: 'a', text: 'Lyons' }]"></b-select>
            </b-form-group>
          </b-col>
          <b-col cols="6">
          <b-form-group id="fieldsetHorizontal"
                        description="Condo, Duplex, Single Family, etc."
                        label="Type"
                        label-for="inputHorizontal">
              <b-select :options="[{ value: null, text: 'Duplex' },{ value: 'a', text: 'Condo' }]"></b-select>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="fieldsetHorizontal"
                        description="Property Owner"
                        label="Owner"
                        label-for="inputHorizontal">
              <b-select :options="[{ value: null, text: 'Apollo Residential' },{ value: 'a', text: 'Scott Wagner' }]"></b-select>
            </b-form-group>
          </b-col>
        </b-row>
    </b-collapse>
    <b-table hover :items="items">
      <template slot="applicants" slot-scope="data">
        <b-badge variant="secondary" pill>{{data.item.applicants}}</b-badge>
      </template>
    </b-table>
  </b-tab>
  <b-tab title="Unlisted" active>
    <b-form-input  class="mt-2"
      placeholder="Search..."
    ></b-form-input>
    <willow-button outline v-b-toggle.collapse1 variant="outline-primary" class="mb-2 mt-2">Filters +</willow-button>
    <b-collapse id="collapse1" class="mt-2">
    <b-card>
      <p class="card-text">Advanced Options:</p>
      <b-row>
        <b-col cols="6">
        <b-form-group id="fieldsetHorizontal"
                      description="Less Than"
                      label="Price"
                      label-for="inputHorizontal">
            <b-select :options="[{ value: null, text: '$1000' },{ value: 'a', text: '$2000' }]"></b-select>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="fieldsetHorizontal"
                      description="Number of Bedrooms"
                      label="Beds"
                      label-for="inputHorizontal">
            <b-select :options="[{ value: null, text: '1' },{ value: 'a', text: '2' }]"></b-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-group id="fieldsetHorizontal"
                      description="City"
                      label="City"
                      label-for="inputHorizontal">
            <b-select :options="[{ value: null, text: 'Newark' },{ value: 'a', text: 'Lyons' }]"></b-select>
          </b-form-group>
        </b-col>
        <b-col cols="6">
        <b-form-group id="fieldsetHorizontal"
                      description="Condo, Duplex, Single Family, etc."
                      label="Type"
                      label-for="inputHorizontal">
            <b-select :options="[{ value: null, text: 'Duplex' },{ value: 'a', text: 'Condo' }]"></b-select>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="fieldsetHorizontal"
                      description="Property Owner"
                      label="Owner"
                      label-for="inputHorizontal">
            <b-select :options="[{ value: null, text: 'Apollo Residential' },{ value: 'a', text: 'Scott Wagner' }]"></b-select>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
    </b-collapse>

    <b-table hover :items="unlisted">

    </b-table>
  </b-tab>
</b-tabs>

</b-card>

</page>
</template>

<script>
const items = [
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '3 Industrial Road',
    location: 'Boston, MA',
    beds: 'Studio',
    rent: '$500',
    applicants: '14'
  },
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '74 Grove Street',
    location: 'Boston, MA',
    beds: '2',
    rent: '$500',
    applicants: ''
  },
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '100 Main Ave',
    location: 'Boston, MA',
    beds: '1',
    rent: '$500',
    applicants: '8'
  },
  {
    listed: '08/17/2018',
    date_available: '01/01/2018',
    property: '100 Main Ave (duplex)',
    location: 'Boston, MA',
    beds: '3',
    rent: '$500',
    applicants: ''
  }
]
const unlisted = [
  {
    status: 'List Unit',
    property: '3 Industrial Road - #1',
    location: 'Boston, MA',
    beds: 'Studio',
    rent: '$500'
  },
  {
    status: 'List Unit',
    property: '74 Grove Street - #2',
    location: 'Boston, MA',
    beds: '2',
    rent: '$500'
  },
  {
    status: 'List Unit',
    property: '100 Main Ave - #1',
    location: 'Boston, MA',
    beds: '1',
    rent: '$500'
  },
  {
    status: 'List Unit',
    property: '100 Main Ave (duplex) - #1',
    location: 'Boston, MA',
    beds: '3',
    rent: '$500'
  }
]
export default {
  data () {
    return {
      items: items,
      unlisted: unlisted
    }
  }
}
</script>

<style>

</style>
