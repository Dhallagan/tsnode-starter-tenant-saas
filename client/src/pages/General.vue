<template>
<page>

  <page-header
    title="General"
    :breadcrumbs="pageheader.breadcrumbs"
  >

  </page-header>

  <willow-layout>
  <!-- CARD -->
    <willow-annotated-section
      title="Company Details"
      description="Northwind and your customers will use this information to contact you."
    >
       <b-card class="mb-2">
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Company Name</label>
            <b-form-input
                  :value="generalForm.companyName"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Primary Account Email</label>
            <b-form-input
                  :value="generalForm.accountEmail"
                  type="text"
                  placeholder="Primary Email">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading">Company Email</label>
            <b-form-input
                  :value="generalForm.companyEmail"
                  type="text"
                  placeholder="Company Email">
            </b-form-input>
          </b-col>
        </b-row>
       </b-card>
    </willow-annotated-section>

    <willow-annotated-section
      title="Address"
      description="This address will appear on your invoices."
    >
       <b-card class="mb-2">
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Legal Company Name</label>
            <b-form-input
                  :value="generalForm.legalName"
                  type="text"
                  placeholder="Legal Company Name">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Phone</label>
            <b-form-input
                  :value="generalForm.phoneNumber"
                  type="text"
                  placeholder="Phone Number">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Street</label>
            <b-form-input
                  :value="generalForm.address1"
                  type="text"
                  placeholder="Street">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Apartment Suite</label>
            <b-form-input
                  :value="generalForm.address2"
                  type="text"
                  placeholder="Apt/Suite">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">City</label>
            <b-form-input
                  :value="generalForm.city"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading">Postal/ZIPcode</label>
            <b-form-input
                  :value="generalForm.zipcode"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">State</label>
            <b-form-input
                  :value="generalForm.state"
                  type="text"
                  placeholder="State">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading">Country</label>
            <b-form-input
                  :value="generalForm.country"
                  type="text"
                  placeholder="Country">
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
<br/><br/>

</page>
</template>

<script>
export default {
  computed: {
  },
  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Settings',
            href: '/Settings'
          }
        ]
      },
      generalForm: {
        companyName: '',
        accountEmail: '',
        companyEmail: '',
        legalName: '',
        phoneNumber: '',
        address1: '',
        address2: '',
        city: '',
        zipcode: '',
        state: '',
        country: ''
      }
    }
  }
}
</script>
