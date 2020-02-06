var http = require('http');
var server = http.createServer();

server.on('request',function (req,res){
    /*在http协议中，content-Type就是用来告知对方我给你发送的数据内容是什么类型*/
   
    //响应纯文本text/plain
            res.setHeader('Content-Type','text/plain;charset=utf-8');   //text/plain是普通文本
                res.end('hello 世界');

            //响应html(text/html)
            //若果发送的是html 也要设置content-Type为html
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end('<p style="color: red;">你有病</p>');
})
server.listen(3000,function(){
    console.log('服务开启!')
})