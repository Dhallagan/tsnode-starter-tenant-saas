<template>
<page>

  <page-header
    title="Add Account"
    :breadcrumbs="pageheader.breadcrumbs"
  >
  </page-header>

  <willow-layout>
  <!-- CARD -->

    <willow-annotated-section
      title="Invite"
      description="Give staff access to your store by sending them an invitation. "
    >
       <b-card class="mb-2">
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
              label="Last Name"
              label-for="inputHorizontal"
            >
              <b-form-input
                  type="text"
                  placeholder="Last">
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label for="inputLive">Email</label>
            <b-form-input
                  type="text"
                  placeholder="First">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col>
            <b-form-group label="Account Level">
              <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
                <b-form-radio value="first">Admin</b-form-radio>
                <b-form-radio value="second">User</b-form-radio>

              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
          <willow-button class="mt-4 " >Cancel</willow-button>
          <willow-button class="mt-4 float-right" primary>Send Invite</willow-button>
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
