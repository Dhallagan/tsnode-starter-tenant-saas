import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export default {

  getListingsByDomain (params) {
    return axios.post(`/listings`, params)
  },

  createApplicant (params) {
    return axios.post(`/applicants`, params)
  },
  getListingDetails (id) {
    return axios.get(`/listing/${id}`)
  },
  getBuildingImages (id) {
    return axios.get(`/property/${id}/images`)
  },
  getUnitImages (unitId) {
    return axios.get(`/unit/${unitId}/images`)
  }

}
