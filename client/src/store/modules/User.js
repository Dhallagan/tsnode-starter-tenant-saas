import api from '@/api/api'

const User = {
  state: {
    token: localStorage.getItem('token') || '',
    user: null,
    claims: null
  },
  mutations: {
    setToken: function (state, token) {
      localStorage.setItem('token', JSON.stringify(token))
      state.token = JSON.stringify(token)
    },
    setUser: function (state, user) {
      state.user = user
    },
    setAvatar: function (state, avatar) {
      var user = state.user
      user.Avatar = avatar
    },
    setClaims: function (state, claims) {
      state.claims = claims
    }
  },
  getters: {
    getAuthToken: function (state) {
      return state.token ? JSON.parse(state.token) : null
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
      console.log(data.token)
      context.commit('setToken', data.token)
      console.log(data.user)
      context.commit('setUser', data.user)
    },
    LOGIN_FAILED: function (context) {
      console.log('LOGIN_FAILED')
      localStorage.removeItem('token')
      context.commit('setToken', null)
    },
    LOGOUT: function (context) {
      console.log('LOGOUT_SUCCESS')
      var resetState = {token: null, user: null}
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      context.commit('setToken', resetState.token)
      context.commit('setUser', resetState.user)
    },
    SET_AVATAR: function (context, avatar) {
      context.commit('setAvatar', avatar)
    },
    SET_USER: function (context) {
      return new Promise((resolve, reject) => {
        api.getUserByToken()
          .then(res => {
            context.commit('setUser', res.data)
            resolve(res)
          })
          .catch(err => {
            localStorage.removeItem('token')
            reject(err)
          })
      })
    }
  }
}

export { User as default }
