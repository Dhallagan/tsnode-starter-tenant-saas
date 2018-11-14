<template>
<page>
<div class="text-center mt-4">
  <div class="form-signin">
    <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
    <!-- <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72"> -->

    <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type" >{{message.msg}}</willow-messages>

       <b-card class="mb-2">
         <h2>Add an address for your company</h2>

    <p>This will be used as your default business address</p>
        <!-- <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">Legal Company Name</label>
            <b-form-input
                  v-model="generalForm.legalName"
                  type="text"
                  placeholder="Legal Company Name">
            </b-form-input>
          </b-col>
        </b-row> -->

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">First Name</label>
            <b-form-input
                  v-model="registerForm.firstName"
                  type="text"
                 >
            </b-form-input>
          </b-col>
        <!-- </b-row>
        <b-row> -->
          <b-col>
            <label for="inputLive" class="heading float-left">Last Name</label>
            <b-form-input
                  v-model="registerForm.lastName"
                  type="text"
                  >
            </b-form-input>
          </b-col>
        </b-row>

        <!-- <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.legalName"
              :label="'Legal Company Name'"
               v-model="generalForm.legalName"
              heading
            ></willow-textfield>
          </b-col>
        </b-row> -->

        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.address1"
              :label="'Address'"
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

        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="generalForm.phoneNumber"
              :label="'Phone'"
              v-model="generalForm.phoneNumber"
              heading
            ></willow-textfield>
          </b-col>
          <b-col>
          </b-col>
        </b-row>

        <hr>
         <!-- <willow-button class="float-left" link>Back</willow-button> -->
        <willow-button class="float-right" size="lg" primary @click.native="save()">Enter</willow-button>
       </b-card>

    </div>
  </div>
</page>
</template>

<script>
import api from '@/api/api'
export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      registerForm: {
        firstName: '',
        lastName: ''
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
          this.$router.push({ path: '/' })
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
    max-width: 870px;
    padding: 15px;
    margin: auto;
}
</style>
