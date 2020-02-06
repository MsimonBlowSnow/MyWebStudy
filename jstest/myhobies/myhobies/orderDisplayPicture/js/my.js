var picture = {
    imgs : document.getElementsByTagName('img'),
    lists : document.getElementById('list'), 
   /*  order : setInterval(function (){      
        var timer = setInterval(function(){
                if(parseInt(picture.lists.style.left) != -(picture.imgs.length-1)*300){
                    var offset = parseInt(picture.lists.style.left) -30;
                    picture.lists.style.left = offset+"px";   
                    //console.log(picture.lists.style.left);
                }
                if(parseInt(picture.lists.style.left) == -(picture.imgs.length-1)*300){
                    picture.lists.style.left = "0px";
                }
        },100);
        setInterval(function (){
            clearInterval(timer);
        },1050);
        
    },4000), */
    click : function (){
            var button = document.getElementsByClassName("button");
                button[0].onclick = function(){
                    var timer = setInterval(function(){
                        if(parseInt(picture.lists.style.left) == 0){
                            picture.lists.style.left = -(picture.imgs.length-1)*300 +"px";
                        }
                        if(parseInt(picture.lists.style.left) != 0){
                            var offset = parseInt(picture.lists.style.left) +30;
                            picture.lists.style.left = offset+"px";   
                        //console.log(picture.lists.style.left);
                        }
                    },100);
                    setInterval(function (){
                        clearInterval(timer);
                    },1050);
                }
            
            button[1].onclick = function () {
                var timer = setInterval(function(){
                    if(parseInt(picture.lists.style.left) != -(picture.imgs.length-1)*300){
                        var offset = parseInt(picture.lists.style.left) -30;
                        picture.lists.style.left = offset+"px";   
                        //console.log(picture.lists.style.left);
                    }
                    if(parseInt(picture.lists.style.left) == -(picture.imgs.length-1)*300){
                        picture.lists.style.left = "0px";
                    }
            },100);
            setInterval(function (){
                clearInterval(timer);
            },1050);    
            }
    }
}
 picture.click();