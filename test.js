function a(){
    var arr=[];
    for (var  i = 0; i< 10; i++) {
        arr[i]=function(){
            document.write(i+"</br>");
        }   
    }
    return arr;
}
var myarr=a();
for (var  j = 0; j< 10; j++) {
        myarr[j]();
        console.log(myarr[j]);
}
