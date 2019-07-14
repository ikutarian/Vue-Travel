<template>
  <div>
    <home-header></home-header> <!-- 使用组件 -->
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // 将Home作为组件容器，然后引入子组件
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  name: 'Home', // 组件的名字
  components: { // 声明子组件
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
