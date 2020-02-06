var snakeGame = {
    low : 20,
    line : 20,
    snake : document.getElementsByClassName("snake"),
    main : document.getElementsByTagName("main")[0],
    lows : document.getElementsByClassName("row"),
    initMap : function (){
        for(var i = 0;i<this.line;i++){
            var divRow = document.createElement("div");
            divRow.className = "row";
            for(var i = 0;i<this.row; i++){
                var divRow = document.createElement("div");
                divRow.className = "alone";
                divRow.appendChild(divRow);
            }
            this.main.appendChild(divRow);
        }
    }
}
snakeGame.initMap();