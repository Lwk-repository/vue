var http = require('http')

var server = http.createServer()

/*
* request请求事件处理函数，需要接收两个参数
*     request 请求对象
*           请求对象可以用来获取客户端的一些请求信息，例如请求路径
*     response 响应对象
*           响应对象可以用来给客户端发送响应消息
* */
server.on('request', function(request, response){
  // 获取请求路径
  console.log('啊啊啊啊啊啊：' + request.url);
  // response 对象有一个方法：write可以用来给客户端发送响应
  // write 可以使用多次，但是最后一定要使用end结束响应，否则客户端会一致等待
  response.write('hello');
  response.write('nodejs');
  response.write('nodejs');
  // 告诉客户端，我的话说完了，你可以呈递给用户了
  response.end();

  // 请求不同路径的时候响应不同的结果
})

server.listen(3000, function (){
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 访问')
})