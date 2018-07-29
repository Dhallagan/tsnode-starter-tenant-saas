import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/User'
import Applications from './modules/Applications'
import Buildings from './modules/Buildings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User: User,
    Applications: Applications,
    Buildings: Buildings
  }
})
