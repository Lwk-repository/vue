/*
node构建一个web服务器
node专门提供了一个核心模块：HTTP：创建编写服务器
*/

// 1.加载HTTP核心模块
var http = require('http')

// 2.创建要给web服务器，返回一个server实例
var server = http.createServer()

// 3.提供对数据的服务 发请求->接受请求->处理请求->响应
// 注册request请求事件
// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个回调函数
server.on('request', function(){
  console.log('啊啊啊啊啊啊')
})

// 4.绑定端口号，启动服务器
server.listen(3000, function (){
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 访问')
})