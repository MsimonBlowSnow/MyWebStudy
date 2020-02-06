/* window.onload = function (){
          var mydiv = document.getElementById("mydiv");

        /* 自己练习的代码 ，鼠标移动的太快了 
       var mousmoveflag =function(e){
           var event = e || window.event;
           console.log(mydiv.style.marginLeft);
            mydiv.style.marginLeft = event.pageX-50+"px";
            mydiv.style.marginTop =  event.pageY-50+"px";
        };
        mydiv.addEventListener("mousedown",function(e){
            var event = e || windon.event;
            if(event.button == 0)       
                 this.addEventListener("mousemove",mousmoveflag,false)
        },false);
        mydiv.addEventListener("mouseup",function(e){    
            var event = e || windon.event;
            if(event.button == 0)       
                this.removeEventListener("mousemove",mousmoveflag,false);
        },false)
        */ /* 
        mydiv.onmousedown = function (e){
                var event = e || window.event;
                //获取鼠标距离mydiv的左顶点的距离。
                var dirx =  event.pageX - parseInt(mydiv.style.left);
                var diry = event.pageY - parseInt(mydiv.style.top)
                //用document防止鼠标移除mydiv
                document.onmousemove = function (e){
                        mydiv.style.left = e.pageX -dirx + "px";
                        mydiv.style.top = e.pageY - diry + "px";
                };
        } ;
        mydiv.onmouseup = function (){    
            document.onmousemove = null;
        }
} ////
            mydiv.onmousedown = function (e){
                    var event = e || window.event;
                    //获取鼠标距离mydiv的左顶点的距离。
                    var dirx =  event.pageX - parseInt(mydiv.style.left);
                    var diry = event.pageY - parseInt(mydiv.style.top)
                    //用document防止鼠标移除mydiv
                    document.onmousemove = function (e){
                            mydiv.style.left = e.pageX -dirx + "px";
                            mydiv.style.top = e.pageY - diry + "px";
                    };
            } ;
            mydiv.onmouseup = function (){    
                document.onmousemove = null;
            }
        }  */


window.onload = function (){
    var div = document.getElementById("mydiv");
    div.onmousedown = function (e) {
        var  divX = e.pageX - div.offsetLeft ;
        var divY =e.pageY -div.offsetTop;
        document.onmousemove = function (e){
            div.style.left =e.pageX -divX+ "px";
            div.style.top= e.pageY-divY +"px";
        }
        div.onmouseup = function (e){
            document.onmousemove = null;
        }
    }
}