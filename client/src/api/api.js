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

  getTenant () {
    return HTTP.get('/tenant')
  },

  getTenantById (id) {
    return HTTP.get('/tenants/' + id)
  },

  updateTenant (id, params) {
    return HTTP.post('/tenants/' + id, params)
  },

  getTenants (params) {
    return HTTP.get('/tenants', params)
  },

  getTenantUsers (id) {
    return HTTP.get('/tenants/' + id + '/users')
  },

  getUserById (id) {
    return axios.get('/users/' + id)
  },

  getUserPlan (id) {
    return HTTP.get('/users/' + id + '/plan')
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
  },

  getPlans () {
    return HTTP.get('/plans')
  },

  sendInvite (params) {
    return HTTP.post('/invite', params)
  },

  createCustomer (params) {
    return HTTP.post('/customer', params)
  },

  updatePlan (params) {
    return HTTP.post('/plan', params)
  }
}
