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
    return HTTP.get(`/tenants/${id}`)
  },

  updateTenant (id, params) {
    return HTTP.post(`/tenants/${id}`, params)
  },

  getTenants (params) {
    return HTTP.get('/tenants', params)
  },

  getTenantUsers (id) {
    return HTTP.get(`/tenants/${id}/users`)
  },

  getUserById (id) {
    return axios.get(`/users/${id}`)
  },

  getUserPlan (id) {
    return HTTP.get(`/users/${id}/plan`)
  },

  getUserByToken () {
    return HTTP.get('/users/token')
  },

  updateUserById (id, params) {
    return axios.post(`/users/${id}`, params)
  },

  getCompany () {
    return HTTP.get('/company')
  },

  saveCompany (params) {
    return HTTP.post('/company', params)
  },

  updateAvatar (id, params) {
    return axios.post(`/users/${id}/avatar`, params)
  },

  getPlans () {
    return HTTP.get('/plans')
  },

  sendInvite (params) {
    return HTTP.post('/invite', params)
  },

  createCustomer (params) {
    return HTTP.post('/plan', params)
  },

  updatePlan (params) {
    return HTTP.put('/plan', params)
  },

  getPropertyTypes () {
    return HTTP.get('/propertytypes')
  },

  createBuilding (params) {
    return HTTP.post('/properties', params)
  },

  getBuildings () {
    return HTTP.get('/properties')
  },

  getBuilding (id) {
    return HTTP.get(`/properties/${id}`)
  },
  getBuildingImages (id) {
    return HTTP.get(`/propertys/${id}/images`)
  },
  deleteBuilding (id) {
    return HTTP.delete(`/properties/${id}`)
  },

  updateBuilding (id, params) {
    return HTTP.put(`/properties/${id}`, params)
  },

  createBuildingUnit (propertyId, params) {
    return HTTP.post(`/properties/${propertyId}/units`, params)
  },

  getBuildingUnits (propertyId) {
    return HTTP.get(`/properties/${propertyId}/units`)
  },

  getBuildingUnit (propertyId, unitId, params) {
    return HTTP.get(`/properties/${propertyId}/units/${unitId}`)
  },

  updateBuildingUnit (propertyId, unitId, params) {
    return HTTP.put(`/properties/${propertyId}/units/${unitId}`, params)
  },
  deleteBuildingImage (buildingImageKey) {
    return HTTP.delete(`/propertys/images/${buildingImageKey}`)
  },

  uploadMultipleFiles (url, fromData) {
    return HTTP.post(url, fromData, {headers: {
      'Content-Type': 'multipart/form-data'
    }})
  },

  getUnitImages (unitId) {
    return HTTP.get(`/units/${unitId}/images`)
  },

  deleteUnitImage (unitImagekey) {
    return HTTP.delete(`/units/images/${unitImagekey}`)
  },

  deleteBuildingUnit (propertyId, unitId) {
    return HTTP.delete(`/properties/${propertyId}/units/${unitId}`)
  },

  getListing (id) {
    return HTTP.get(`/listings/${id}`)
  },

  getListingWithRelations (id) {
    return HTTP.get(`/listings/${id}/relations`)
  },

  getListedListings () {
    return HTTP.get('/listings/listed')
  },

  getUnlistedListings () {
    return HTTP.get('/listings/unlisted')
  },

  listListing (id) {
    return HTTP.put(`/listings/${id}`)
  },

  getPropertyFeatures () {
    return HTTP.get('/propertyfeatures')
  },

  getUnitFeatures () {
    return HTTP.get('/unitfeatures')
  },

  getApplicants () {
    return HTTP.get('/applicants')
  },
  getApplicantStatusTypes () {
    return HTTP.get('/application-status-types')
  },

  getApplicantById (id) {
    return HTTP.get(`/applicants/${id}`)
  },

  getApplicationStatusTypes () {
    return HTTP.get('/application-status-types')
  },

  updateApplicantStatus (id, params) {
    return HTTP.post(`/applicants/${id}/status`, params)
  },

  createLease (params) {
    return HTTP.post(`/create-lease`, params)
  }
}
