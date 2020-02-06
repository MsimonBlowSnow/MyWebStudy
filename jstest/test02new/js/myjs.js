var date = {
    years : document.getElementById("year"),
    months :document.getElementById("month"),
    days : document.getElementById("day"),
    button : document.getElementsByTagName("button")[0],
    countDays : function (){
        var date = new Date();
        var nextMonth; 
        var Days = 0; 
        var years = this.years;
        var month = this.months;
        var days = this.days;
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
        return Days;
    },
    setDays : function (){
        this.button.onclick = function (){
                if(date.countDays()){
                    date.days.value = date.countDays(); 
                }
        }
    }
}

date.setDays();