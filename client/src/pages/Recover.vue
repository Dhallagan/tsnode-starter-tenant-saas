<template>
<page>
    <div class="text-center">
      <div class="form-signin">
          <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
          <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="72">
          <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type" >{{message.msg}}</willow-messages>
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
import api from '@/api/api'
export default {
  data () {
    return {
      recoverForm: {
        email: '',
        password: ''
      },
      messages: {}
    }
  },

  methods: {
    recover () {
      const params = {
        email: this.recoverForm.email
      }
      api.recover(params)
        .then(res => {
          console.log(res)
          // REDIRECT TO PROMPT THAT AN EMAIL HAS BEEN SENT? ORRRRRRR DO I JUST FLASH A MESSAGE?
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
