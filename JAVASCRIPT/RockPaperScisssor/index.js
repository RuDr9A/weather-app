const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreNumber = document.getElementById("playerScoreNumber");
const computerScoreNumber = document.getElementById("computerScoreNumber");

let playerScore = 0 ;
let computerScore = 0 ;

const choices = ["rock", "paper", "scissors"];

function playgame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];

    let result = "";
    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }

        
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("green", "red", "grey");
    if(result === "It's a tie!"){
        resultDisplay.classList.add("grey") ;
    } else if(result === "You win!"){
        playerScore++;
        playerScoreNumber.textContent = playerScore;
        resultDisplay.classList.add("green") ;
    } else {
        computerScore++;
        computerScoreNumber.textContent = computerScore;
        resultDisplay.classList.add("red") ;
    }

}