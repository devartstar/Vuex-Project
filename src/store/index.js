import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 10,
  },
  getters: {
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
    },
    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
