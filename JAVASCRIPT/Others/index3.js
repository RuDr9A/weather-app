// --------------- Key Event Listners -------------------

const myBox = document.getElementById("myBox") ;
const moveAmout = 10 ;
let x = 0 ;
let y = 0 ;

document.addEventListener("keydown" , event =>{
    if(event.key.startsWith("Arrow")){

        event.preventDefault() ;
        
        switch(event.key){
            case "ArrowUp" :
                y -= moveAmout ;
                break ;
            case "ArrowDown" :
                y += moveAmout ;
                break ;
            case "ArrowLeft" :
                x -= moveAmout ;
                break ;
            case "ArrowRight" :
                x += moveAmout ;
                break ;
        }
        myBox.style.top = `${y}px` ;
        myBox.style.left = `${x}px` ;
    }
}) ;

const myButton = document.getElementById("myButton") ;
const img = document.getElementById("diceImage") ;

myButton.addEventListener("click" , event => {
    if(myButton.textContent === "HIDE") {
        img.style.display = "none" ;
        myButton.textContent = "SHOW" ;
    }else{
        img.style.display = "block" ;
        myButton.textContent = "HIDE" ;
    }
})




