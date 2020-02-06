/*对象结构的使用
        1.使用对象结构
        
        2.对象的属性可以嵌套
*/
//对象结构的使用
    const Tom = {
        name: 'Tom',
        age: '25',
        family: {
            mother: 'Norah',
            brother: 'Richard',
            father: 'Howard',
        }
    }
    //对象结构的使用
    
    /*
        const {name,age} = Tom;
        先当于
            const name = Tom.name;
            const age = Tom.age;  
            console.log(name);
            console.log(age);
            所以前面使用const去声明
    */

    /* 
    对象结构可以嵌套使用
    const father = 'dad';
    只有默认值是undefined才会使用默认值
    //声明f的变量为famliy中的father,mother默认是no mother
    const {mother = 'no mother',father: f,brother} = Tom.family;
        console.log(mother);
        console.log(f);
        console.log(brother); 
        */


/*数组的结构*/
    /*
        const mingarr = [1,2,3,4,5];
        const [a = 1,,c,...d] =mingarr;
        console.log(a);
        console.log(c);
        console.log(d); 
       注意: 1.默认值生效赋值必须为undefined,
                  2.剩余参数必须为最后的一个
    */
/*
    两个变量的交换
        以前时:
            let a = 1;
            let b =2;
            let tmp;
            tmp = a;
            b = a;
            b = tmp;
        使用数组结构:
            [a,b] = [b,a]
例如:
    let swapA = 1;
    let swapB = 2;
    [swapA,swapB] = [swapB,swapA];
    console.log(swapA);
    console.log(swapB);
*/