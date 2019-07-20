import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try { // 如果localStorage无法使用的话，需要捕获异常
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity (state, city) {
      // 改变state中的city的值
      state.city = city
      // 同时改变localStorage中的值
      try { // 如果localStorage无法使用的话，需要捕获异常
        localStorage.city = city
      } catch (e) {}
    }
  }
})
