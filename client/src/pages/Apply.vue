<template>
<div>
  <page>
   <h1>Apply</h1>
  <b-card class="mb-2 mt-4">
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-select
          :label="'Listings'"
          :placeholder="'What residence are you applying for?'"
          :options="listings"
          v-model="applicantForm.ListingApplyTo"
          heading
        ></willow-select>
      </b-col>
    </b-row>

    <h3>Application Information</h3>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Email'"
          v-model="applicantForm.Email"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'First Name'"
          v-model="applicantForm.FirstName"
          heading
        ></willow-textfield>
      </b-col>
      <b-col :cols="12">
        <willow-textfield
          :label="'Last'"
          v-model="applicantForm.LastName"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-datepicker
          :label="'Birth date'"
          v-model="applicantForm.Birthdate"
          :showCalendar="true"
        ></willow-datepicker>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'SSN'"
          v-model="applicantForm.Ssn"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Phone'"
          v-model="applicantForm.Phone"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>
<br>
    <h3>Rental History</h3>

  <h5>Current Residence</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Current Street'"
          v-model="applicantForm.CurrentStreet"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'City'"
          v-model="applicantForm.CurrentCity"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'State'"
          v-model="applicantForm.CurrentState"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Zip'"
          v-model="applicantForm.CurrentZip"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Name'"
          v-model="applicantForm.CurrentOwnerName"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Phone'"
          v-model="applicantForm.CurrentOwnerPhoneNumber"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-datepicker
          :label="'Date From'"
          v-model="applicantForm.CurrentStartDate"
          :showCalendar="true"
        ></willow-datepicker>
      </b-col>

      <b-col :cols="12">
        <willow-datepicker
          :label="'To'"
          v-model="applicantForm.CurrentEndDate"
          :showCalendar="true"
        ></willow-datepicker>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Reason for moving'"
          v-model="applicantForm.CurrentReasonForMoving"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

  <h5>Prior</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Prior Street'"
          v-model="applicantForm.PreviousStreet"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'City'"
          v-model="applicantForm.PreviousCity"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'State'"
          v-model="applicantForm.PreviousState"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Zip'"
          v-model="applicantForm.PreviousZip"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Name'"
          v-model="applicantForm.PreviousOwnerName"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Phone'"
          v-model="applicantForm.PreviousOwnerPhoneNumber"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-datepicker
          :label="'Date From'"
          v-model="applicantForm.PreviousStartDate"
          :showCalendar="true"
        ></willow-datepicker>
      </b-col>

      <b-col :cols="12">
        <willow-datepicker
          :label="'To'"
          v-model="applicantForm.PreviousEndDate"
          :showCalendar="true"
        ></willow-datepicker>
      </b-col>
    </b-row>
    <br>
    <h3>Employment</h3>

  <h5>Current employment</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Current Employer'"
          v-model="applicantForm.CurrentEmployer"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Occupation'"
          v-model="applicantForm.CurrentOccupation"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Supervisor Name'"
          v-model="applicantForm.CurrentNameSupervisor"
          heading
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Supervisor Phone'"
          heading
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-datepicker
          :label="'Date From'"
          v-model="applicantForm.CurrentEmploymentStartDate"
          :showCalendar="true"
        ></willow-datepicker>
      </b-col>

      <b-col :cols="12">
        <willow-datepicker
          :label="'To'"
          v-model="applicantForm.CurrentEmploymentEndDate"
          :showCalendar="true"
        ></willow-datepicker>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'MonthlySalary'"
          v-model="applicantForm.CurrentMonthlySalary"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

    <h3>General</h3>

    <b-form-group  >
      <p>Do you smoke? </p>
    <b-form-radio-group name="smoke" v-model="applicantForm.Smoke" >
      <b-form-radio name="smoke"  :value="true"  >Yes</b-form-radio>
      <b-form-radio name="smoke"    :value="false"  >No</b-form-radio>
    </b-form-radio-group>
    </b-form-group>

    <b-form-group>
      <p>Do you have pets?</p>
      <b-form-radio-group name="pets" v-model="applicantForm.Pets" >
      <b-form-radio :value="true" >Yes</b-form-radio>
      <b-form-radio :value="false" >No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'If you have a pet what breed?'"
          v-model="applicantForm.PetsBreed"
        ></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Weight'"
          v-model="applicantForm.PetsWeight"
        ></willow-textfield>
      </b-col>

    </b-row>

    <b-form-group>
      <p>Have you ever been late on rent?</p>
      <b-form-radio-group name="DelinquentRent" v-model="applicantForm.DelinquentRent" >
      <b-form-radio :value="true" >Yes</b-form-radio>
      <b-form-radio :value="false" >No</b-form-radio>
      </b-form-radio-group>

    </b-form-group>

    <b-form-group>
      <p>Have you ever been party to a lawsuit? </p>
       <b-form-radio-group name="Sued" v-model="applicantForm.Sued" >
      <b-form-radio :value="true" >Yes</b-form-radio>
      <b-form-radio :value="false" >No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'If yes to any of the above, explain.'"
          v-model="applicantForm.GeneralExplain"
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Is there anything negative in your credit or background check you want to comment on? '"
          v-model="applicantForm.NegativeComments"
        ></willow-textfield>
      </b-col>
    </b-row>

    <b-form-group>
      <p><strong>I have read, understand, and agreed to the terms and conditions</strong></p>
       <b-form-radio-group name="AgreedToTerms" v-model="applicantForm.AgreedToTerms" >
      <b-form-radio :value="true" >Yes</b-form-radio>
      <b-form-radio :value="false" >No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <p><strong>Terms and conditions:</strong><br>
        I understand that this is a routine application to establish credit, character, employment, and
        rental history. I also understand that this is NOT an agreement to rent and that all applications
        must be approved. I authorize verification of references given. I declare that the statements
        above are true and correct, and I agree that the landlord may terminate my agreement entered
          into in reliance on any misstatement made above.
    </p>
    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Type name here as an ESignature'"
          v-model="applicantForm.ESignature"
          heading
        ></willow-textfield>
      </b-col>

    </b-row>

  </b-card>

  <page-actions>
    <template slot="action-right">
      <willow-button  class="float-right mt-3" size="lg" primary @click.native="saveApplicant()">Apply</willow-button>
    </template>
  </page-actions>

  </page>
        <router-view class="view"></router-view>

