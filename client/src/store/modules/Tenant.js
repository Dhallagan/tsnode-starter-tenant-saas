const Tenant = {
  state: {
    subdomain: null
  },

  mutations: {
    setSubDomain: function (state, subdomain) {
      state.subdomain = subdomain
    }
  },

  getters: {
    setDomain: function (state) {
      return state.subdomain
    }
  },

  actions: {
    SET_SUBDOMAIN: function (context, subdomain) {
      // console.log(`SETTING SUBDOMAIN TO ${subdomain}`)
      context.commit('setDomain', subdomain)
    }
  }
}

export { Tenant as default }
