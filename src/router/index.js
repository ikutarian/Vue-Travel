import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home' // 引入组件，其中 @ 表示 src/ 文件夹

Vue.use(Router)

export default new Router({
  // 路由的配置
  routes: [
    {
      // 访问根路径的时候，展示这个组件
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
