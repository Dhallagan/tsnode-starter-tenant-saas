import Vue from 'vue'
import Vuex from 'vuex'
import Common from './modules/Common'
import User from './modules/User'
import Applications from './modules/Applications'
import Buildings from './modules/Buildings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Common: Common,
    User: User,
    Applications: Applications,
    Buildings: Buildings
  }
})
