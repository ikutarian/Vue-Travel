<template>
  <div>
    <home-header></home-header> <!-- 使用组件 -->
  </div>
</template>

<script>
import HomeHeader from './components/Header' // 将Home作为组件容器，然后引入子组件

export default {
  name: 'Home', // 组件的名字
  components: { // 声明子组件
    HomeHeader
  }
}
</script>

<style>
</style>
