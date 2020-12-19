<template>
  <div id="app">
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>
<!--引入css文件-->
<style>
@import './assets/css/base.css';
</style>
