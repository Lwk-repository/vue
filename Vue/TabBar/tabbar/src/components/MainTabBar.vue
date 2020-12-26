<template>
  <!--    插槽实现-->
  <tab-bar>
    <tab-bar-item path="/home" activeColor="cornflowerblue">
      <!--        具名插槽-->
      <img src="../assets/img/tabbar/home.svg" slot="item-icon">
      <img src="../assets/img/tabbar/home_active.svg" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="cornflowerblue">
      <img src="../assets/img/tabbar/category.svg" slot="item-icon">
      <img src="../assets/img/tabbar/category_active.svg" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="cornflowerblue">
      <img src="../assets/img/tabbar/shopcart.svg" slot="item-icon">
      <img src="../assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="cornflowerblue">
      <img src="../assets/img/tabbar/profile.svg" slot="item-icon">
      <img src="../assets/img/tabbar/profile_active.svg" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>

</style>
