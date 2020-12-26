import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// runtime-only(v2)(1.性能更高 2.下面的代码量更少)
// render -> vdom -> UI
// 比下面的方式轻6KB
new Vue({
  el: '#app',
  render: h => h(App)
})

// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
