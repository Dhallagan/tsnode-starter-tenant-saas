<template>
<page>
<div class="text-center">
            <div class="form-signin">
                <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
                <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Register</h1>

                <label for="inputEmail" class="sr-only">Username</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Username" required autofocus v-model="registerForm.username">

                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="registerForm.email">

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="registerForm.password">

                <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
                <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Confirm Password" required v-model="registerForm.confirmPassword">

                <div class="checkbox mb-3">
                    Already have accoumt?<a href="http://localhost:8080/login"> Sign In.</a>
                </div>

                <button class="btn btn-lg btn-primary btn-block" type="submit" @click="register()">Register</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </div>
        </div>
</page>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      registerForm: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  methods: {
    register () {
      console.log(this.registerForm)
      axios.post('http://localhost:3000/api/register', {
        username: this.registerForm.username,
        email: this.registerForm.email,
        password: this.registerForm.password,
        confirmPassword: this.registerForm.password
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
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
