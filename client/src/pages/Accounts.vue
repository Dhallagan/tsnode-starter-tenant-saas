<template>
<page>

  <page-header
    title="Accounts"
    :breadcrumbs="pageheader.breadcrumbs"
  >

  </page-header>

  <willow-layout>
  <!-- CARD -->
    <willow-annotated-section
      title="Account Overview"
    >
       <b-card class="mb-2">
        <b-row>
          <b-col>
            <h6>Member Since</h6>
            <p class="card-text">
              April 24, 2018
            </p>
          </b-col>
          <b-col>
            <h6>Current Subscription</h6>
            <p class="card-text">
              Basic
            </p>
          </b-col>
        </b-row>
       </b-card>
    </willow-annotated-section>

    <willow-annotated-section
      title="Accounts And Permissions"
    >
       <b-card class="mb-2">
       <h6>Account Owner</h6>
        <willow-button plain>Dylan Hall</willow-button>
        <willow-button plain>Open Modal</willow-button>
       </b-card>
    </willow-annotated-section>

    <willow-annotated-section
      title=" "
      description=" "
    >
       <b-card class="mb-2">
       <h6>Staff Accounts</h6>
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
          <h6>Take a break</h6>
          <p class="card-text">
            Take a break from Kastlewise. Your settings will be saved until you’re ready to manage again.
          </p>
          <willow-button variant="default">Pause Subscription</willow-button>
        </b-col>
        <b-col>
          <h6>Close your account</h6>
          <p class="card-text">
            Turn off your online listing app and management software. They’ll be saved for 30 days if you change your mind.
          </p>
          <willow-button variant="default">Close Account</willow-button>
        </b-col>
       </b-row>
       </b-card>
    </willow-annotated-section>

  </willow-layout>

</page>
</template>

<script>
export default {
  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Settings',
            href: '/Settings'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
