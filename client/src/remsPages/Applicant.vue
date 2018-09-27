<template>
<page>

  <page-header
    :title="'1'"
    :breadcrumbs="pageheader.breadcrumbs"
  >
  <template slot="action-left">
      <willow-button plain><icon name="print"></icon> Print Application</willow-button>
  </template>
  <template slot="action-right">

      <willow-button class="ml-1"><icon class="mr-1" name="thumbs-up"></icon>Approve</willow-button>
       <willow-button class="ml-1"><icon class="mr-1" name="arrow-right"></icon>In Review</willow-button>
       <willow-button class="ml-1"><icon class="mr-1" name="ban"></icon>Reject</willow-button>
        <willow-button primary class="ml-1">&nbsp;Move In</willow-button>
  </template>

  </page-header>

  <willow-layout>

    <!-- Primary -->
    <willow-layout-section primary >

       <b-card  card-title="Primary" class="mb-2">
       <h5>Application</h5>
          <!-- <pdf src="./app.pdf"></pdf> -->
           <b-img src="https://i.pinimg.com/originals/c2/af/cd/c2afcd380b722df047cb1cb7755e427b.jpg" fluid alt="Responsive image" />
       </b-card>

    </willow-layout-section>

        <!-- Secondary -->
    <willow-layout-section secondary>
    <b-card  card-title="Primary" class="mb-2">
       <h5>Summary</h5>
       <b-row>
        <b-col>
          <p><strong>Applied:</strong> 04/27/2018</p>
        </b-col>
        <b-col>
          <p><strong>Owner:</strong> <br>Apollo Group</p>
        </b-col>
       </b-row>
       </b-card>
       <b-card  card-title="Contact" class="mb-2" >
        <h6>Contact</h6>
        <b-row>
          <b-col cols="4">
            <willow-button plain class="mr-1"><icon name="home"></icon>&nbsp; (555) 555-5555</willow-button>
            <willow-button plain class="mr-1"><icon name="mobile-alt"></icon>&nbsp; (555) 555-5555</willow-button>
            <willow-button plain class="mr-1"><icon name="briefcase"></icon>&nbsp; (555) 555-5555</willow-button>
            <willow-button plain class="mr-1"><icon name="envelope"></icon>&nbsp; jcrothers@yahoo.com</willow-button>
          </b-col>
        </b-row>
       </b-card>

       <b-card class="mb-2">
       <b-form-group >
       <h6>Checklist</h6>
        <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="options">
       </b-form-checkbox-group>
      </b-form-group>
       </b-card>

      <b-card  card-title="Secondary-" class="mb-2" style="background-color: #f8f9fa ;">
        <b-form-group id="fieldsetHorizontal"
                  description="Property in review for"
                  label="Applied To"
                  label-for="inputHorizontal">
        <b-select :options="[{ value: null, text: 'All' },{ value: null, text: '150 Main Street' },{ value: '3 Industrial Road', text: '3 Industrial Road' }]"></b-select>
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
export default {
  mounted () {
    var application = this.$store.getters.getApplicationById(
      this.$route.params.applicant_id
    )
    console.log('Application:' + application)
    this.application = application
  },

  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Applicants',
            href: '/Applicants'
          }
        ]
      },
      application: {  },
      selected: [], // Must be an array reference!
      options: [
        { text: 'Credit Check', value: '1' },
        { text: 'Background Check', value: '2' },
        { text: 'Income Verification', value: '3' },
        { text: 'Landlord Verification', value: '4' }
      ]
    }
  }
}
</script>

<style>

</style>
