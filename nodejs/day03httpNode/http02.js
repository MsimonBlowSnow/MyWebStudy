
//1.加在http模块
var http = require('http')
//2.使用http.createServer()方法创建一个web服务器,返回一个Server实例
    var server = http.createServer();
    //注册request请求事件
    //当客户端请求过来，就会自动触发服务器的request，并执行第二个参数，回调处理
    //回调函数有两个参数request和response两个参数
    server.on('request',function(request,response){
        console.log('客户端的请求+路径为'+request.url);
        //response中有write函数,返回客户端数据
        //response.write('hello nodejs');
        //一定要结束响应,
       // response.end();

        //上面两句等与一句 response.end("hello nodejs");
        var url = request.url;
        if(url ==='/'|| url ==='/index.html'){
           //只能返回二进制而字符串
           var user = {
               name : '张三',
               password: '123',
           }
           response.end(JSON.stringify(user));
        }else if (url === '/login'){
            response.end('login page');
        }else{
            response.end('404 not found');
        }
    });
    //绑定端口号
    server.listen(3000,function (){
        console.log('访问成功,等待客户端请求');
    });