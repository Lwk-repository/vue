<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>我是信息</h2>
    <h2>{{userid}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userid(){
      //哪个路由处于活跃$route就是谁，获取路由后面的参数
      return this.$route.params.id;
    }
  },
  beforeCreate() {
    console.log(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
