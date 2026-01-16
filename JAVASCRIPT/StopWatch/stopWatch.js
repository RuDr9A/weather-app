
const time = document.getElementById("time") ;
let timer = null ;
let startTime = 0 ;
let elaspedTime = 0 ;
let isRunning = false ;



function start(){
    if(!isRunning){
        startTime = Date.now()-elaspedTime ;
        timer = setInterval(update,10);
        isRunning = true ;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer) ;
        elaspedTime = Date.now()-startTime ;
        isRunning = false ;
    }
}
function reset(){
    clearInterval(timer) ;
    startTime = 0 ;
    elaspedTime = 0 ;
    isRunning = false ;
    time.textContent = "00:00:00:00"
}

function update(){
    const currTime = Date.now() ;
    elaspedTime = currTime - startTime ;

    let hours = Math.floor(elaspedTime/(1000*60*60)) ;
    let minutes = Math.floor(elaspedTime/(1000*60)%60) ;
    let seconds = Math.floor(elaspedTime/1000 % 60) ;
    let milliseconds = Math.floor(elaspedTime%1000/10) ;

    time.textContent = `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${milliseconds.toString().padStart(2,"0")}`
}