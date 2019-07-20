import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  mutations: {
    changeCity (state, city) {
      // 改变state中的city的值
      state.city = city
    }
  }
})
