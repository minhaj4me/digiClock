let clock= document.querySelector("p");

function displayTime(){


    
    let time= new Date()
    
    let hh=time.getHours()
    let mm=time.getMinutes()
    let ss=time.getSeconds()
    

    //12 hour formatting

    let AM_PM = "AM"

    if(hh>=12){
        hh-=12;
        AM_PM="PM"
    }


    // time formatting - adding zero(0) 

    hh=hh<10?"0"+hh:hh;
    mm=mm<10?"0"+mm:mm;
    ss=ss<10?"0"+ss:ss;

    
    clock.innerHTML=hh + " : " + mm + " : " + ss + " : " + AM_PM
    
    
    // setTimeout(displayTime,1000)
}

setInterval(() => {
displayTime()
}, 1000);
