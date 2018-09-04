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
      description="TS Node Starter and your customers will use this information to contact you."
    >
       <b-card class="mb-2">
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Company Name</label>
            <b-form-input
                  v-model="generalForm.companyName"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Primary Account Email</label>
            <b-form-input
                  v-model="generalForm.accountEmail"
                  type="text"
                  placeholder="Primary Email">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading">Company Email</label>
            <b-form-input
                  v-model="generalForm.companyEmail"
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
                  v-model="generalForm.legalName"
                  type="text"
                  placeholder="Legal Company Name">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Phone</label>
            <b-form-input
                  v-model="generalForm.phoneNumber"
                  type="text"
                  placeholder="Phone Number">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Street</label>
            <b-form-input
                  v-model="generalForm.address1"
                  type="text"
                  placeholder="Street">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">Apartment Suite</label>
            <b-form-input
                  v-model="generalForm.address2"
                  type="text"
                  placeholder="Apt/Suite">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">City</label>
            <b-form-input
                  v-model="generalForm.city"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading">Postal/ZIPcode</label>
            <b-form-input
                  v-model="generalForm.zipcode"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading">State</label>
            <b-form-input
                  v-model="generalForm.state"
                  type="text"
                  placeholder="State">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading">Country</label>
            <b-form-input
                  v-model="generalForm.country"
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
      <willow-button primary @click.native="save()">Save</willow-button>
      <!-- <button @click="save()">Save</button> -->
    </template>
  </page-actions>

   <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type">{{message.msg}}</willow-messages>
<br/><br/>

</page>
</template>

<script>
import api from '@/api/api'
export default {
  mounted () {
    this.fetch()
  },
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
      },
      messages: {}
    }
  },
  methods: {
    fetch () {
      api.getCompany()
        .then(res => {
          const company = res.data.company
          if (res.data.company) {
            this.generalForm = {
              companyName: company.Name,
              accountEmail: company.AccountMail,
              companyEmail: company.CompanyEmail,
              legalName: company.LegalName,
              phoneNumber: company.Phone,
              address1: company.Street,
              address2: company.ApartmentSuite,
              city: company.City,
              zipcode: company.Zipcode,
              state: company.State,
              country: company.Country
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    save () {
      api.saveCompany(this.generalForm)
        .then(res => {
          var messages = [res.data]
          messages.forEach(message => {
            message.type = 'success'
          })
          this.messages = messages
          setTimeout(() => {
            this.messages = {}
          }, 3000)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
