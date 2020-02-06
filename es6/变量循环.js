const fruits = ['Apple','Banana','Orange','Mango'];
/*
        变量的遍历
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/

//foreach循化
/* 改循化不能使用continue和break；不能中途终止，只能一个一个的遍历
fruits.forEach(fruit => {
    console.log(fruit)
});
*/

//forin循环
/*
    下面的变量i为变的下标
    会把原型里面的属性也会弄出来


for (let i in fruits) {
    object.hasOwnProperty(context)删除数组里面是否是原型对象
        fruits.hasOwnProperty(fruits[i]) 判断fruits[i]是否为自己的对象属性，如果是原型的就会排除
    context
    console.log(fruits.hasOwnProperty(fruits[i]));
}
*/
/*es6提供了新的遍历的方法
        forof 可以用于字符串，类数组对象，数组，nodelist，不支持对象
    数组里面默认有entries()方法
    entries里面有有一个next()方法可以遍历下面一个元属
使用next()得到下面的一个元属，以及数组元属里面的索引

for (const i of fruits) {
    console.log(i);//获取对应的数组元属
}

for (const i of fruits.entries()) {
    console.log(i); //获取对应的数组元属以及索引
}
*/