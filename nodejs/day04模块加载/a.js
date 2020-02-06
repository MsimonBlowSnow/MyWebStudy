/*node中的js
    支持ecmascript,没有dom和bom,提供了很多核心模块
    
模块化开发：
    1.传统开发有下面的缺点
            1.命名冲突
            2.文件依赖
前端标准的模块化规范    
    1.AMD - requirejs
    2.CMD - seajs
服务器模块化开发
    1.CommonJS - Node.js


模块化的规则:
        1. 如何定义模块: 一个js文件就是一个模块，模块内部的成员都是相互独立的
        2.模块成员的引入和导出
模块化的倒入用require
倒出成员用module和exports
    使用exports导出对象:
            exports.object = object;
        exports倒入使用require
            var a = require("上面的文件");
                a.object(); 
    使用module导出
            module.exports.object = exports.object
        module导出
            var  a =  require("上面的一个文件")
                a();    //就是那个object

    核心模块:    
node为javascript提供了很多服务器级别的api,这些api绝大多数包装到了一个具名的核心模块中了
例如:文件读写模块fs,http服务构建的核心模块http模块，path路径操作模块，os操作系统信息模块。

核心模块必须使用夏下面的代码引用*/
// 例如:   var fs = require('fs');

 /*require是一个方法，他的作用是加载模块的
 在node中，模块有三种:
    //      居名的核心模块，例如 fs,http
    //       用户自己编写的模块
    //require 加载模块时，相对的路径必须加上./或者../
    //注意可以使用后缀名如 ./1.js ->./1，./不能省略，否则报错*/


/*在node中没有全局作用域，只有模块作用域，即变量只能在本文件生效
    总上所述，模块是封闭，那如何进行模块之间的访问呢?*/
            //require方法有两个左右
               // 1.加载 :加载并执行里面的代码
               // 2.导出:拿到被加载文件模块的接口对象exports对象7666
                                var a = require('./b') ;       //导出模块b中的exports对象
                                console.log(a.name);    
                //总结:
                    //使用exports来挂载要加载的数据,是调用他的模块来访问到里面的函数或者变量。

//注意：一个模块加载两次或则多次里面的代码只会执行一次

/*
    模块文件的后缀3种情况: .js  .json  .node
        其中.node结尾的一般是c/c++开发的模块，这是编译后的二进制文件
    如果不写后缀，就会按照他的顺序去找
            加载优先级别是js->json->node

*/