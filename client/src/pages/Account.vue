<template>
<page>

  <page-header
    title="Account"
    :breadcrumbs="pageheader.breadcrumbs"
  >

  </page-header>

  <willow-layout>
  <!-- CARD -->
    <willow-annotated-section
      title="Account Overview"
      description="Subscription settings and management."
    >
       <b-card class="mb-2">
        <b-row>
          <b-col>
            <h6 class="heading">Member Since</h6>
            <p class="card-text">
              {{registrationDate}}
            </p>
          </b-col>
          <b-col>
            <h6 class="heading">Current Subscription</h6>
            <p class="card-text">
              {{tenantStatus.subscription}}
            </p>
          </b-col>
          <b-col>
            <h6 class="heading">Account Status</h6>
            <p class="card-text">
              {{tenantStatus.status}}
            </p>
          </b-col>
        </b-row>
       </b-card>
    </willow-annotated-section>

    <willow-annotated-section
      title="Accounts And Permissions"
    >
       <b-card class="mb-2">
       <h6 class="heading">Account Owner</h6>
       <router-link to="/Settings/Accounts/Profile">
        <willow-button plain>{{this.$store.getters.getUser.FirstName}} {{this.$store.getters.getUser.LastName}}</willow-button>
       </router-link>
       </b-card>
    </willow-annotated-section>

    <willow-annotated-section
      title=" "
      description=" "
    >
       <b-card class="mb-2">
       <h6 class="heading">Staff Accounts</h6>
       <p class="card-text">
        Invite a staff member to join you.
       </p>
      <willow-button primary url="/Settings/Accounts/New">Add staff account</willow-button>
       </b-card>
    </willow-annotated-section>

    <willow-annotated-section
      title="Subscription Status"
      description="Manage your subscription."
    >
      <b-card class="mb-2">
      <b-row>
      <b-col>
        <h6 class="heading">Take a break</h6>
        <p class="card-text">
          Take a break from Kastlewise. Your settings will be saved until you’re ready to manage again.
        </p>
        <willow-button variant="default">Pause Subscription</willow-button>
      </b-col>
      <b-col>
        <h6 class="heading">Close your account</h6>
        <p class="card-text">
          Turn off your online listing app and management software. They’ll be saved for 30 days if you change your mind.
        </p>
        <willow-button variant="default">Close Account</willow-button>
      </b-col>
      </b-row>
      </b-card>
    </willow-annotated-section>

  </willow-layout>

  <page-actions>
    <template slot="action-right">
      <willow-button primary>Save</willow-button>
    </template>
  </page-actions>
<br/><br/>
</page>
</template>

<script>
import api from '@/api/api'
import {format} from 'date-fns'

export default {
  mounted () {
    return this.fetch()
  },
  computed: {
    registrationDate () {
      return format(this.$store.getters.getUser.DateCreated, 'MMMM D, YYYY')
    }
  },
  data () {
    return {
      format: format,
      pageheader: {
        breadcrumbs: [
          {
            text: 'Settings',
            href: '/Settings'
          }
        ]
      },
      tenantStatus: {
        status: '',
        subscription: ''
      }
    }
  },
  methods: {
    fetch () {
      api.getTenant()
        .then(res => {
          const tenant = res.data.Tenant
          this.tenantStatus.status = tenant.Active ? 'Active' : 'Disabled'
          this.tenantStatus.subscription = tenant.Plan.Name
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
