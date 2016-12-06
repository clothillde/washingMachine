$(document).ready(function() {
    
    
    //show welcome site
    
    var btnClose = document.createElement("button");
    var imgSnoopy = document.querySelector(".container_open");
    btnClose.classList.add("close");
    btnClose.innerText = "Close";
    imgSnoopy.appendChild(btnClose);


    //wreck buttton to hide welcome site
    btnClose.addEventListener("click", function(event){
      this.parentElement.remove(imgSnoopy);
    });
    
    
    
    //function to animate the washing knob
    
    function AnimateRotate(from, to, i){
        var element = $("#MyDiv2");

        $({deg: from}).animate({deg: to}, {
            duration: 200,
            step: function(now) {
                // in the step-callback (that is fired each step of the animation),
                // you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                element.css({
                    transform: 'rotate(' + now + 'deg)'
                });      
            }    
        });
    };
    
    
       //create constructor for objects with names, duration and steps of washing
    
    var parentsteps = document.querySelector(".icon").children;

    var WashingMode = function(name, time, t2, t3, t4, t5, t6) {
        this.name = name;
        this.time = time;
        this.steps = [
            parentsteps[0].innerText, 
            parentsteps[1].innerText, 
            parentsteps[2].innerText, 
            parentsteps[3].innerText, 
            parentsteps[4].innerText, 
            parentsteps[5].innerText, 
            parentsteps[6].innerText
        ];
        this.quick_time = [4, t2, t3, t4, t5, t6, 5];
    };

    
    //create objects of laundry
    
    var fastMode = new WashingMode("fast", 10, 2, 2, 2, 2, 2);
    var dailyMode = new WashingMode("daily", 20, 4, 4, 4, 4, 4);
    var customMode = new WashingMode("custom", 0, 0, 0, 0, 0, 0);
    var handMode = new WashingMode("hand", 14, 3, 4, 2, 3, 2);
    var cottonMode = new WashingMode("cotton", 22, 4, 6, 2, 5, 5);

//    console.log(customMode.quick_time[5]);

    
    
    //animate the washing knob
    //and show name and duration of the mode on the screen
    
    var elem = document.getElementById("MyDiv2");
    
    var x = 0;
    var y = 60;
  
    elem.addEventListener("click", function(){
        
        AnimateRotate(x, y);
        
            var name = document.getElementById("name");
            var duration = document.getElementById("duration");
        
            var thisName = " ";
            var thisTime = " ";
    
        if(x === 0 && y === 60){
             thisName = fastMode.name;
             thisTime = fastMode.time;
        }
        else if(x === 60 && y === 120){
            thisName = dailyMode.name;
            thisTime = dailyMode.time;

        }
        else if(x === 120 && y === 180){
            thisName = customMode.name;
            thisTime = customMode.time;
        }  
        else if(x === 180 && y === 240){
            thisName = handMode.name;
            thisTime = handMode.time;
        }
        else if(x === 240 && y === 300){
            thisName = cottonMode.name;
            thisTime = cottonMode.time;
        }
        else if(x === 300 && y === 360){
            thisName = "off";
            thisTime = " ";
        }
        
        name.innerText = thisName.toUpperCase();
        duration.innerText = thisTime;
        
        x += 60;
        y += 60; 
    });
    
    
 
    
    
    
    //find buttons start, stop, drying, edit
    
    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var dryBtn = document.getElementById("drying");
    var editBtn = document.querySelector(".edit_btn");
    
    
    
});






