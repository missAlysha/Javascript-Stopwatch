// Getting HTML Elements
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let laplist = document.getElementById("lapList");
// variables
let startTime = 0;
let elapsedTime = 0;
let timeInterval = null;
let isRunning = false;
// Display timer function
function displayTime() {
    let totalTime = elapsedTime;
if (isRunning) {
    totalTime += Date.now() - startTime;
}
let mins = Math.floor(totalTime / 60000);
let secs = Math.floor((totalTime % 60000)/1000);
let ms = Math.floor((totalTime % 1000) /10);
minutes.innerText = String(mins).padStart(2,"0");
seconds.innerText= String(secs).padStart(2,"0");
milliseconds.innerText = String(ms).padStart(2,"0");
}
// Start and pause function
startBtn.addEventListener("click",function () {
if (!isRunning){
    startTime = Date.now();
    isRunning = true;
    timeInterval = setInterval(displayTime,10);
    startBtn.innerText = "pause";
} else {
    elapsedTime += Date.now() - startTime;
    clearInterval(timeInterval);
    isRunning = false;
    startBtn.innerText = "start";
    displayTime();
}   

});
//Reset function
resetBtn.addEventListener("click",function(){
    clearInterval(timeInterval);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    startBtn.innerText = "start";
    displayTime();
    laplist.innerHTML = "";
});
// Lap function
lapBtn.addEventListener("click",function(){
    if (elapsedTime > 0 || isRunning) {
        let currentTime = elapsedTime;
    if (isRunning) {
        currentTime += Date.now() - startTime;
    }    
    let mins = Math.floor(currentTime / 60000);
    let secs = Math.floor((currentTime % 60000) /1000);
    let ms = Math.floor((currentTime % 1000) / 10);
    let lapTime = 
       String(mins).padStart(2,"0") + ":" +
       String(secs).padStart(2,"0") + "." +
       String(ms).padStart(2,"0");
    let li = document.createElement("li");
       li.innerText = "lap:" + lapTime;
       lapList.appendChild(li);
        
    }
})
