<template>
<page>

  <page-header
    title="Add Lease"
  >
    <template slot="action-right">
      <willow-button class="mt-4 mr-1" variant="default">Cancel</willow-button>
      <willow-button class="mt-4 float-right" primary @click.native="createLease()">Start Lease</willow-button>
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
            <b-form-input
                  type="text"
                  v-model="property">
            </b-form-input>
          </b-col>
          <b-col>
             <label for="inputLive">Unit</label>
            <b-form-input
                  type="text"
                  v-model="unit">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label for="inputLive">Rent Amount</label>
            <b-form-input
                  type="text"
                  placeholder="$0.00"
                  v-model="monthlyRent">
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
                v-model="securityDeposit"
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
                  placeholder="First"
                  v-model="startDate">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">End Date</label>
            <b-form-input
                  type="date"
                  placeholder="First"
                  v-model="endDate">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <b-form-group label="Lease Type">
              <b-form-radio-group id="radios2" v-model="termType" name="radioSubComponent" stacked>
                <b-form-radio value=0>Fixed</b-form-radio>
                <b-form-radio value=1>Fixed - Rollover</b-form-radio>
                <b-form-radio value=2>Month to Month</b-form-radio>
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
                  placeholder="First"
                  v-model="firstName">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Last Name</label>
            <b-form-input
                  type="text"
                  placeholder="First"
                  v-model="lastName">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-2">
         <b-col :cols="12">
            <label for="inputLive">Phone</label>
            <b-form-input
                  type="text"
                  placeholder="(555) 555-5555"
                  v-model="phone">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
         <b-col :cols="12">
            <label for="inputLive">Email</label>
            <b-form-input
                  type="text"
                  placeholder="example@site.com"
                  v-model="email">
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
import axios from 'axios'
import api from '@/api/api'
export default {
  data () {
    return {
      securityDeposit: 0,
      monthlyRent: 0,
      unitId: -1,
      propertyId: -1,
      termType: 0,
      startDate: '',
      endDate: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      property: '',
      unit: ''
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    fetch () {
      axios.all([
        api.getApplicantById(this.$route.query.applicantId),
        api.getBuilding(this.$route.query.propertyId)
      ]).then(res => {
        this.property = res[1].data.Street
        this.propertyId = res[1].data.Id
        res[1].data.Units.forEach(unit => {
          if (unit.UnitId === this.$route.query.unitId) {
            this.unit = unit.Description
            this.unitId = unit.UnitId
          }
        })
      })
    },
    createLease () {
      api.createLease({
        unitId: this.unitId,
        propertyId: this.propertyId,
        securityDeposit: this.securityDeposit,
        monthlyRent: this.monthlyRent,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        startDate: this.startDate,
        endDate: this.endDate,
        termType: this.termType
      })
    }
  }
}
</script>

<style>
</style>
