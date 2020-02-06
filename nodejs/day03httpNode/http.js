/*
    在node中创建了一个模块叫做http模块

*/
//1.加在http模块
var http = require('http')
//2.使用http.createServer()方法创建一个web服务器,返回一个Server实例
    var server = http.createServer();
    //注册request请求事件
    //当客户端请求过来，就会自动触发服务器的request，并执行第二个参数，回调处理
    server.on('request',function(){
        console.log('客户端的请求');
    });
    //绑定端口号
    server.listen(3000,function (){
        console.log('访问成功,等待客户端请求');
    });