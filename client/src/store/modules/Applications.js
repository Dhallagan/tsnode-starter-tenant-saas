const Applications = {
  state: {
    applications: null
  },

  mutations: {
    setApplications: function (state, applications) {
      state.applications = applications
    }
  },

  getters: {
    getApplications: function (state) {
      return state.applications
    },
    getApplicationById: (state, getters) => id => {
      console.log(state.applications)
      console.log('S:getAppById' + id)

      return state.applications.find(
        application => application.id.toString() === id
      )
    }
  },

  actions: {
    LOAD_APPS: function (context, applications) {
      console.log('LOAD_APPS_SUCCESS')
      context.commit('setApplications', applications)
    }
  }
}

export { Applications as default }
