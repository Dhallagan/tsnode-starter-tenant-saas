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
        <b-row class="mb-4">
          <b-col>
            <willow-textfield
              :value="userForm.firstName"
              :label="'First'"
              v-model="userForm.firstName"
              heading
            ></willow-textfield>
          </b-col>
          <b-col>
            <willow-textfield
              :value="userForm.lastName"
              :label="'Last'"
              v-model="userForm.lastName"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <willow-textfield
              :value="userForm.email"
              :label="'Email'"
              v-model="userForm.email"
              heading
            ></willow-textfield>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col>
            <b-form-group label="Account Level" class="heading">
              <b-form-radio-group id="radios2" v-model="userForm.role" name="radioSubComponent">
                <b-form-radio value="Admin">Admin</b-form-radio>
                <b-form-radio value="User">User</b-form-radio>

              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
          <willow-button class="mt-4">Cancel</willow-button>
          <willow-button class="mt-4 float-right" primary @click.native="sendInvite()">Send Invite</willow-button>
       </b-card>

    </willow-annotated-section>

  </willow-layout>

  <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type">{{message.msg}}</willow-messages>

</page>
</template>

<script>
import api from '@/api/api'

export default {
  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Accounts',
            href: '/Admin/Settings/Accounts'
          }
        ]
      },
      userForm: {
        firstName: '',
        lastName: '',
        email: '',
        role: 'User'
      },
      messages: {}
    }
  },
  methods: {
    sendInvite () {
      api.sendInvite(this.userForm)
        .then((res) => {
          console.log(res)
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

<style>

</style>
