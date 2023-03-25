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
/*
declare a function called playRound() with paramters for player and computer
if playerSelection is rock and computerChoice is scissors, player wins
if playerSelection is rock and computerChoice is paper,  player loses

if playerSelection is paper and computerChoice is rock, player wins
if playerSelection is paper and computerChoice is scissors, player loses

if playerSelection is scissors and computerChoice is paper, players wins
if playerSelection is scissors and computerChoice is rock, player loses
else the playerSelection must be the same as computerChoice, tie game
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Rock beats Scissors, you win!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'Paper beats Rock, you lose.';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Paper beats Rock, you win!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Scissors beats paper, you lose.';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Scissors beats paper, you win!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Rock beats scissors, you lose.';
    }
    else {
        return 'Tie game';
    }
}
//declare two variables to store the player and computer selection
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
//log both selections in the console
console.log(`you chose ${playerSelection}`);
console.log(`the computer chose ${computerSelection}`);
//log the return of playround() which requires the player/comnputer selection arguments to work
console.log(playRound(playerSelection,computerSelection));