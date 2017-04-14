function getSeconds(){
   counter = 0;
     var currentTime = setInterval (function() {
       document.getElementById('box').innerHTML = counter;
       counter++;
       if(seconds > 10){
         clearInterval(currentTime);
       }
     },1000)
 }