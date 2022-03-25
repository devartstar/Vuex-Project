import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 10,
    history: [0]
  },
  getters: {
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    },
    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter);
    }
  },
  actions: {
    addRandomNumber(context) {
      let payload = Math.floor(Math.random() * 10) + 1;
      console.log(payload)
      context.commit("addToCounter", payload);
    }
  },
  modules: {
  }
})
