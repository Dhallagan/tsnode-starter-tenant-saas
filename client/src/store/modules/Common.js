import api from '@/api/api'

const Common = {
  state: {
    propertyTypes: null,
    propertyFeatures: null,
    unitFeatures: null,
    stateOptions: [
      { value: 'AL', text: 'Alabama' },
      { value: 'AK', text: 'Alaska' },
      { value: 'AZ', text: 'Arizona' },
      { value: 'AR', text: 'Arkansas' },
      { value: 'CA', text: 'California' },
      { value: 'CO', text: 'Colorado' },
      { value: 'CT', text: 'Connecticut' },
      { value: 'DE', text: 'Delaware' },
      { value: 'DC', text: 'District Of Columbia' },
      { value: 'FL', text: 'Florida' },
      { value: 'GA', text: 'Georgia' },
      { value: 'HI', text: 'Hawaii' },
      { value: 'ID', text: 'Idaho' },
      { value: 'IL', text: 'Illinois' },
      { value: 'IN', text: 'Indiana' },
      { value: 'IA', text: 'Iowa' },
      { value: 'KS', text: 'Kansas' },
      { value: 'KY', text: 'Kentucky' },
      { value: 'LA', text: 'Louisiana' },
      { value: 'ME', text: 'Maine' },
      { value: 'MD', text: 'Maryland' },
      { value: 'MA', text: 'Massachusetts' },
      { value: 'MI', text: 'Michigan' },
      { value: 'MN', text: 'Minnesota' },
      { value: 'MS', text: 'Mississippi' },
      { value: 'MO', text: 'Missouri' },
      { value: 'MT', text: 'Montana' },
      { value: 'NE', text: 'Nebraska' },
      { value: 'NV', text: 'Nevada' },
      { value: 'NH', text: 'New Hampshire' },
      { value: 'NJ', text: 'New Jersey' },
      { value: 'NM', text: 'New Mexico' },
      { value: 'NY', text: 'New York' },
      { value: 'NC', text: 'North Carolina' },
      { value: 'ND', text: 'North Dakota' },
      { value: 'OH', text: 'Ohio' },
      { value: 'OK', text: 'Oklahoma' },
      { value: 'OR', text: 'Oregon' },
      { value: 'PA', text: 'Pennsylvania' },
      { value: 'RI', text: 'Rhode Island' },
      { value: 'SC', text: 'South Carolina' },
      { value: 'SD', text: 'South Dakota' },
      { value: 'TN', text: 'Tennessee' },
      { value: 'TX', text: 'Texas' },
      { value: 'UT', text: 'Utah' },
      { value: 'VT', text: 'Vermont' },
      { value: 'VA', text: 'Virginia' },
      { value: 'WA', text: 'Washington' },
      { value: 'WV', text: 'West Virginia' },
      { value: 'WI', text: 'Wisconsin' },
      { value: 'WY', text: 'Wyoming' }
    ]
  },

  getters: {
    getStateOptions (state) {
      return state.stateOptions
    },
    getPropertyTypes (state) {
      return state.propertyTypes
    },
    getPropertyFeatures (state) {
      return state.propertyFeatures
    },
    getUnitFeatures (state) {
      return state.unitFeatures
    }
  },
  mutations: {
    setPropertyTypes (state, options) {
      state.propertyTypes = options
    },
    setPropertyFeatures (state, options) {
      state.propertyFeatures = options
    },
    setUnitFeatures (state, options) {
      state.unitFeatures = options
    }
  },
  actions: {
    LOAD_PROPERTY_TYPES: function (context) {
      api.getPropertyTypes()
        .then(res => {
          var propertyTypes = res.data.map(propertyType => {
            return {
              value: propertyType.Id,
              text: propertyType.Type
            }
          })
          console.log('LOAD_PROPERTY_TYPES_SUCCESS')
          context.commit('setPropertyTypes', propertyTypes)
        })
    },
    LOAD_PROPERTY_FEATURES: function (context) {
      api.getPropertyFeatures()
        .then(res => {
          var propertyFeatures = res.data.map(propertyFeatures => {
            return {
              value: propertyFeatures.Id,
              text: propertyFeatures.Name
            }
          })
          console.log('LOAD_PROPERTY_FEATURES_SUCCESS')
          context.commit('setPropertyFeatures', propertyFeatures)
        })
    },
    LOAD_UNIT_FEATURES: function (context) {
      api.getUnitFeatures()
        .then(res => {
          var unitFeatures = res.data.map(unitFeatures => {
            return {
              value: unitFeatures.Id,
              text: unitFeatures.Name
            }
          })
          console.log('LOAD_UNIT_FEATURES_SUCCESS')
          context.commit('setUnitFeatures', unitFeatures)
        })
    }
  }
}

export { Common as default }
