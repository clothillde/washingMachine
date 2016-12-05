$(document).ready(function() {
    var elem = $("#MyDiv2");
    
    var x = 0;
    var y = 60;
    
    elem.on("click", function(){
        AnimateRotate(x, y);
        x += 60;
        y += 60;
    });
    
    
    
    var btnClose = document.createElement("button");
    var imgSnoopy = document.querySelector(".container_open");
    btnClose.classList.add("close");
    btnClose.innerText = "Close";
    imgSnoopy.appendChild(btnClose);


// guzik zaglady
    btnClose.addEventListener("click", function(event){
      this.parentElement.remove(imgSnoopy);
    });
    
});

function AnimateRotate(from, to, i){
    var element = $("#MyDiv2");
    
    $({deg: from}).animate({deg: to}, {
        duration: 2000,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            element.css({
                transform: 'rotate(' + now + 'deg)'
            });      
        }    
    });
}

//var washingMode = function(name, time) {
//  this.name = name;
//  this.time = time;
//};
//
//var array = [
//    {
//      name: Fast,
//      time: 10,
//      steps: [ 
//        water heating,
//        motor control,
//        rinsing,
//        centrifugation,
//        drying
//      ]  
//    }
//    
//];

//
//function fastMode(){
//    
//}; 
