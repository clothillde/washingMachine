$(document).ready(function() {
    var elem = $("#MyDiv2");
    elem.on("click", function(){
        AnimateRotate(0, 60); //off to fast
//        AnimateRotate(60, 120); //fast to daily
//        AnimateRotate(120, 180); //daily to custom
//        AnimateRotate(180, 240); //custom to hand
//        AnimateRotate(240, 300); //hand to cotton
//        AnimateRotate(300, 360); //cotton to off
    });
    
});

function AnimateRotate(from, to){
    var elem = $("#MyDiv2");
    
    $({deg: from}).animate({deg: to}, {
        duration: 2000,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
            
        }
    });
    
}




