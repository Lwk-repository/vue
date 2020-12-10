var http = require('http')

// 1.创建server
var server = http.createServer()

// 2.监听 request 请求事件，设置请求处理函数
server.on('request', function(req, res){
  console.log('收到请求了，请求路径是：' + req.url);
// end的同时发送响应数据
//   res.end('hello,word');

// 根据不同的请求路径发送不同的响应结果
// 1.获取请求路径：端口号之后的那部分路劲’
// 2.判断路径处理响应

  var url = req.url
})

server.listen(80, function (){
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 访问')
})