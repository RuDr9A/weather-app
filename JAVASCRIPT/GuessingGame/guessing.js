const min = 1 ;
const max = 100 ;
const ans = Math.floor(Math.random()*(max-min+1))+min ;

let attempt = 0 ;
let guess ;
let running = true ;

while(running){

    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess) ;
    if(isNaN(guess) || guess>100 || guess<1){
        window.alert("Enter a valid number") ;
    }else{
        attempt++ ;
        if(guess<ans){
            window.alert("Too low, try again!!") ;
        }else if(guess>ans){
             window.alert("Too high, try again!!") ;
        }
        else{
            window.alert("CORRECT!!! the answer was "+ans+` it took you ${attempt} attempts ...`) ;
            running = false ;
        }
    }
    
}