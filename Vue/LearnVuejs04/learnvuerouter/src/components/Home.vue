<template>
  <div>
    <h2>我是home</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      message: '你好啊',
      path: '/home/news'
    }
  },
  created(){
    console.log('homecreated');
  },
  destroyed() {
    console.log('homedestroyed');
  },
  // 下面连个函数，只有被keep-alive标签包裹时才有效果
  activated() {// 活跃
    console.log('activated');
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next){// 离开改组件时调用
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>
