//innerText和textContect
Element.prototype.innerText = function (){
    if(typeof this.innerText == "string"){
        return this.innerText
    }else{
        return this.textContent;
    }
}

//add事件兼容 elem 元素 type 冒泡行是捕获 handle 事件函数
function addHandle(elem,type,handle){
    if(elem.addEventListener){
            elem.addEventListener(type,handle,type);
    }else if(elem.attachEvent){
            elem.attachEvent('on'+type,function(){
                    handle.call(elem);
            })  
    }else{
            elem['on'+type] = handle;
    }   
}   
//移除事件兼容性  elem 元素节点 elemName 事件名称  handle 方法
function removeHandle  (elem,elemName,handle){
        
    if(elem.removeEventListener){
        elem.removeEventListener(elemName,handle);
    }else if(elem.detachEvent){
            elem.detachEvent(elemName,handle)
        }else{
            elem["on"+elemName] = null;
        }
}

//处理事件对象的兼容性
    e = e || window.e;

//封装ajax的js
function ajax(method,url,data,dataType,callback){
    var param = null;
    var xml = null;
    if(window.XMLHttpRequest)
        xml = new XMLHttpRequest();
    else
        xml = new ActiveXObject("Microsofe.XMLHTTP");
        if(method == "GET"||method =="get"){
            url += "?"+data;
        }
     else{
         xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
         param = data;
        }
        xml.open(method,url,true);
        xml.send(param);
        xml.onreadystatechange = function (){
             if(xml.readyState == 4 && xml.status == 200){
                    if(dataType == "json"){
                        var getData1 = xml.responseText;
                        var getData =JSON.parse(getData1);
                    }
                    callback(getData);
             }
         }
}

//自己封装的ajax方法，类似与jquery
function ajax(obj){
    var defaults = {
        type : 'get',
        success : function (data){console.dir(data)},
        url : '#',
        data: {},
        async : true,
        dataType: 'text'
    }
    for(var key in obj){
        defaults[key] = obj[key]; 
    }
    var xhr =null;
    if(window.XMLHttpRequest){
        xhr = new window.XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsofe.XMLHTTP');
    }
    //处理get或者是post参数
    var param = '';
    for (var key in defaults.data){
        param=param+key+'='+defaults.data[key]+'&'
    }
    if(param!='')
        param = param.substring(0, param.length-1);

    if(defaults.type == 'get'&&defaults.url.indexOf("?")==-1){
        defaults.url = defaults.url+"?"+param;
        param = null;
    }else if (defaults.type == 'get'){
        param =null;
    }

    xhr.open(defaults.type,defaults.url,defaults.async);
    xhr.send(encodeURI(param));
    xhr.onreadystatechange = function (){
        if(xhr.readyState == 4 &&xhr.status == 200){
            var data = xhr.responseText;
            defaults.success(data);
        }
    }
}