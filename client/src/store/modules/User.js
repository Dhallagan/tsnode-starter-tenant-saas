const User = {
  state: {
    token: null,
    user: null,
    claims: null
  },
  mutations: {
    setToken: function (state, token) {
      state.token = token
    },
    setUser: function (state, user) {
      state.user = user
    },
    setClaims: function (state, claims) {
      state.claims = claims
    }
  },
  getters: {
    getAuthToken: function (state) {
      return state.token
    },
    getUser: function (state) {
      return state.user
    },
    getUsername: function (state) {
      if (state.user) {
        return state.user.userName
      } else {
        return ''
      }
    },
    getName: function (state) {
      if (state.user) {
        return state.user.name
      } else {
        return ''
      }
    },
    getClaims: function (state) {
      return state.claims
    }
  },
  actions: {
    LOGIN_SUCCESS: function (context, data) {
      console.log('LOGIN_SUCCESS')
      context.commit('setToken', data.token)
      context.commit('setUser', data.user)
    },
    IDENTITY_LOGIN_SUCCESS: function (context, data) {
      console.log('LOGIN_SUCCESS')
      context.commit('setToken', data.token)
      context.commit('setUser', data.user)
      context.commit('setClaims', data.claims)
    },
    LOGOUT_SUCCESS: function (context, resetState) {
      console.log('LOGOUT_SUCCESS')
      context.commit('setToken', resetState.token)
      context.commit('setUser', resetState.user)
    }
  }
}

export { User as default }
