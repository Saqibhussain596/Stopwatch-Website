let milisec=document.getElementById("milisec");
let sec=document.getElementById("sec");
let min=document.getElementById("min");
let hour=document.getElementById("hour");
let start=document.getElementById("start");
let reset=document.getElementById("reset");
let interval;
var milisec_count=00;sec_count=00;min_count=00;hour_count=00;
function start_watch()
{   
    milisec_count++;
    if(milisec_count<=9)
    milisec.innerText="0"+milisec_count;
    if(milisec_count>9)
    milisec.innerText=milisec_count;
    if(milisec_count>99)
    {   
        milisec_count=0;
        milisec.innerText="0"+milisec_count;
        sec_count++;
        if(sec_count<=9) 
        sec.innerText="0"+sec_count;
        if(sec_count>9)
        sec.innerText=sec_count;
    }
    if((sec_count)>59)
    {
        sec_count=0;
        sec.innerText="0"+sec_count;
        min_count++;
        if(min_count<=9)
        min.innerText="0"+min_count;
        if(min_count>9)
        min.innerText=min_count;
    }
     if(min_count>59)
     {
        min_count=0;
        min.innerText="0"+min_count;
        hour_count++;
        if(hour_count<=9)
        hour.innerText="0"+hour_count;
        if(hour_count>9)
        hour.innerText=hour_count;
     }
    
}

start.onclick= function (){
    if(start.innerText=="Start")
{start.innerText="Stop";
interval=setInterval(start_watch,10);}
    else
        {start.innerText="Start";
        clearInterval(interval);
    }
        
};
reset.onclick=function (){
    if(start.innerText=="Start")
     { milisec_count="00";sec_count="00";min_count="00";hour_count="00";
        milisec.innerText=milisec_count; sec.innerText=sec_count;
        min.innerText=min_count;hour.innerText=hour_count;
}};