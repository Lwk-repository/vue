//生产环境 在package.json中指定webpack执行的文件位置
//压缩JS文件，丑化js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
// 配置文件合并使用
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
  plugins: [  // 各种插件
    new UglifyjsWebpackPlugin(),//开发阶段不需要丑化
  ]
});