<template>
<page>

  <page-header
    title=""
    :breadcrumbs="pageheader.breadcrumbs"
  >
  </page-header>

  <willow-layout>
  <!-- CARD -->
    <willow-annotated-section title="Profile">
       <b-card class="mb-2">
        <h6>Profile</h6>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive">First Name</label>
            <b-form-input
                  type="text"
                  placeholder="First">
            </b-form-input>
          </b-col>
          <b-col class="mb-4">
            <label for="inputLive">Last</label>
            <b-form-input
                  type="text"
                  placeholder="Last">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive">Email</label>
            <b-form-input
                  type="text"
                  placeholder="example@me.com">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive">Phone</label>
            <b-form-input
                  type="text"
                  placeholder="Phone">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive">Email</label>
            <b-form-input
                  type="text"
                  placeholder="First">
            </b-form-input>
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

</page>
</template>

<script>
export default {
  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Accounts',
            href: '/Settings/Accounts'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
