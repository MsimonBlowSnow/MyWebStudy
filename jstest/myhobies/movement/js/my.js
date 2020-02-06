var movement = {
    //平抛运动
    addSpeedY :10,
    horizProMotion : function (elem,speed){
        var speedY = 0;
        speedX =speed;
        var timer = setInterval(function (){
            console.log(elem);
            speedY += movement.addSpeedY;
            elem.style.top = parseInt(elem.style.top) + speedY +"px";
            elem.style.left = parseInt(elem.style.left) + speedX + "px"; 
            //var tds = document.getElementsByTagName("td");
            if(speedY == 100){
                clearInterval(timer);
            }
        },100);
    }
}
var div = document.getElementsByTagName("div")[0];
movement.horizProMotion(div,30);