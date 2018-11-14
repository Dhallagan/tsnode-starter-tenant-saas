<template>
<page>
<div class="text-center">
  <div class="form-signin">
    <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
    <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">

    <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type" >{{message.msg}}</willow-messages>

    <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <h2>Add an address for your company</h2>

      <p>This will be used as your default business address</p>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="registerForm.email">

    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="registerForm.password">

    <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
    <input type="password" id="inputConfirmPassword" class="form-control mb-3" placeholder="Confirm Password" required v-model="registerForm.confirmPassword">

    <label for="inputEmail" class="sr-only">Domain</label>
    <input type="text" id="inputText" class="form-control" placeholder="Domain" required autofocus v-model="registerForm.domain">

    <div class="checkbox mb-3">
        Already have account?<router-link to="/login"> Sign In.</router-link>
    </div>

    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="register()">Register</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
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
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>
