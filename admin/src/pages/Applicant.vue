<template>
<page>

  <page-header
    :title="`${application.FirstName} ${application.LastName}`"
    :breadcrumbs="pageheader.breadcrumbs"
  >
    <template slot="action-left">
        <willow-button plain><icon name="print"></icon> Print Application</willow-button>
    </template>

    <template slot="action-right">
        <willow-button class="ml-1" :primary="application.status =='Approved'?true:false"  @click.native="changeApplicantStatus('Approved')"><icon class="mr-1" name="thumbs-up" ></icon>Approve</willow-button>
        <willow-button class="ml-1" :primary="application.status =='Pending'?true:false"  @click.native="changeApplicantStatus('Pending')" ><icon class="mr-1" name="arrow-right"></icon>In Review</willow-button>
        <willow-button class="ml-1" :primary="application.status =='Rejected'?true:false"  @click.native="changeApplicantStatus('Rejected')"><icon class="mr-1" name="ban"></icon>Reject</willow-button>
    </template>

  </page-header>

  <willow-layout>

    <!-- Primary -->
    <willow-layout-section primary >

       <b-card  card-title="Primary" class="mb-2">
       <!-- <h5>Application: {{application.FirstName}} {{application.LastName}}</h5> -->
          <!-- <pdf src="./app.pdf"></pdf> -->
           <!-- <b-img src="https://i.pinimg.com/originals/c2/af/cd/c2afcd380b722df047cb1cb7755e427b.jpg" fluid alt="Responsive image" /> -->
           <h3>Application Information</h3>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Email'"
          v-model="application.Email"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'First Name'"
          v-model="application.FirstName"
          heading
        disabled></willow-textfield>
      </b-col>
      <b-col :cols="12">
        <willow-textfield
          :label="'Last'"
          v-model="application.LastName"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Birth date'"
          v-model="application.Birthdate"
          heading
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'SSN'"
          v-model="application.Ssn"
          heading
        disabled></willow-textfield>
      </b-col>

    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Phone'"
          v-model="application.Phone"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>