</div>
</template>

<script>
import api from '@/api/api'

export default {
  mounted () {
    this.fetch()
    this.applicantForm.ListingApplyTo = this.$route.query.listingId
    console.alert(this.$route.query.listingId)
  },
  props: ['domain'],

  data () {
    return {
      listings: [],
      applicantForm: {
        ListingApplyTo: null,
        FirstName: null,
        LastName: null,
        Ssn: null,
        Birthdate: null,
        Email: null,
        Phone: null,
        EmergencyContactFirstName: null,
        EmergencyContactLastName: null,
        EmergencyContactRelationship: null,
        EmergencyContactPhone: null,
        CurrentStreet: null,
        CurrentCity: null,
        CurrentState: null,
        CurrentZip: null,
        CurrentOwnerName: null,
        CurrentOwnerPhoneNumber: null,
        CurrentStartDate: null,
        CurrentEndDate: null,
        CurrentReasonForMoving: null,
        PreviousStreet: null,
        PreviousCity: null,
        PreviousState: null,
        PreviousZip: null,
        PreviousOwnerName: null,
        PreviousOwnerPhoneNumber: null,
        PreviousStartDate: null,
        PreviousEndDate: null,
        PreviousReasonForMoving: null,
        CurrentEmployer: null,
        CurrentOccupation: null,
        CurrentEmploymentStartDate: null,
        CurrentEmploymentEndDate: null,
        CurrentNameSupervisor: null,
        CurrentMonthlySalary: null,
        PreviousEmployer: null,
        PreviousOccupation: null,
        PreviousEmploymentStartDate: null,
        PreviousEmploymentEndDate: null,
        PreviousNameSupervisor: null,
        PreviousMonthlySalary: null,
        DelinquentRent: null,
        Sued: null,
        Smoke: null,
        Pets: null,
        PetsBreed: null,
        PetsWeight: null,
        GeneralExplain: null,
        NegativeComments: null,
        WhyMove: null,
        Comments: null,
        ESignature: null,
        AgreedToTerms: null
      }
    }
  },
  methods: {
    fetch () {
      console.log(this.domain)
      this.getListings()
    },
    getListings () {
      console.log(this.domain)
      api.getListingsByDomain({ domain: this.domain })
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
    },
    saveApplicant () {
      api.createApplicant(this.applicantForm)
        .then(res => {
          this.$router.push({ path: '/apply' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>
