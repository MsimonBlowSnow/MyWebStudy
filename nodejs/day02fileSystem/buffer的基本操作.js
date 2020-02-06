/*
    Buffer的基本操作处理二进制的
    Buffer本质上是字节数组
    1.实例化buffer(静态方法)
            Buffer.from(array,coding);  //创建一个buffer对象，数组或者字符串作为参数,coding为指定的编码格式
            Buffer.alloc(size); //创建一个固定大小的buffer
    2.功能方法(静态方法)
            Buffer.isEncoding();// 判断是否支持编码
            Buffer.isBuffer();  //判断是否为Buffer,参数为一个对象
            Buffer.byteLength() 返回指定编码的字节长度，默认是utf-8,参数为Buffer
            Buffer.concat(array) 将一组Buffer对象合并为一个Buffer对象,参数为Buffer的数组
    3.实例方法
        buf.write(string,offset,length,encoding);//向buffer当中写内容,后面三个是可以选择的
                     offset 从第几个索引开始写,length要写如的长度,encoding是编码返回的是一个整数(被写字节的长度)
        buf.slice(); //截取一个新的buffer对象
         buf.toString();//Buffer转化为字符串
*/
//实例化buffer
let buf;
/*
    //两个等价，不过推荐使用下面的，都是创建固定的buffer
    buf = new Buffer(5);//不推荐使用
    buf = Buffer.alloc(5);//推荐,实例化
*/

/* 使用字符串创建
    buf = new Buffer("hello");//不推荐使用
    buf = Buffer.from("hello");//推荐使用
*/

/*使用数组
*/
    buf = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);
console.log(buf);
console.log(buf.toString());//转化为字符串
//判断是否支持给编码
    console.log(Buffer.isEncoding("utf8"));//true
    console.log(Buffer.isEncoding("gbk"));//false
//判断是否是Buffer
console.log(Buffer.isBuffer(buf));//true
//测试指定编码的字符长度
let buf1 = Buffer.from("有病");//汉字不支持ascii
console.log(Buffer.byteLength(buf1));//6,默认utf8，3个字符表示一个字节
//拼接buffer
let buf2 = Buffer.alloc(1);
let buf3 = Buffer.alloc(3);
let buf4 = Buffer.concat([buf2,buf3]);
console.log(Buffer.byteLength(buf4));//4
//字符串buffer拼接
let buf5 = Buffer.from("I");
let buf6 = Buffer.from("you");
let buf7 = Buffer.concat([buf5,buf6]);
console.log(buf7.toString());
/* ============================================================= */
//
let buf8 = Buffer.alloc(5);
buf8.write("hi",2,2);
console.log(buf8);
console.log(buf8.toString())//00hi0 