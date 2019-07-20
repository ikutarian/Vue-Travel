import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京'
  },
  mutations: {
    changeCity (state, city) {
      // 改变state中的city的值
      state.city = city
      // 同时改变localStorage中的值
      localStorage.city = city
    }
  }
})
