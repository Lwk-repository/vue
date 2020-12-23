<template>
  <div class="tar-bar-item">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tar-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  vertical-align: middle;
}

.active {
  color: cornflowerblue;
}
</style>
