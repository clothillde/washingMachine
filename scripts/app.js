$(document).ready(function() {
    
    
//    //show welcome site
//    
//    var btnClose = document.createElement("button");
//    var imgSnoopy = document.querySelector(".container_open");
//    btnClose.classList.add("close");
//    btnClose.innerText = "Close";
//    imgSnoopy.appendChild(btnClose);
//
//
//    //wreck buttton to hide welcome site
//    btnClose.addEventListener("click", function(event){
//      this.parentElement.remove(imgSnoopy);
//    });
//    
    
    
    
    //function to animate the washing knob
    
    function AnimateRotate(from, to, i){
        var element = $("#MyDiv2");

        $({deg: from}).animate({deg: to}, {
            duration: i,
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
            parentsteps[0].firstElementChild, 
            parentsteps[1].firstElementChild,
            parentsteps[2].firstElementChild, 
            parentsteps[3].firstElementChild, 
            parentsteps[4].firstElementChild, 
            parentsteps[5].firstElementChild, 
            parentsteps[6].firstElementChild
        ];
        this.quickTime = [3000, t2, t3, t4, t5, t6, 5000];
    };

    

    //create objects of laundry
    
    var fastMode = new WashingMode("fast", 10, 2000, 2000, 2000, 2000, 2000);
    var dailyMode = new WashingMode("daily", 20, 4000, 4000, 4000, 4000, 4000);
    var customMode = new WashingMode("custom", 0, 0, 0, 0, 0, 0);
    var handMode = new WashingMode("hand", 14, 3000, 4000, 2000, 3000, 2000);
    var cottonMode = new WashingMode("cotton", 22, 4000, 6000, 2000, 5000, 5000);
    
    
    
     //functions of different washing modes
    var arr = [];
    
    function wHeat(mode) {
        //turn off previous btns and turn on the current btn
        mode.steps[6].classList.remove("change");
        mode.steps[0].classList.remove("change");
        mode.steps[1].classList.add("change");
        
        //go to another function after some time from the chosen mode
        arr.push(setTimeout(function(){
            mControl(mode);
        }, mode.quickTime[1]));
    }
    
    function mControl(mode){
        mode.steps[1].classList.remove("change");
        mode.steps[2].classList.add("change"); 
        
        arr.push(setTimeout(function(){
            rins(mode);
        }, mode.quickTime[2]));
    }
    
    function rins(mode){
        mode.steps[2].classList.remove("change");
        mode.steps[3].classList.add("change");
        
        arr.push(setTimeout(function(){
            centrif(mode);
        }, mode.quickTime[3]));      
    }
    
    function centrif(mode){
        mode.steps[3].classList.remove("change");
        mode.steps[4].classList.add("change");
        
        arr.push(setTimeout(function(){
            drying(mode);
        }, mode.quickTime[4]));   
    }
    
    function drying(mode){
        mode.steps[4].classList.remove("change");
        mode.steps[5].classList.add("change");
        
        arr.push(setTimeout(function(){
            open(mode);
        }, mode.quickTime[5]));
    }
    
    function open(mode){
        mode.steps[5].classList.remove("change");
        mode.steps[6].classList.add("change");
    }
    
 
    
    //find buttons start, stop, drying, edit
    
    startBtn = document.getElementById("start");
    stopBtn = document.getElementById("stop");
    dryBtn = document.getElementById("drying");
    editBtn = document.getElementById("edit");
    
    
    
    //animate the washing knob
    //and show name and duration of the mode on the screen
    
    var elem = document.getElementById("MyDiv2");
    
    var x = 0;
    var y = 60;
    
    //if there is a click on the knob
    elem.addEventListener("click", function(){
        
        AnimateRotate(x, y, 1000);
        
            var name = document.getElementById("name");
            var duration = document.getElementById("countdown");
            var on = document.getElementById("on").firstElementChild; 
            var door = document.getElementById("door").firstElementChild; 
        
            var thisName = " ";
            var thisTime = " ";
         
        // pos with mode fast
        if(x === 0 && y === 60){
             thisName = fastMode.name;
             thisTime = fastMode.time;
             on.classList.add("change");
        }
        
        // pos with mode daily
        else if(x === 60 && y === 120){
            thisName = dailyMode.name;
            thisTime = dailyMode.time;
            on.classList.add("change");
        }
        
        // pos with mode custom
        else if(x === 120 && y === 180){
            thisName = customMode.name;
            thisTime = customMode.time;
            on.classList.add("change");
        }  
        
        // pos with mode hand
        else if(x === 180 && y === 240){
            thisName = handMode.name;
            thisTime = handMode.time;
            on.classList.add("change");
        }
        
        // pos with mode cotton
        else if(x === 240 && y === 300){
            thisName = cottonMode.name;
            thisTime = cottonMode.time;
            on.classList.add("change");
        }
        
        // pos with mode off
        else if(x === 300 && y === 360){
            thisName = "off";
            thisTime = " ";
            on.classList.remove("change");
            door.classList.remove("change");
            }
        
        //display the name and the duration on the lcd screen
        name.innerText = thisName.toUpperCase();
        duration.innerText = thisTime;

        x += 60;
        y += 60;
        
    });
    
    
    
    //function timer to set countdown
    
    var arrtime = [];
    function timer(counter){
        
    var timeid = setInterval(function() {
        counter--;
        if(counter < 0) {
            clearInterval(timeid);
        } else {
            countdown.innerHTML = counter.toString();
        }
    }, 1000);
        arrtime.push(timeid);
    }
    
    
    
    //check whether a btn was clicked and action after
 
    var btns = document.querySelectorAll("button");
    var audio = new Audio('washing-machine-2.mp3');
    var dryAudio = new Audio('washing-machine-spin-cycle.mp3');
    
            
    
    for(var i=0; i<btns.length; ++i) {
        
        btns[i].addEventListener("click", function(){
            
        var name = this.id;
        var clicked = parseInt(this.dataset.clicked);
        var nameMode = document.getElementById("name").innerText.toLowerCase();
            
        var stepBtns = Array.from(document.querySelectorAll(".step_btn"));
        var pointer = document.getElementById("pointer");
            

        if(clicked){
                    
            this.dataset.clicked = 0;
            
        } else {
            
            switch(name){
                case "start": {
                    
                    //stop the other audio
                    dryAudio.pause();
                    dryAudio.currentTime = 0;
                    
                    //start the sound
                    audio.play();
                    
                    pointer.classList.add("hide");
                    
                    //check the mode and do magic
                    if(nameMode === "fast"){
                        wHeat(fastMode);
                        timer(fastMode.time);
                        AnimateRotate(0, 20000, 10000);
                    }
                    
                    else if(nameMode === "daily"){
                        wHeat(dailyMode);
                        timer(dailyMode.time);
                        AnimateRotate(0, 10000, 20000);
                    }
                    
                     else if(nameMode === "custom"){
                        wHeat(customMode);
                        timer(customMode.time);
                        AnimateRotate(0, 100000, 0);
                    }
                    
                     else if(nameMode === "hand"){
                        wHeat(handMode);
                        timer(handMode.time);
                        AnimateRotate(0, 6000, 14000);
                    }
                    
                     else if(nameMode === "cotton"){
                        wHeat(cottonMode);
                        timer(cottonMode.time);
                        AnimateRotate(0, 9000, 22000);
                    }

                    break;
                    
                }
                    
                case "stop": {
                    
                    //stop the sound
                    audio.pause();
                    audio.currentTime = 0;
                    
                    dryAudio.pause();
                    dryAudio.currentTime = 0;
                    
                    pointer.classList.remove("hide");
                    AnimateRotate(0, 0, 10000);
                    
                    //stop the functions
                    for(var i = 0; i < arr.length; i++){
                        clearTimeout(arr[i]);
                    }
                    
                    //stop the timer
                    for(var i = 0; i < arrtime.length; i++){
                        clearInterval(arrtime[i]);
                    }
               
                    //stop lighting btns
                    stepBtns.forEach(function(elements){
                        elements.firstElementChild.classList.remove("change");
                    });
                    
                    stepBtns[6].firstElementChild.classList.add("change");
                    
                    break;
                }
                    
                case "drying": {
                    
                    //stop the sound
                    audio.pause();
                    audio.currentTime = 0;
                    
                    dryAudio.play();
                    
                    pointer.classList.remove("hide");
                    AnimateRotate(0, 0, 10000);
                    
                    //stop the functions
                    for(var i = 0; i < arr.length; i++){
                        clearTimeout(arr[i]);
                    }
                    
                    //stop the timer
                    for(var i = 0; i < arrtime.length; i++){
                        clearInterval(arrtime[i]);
                    }
                    
                    //stop lighting btns
                    stepBtns.forEach(function(elements){
                        elements.firstElementChild.classList.remove("change");
                    });
                    
                    stepBtns[5].firstElementChild.classList.add("change");
                    
                    //start additional drying mode
                    drying(fastMode);
                    timer(fastMode.time);
                    
                    break;
                }
                   
            }
            
            this.dataset.clicked = 1;
        }
      });  
        
        //stop audios to be sure
        audio.pause();
        audio.currentTime = 0;
        dryAudio.pause();
        dryAudio.currentTime = 0;
    }
    
    
    
    
    
    
    
  
});






