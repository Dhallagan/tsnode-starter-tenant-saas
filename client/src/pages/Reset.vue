<template>
<page>
<div class="text-center">
    <div class="form-signin">

      <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
      <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">

      <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type">{{message.msg}}</willow-messages>

      <h1 class="h3 mb-3 font-weight-normal">Reset Password</h1>

      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Password" required v-model="resetForm.password">

      <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
      <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Confirm Password" required v-model="resetForm.confirmPassword">

      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="reset()">Reset Password</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
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
      resetForm: {
        token: '',
        password: '',
        confirmPassword: ''
      },
      messages: {}
    }
  },

  methods: {
    fetch () {
      this.resetForm.token = this.$route.params.token
    },

    reset () {
      const params = {
        password: this.resetForm.password,
        confirmPassword: this.resetForm.confirmPassword
      }
      console.log(params)
      api.resetPassword(this.resetForm.token, params)
        .then(res => {
          console.log(res)
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
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>
