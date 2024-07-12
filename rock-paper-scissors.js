

// Create function that randomly returns "rock", "paper" or "scissors"
function getComputerChoise() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//console.log(getComputerChoise());
// Create function that takes user input and returns it
function getHumanChoice() {
    let human;
    let pick = prompt("Enter your choice! (rock, paper or scissors)").toLowerCase();
    if(pick === "rock"){
        human = 0;
    }
    else if(pick === "paper"){
        human = 1;
    }
    else if(pick === "scissors"){
        human = 2;
    }
    else{
        console.log("Pick from the choices provided");
        return getHumanChoice(); // Ask user for new input if invalid choice
    }
    return human;
}
console.log(getHumanChoice());
// Keep track of players score
    // create humanScore and computerScore variables
// Write logic to play a single round
// Write logic to play entire 5 round game