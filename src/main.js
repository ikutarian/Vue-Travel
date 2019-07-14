// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick' // 引入 fastClick
import 'styles/reset.css' // 引入 reset.css
import 'styles/border.css' // 引入 border.css
import 'styles/iconfont.css' // 引入 iconfont.css

Vue.config.productionTip = false
fastClick.attach(document.body) // 使用 fastClick 库

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
