import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export default {
  register (params) {
    console.log(params)
    axios.post('/register', params)
      .then(function (response) {
        console.log(response)
        return response.body
      })
  },

  login (params) {
    console.log(params)
    axios.post('/login', params)
      .then(function (response) {
        console.log(response)
        return response.body
      })
  },

  recover (params) {
    console.log(params)
    axios.post('/recover', params)
      .then(function (response) {
        console.log(response)
        return response.body
      })
  },

  resetPassword (token, params) {
    axios.post('/reset/' + token, { params })
      .then(function (response) {
        console.log(response)
        return response.body
      })
      .catch(function (error) {
        console.log(error)
      })
  }

}
