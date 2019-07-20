import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    changeCity (context, city) {
      // 去调用mutations中的方法
      context.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      // 改变state中的city的值
      state.city = city
    }
  }
})
