<template>
  <div class="title">{{ message }}</div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return {
      message: '你的喜帖是我的请帖'
    }
  }
}
</script>

<style scoped>
  .title{
    color: darkkhaki;
  }
</style>