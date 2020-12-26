// 使用commonjs的模块化规范
/*const {add, mul} = require('./js/mathUtils.js');
console.log(add(11, 22));
console.log(mul(33, 44));*/

// 使用ES6的模块化规范依赖js文件
import {add,mul} from './js/mathUtils.js';
console.log(add(11, 22));
console.log(mul(33, 44));

// 依赖css文件
require('./css/nor.css');

// 依赖less文件
require('./css/special.less');

// 使用vue进行开发，先安装vue
import Vue from 'vue';

// 第一种写这里，页面导入js
new Vue({
  el: '#app',
  //会替换#app的标签
  template: `<App/>`,
  components: {
    App
  }
});

// 第二种写这里，js导入其他js
// import App from './vue/app.js'

// 第三种导入组件，webpack.config.js中配置loader
import App from './vue/App.vue';

// document.writeln('<button>按钮</button>');
