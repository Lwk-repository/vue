// 浏览器中的js是没有文件操作能力的
// 但是node中的js是具有文件操作能力的

// fs是file-system的简写，就是文件系统的意思
// 在node中如果想要进行文件操作，就必须引入fs这个 核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// 例如：fs.readFile 就是用来读取文件的

// 1.使用require方法加载fs核心模块
var fs = require('fs');

// 写入文件
// 文件内容，路径，回调函数
//error：success->null   fail->错误对象
fs.writeFile('./data/hello.txt', '大家好，我是小莫！', function(error){
  if(error){
    console.log('写入失败');
  }else{
    console.log('写入成功');
  }
})


// 2.读取文件
//    第一个参数就是要读取的文件的路径
//    第二个参数是一个回调函数
//        success
//          data 数据
//          error null
//        data
//          data null
//          error 错误对象
fs.readFile('./data/hello.txt', function(error, data){
  // <Buffer e7 94 9f e5 91 bd e7 9a 84 e7 bb 93 e5 b0 be>
  // 文件中存储的其实都是二进制数据 转成的16进制数据
  console.log(data.toString())
})


