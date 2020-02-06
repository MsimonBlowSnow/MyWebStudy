/*nodejs中的Global对象(类是与js中的window对象)
        __filename包含文件名称的全部路径
        __dirname文件的路径不包含名称
        下面四个和js中的差不多
        setInterval()
        setTimeout()
        clearInterval()
        clearTimeout()
        console对象
    nodejs的global中的模块化对象有
        exports  使用exports来挂载要加载的数据,是调用他的模块来访问到里面的函数或者变量。
        require() //require方法有两个左右
               // 1.加载 :加载并执行里面的代码
               // 2.导出:拿到被加载文件模块的接口对象exports对象7666
        module
        nodejs中process对象
            process的argv是一个数组，
                    默认情况下
                    前面一项是nodejs安装环境的路径
                    第二个为当前执行的js文件的全路径
                    从第三项开始表示命令行参数
            process中的arch表示系统结构架构
*/
console.log(__filename);
console.log(__dirname);
global.console.log(1);
console.log(process.argv);