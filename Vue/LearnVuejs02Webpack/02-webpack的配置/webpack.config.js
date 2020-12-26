// 输入webpack自动打包到指定路径
// npm init 生成package.json
/*npm install webpack@3.6.0 --save-dev 局部webpack，生成node文件夹
* package.json中webpack命令映射到npm run build，优先运行本地webpack
* 否则运行全局webpack
* */
const path = require('path');
module.exports = {
  // 被打包文件位置
  entry: './src/main.js',
  // 打包的位置
  output: {
    // _dirname是全局变量，当前文件的路径，后面拼接dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}