/*
    标签模板字符串
        标签为一个函数如:
            下面的highline是一个函数，
                第一个参数为string为一个数组
                    如果开头或者结尾是变量，该数组里面就在前面/后面有一个空字符串，
                    如果该字符串不是变量开头或者结尾就没有空字符串
                后面的参数时模板字符串的变量，可以使用剩余参数
            
*/
function highline(strings,...values){
    /* 
        console.log('第一个参数为字符串数组:');
        console.log(strings);
        console.log('第二个参数为value为剩余参数');
        console.log(values); 
    */
   //使用map处理数组
    const highlighted = values.map(value=>`<h5>${value}</h5>`);
    /*//使用forEach遍历
    let str = '';
    strings.forEach((string,i) => str+=`${string}${highlighted[i]||''}`);*/

    /*
        使用reduce方法表达,
            第一个参数是一个函数:该函数函数的参数如下
                第一参数:   pre ,自己放入的变量和后面的返回值
                第二参数:   遍历的数组值
                第三参数:   遍历的数组变量的索引
            第二个参数:放入的变量
    */
   return strings.reduce((pre,curr,i) =>` ${pre}${curr}${highlighted[i]||''}`, '')
}
const user = 'Marry';
const topic = 'learn to use markdown'
const sentence = highline`${user} has commented on your topic ${topic}`;
console.log(sentence);

