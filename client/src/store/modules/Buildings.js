const Buildings = {
  state: {
    buildings: null
  },

  mutations: {
    setBuildings: function (state, buildings) {
      state.buildings = buildings
    }
  },

  getters: {
    getBuildings: function (state) {
      return state.buildings
    },
    getBuildingById: (state, getters) => id => {
      return state.buildings.find(building => building.id.toString() === id)
    }
  },

  actions: {
    LOAD_BUILDINGS: function (context, buildings) {
      console.log('LOAD_BUILDNGS_SUCCESS')
      context.commit('setBuildings', buildings)
    }
  }
}

export { Buildings as default }
