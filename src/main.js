// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index' // 引入vuex的配置
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入 VueAwesomeSwiper
import fastClick from 'fastClick' // 引入 fastClick
import 'styles/reset.css' // 引入 reset.css
import 'styles/border.css' // 引入 border.css
import 'styles/iconfont.css' // 引入 iconfont.css
import 'swiper/dist/css/swiper.css' // 引入 swiper.css

Vue.config.productionTip = false
fastClick.attach(document.body) // 使用 fastClick 库
Vue.use(VueAwesomeSwiper) // 使用 VueAwesomeSwiper 库

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由
  store, // vuex
  components: { App },
  template: '<App/>'
})
