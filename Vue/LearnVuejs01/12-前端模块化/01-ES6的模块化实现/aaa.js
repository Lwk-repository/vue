// 导出
/*let flag = true;
function sum(num1, num2){
  return num1 + num2;
}
export function dis(num1, num2){
  return num1 - num2;
}
export {
  flag,sum
}*/

// 导入默认，自定义名字，不用大括号
import add from './bbb.js';
add.sum();