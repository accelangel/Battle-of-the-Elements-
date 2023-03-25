/*
Declare a function called getComputerChoice
Select a random number between 1 and 3, so either 1, 2 or 3
return rock for 1, paper for 2 or scissors for 3
*/

/*This function returns the computers choice by picking a random
number between 1 and 3, and returning either rock/paper/scissors 
based on the value of randomNum 1/2/3, respectively.*/
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        return 'rock';
    }
    else if (randomNum == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
/*
Declare a function called getPlayerChoice
create a variable that stores the player choice from a prompt
check if the playerInput is either rock, paper or scissors
return the player's choice
it should be case-insensitive
if the choice is invalid, let the player know to try again
*/
function getPlayerChoice() {
    let playerInput = prompt('Enter Rock, Paper or Scissors');
    playerInput = playerInput.toLowerCase();
    if (playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors') {
        return playerInput;
    }
    else {
        console.log('Invalid choice, please try again');
    }
}