<br>
    <h3>Rental History</h3>

  <h5>Current Residence</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Current Street'"
          v-model="application.CurrentStreet"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'City'"
          v-model="application.CurrentCity"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'State'"
          v-model="application.CurrentState"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Zip'"
          v-model="application.CurrentZip"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Name'"
          v-model="application.CurrentOwnerName"
          heading
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Phone'"
          v-model="application.CurrentOwnerPhoneNumber"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Date From'"
          v-model="application.CurrentStartDate"
          heading
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'To'"
          v-model="application.CurrentEndDate"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Reason for moving'"
          v-model="application.CurrentReasonForMoving"
          heading
        disabled></willow-textfield>
      </b-col>

    </b-row>

  <h5>Prior</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Prior Street'"
          v-model="application.PreviousStreet"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'City'"
          v-model="application.PreviousCity"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'State'"
          v-model="application.PreviousState"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Zip'"
          v-model="application.PreviousZip"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Name'"
          v-model="application.PreviousOwnerName"
          heading
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Owner Phone'"
          v-model="application.PreviousOwnerPhoneNumber"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Date From'"
          v-model="application.PreviousStartDate"
          heading
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'To'"
          v-model="application.PreviousEndDate"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>
    <br>
    <h3>Employment</h3>

  <h5>Current employment</h5>
    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Current Employer'"
          v-model="application.CurrentEmployer"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Occupation'"
          v-model="application.CurrentOccupation"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Supervisor Name'"
          v-model="application.CurrentNameSupervisor"
          heading
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Supervisor Phone'"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'Date From'"
          v-model="application.CurrentEmploymentStartDate"
          heading
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'To'"
          v-model="application.CurrentEmploymentEndDate"
          heading
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'MonthlySalary'"
          v-model="application.CurrentMonthlySalary"
          heading
        disabled></willow-textfield>
      </b-col>

    </b-row>

    <h3>General</h3>

    <b-form-group  >
      <p>Do you smoke? </p>
    <b-form-radio-group name="smoke" v-model="application.Smoke" >
      <b-form-radio name="smoke"  :value="true"  >Yes</b-form-radio>
      <b-form-radio name="smoke"    :value="false"  >No</b-form-radio>
    </b-form-radio-group>
    </b-form-group>

    <b-form-group>
      <p>Do you have pets?</p>
      <b-form-radio-group name="pets" v-model="application.Pets" >
      <b-form-radio :value="true" >Yes</b-form-radio>
      <b-form-radio :value="false" >No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-row class="mb-2">
      <b-col :cols="12">
        <willow-textfield
          :label="'If you have a pet what breed?'"
          v-model="application.PetsBreed"
        disabled></willow-textfield>
      </b-col>

      <b-col :cols="12">
        <willow-textfield
          :label="'Weight'"
          v-model="application.PetsWeight"
        disabled></willow-textfield>
      </b-col>

    </b-row>

    <b-form-group>
      <p>Have you ever been late on rent?</p>
      <b-form-radio-group name="DelinquentRent" v-model="application.DelinquentRent" >
      <b-form-radio :value="true" >Yes</b-form-radio>
      <b-form-radio :value="false" >No</b-form-radio>
      </b-form-radio-group>

    </b-form-group>

    <b-form-group>
      <p>Have you ever been party to a lawsuit? </p>
       <b-form-radio-group name="Sued" v-model="application.Sued" >
      <b-form-radio :value="true" >Yes</b-form-radio>
      <b-form-radio :value="false" >No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'If yes to any of the above, explain.'"
          v-model="application.GeneralExplain"
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-row class="mb-2">
      <b-col :cols="24">
        <willow-textfield
          :label="'Is there anything negative in your credit or background check you want to comment on? '"
          v-model="application.NegativeComments"
        disabled></willow-textfield>
      </b-col>
    </b-row>

    <b-form-group>
      <p><strong>I have read, understand, and agreed to the terms and conditions</strong></p>
       <b-form-radio-group name="AgreedToTerms" v-model="application.AgreedToTerms" >
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
          v-model="application.ESignature"
          heading
        disabled></willow-textfield>
      </b-col>

    </b-row>
       </b-card>

    </willow-layout-section>

        <!-- Secondary -->
    <willow-layout-section secondary>
    <b-card  card-title="Primary" class="mb-2">
       <h5>Summary</h5>
       <b-row>
        <b-col>
          <p><strong>Applied:</strong> {{MMDDYYYY(application.CreatedAt)}}</p>
        </b-col>
        <b-col>
          <p><strong>Owner:</strong> <br>{{application.Owner}}//TODO</p>
        </b-col>
       </b-row>
       </b-card>
       <b-card  card-title="Contact" class="mb-2" >
        <h6>Contact</h6>
        <b-row>
          <b-col cols="4">
            <willow-button plain class="mr-1"><icon name="mobile-alt" class="mr-1"></icon> {{application.Phone}}</willow-button>
            <willow-button plain class="mr-1"><icon name="envelope" class="mr-1"></icon>{{application.Email}}</willow-button>
          </b-col>
        </b-row>
       </b-card>

       <b-card class="mb-2">
       <b-form-group >
       <h6>Checklist</h6>
        <b-form-checkbox-group stacked v-model="selected" :options="options">
       </b-form-checkbox-group>
      </b-form-group>
       </b-card>

      <b-card  card-title="Secondary-" class="mb-2" style="background-color: #f8f9fa ;">
        <b-form-group id="fieldsetHorizontal"
                  description="Property in review for"
                  label="Applied To"
                  label-for="inputHorizontal">
        <b-select
          :value="application.ListingApplyTo"
          :options="listings"
        ></b-select>
       </b-form-group>
       </b-card>

    </willow-layout-section>

  </willow-layout>

  <!-- <page-actions>

      <template slot="action-left">
      <willow-button variant="danger">Delete this buildings</willow-button>
    </template>
    <template slot="action-right">
      <willow-button primary>Save</willow-button>
    </template>
  </page-actions>-->

</page>
</template>

<script>
import axios from 'axios'
import api from '@/api/api'
import {Helpers} from '@/mixins'
export default {
  mounted () {
    this.fetch()
  },

  mixins: [
    Helpers
  ],

  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Applicants',
            href: '/Admin/Applicants'
          }
        ]
      },
      application: { },
      applicationsStatus: [],
      listings: [],
      selected: [], // Must be an array reference!
      options: [
        { text: 'Credit Check', value: '1' },
        { text: 'Background Check', value: '2' },
        { text: 'Income Verification', value: '3' },
        { text: 'Landlord Verification', value: '4' }
      ]
    }
  },

  methods: {
    fetch () {
      axios.all([
        api.getApplicationStatusTypes(),
        api.getListedListings(),
        api.getApplicantById(this.$route.params.applicant_id)
      ]).then(res => {
        res[0].data.map((obj) => {
          let applicants = obj.Applicants.map((el) => {
            return el.Id
          })
          this.applicationsStatus[obj.Name] = applicants
        })

        this.listings = res[1].data
        this.application = res[2].data
        this.application.status = this.applicationsStatus['None'].includes(this.application.Id) ? 'None' : (this.applicationsStatus['Approved'].includes(this.application.Id) ? 'Approved' : (this.applicationsStatus['Pending'].includes(this.application.Id) ? 'Pending' : 'Rejected'))

        console.log('asada', this.application)
      })
    },
    changeApplicantStatus (data) {
      api.updateApplicantStatus(this.$route.params.applicant_id, {status: data}).then(res => {
        this.application.status = data
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style>

</style>
