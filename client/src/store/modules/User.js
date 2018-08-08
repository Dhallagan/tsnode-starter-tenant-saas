const User = {
  state: {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user'),
    claims: null
  },
  mutations: {
    setToken: function (state, token) {
      localStorage.setItem('token', JSON.stringify(token))
    },
    setUser: function (state, user) {
      localStorage.setItem('user', JSON.stringify(user))
    },
    setClaims: function (state, claims) {
      state.claims = claims
    }
  },
  getters: {
    getAuthToken: function (state) {
      return JSON.parse(state.token)
    },
    getUser: function (state) {
      return JSON.parse(state.user)
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
      console.log(data.token)
      context.commit('setToken', data.token)
      console.log(data.user)
      context.commit('setUser', data.user)
    },
    LOGOUT: function (context) {
      console.log('LOGOUT_SUCCESS')
      var resetState = {token: null, user: null}
      context.commit('setToken', resetState.token)
      context.commit('setUser', resetState.user)
    }
  }
}

export { User as default }
