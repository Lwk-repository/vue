<template>
  <div id="app">
<!--    默认情况下渲染成a标签，如果想渲染其他标签加tag   -->
<!--    默认用pushstate跳转，加replace修改默认跳转方式-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
<!--    动态路由 传参1-->
<!--    <router-link :to="'/user/'+id" tag="button">用户</router-link>-->
<!--    传参2-->
<!--    <router-link :to="{path: '/profile', query:{name: 'aa', age: 12}}" tag="button">档案</router-link>-->

<!--    <button @click="home">首页</button>-->
<!--    <button @click="about">内容</button>-->

<!--    方法传参-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      id: 'lisi'
    }
  },
  methods: {
    home(){
      // 通过代码的方式修改路由，这个属性来自vue-router源码
      // push => pushState
      // this.$router.push('/home');
      // url无法返回
      this.$router.replace('/home');
    },
    about(){
      // 通过代码的方式修改路由，vue-router
      // this.$router.push('/about');
      this.$router.replace('/about');
    },
    userClick(){
      this.$router.push('/user/' + this.id);
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'aaa',
          age: 12
        }
      });
    },
  }
}
</script>

<style>
  .active{
    color: #f00;
  }
</style>
