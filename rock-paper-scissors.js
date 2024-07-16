
// Create function that randomly returns "rock", "paper" or "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Create function that takes user input and returns it
function getHumanChoice() {
    let pick = prompt("Enter your choice! (rock, paper or scissors)").toLowerCase();
    if(!["rock", "paper", "scissors"].includes(pick)){
        console.log("Pick from the choices provided");
        return getHumanChoice();
    }
    return pick;
}
// Keep track of players score
function playRound(humanChoice, computerChoice ){
    if(humanChoice === computerChoice){
        console.log("Tie!");
        return 'tie';
    } 
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")){
        console.log(`You lose. ${computerChoice} beats ${humanChoice}.`);
        return 'lose';
    }
    else {
        console.log(`You Win! ${humanChoice} beat ${computerChoice}`);
        return 'win';
    }
}
// Write logic to play entire 5 round game
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <=5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if(result === 'win'){
            humanScore++;
        }
        else if(result === 'lose'){
            computerScore++;
        }

        console.log(`Round ${round}:`);
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

        if(humanScore === 3 || computerScore === 3){
            break;
        }
    }
    if(humanScore > computerScore){
        console.log("You win the game!");
    }
    else if(computerScore > humanScore){
        console.log("You lose the game");
    }
    else{
        console.log("The game is a tie");
    }
}
// Start the game
playGame();