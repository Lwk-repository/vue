// 使用commonjs的模块化规范
/*const {add, mul} = require('./js/mathUtils.js');
console.log(add(11, 22));
console.log(mul(33, 44));*/

// 使用ES6的模块化规范
import {add,mul} from './js/mathUtils.js';
console.log(add(11, 22));
console.log(mul(33, 44));

// 依赖css文件
require('./css/nor.css')

// 依赖less文件
require('./css/special.less')