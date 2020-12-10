// 输入webpack自动打包到指定路径 npm init, npm install
/*npm install webpack@3.6.0 --save-dev 局部webpack
* package.json中webpack命令映射到npm run build，优先运行本地webpack
* 否则运行全局webpack
* */
// 打包路径
const path = require('path');
// 添加版权使用到
const webpack = require('webpack');
// 打包时生成页面，npm i --save-dev xxx
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 版权
  plugins: [
    new webpack.BannerPlugin('最终版权归(^_^)所有'),
    // 指定dist打包的主页面的模板，在当前目录下的此文件
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  entry: './src/main.js', // 被打包文件位置
  output: {
    // 打包的位置，_dirname是全局变量，当前文件所在的文件夹，拼接../dist
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js', // 打包后的文件名
    // publicPath: 'dist/' // 涉及到url都会拼接这路径，比如图片
  },
  // loader处理正则匹配到的文件
  module: {
    rules: [
      {
        // 匹配.css结尾的文件
        test: /\.css$/,
        // css只负责将css文件进行加载
        // style负责将样式添加到DOM中
        // 使用多个loader时，是从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
              // 大于时，需要使用file-loader模块进行加载
              limit: 5000,
              // 指定打包后图片的名字
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        // 配置babel，将ES6转ES5
        //npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
        test: /\.js$/,
        // 排除指定包下文件，include：包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      }
    ]
  },
  resolve: {
    // 导入文件时，省略这些文件的后缀名
    extensions: ['.js', '.css', '.vue'],
    // alias: 别名
    alias:{
      // 指定vue路径
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}