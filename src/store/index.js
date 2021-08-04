import { createStore } from 'vuex'

export default createStore({
  state: {
    visibleAside: false
  },
  mutations: {
    TOGGLE_ASIDE(state) {
      state.visibleAside = !state.visibleAside
    }
  },
  actions: {
    toggleAside: ({commit}) => {
      commit('TOGGLE_ASIDE')
    }
  },
  modules: {
  }
})
