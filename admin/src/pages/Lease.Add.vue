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
        <br><br>
        // If no querystring, then the property needs to be a dropdown of properties, unit needs to be a dropdown of units of that property, and the resident form would be empty.

        <b-row>
          <b-col>
            <label for="inputLive">Property</label>
            <b-form-input
                  type="text"
                  v-model="property.Street">
            </b-form-input>
          </b-col>
          <b-col>
             <label for="inputLive">Unit</label>
            <b-form-input
                  type="text"
                  v-model="unit.UnitNumber">
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
                  v-model="resident.FirstName">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Last Name</label>
            <b-form-input
                  type="text"
                  placeholder="Last"
                  v-model="resident.LastName">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Phone</label>
            <b-form-input
                  type="text"
                  placeholder="(555) 555-5555"
                  v-model="resident.Phone">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Email</label>
            <b-form-input
                  type="email"
                  placeholder="example@site.com"
                  v-model="resident.Email">
            </b-form-input>
          </b-col>
        </b-row>
        //TODO add address, personal data, emergency contact
      </b-card>

      <!-- <b-card class="mb-2">
        <b-row>
          <b-col>
            <label for="inputLive">Previous City</label>
            <b-form-input
                  id="city"
                  type="text"
                  placeholder="Previous City"
                  v-model="resident.PreviousCity">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Previous Street</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Street"
                  v-model="resident.PreviousStreet">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-2">
           <b-col>
            <label for="inputLive">Previous State</label>
            <b-form-input
                  type="text"
                  placeholder="Previous State"
                  v-model="resident.PreviousState">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Previous Zipcode</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Zipcode"
                  v-model="resident.PreviousZip">
            </b-form-input>
          </b-col>
        </b-row>
        
        <b-row class="mt-2">
           <b-col>
            <label for="inputLive">Previous Employment StartDate</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Employment StartDate"
                  v-model="resident.PreviousEmploymentStartDate">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Previous Employment EndDate</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Employment EndDate"
                  v-model="resident.PreviousEmploymentEndDate">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
           <b-col>
            <label for="inputLive">Previous Employer</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Employer"
                  v-model="resident.PreviousEmployer">
            </b-form-input>
          </b-col>
          
          <b-col>
            <label for="inputLive">Previous Monthly Salary</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Monthly Salary"
                  v-model="resident.PreviousMonthlySalary">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Previous Owner Name</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Owner Name"
                  v-model="resident.PreviousOwnerName">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Previous Owner PhoneNumber</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Owner PhoneNumber"
                  v-model="resident.PreviousOwnerPhoneNumber">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Previous Name Supervisor</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Name Supervisor"
                  v-model="resident.PreviousNameSupervisor">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Previous Occupation</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Occupation"
                  v-model="resident.PreviousOccupation">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Previous Reason For Moving</label>
            <b-form-input
                  type="text"
                  placeholder="Previous Reason For Movingr"
                  v-model="resident.PreviousReasonForMoving">
            </b-form-input>
          </b-col>
        </b-row>
      </b-card> -->

      <b-card class="mb-2">
        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">City</label>
            <b-form-input
                  id="city"
                  type="text"
                  placeholder="City"
                  v-model="resident.City">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Street</label>
            <b-form-input
                  type="text"
                  placeholder="Street"
                  v-model="resident.Street">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-2">
           <b-col>
            <label for="inputLive">State</label>
            <b-form-input
                  type="text"
                  placeholder="State"
                  v-model="resident.State">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Zipcode</label>
            <b-form-input
                  type="text"
                  placeholder="Zipcode"
                  v-model="resident.Zip">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
           <b-col>
            <label for="inputLive">Birth Date</label>
            <b-form-input
                  type="date"
                  placeholder="Birth Date"
                  v-model="resident.Birthdate">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Apartment Suite</label>
            <b-form-input
                  type="text"
                  placeholder="Apartment Suite"
                  v-model="resident.ApartmentSuite">
            </b-form-input>
          </b-col>
        </b-row>

        <!-- <b-row class="mt-2">
           <b-col>
            <label for="inputLive">Current Employment StartDate</label>
            <b-form-input
                  type="text"
                  placeholder="Current Employment StartDate"
                  v-model="resident.CurrentEmploymentStartDate">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Current Employment EndDate</label>
            <b-form-input
                  type="text"
                  placeholder="Current Employment EndDate"
                  v-model="resident.CurrentEmploymentEndDate">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
           <b-col>
            <label for="inputLive">Current Employer</label>
            <b-form-input
                  type="text"
                  placeholder="Current Employer"
                  v-model="resident.CurrentEmployer">
            </b-form-input>
          </b-col>
          
          <b-col>
            <label for="inputLive">Current Monthly Salary</label>
            <b-form-input
                  type="text"
                  placeholder="Current Monthly Salary"
                  v-model="resident.CurrentMonthlySalary">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Current Owner Name</label>
            <b-form-input
                  type="text"
                  placeholder="Current Owner Name"
                  v-model="resident.CurrentOwnerName">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Current Owner PhoneNumber</label>
            <b-form-input
                  type="text"
                  placeholder="Current Owner PhoneNumber"
                  v-model="resident.CurrentOwnerPhoneNumber">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Current Name Supervisor</label>
            <b-form-input
                  type="text"
                  placeholder="Current Name Supervisor"
                  v-model="resident.CurrentNameSupervisor">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Current Occupation</label>
            <b-form-input
                  type="text"
                  placeholder="Current Occupation"
                  v-model="resident.CurrentOccupation">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Current Reason For Moving</label>
            <b-form-input
                  type="text"
                  placeholder="Current Reason For Movingr"
                  v-model="resident.CurrentReasonForMoving">
            </b-form-input>
          </b-col>
        </b-row> -->
        <b-row class="mt-2">
          <b-col>
            <b-form-group>
              <p>Married?</p>
              <b-form-radio-group name="married" v-model="resident.Married">
                <b-form-radio :value="true">Yes</b-form-radio>
                <b-form-radio :value="false">No</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mb-2">
          <b-col>
            <willow-textfield
              :label="'Comments'"
              v-model="resident.Comments"></willow-textfield>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label for="inputLive">Emergency Contact First Name</label>
            <b-form-input
                  type="text"
                  placeholder="Emergency Contact First Name"
                  v-model="resident.EmergencyContactFirstName">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Emergency Contact Last Name</label>
            <b-form-input
                  type="text"
                  placeholder="Emergency Contact Last Name"
                  v-model="resident.EmergencyContactLastName">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <label for="inputLive">Emergency Contact Phone</label>
            <b-form-input
                  type="text"
                  placeholder="Emergency Contact Phone"
                  v-model="resident.EmergencyContactPhone">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">Emergency Contact Relationship</label>
            <b-form-input
                  type="text"
                  placeholder="Emergency Contact Relationship"
                  v-model="resident.EmergencyContactRelationship">
            </b-form-input>
          </b-col>
        </b-row>
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
      termType: 0,
      startDate: '',
      endDate: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      property: {},
      unit: {},
      resident: {},
    }
  },
  mounted () {
    if (this.$route.query.applicant && this.$route.query.listing) {
      this.fetchFromQuery()
    } else {
      this.fetchAll()
    }
  },
  methods: {
    fetchFromQuery () {
      axios.all([
        api.getApplicantById(this.$route.query.applicant),
        api.getListingWithRelations(this.$route.query.listing)
      ]).then(axios.spread((applicant, listing) => {
        this.property = listing.data.Property
        this.unit = listing.data.Unit
        this.resident = applicant.data
        this.resident.City = this.resident.CurrentCity
        this.resident.State = this.resident.CurrentState
        this.resident.Zip = this.resident.CurrentZip
        this.resident.Street = this.resident.CurrentStreet
      }))
    },
    fetchAll () {
      // axios.all([
      //   api.getProper
      // ])
    },
    createLease () {
      alert()
      api.createLease({
        unitId: this.unit.UnitId,
        propertyId: this.property.Id,
        securityDeposit: this.securityDeposit,
        monthlyRent: this.monthlyRent,
        startDate: this.startDate,
        endDate: this.endDate,
        termType: this.termType,
        resident: this.resident
      })
    }
  }
}
</script>

<style>
</style>
