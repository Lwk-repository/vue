// 开发环境
// 配置文件合并使用
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = new webpackMerge(baseConfig, {
  // webpack-dev-server搭建本地服务器，需要安装，需要package.json配置
  devServer: {
    contentBase: './dist', // 服务哪个文件夹
    inline: true, // 是否实时监听
  }
});
