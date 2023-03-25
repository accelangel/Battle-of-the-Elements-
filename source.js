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

console.log(getComputerChoice());


