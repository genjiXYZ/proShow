import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    isRunning: false,
  },
  mutations: {
   
    throttle(state, payload) {
      if (!payload.flag) {
        console.log("运行了 ")
        state.isRunning = true;
        window.requestAnimationFrame(payload.fn);
      }
    },
  

  },
  actions: {},
  modules: {}
})