import axios from 'axios'
import Store from '../store'

axios.defaults.baseURL = 'http://localhost:3000/api'

const HTTP = axios.create({
  baseURL: axios.defaults.baseURL,
  headers: {
    Authorization: `Bearer ${Store.getters.getAuthToken}`
  }
})

export default {
  register (params) {
    return axios.post('/register', params)
  },

  verify (params) {
    return axios.post('/verify', params)
  },

  login (params) {
    return axios.post('/login', params)
  },

  recover (params) {
    return axios.post('/recover', params)
  },

  resetPassword (token, params) {
    return axios.post('/reset/' + token, params)
  },

  updatePassword (params) {
    return axios.put('/password/update', params)
  },

  getUsers (params) {
    return axios.get('/users', params)
  },

  getUserById (id) {
    return axios.get('/users/' + id)
  },

  getUserByToken () {
    return HTTP.get('/users/token')
  },

  updateUserById (id, params) {
    return axios.post('/users/' + id, params)
  },

  getCompany () {
    return HTTP.get('/company')
  },

  saveCompany (params) {
    return HTTP.post('/company', params)
  },

  updateAvatar (id, params) {
    return axios.post('/users/' + id + '/avatar', params)
  }
}
