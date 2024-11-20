function digital(){
    var date= new Date();
    var hh=date.getHours();
    var am_pm="AM"
    if(hh>12){
        am_pm="PM"
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var dd=date.getDate();
    var mm=date.getMonth();
    var yy=date.getFullYear();
    var mo=["Jan","Feb","Mar","Apr",'May',"Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    mm=mo[mm];
    var day=date.getDay();
    var days=["SUNDAY ","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY ","SATURDAY" ];
    day=days[day];
    
    document.getElementById("time").innerHTML=`${hh}:${min} ${am_pm}`
    document.getElementById("date").innerHTML=`${dd}-${mm}-${yy}`
    document.getElementById("day").innerHTML=`${day}`
    document.getElementById("sec").innerHTML=`${sec}`
}
setInterval(digital)