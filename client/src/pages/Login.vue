<template>
<page>
<div class="text-center">
            <div class="form-signin">
                <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
                <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="loginForm.email">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Password" required v-model="loginForm.password">
                <div class="checkbox mb-1">
                    <label>
                    <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>

                <div class="checkbox mb-3">
                    <a>Forgot Password?</a>
                </div>

                <button class="btn btn-lg btn-primary btn-block" @click="login()">Sign in</button>
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
      loginForm: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    login () {
      const params = {
        email: this.loginForm.email,
        password: this.loginForm.password
      }
      api.login(params)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
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
