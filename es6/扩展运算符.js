/*
扩展运算符号
*/
//使用concat整合数组
let members = ['ming','simonBlowSnow','qi','wen'];
let members2 = ['ming2','simonBlowSnow2','qi2','wen2'];
let  members3= members.concat(members2);
console.log(members3);
//如果要加上一个元属
let members4 =[];
members4 = members4.concat(members);
members4.push('ming1');
members4 = members4.concat(members2);
console.log(members4);
//使用扩展运算符(必须是可遍历对象)
const members5 = [...members,"ming1",...members2];
console.log(members5)
//使用扩展运算符来赋值(不会该变原来的数组值)
let member6 = members;//通过索引扩展，改变members6的同时也会改变members,member6和members为同一个对象
let member7 = members; //通过扩展运算符号来完成,members和members为两个不同的变量

//使用扩展运算符号来创建Date
const times = [2020,2,2];
const date = new Date(...times);
console.log(date);