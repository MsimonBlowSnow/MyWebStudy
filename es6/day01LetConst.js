/*var 和let,const的区别
        1.var是函数作用域，而let和const声明的变量是块级作用域
                {
                    var a = 1;
                    let b = 2;
                    const c=3;
                }
                console.log(a); //1 函数作用域
                console.log(b); //报错 块级作用域
                console.log(c);//报错   块级作用域
        2.var声明的变量可以重复声明(会覆盖前面的变量)，而const和let声明的变量不能够重复声明
                var a = 1;
                var a = 2;  //不会报错，可以重复声明，不过会覆盖
                let/const c = 1;
                let/const c = 1;//报错，let/const声明的变量不能够重复声明
        let和const不同之处
                let声明的变量可以重复赋值，而const声明的是常量，即不能够重复赋值
                不过用const声明对象可以对象的属性值可以改变
                    例如:
                        const p1 = {a: 1,b:2};
                            p1.a = 3;
                            console.log(p1.a); //3
                            并且这个p1和上面的p1值向的对象不同
                                使用Object.freeze(person);对象的属性值就不可以改变了
                                const p1 = {a: 1,b:2};
                                Object.freeze(p1);
                                p1.a = 3;
*/
//使用let和const来代替es5中使用匿名函数来防止污染
    //例1            
/*    (function(){
                    var  i =1;
                    console.log(i); 
                });
                console.log(i); //1
                {
                    let a = 1;
                    console.log(a);
                }
                console.log(a); //报错
*/


    //例2
                (function(){
                    //var是一个函数作用域
                    for(var i = 0;i<10;i++){
                        console.log(i)//0-9
                        setTimeout(function(){
                            console.log(i);//10个10
                        },1000)
                    }
                })();
                //使用let
                
                    (function(){
                    //let是块级作用域
                        for(let a = 0;a<10;a++){
                            console.log(a);//0-9
                            setTimeout(function(){
                                console.log(a);//0-9;
                            },1000)
                        }
                    })();
//let和const的临时死区
                    console.log(color); //undefined,var存在变量提升
                    var color = 'yellow';
                //let和const的临时死区
                        console.log(colorlet);
                        let  colcrlet = 'yellow';
/*let和const和var的选择
                    默认使用const
                    必要时使用let
                    尽量不使用var
*/