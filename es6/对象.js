/*
    es6中的对象属性
*/
const age = 5;
const name ="ming";
const sex = '男';
const ming = {
    name: name,
    age: age,
    sex: sex
}
console.log(ming);
//使用es6，当属性和键一样时，可以省略，方法名称的简写
const ming1 = {
    name,
    age,
    sex,
    //es6提供的方法的简写
    getName(){
        console.log(this.name);
    },
}
ming1.getName();
console.log(ming1);
//es6提供的属性计算
let id = 0;
    var users = {
        [`user-${++id}`]: id,
        [`user-${++id}`]: id,
        [`user-${++id}`]: id,
        [`user-${++id}`]: id,
    } 
    console.log(users);


    