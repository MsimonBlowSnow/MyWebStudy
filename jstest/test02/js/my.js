var mydate = {
    date : new Date(),
    inputs : document.getElementsByTagName("input"),
    tds :document.getElementsByTagName("td"),
    btn : document.getElementsByTagName("button")[0],
    countDays : function (){
        var date = new Date();
        var nextMonth; 
        var Days = 0; 
        var obj;
        var years = this.inputs[0];
        var month = this.inputs[1];
        var days = this.inputs[2];
        if(years.value>0&&years.value<3000)
            date.setFullYear(parseInt(years.value) );
        else{
            alert("请输入0-3000");
        }
        if(month.value > 0 && month.value<12){
            date.setMonth(parseInt(month.value)-1);
            nextMonth = new Date(date);
            nextMonth.setMonth(parseInt(month.value));
        }else if(month.value == 12){
            date.setMonth(parseInt(month.value)-1)
            nextMonth = new Date(date);
            nextMonth.setFullYear(date.getFullYear-1);
            nextMonth.setMonth(0);
        }
        Days = parseInt((nextMonth - date)/1000/3600/24);
        date.setDate(1);
        var wDay = date.getDay();
        obj = {Days,wbDay};
        return obj; 
    },
    setDate : function (){
        this.btn.onclick = function (){
            var obj = mydate.countDays();
            var j = 0;
            for(var i = obj.wDay; i<obj.Days+obj.wDay; i++){
                    mydate.tds[i].innerText = ++j+"";
             }
        }
    },
    selectDate : function (){
        this.inputs[2].onblur =function (){
            for (var i = 0;i <mydate.tds.length;i++){
                if(mydate.tds[i].innerText != "" && parseInt(this.value) == parseInt(mydate.tds[i].innerText)){
                    mydate.tds[i].className = "select";
                }
            }
        } 
    }
}
    mydate.setDate();
    mydate.selectDate();