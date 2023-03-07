import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0
    },
    setValue(state, value) {
      state.count = value
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({ commit }) {
      commit('decrement')
    },
    reset({ commit }) {
      commit('reset')
    },
    setValue({ commit }, value) {
      commit('setValue', value)
    }
  },
  getters: {
    getCount: state => state.count
  }
})
