import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home' // 引入组件，其中 @ 表示 src/ 文件夹。@ 这个符号是在 build/webpack.base.conf.js 中的 alias 定义的
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  // 路由的配置
  routes: [
    {
      // 访问根路径的时候，展示这个组件
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'Detail',
      component: Detail
    }
  ],
  // 当页面切换的时候，让页面始终回到最顶部
  // 文档在[Vue Router的滚动行为](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
