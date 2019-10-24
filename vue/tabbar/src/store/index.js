import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actived: 'cart'
  },
  mutations: {
    changeActived(state,val) {
      state.actived = val
    }
  },
  getters: {
    getActived(state) {
      return state.actived
    }
  },
  actions: {
  },
  modules: {
  }
})
