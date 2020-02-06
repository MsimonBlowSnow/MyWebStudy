var position = {
    //获取鼠标到文档顶点的距离(处理兼容)
    div : document.getElementsByTagName("div")[0], 
    getpageXY : function (){
        document.documentElement.onclick = function (e){
            var e = e || window.event;
            //e.pageX获取鼠标到文档距离 e.clientX鼠标到窗口顶点距离+ 滚动条距离
            e.pageX = e.pageX || (e.clientX + ((document.body.scrollLeft+document.documentElement.scrollLeft)||window.pageXOffset));
            e.pageY = e.pageY || (e.clientY +((document.body.scrollTop+document.documentElement.scrollTop) || window.pageYOffset));
            console.log("距离文档X:" + e.pageX +"距离文档Y:" + e.pageY );
        }
    },
    getDivPosition : function (){
        this.div.onclick = function (e) {
            e.pageX = e.pageX || (e.clientX + ((document.body.scrollLeft+document.documentElement.scrollLeft)||window.pageXOffset));
            e.pageY = e.pageY || (e.clientY +((document.body.scrollTop+document.documentElement.scrollTop) || window.pageYOffset));
            divX =  e.pageX- this.offsetLeft;
            divY = e.pageY - this.offsetTop;
            console.log("在div:("+divX+","+divY+")");
           // e.stopPropagation();
           e.cancelBubble = true; 
           return false;
        }
    }
}
position.getpageXY();
position.getDivPosition();