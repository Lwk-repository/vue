import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: function (h) {
    // 1.普通用法：自己写标签 h('标签', {标签的属性}, [''])
    // return h('h2', {class: 'box'}, ['hello world'])
    // 2.传组件对象
    return h(App);
  }
})
