/*
    es6中的字符串的新方法(大小写敏感)
        .startsWith(searchString, position);
            第一个参数是包括的字符串，包括就会返回true,否则就会返回false
            第二个参数是位置,即从第几个位置开始，默认是0
            如：
            const dirty = "dasfdadfadfadfmmpdafadfa";
            const flag= dirty.startsWith('mmp',14);
            console.log(flag);//true
            const flag1= dirty.startsWith('mmp',1);
            console.log(flag1);//false
        */


        /* 
        .endsWith(searchString, endPosition);
            第一个参数是包括的字符串，包括就返回true,否则，返回false
            第二个参数是位置，到第几个位置结束
        let ming = 'weimingwei1';
        const flag = ming.endsWith('wei1');
        console.log(flag);//true
        const flag1 = ming.endsWith('wei',3);
        console.log(flag1);//true
  */

/*        .includes(searchElement, fromIndex);
                第一个参数为查询的内容，第二个参数为开始的下标
            先当于 indexof('内容')!==-1;          
    let ming = 'kkllkkll';
    let flag = ming.includes('kk');//true
    let flag1 = ming.includes('ll',6);//true
    console.log(flag);
    console.log(flag1);
*/
/*
    .repeat(count); 
    重复出现n次
        "ming".repeat(2);//"mingming"
*/