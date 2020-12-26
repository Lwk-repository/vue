<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn/>
  </div>
</template>

<script>
// 导入其他组件，webpack配置中可省略后缀
import Cpn from './Cpn';

// 第三次写这里
export default {
  name: "App",
  data() {
    return {
      message: 'hello world',
      name: 'world'
    }
  },
  methods: {
    btnClick() {
      console.log('aaaa');
    }
  },
  components: {
    Cpn,
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>