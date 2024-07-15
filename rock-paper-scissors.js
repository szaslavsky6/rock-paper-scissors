let humanScore = 0;
let computerScore = 0;

// Create function that randomly returns "rock", "paper" or "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice());
// Create function that takes user input and returns it
function getHumanChoice() {
    let pick = prompt("Enter your choice! (rock, paper or scissors)").toLowerCase();
    if(!["rock", "paper", "scissors"].includes(pick)){
        console.log("Pick from the choices provided");
        return getHumanChoice();
    }
    return pick;
//Retry getHumanChoice function to return choice directly as string
    // let human;
    // let pick = prompt("Enter your choice! (rock, paper or scissors)").toLowerCase();
    // if(pick === "rock"){
    //     human = 0;
    // }
    // else if(pick === "paper"){
    //     human = 1;
    // }
    // else if(pick === "scissors"){
    //     human = 2;
    // }
    // else{
    //     console.log("Pick from the choices provided");
    //     return getHumanChoice(); 
    // }
    // return human;
}
console.log(getHumanChoice())
// Keep track of players score
function playRound(humanChoice, computerChoice ){
    if(humanChoice === computerChoice){
        console.log("Tie!");
        return 'tie';
    }
    else if(humanChoice === 0 && computerChoice === 1){
        console.log("You lose. Paper beats rock.");
        return 'lose';
    }
    else if(humanChoice === 0 && computerChoice === 2 ){
        console.log("You win! Rock beats scissors");
        return 'win';
    }
    else if(humanChoice === 1 && computerChoice === 0 ){
        console.log("You win! Paper beats rock");
        return 'win';
    }
    else if(humanChoice === 1 && computerChoice === 2 ){
        console.log("You lose. Scissors beats paper");
        return 'lose';
    }
    else if(humanChoice === 2 && computerChoice === 0 ){
        console.log("You lose. Rock beats scissors");
        return 'lose';
    }
    else if(humanChoice === 2 && computerChoice === 1 ){
        console.log("You win! Scissors beats paper.");
        return 'win';
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Write logic to play entire 5 round game