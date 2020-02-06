/*
    node.js中没有DOM和BOM,浏览器中的js没有文件读写能力，但是node有
    node中引入了fs(fs是file-system)的简写，就是文件系统的意思
    在node里面要像进行文件的操作，就必须引入fs这个核心模块
    在fs这个核心模块中，就提供了所有的文件操作相关的api，
    例如： fs.readFile就是用来读取文件的
*/

//1.使用require方法加载fs核心模块
    var fs = require('fs')
    //2.读取文件

        /*error 
            如果读取失败,error 就是错误对象
            如果读取成功，error 就是null
            data
                如果读取失败，data就是一个错误对象
                如果读取成功，data 就是读取到的数据
        */
       //读文件
           fs.readFile('../day01/helloworld.js',function (error,data){
               if(error){
                   console.log("读取文件出错");
               }else
                    console.log(data.toString());
        });
        /*写文件三个参数
            1.第一个参数文件路径(如果没有会自动生成)
            2.第二参数:文件内容
            3.第三个参数:回调函数,只有一个参数error，成功，写入成功，失败error就是错误对象
            */   
        fs.writeFile('12.txt','hello nodejs',function(error){
            if(error){
                console.log('写入失败');
            }else{
                console.log('写入成功');
            }
        })