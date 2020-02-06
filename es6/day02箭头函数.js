/*es6中的箭头函数
    1.箭头函数只有一个参数()可以省略
    2.如果函数体没有括号，可以不写return，箭头函数会帮你return
    3.箭头函数只能用赋值式写法，不能用声明式写法
    4.如果函数体只有一句话，可以不加花括号
*/

const numbers = [1,2,3];
const numbers2 = numbers.map(number=>number*2);
    /*
        上面一句相当于
            const  numbers2  = numbers.map((number) => {return number*2}); 
    */
console.log(numbers2);
//箭头函数一般时匿名函数，如果想要命名函数就必须使用赋值的形式
const  mingfunction = number => number*2;
const numbers3 = numbers.map(mingfunction);
console.log("使用命名函数的箭头函数"+numbers3);


//箭头函数的this值
    const ming = {
        name: 'ming',
        hobbies: ['Coding','Sleeping','Play'],
        printHobbies: function(hobby){
            console.log(this);//ming
            this.hobbies.map(function(){
                //这是一个独立函数，this值向window或者global
                console.log("普通函数打印的this");
                console.log(this);//表示的时window或者时nodejs里面的global
            });
        },
        printHobbiesAllow: function(){
            console.log("箭头函数打印的this");
            this.hobbies.map(hobby=>{console.log(this)})
        } 
    }
    ming.printHobbies();
    ming.printHobbiesAllow();
//理解常规函数中的this
    /*
        1.普通函数里面的调用
            function test(){
                console.log(this)
            }
            test('ming'); //相当于test(undefined,'tom');默认this为window
            严格模式下为 undefined
        2.对象中函数的调用
            const obj = {
                name: 'Jerry',
                greet: function() {
                   console.log(this.name)
                }
            }
            obj.greet()  //第一种调用方法 this为obj
            obj.greet.call(obj1) //第二种调用方法 this为obj1
        3.使用call调用
                const obj = {
                    name: 'Jerry',
                    greet: function() {
                        console.log(this.name)
                    }
                }
    obj.greet.call({name: 'Spike'})  //使用call来改变this值,this为{name: 'Spike'}
        4.构造函数中的this,
            new对象的时候返回
        总结:
                函数完整的调用方法是使用call方法，
                包括test.call(context, name)和obj.greet.call(context,name)，
                这里的context就是函数调用时的上下文，
                也就是this，只不过这个this是可以通过call方法来修改的；
                构造函数稍微特殊一点，它的this直接指向new之后返回的对象；
                window.setTimeout()和window.setInterval()默认的是this是window对象
    
    箭头函数中的this
                 箭头函数的特性一：默认绑定外层this
                            const obj = {
	                            a: function() { console.log(this) }    
                            }
                            obj.a()  //打出的是obj对象
                        箭头函数:
                        const obj = {
                                a: () => {
                                    console.log(this);
                                }
                        }
                        obj.a()  //打出来的是window,与a同级别
                        const obj = {
                                a:function(){
                                     var a = () => {
                                        console.log(this);
                                    }
                                    a();
                                }
                        }
                        obj.a();
                        //因为箭头函数默认不会使用自己的this，而是会和外层的this保持一致，最外层的this就是window对象。
                    2.箭头函数的特性二：不能用call方法修改里面的this
                            const obj = {
                                a: () => {
                                    console.log(this);
                                }
                            }
obj.a.call('123')  //打出来的结果依然是window对象
        
                            const obj = {
                                a: function() {
                                    console.log(this)
                                    window.setTimeout(() => { 
                                        console.log(this) 
                                     }, 1000)
                                }
                            }
obj.a.call(obj)  //第一个this是obj对象，第二个this还是obj对象

                            const obj = {
                                a: function() { console.log(this) },
                                b: {
    	                            c: () => {console.log(this)}
	                            }
                            }
                            obj.a()   //没有使用箭头函数打出的是obj
                            obj.b.c()  //打出的是window对象！！
                            而obj.b.c调用后打出的是window对象而非obj，
                            这表示多层对象嵌套里箭头函数里this是和最最外层保持一致的
    */
