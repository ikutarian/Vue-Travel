<template>
  <div id="app">
    <keep-alive><!-- 路由过的界面会换成到内存中，提高性能 -->
      <router-view/><!-- 显示当前路由所对应的组件，router/index.js 就是路由的配置 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
