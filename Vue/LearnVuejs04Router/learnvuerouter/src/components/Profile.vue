<template>
  <div>
    <h2>我是profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  beforeCreate() {
    console.log(this.$route.query)
  },
  created(){
    console.log('procreated');
  },
  destroyed() {
    console.log('prodestroyed');
  },
}
</script>

<style scoped>

</style>
