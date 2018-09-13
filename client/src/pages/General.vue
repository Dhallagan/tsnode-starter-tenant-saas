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
            <willow-textfield
              :value="generalForm.companyName"
              :label="'Company Name'"
               v-model="generalForm.companyName"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.accountEmail"
              :label="'Primary Account Email'"
              :helpText="'We’ll use this address if we need to contact you about your account.'"
               v-model="generalForm.accountEmail"
              heading
            ></willow-textfield>
          </b-col>
          <b-col>
            <willow-textfield
              :value="generalForm.companyEmail"
              :label="'Company Email'"
               v-model="generalForm.companyEmail"
              :helpText="'Your customers will see this address if you email them'"
              heading
            ></willow-textfield>
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
            <willow-textfield
              :value="generalForm.legalName"
              :label="'Legal Company Name'"
               v-model="generalForm.legalName"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.phoneNumber"
              :label="'Phone'"
               v-model="generalForm.phoneNumber"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.address1"
              :label="'Street'"
               v-model="generalForm.address1"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.address2"
              :label="'Apartment, suite, etc. (optional)'"
              v-model="generalForm.address2"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.city"
              :label="'City'"
               v-model="generalForm.city"
              heading
            ></willow-textfield>
          </b-col>
          <b-col>
            <willow-textfield
              :value="generalForm.zipcode"
              :label="'Postal / ZIP code'"
               v-model="generalForm.zipcode"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <willow-select
              :value="generalForm.state"
              :options="stateOptions"
              :label="'State'"
              :placeholder="'State'"
               v-model="generalForm.state"
              heading
            ></willow-select>
          </b-col>
          <b-col>
          </b-col>
        </b-row>

       </b-card>
    </willow-annotated-section>

  </willow-layout>

  <page-actions>
    <template slot="action-right">
      <willow-button primary @click.native="save()">Save</willow-button>
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
      stateOptions: [
        { value: 'AL', text: 'Alabama' },
        { value: 'AK', text: 'Alaska' },
        { value: 'AZ', text: 'Arizona' },
        { value: 'AR', text: 'Arkansas' },
        { value: 'CA', text: 'California' },
        { value: 'CO', text: 'Colorado' },
        { value: 'CT', text: 'Connecticut' },
        { value: 'DE', text: 'Delaware' },
        { value: 'DC', text: 'District Of Columbia' },
        { value: 'FL', text: 'Florida' },
        { value: 'GA', text: 'Georgia' },
        { value: 'HI', text: 'Hawaii' },
        { value: 'ID', text: 'Idaho' },
        { value: 'IL', text: 'Illinois' },
        { value: 'IN', text: 'Indiana' },
        { value: 'IA', text: 'Iowa' },
        { value: 'KS', text: 'Kansas' },
        { value: 'KY', text: 'Kentucky' },
        { value: 'LA', text: 'Louisiana' },
        { value: 'ME', text: 'Maine' },
        { value: 'MD', text: 'Maryland' },
        { value: 'MA', text: 'Massachusetts' },
        { value: 'MI', text: 'Michigan' },
        { value: 'MN', text: 'Minnesota' },
        { value: 'MS', text: 'Mississippi' },
        { value: 'MO', text: 'Missouri' },
        { value: 'MT', text: 'Montana' },
        { value: 'NE', text: 'Nebraska' },
        { value: 'NV', text: 'Nevada' },
        { value: 'NH', text: 'New Hampshire' },
        { value: 'NJ', text: 'New Jersey' },
        { value: 'NM', text: 'New Mexico' },
        { value: 'NY', text: 'New York' },
        { value: 'NC', text: 'North Carolina' },
        { value: 'ND', text: 'North Dakota' },
        { value: 'OH', text: 'Ohio' },
        { value: 'OK', text: 'Oklahoma' },
        { value: 'OR', text: 'Oregon' },
        { value: 'PA', text: 'Pennsylvania' },
        { value: 'RI', text: 'Rhode Island' },
        { value: 'SC', text: 'South Carolina' },
        { value: 'SD', text: 'South Dakota' },
        { value: 'TN', text: 'Tennessee' },
        { value: 'TX', text: 'Texas' },
        { value: 'UT', text: 'Utah' },
        { value: 'VT', text: 'Vermont' },
        { value: 'VA', text: 'Virginia' },
        { value: 'WA', text: 'Washington' },
        { value: 'WV', text: 'West Virginia' },
        { value: 'WI', text: 'Wisconsin' },
        { value: 'WY', text: 'Wyoming' }
      ],
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
