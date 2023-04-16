var disphrs = document.getElementById('display-hrs');
var dispsec = document.getElementById('display-sec');
var dispmin = document.getElementById('display-min');
var strtbtn = document.getElementById('strtbtn');
var rebtn = document.getElementById('rebtn');
var updown = document.getElementsByClassName('btn');
var hrs = 0;
var sec = 0;
var min = 0;

function incrementhrs(){
    hrs++
    if (hrs >= 24){
        hrs = 0
    }
}

function incrementmin(){
    min++
    if (min >= 60){
        min = 0
    }
}

function incrementsec(){
    sec++
    if (sec >= 60){
        sec = 0
    }
}

function decrementmins(){
    min--
    if (min == -1){
        min = 59
    }

}

function decrementsecs(){
    sec--
    if (sec == -1){
        sec = 59
    }
}

function decrementhrs(){
    hrs--
    if (hrs == -1){
        hrs = 23
    }
}

function decrementmin(){
    min--
    if (min == -1){
        min = 59
        decrementhrs()
    }
}

function decrementsec(){
    sec--
    if (sec == -1){
        sec = 59
        decrementmin()
    }
}

function dispsecond(param){

    if (param.name == "up" ){
        incrementsec();
}
    else if (param.name = "down"){
    decrementsecs();
}
    if (sec < 10){
     dispsec.innerHTML = "0" + sec
}
else{
    dispsec.innerHTML = sec
}
}

function dispmint(param){

    if (param.name == "up" ){
        incrementmin();
}
    else if (param.name = "down"){
    decrementmins();
}
if (min < 10){
    dispmin.innerHTML = "0" + min
}
else{
   dispmin.innerHTML = min
}
}

function disphours(param){

    if (param.name == "up" ){
        incrementhrs();
}
    else if (param.name = "down"){
    decrementhrs();
}
if (hrs < 10){
    disphrs.innerHTML = "0" + hrs
}
else{
   disphrs.innerHTML = hrs
}
}

var interval;

function pause(){
    clearInterval(interval)
    interval = null
    rebtn.disabled=false
    strtbtn.innerHTML = "Start"
    for (var i = 0 ; i < updown.length ; i++){
        updown[i].disabled=false
    }
}
function pausee(){
    clearInterval(interval)
    interval = null
    rebtn.disabled=false
    strtbtn.innerHTML = "Start"
    for (var i = 0 ; i < updown.length ; i++){
        updown[i].disabled=false
    }
    window.navigator.vibrate([300, 100, 200, 50, 300]);
}

function timer(){
  

    if (hrs == 0 && min == 0 && sec == 0){
       pausee()
    }
    else{
    decrementsec();
    }
    if (hrs < 10){
        disphrs.innerHTML = "0" + hrs
    }
    else{
    disphrs.innerHTML = hrs
    }
    if (min < 10){
        dispmin.innerHTML = "0" + min
    }
    else{
    dispmin.innerHTML = min
    }
    if (sec < 10){
        dispsec.innerHTML = "0" + sec
    }
    else{
    dispsec.innerHTML = sec
    }
}

function start(){
rebtn.disabled = true
for (var i = 0 ; i < updown.length ; i++){
    updown[i].disabled=true
}

if (strtbtn.innerHTML == "Start"){
    strtbtn.innerHTML = "Pause"
 interval = setInterval(timer , 1000)
}
else if (strtbtn.innerHTML == "Pause"){
    pause()
}

  
}

function reset(){

    sec = 0 
    min = 0
    hrs = 0
    disphrs.innerHTML ="0" + hrs
    dispmin.innerHTML ="0" + min
    dispsec.innerHTML ="0" + sec

}