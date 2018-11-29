<template>
<page>

  <page-header
    title="Add Lease"
  >
    <template slot="action-right">
      <willow-button class="mt-4 mr-1" variant="default">Cancel</willow-button>
      <willow-button class="mt-4 float-right" primary>Start Lease</willow-button>
    </template>

  </page-header>

  <willow-layout>
  <!-- CARD -->

    <willow-annotated-section
      title="Add Lease"
      description="Create a lease for a new tenant"
    >

       <b-card class="mb-2">
                 //This form needs to work with a querystring if supplied. I.e. /admin/leases/new?propertyId=45&unitId=12&applicantId=23 would populate the property, unit, and resident form
        <br><br>
        // If no querystring, then the property needs to be a dropdown of properties, unit needs to be a dropdown of units of that property, and the resident form would be empty.

        <b-row>
          <b-col>
            <label for="inputLive">Property</label>
            <b-form-select
                  type="text"
                  placeholder="First">
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-group
              label="Unit"
              label-for="inputHorizontal"
            >
              <b-form-select
                type="text"
                placeholder="Number">
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label for="inputLive">Rent Amount</label>
            <b-form-input
                  type="text"
                  placeholder="$0.00">
            </b-form-input>
          </b-col>
          <b-col>
            <b-form-group
              label="Security Deposit"
              label-for="inputHorizontal"
            >
              <b-form-input
                type="text"
                placeholder="$0.00"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col>
            <label for="inputLive">Start Date</label>
            <b-form-input
                  type="date"
                  placeholder="First">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">End Date</label>
            <b-form-input
                  type="date"
                  placeholder="First">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <b-form-group label="Lease Type">
              <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent" stacked>
                <b-form-radio value="first">Fixed</b-form-radio>
                <b-form-radio value="second">Fixed - Rollover</b-form-radio>
                <b-form-radio value="thire">Month to Month</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

       </b-card>

      <b-card class="mb-2">
        // IF applicant is supplied pre populate. Else blank
        <b-row>
          <b-col>
            <label for="inputLive">First Name</label>
            <b-form-input
                  type="text"
                  placeholder="First">
            </b-form-input>
          </b-col>
          <b-col>
            <b-form-group
              label="Last"
              label-for="inputHorizontal"
            >
              <b-form-input
                type="text"
                placeholder="Last"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-2">
         <b-col :cols="12">
            <label for="inputLive">Phone</label>
            <b-form-input
                  type="text"
                  placeholder="(555) 555-5555">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
         <b-col :cols="12">
            <label for="inputLive">Email</label>
            <b-form-input
                  type="text"
                  placeholder="example@site.com">
            </b-form-input>
          </b-col>
        </b-row>
        //TODO add address, personal data, emergency contact
        <!-- <b-row class="mt-4">
          <b-col>
            <b-form-group label="Lease Type">
              <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent" stacked>
                <b-form-radio value="first">Fixed</b-form-radio>
                <b-form-radio value="second">Fixed - Rollover</b-form-radio>
                <b-form-radio value="thire">Month to Month</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row> -->

       </b-card>

    </willow-annotated-section>

  </willow-layout>

</page>
</template>

<script>
export default {
  mounted () {
    // Check if supplied then prepopulate form
    // this.$route.query.propertyId
    // this.$route.query.unitId
    // this.$route.query.applicantId
    this.fetch()
  },
  methods: {
    fetch () {
      // TODO
    }
  }
}
</script>

<style>

</style>
