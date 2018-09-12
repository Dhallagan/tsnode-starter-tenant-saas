<template>
<page>
<div class="text-center">
  <div class="form-signin">
    <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
    <!-- <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72"> -->

    <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type" >{{message.msg}}</willow-messages>

       <b-card class="mb-2">
         <h2>Add an address for your company</h2>

    <p>This will be used as your default business address</p>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">Legal Company Name</label>
            <b-form-input
                  v-model="generalForm.legalName"
                  type="text"
                  placeholder="Legal Company Name">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">First Name</label>
            <b-form-input
                  v-model="registerForm.firstName"
                  type="text"
                  placeholder="Legal Company Name">
            </b-form-input>
          </b-col>
        <!-- </b-row>
        <b-row> -->
          <b-col>
            <label for="inputLive" class="heading float-left">Last Name</label>
            <b-form-input
                  v-model="registerForm.lastName"
                  type="text"
                  placeholder="Legal Company Name">
            </b-form-input>
          </b-col>
        </b-row>

        <!-- <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">Phone</label>
            <b-form-input
                  v-model="generalForm.phoneNumber"
                  type="text"
                  placeholder="Phone Number">
            </b-form-input>
          </b-col>
        </b-row> -->
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">Street</label>
            <b-form-input
                  v-model="generalForm.address1"
                  type="text"
                  placeholder="Street">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">Apartment Suite</label>
            <b-form-input
                  v-model="generalForm.address2"
                  type="text"
                  placeholder="Apt/Suite">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">City</label>
            <b-form-input
                  v-model="generalForm.city"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading float-left">Postal/ZIPcode</label>
            <b-form-input
                  v-model="generalForm.zipcode"
                  type="text"
                  placeholder="Company">
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mb-4">
          <b-col>
            <label for="inputLive" class="heading float-left">State</label>
            <b-form-input
                  v-model="generalForm.state"
                  type="text"
                  placeholder="State">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive" class="heading  float-left">Country</label>
            <b-form-input
                  v-model="generalForm.country"
                  type="text"
                  placeholder="Country">
            </b-form-input>
          </b-col>
        </b-row>

        <hr>
         <willow-button class="float-left" link>Back</willow-button>
        <willow-button class="float-right" primary>Create account</willow-button>
       </b-card>

    </div>
  </div>
</page>
</template>

<script>
import api from '@/api/api'
export default {
  data () {
    return {
      registerForm: {
        username: '',
        email: '',
        domain: '',
        password: '',
        confirmPassword: ''
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
    register () {
      const params = {
        firstName: this.registerForm.firstName,
        lastName: this.registerForm.lastName,
        email: this.registerForm.email,
        domain: this.registerForm.domain,
        password: this.registerForm.password,
        confirmPassword: this.registerForm.confirmPassword
      }
      api.register(params)
        .then(res => {
          var messages = [res.data]

          messages.forEach(message => {
            message.type = 'success'
          })

          this.messages = messages
          setTimeout(() => this.$router.push({ path: '/login' }), 5000)
        })
        .catch(error => {
          console.log(error)
          var messages = error.response.data.errors

          messages.forEach(message => {
            message.type = 'danger'
          })

          this.messages = messages
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
