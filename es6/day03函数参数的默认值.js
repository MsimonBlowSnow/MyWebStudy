/*
    函数参数的默认值
        以前:
            function(a,b){
                a = a || 5;
                b= b || 4;
            }
            es6
            function ming(a=5,b=4){
                //a默认为5，b默认为4
            }
            ming(undefined,2);//默认值要写undefined
*/