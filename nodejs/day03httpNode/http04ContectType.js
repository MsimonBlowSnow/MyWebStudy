var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function (req,res){
    var url = req.url;
    if(url == '/html'){
        fs.readFile('index.html',function(error,data){
            res.setHeader('Contect-Type','text/html;charset=utf-8');
            res.end(data);
        });
    }else if(url == '/jpg'){
        fs.readFile('3.jpg',function(error,data){
            //图片不用使用编码格式,jpg图片的Contect-Type为image/jpeg
            res.setHeader('Contect-Type','image/jpeg;');
            res.end(data);
        })
    }
})
server.listen(3000,function(){
    console.log('服务开启!')
})