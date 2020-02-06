/*剩余参数
*/

function sum (...arrs) {
    //把参数转化为数组
    console.log(arrs);    
    return arrs.reduce((pre,arr) =>pre+arr,0);    
}

console.log(sum (1,2,3,4,5,6));

function disCount (count,...numbers){
    return numbers.map(number=>number*count);
}
console.log(disCount(0.5,2,3,4,5,6));

const player = ['ming',2011,90,80,70,60];
const [name,id,...scores] = player;
allScore = scores.reduce((pre,score) => score+pre,0);
console.log(allScore);