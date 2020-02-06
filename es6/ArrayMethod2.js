var myarr = [
    {name: "ming"},
    {name: "simonBlowsnow"},
    {name: "wen"},
    {name: "qi"}
]
/*
    数组里面的新方法
    find(element,index,array);//返回元属
        element:当前的元属
        index: 当前的索引值
        array: 当前的数组
    */
    const ming = myarr.find(men=>men.name == 'ming')
    console.log(ming);
    /*   
    findIndex()//返回索引    
*/
    const mingIndex = myarr.findIndex(men=>men.name == 'ming');
    console.log(mingIndex);
/*
    some()//返回一个boolean值
        当数组里面有一个元属满足测试函数就会返回true,并停止执行
    every()// 返回一个boolean值
        当数组里面所有元属满足测试函数才会返回true,
        当遇到不满足条件时，返回false,并停止执行
*/
const mingsome = myarr.some(men=>men.name == 'ming');
console.log(mingsome);
const mingevery = myarr.every(men=>men.name == 'ming');
console.log(mingevery);