<template>
<page>
    <div class="text-center">
      <div class="form-signin">
          <willow-messages v-for="(message, i) in messages" :key="i" :type="message.type">{{message.msg}}</willow-messages>
      </div>
    </div>
</page>
</template>

<script>
import api from '@/api/api'
export default {
  mounted () {
    this.verify()
  },

  data () {
    return {
      messages: {}
    }
  },

  methods: {
    verify () {
      const params = { token: this.$route.params.token }
      console.log(params)
      api.verify(params)
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
          setTimeout(() => this.$router.push({ path: '/login' }), 5000)
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
