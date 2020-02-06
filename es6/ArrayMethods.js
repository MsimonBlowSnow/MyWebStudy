/*es6中数组的新方法
        from()//将类数组字符串等等转化为数组
            第一个参数是一个类数组，第2个参数是一个函数类似于map
        of()弥补array的不足
            例如:
                new Array(7);// [undefined*7]
                new Array(1); //[undefined*1]
                new Array(1,2); //[1,2]
                使用Array.of();
                Array.of(7); //[7]
                Array.of(1); //[1]
            并不是原型上的方法,不能够这样使用
                const a = [1,2,3];
                a.from()//将类数组转化为数组方便使用
                a.of()错误
*/
var a = {
    0: "b",
    1: "a",
    length: 2,
}
//用from的一个参数 
const aArr =  Array.from(a);
console.log(aArr);
aArr.map(text=>console.log(text));
//用from的两个参数，先当于上面的
Array.from(a,text=>console.log(text));

//利用from转化argument
    function sum(){
        let countSum = 0;
        Array.from(arguments,count=>countSum+=count);
        return countSum;
    }
    console.log(sum(1,2,3,4,5,6));
//利用from转化字符串
const stringArr = "ming"
Array.from(stringArr,str=>console.log(str));