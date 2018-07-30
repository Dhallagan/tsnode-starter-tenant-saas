<template>
<page>
    <div class="text-center">
      <div class="form-signin">
          <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
          <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
          <h1 class="h3 mb-3 font-weight-normal">Recover Password</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="recoverForm.email">

          <button class="btn btn-lg btn-primary btn-block" type="submit" @click="recover()">Recover Account</button>
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
      recoverForm: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    recover () {
      axios.post('http://localhost:3000/api/recover', {
        email: this.recoverForm.email
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
