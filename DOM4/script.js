var input= document.createElement("input");
//It creates an element which can recieve input data
input.setAttribute("type","date");
input.setAttribute("id","dob");
//The required attributes are set

var button=document.createElement("button");
//Button is created here
button.innerHTML="Display data";
//the text to be displayed  
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);

document.body.append(input,button);

function displaydata(){
    var inputs=document.getElementById("dob").value;
    console.log(typeof(inputs));
    if(Date.parse(inputs)){
        var inputDate=new Date(inputs);
        console.log(inputDate);
        var currentDate=new Date();
        console.log(currentDate);
        //milliseconds diff
        var millisecdiff=currentDate.getTime()-inputDate.getTime();
        console.log(millisecdiff);
        //seconds diff
        var secondsdiff=mathfloor(millisecdiff,1000);
        console.log(secondsdiff);
        //minutes diff
        var minutesdiff= mathfloor(secondsdiff,60);
        console.log(minutesdiff);
        //Hours diff
        var hoursdiff=mathfloor(minutesdiff,60);
        console.log(hoursdiff);
        //day diff
        var daydiff=mathfloor(hoursdiff,24);
        console.log(daydiff);
        //year diff
        var yeardiff= getyears(inputDate,currentDate);
        console.log(yeardiff);
        //months diff
        var monthdiff= getmonths(inputDate,currentDate);
        console.log(monthdiff);
    }
    else{
        console.log("invalid input entered");
    }
}

function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}

function getyears(value1,value2){
    var d1=new Date(value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
}

function getmonths(value1,value2){
    var year = getyears(value1,value2);
    var months = (year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}


