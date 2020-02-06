var http = require('http');
var fs = require('fs');
var server = http.createServer();
http.on('request',function(req,res){
    /* var url = req.url;
    var path ="/home/ming/web/nodejs";
    var pathDir;
    if(url=='/'){
        url ='/index.html';
    } */
    console.log(fs.readdir())
});
server.listen(3000,function(){
    console.log('Server is Running');
})