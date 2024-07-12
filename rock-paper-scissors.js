// Create function that randomly returns "rock", "paper" or "scissors"
function getComputerChoise() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoise());
// Create function that takes user input and returns it
// Keep track of players score
    // create humanScore and computerScore variables
// Write logic to play a single round
// Write logic to play entire 5 round game