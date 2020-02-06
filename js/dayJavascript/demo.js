//如果用defer引入就会打印一个complete,因为defer执行在文档解析成功后
//即变interactive时
document.onreadystatechange = function (){
    console.log(document.readyState);
    console.log (1);
} 

window.onload = function (){
    console.log(document.readyState);
    document.onreadystatechange = function (){
        console.log(document.readyState+"1");
        console.log (1);
    }
}