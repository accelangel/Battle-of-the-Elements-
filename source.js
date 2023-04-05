const statusBox = document.querySelector('.statusBox');
const compBox = document.querySelector('.compBox');
const livesBox = document.querySelector('.livesBox');
const roundBox = document.querySelector('.roundBox');
const winLoseBox = document.querySelector('.winLoseBox');
const declareWinnerLoser = document.querySelector('.winnerLoser');
const imageBox = document.querySelector('.imageBox');
const playAgainButton = document.querySelector('button');
const compFire = document.querySelector('.compFire');
const compWater = document.querySelector('.compWater');
const compEarth = document.querySelector('.compEarth');

const fire = document.querySelector('.fire');
const water = document.querySelector('.water');
const earth = document.querySelector('.earth');

let playerLives = 5;
let computerLives = 5;
let round = 0;
let previousGrayscale = undefined;

function grayScaleToggle (previousGrayscale) {
    if (previousGrayscale == 'fire') {
        compFire.classList.add('grayScale');
    }
    else if (previousGrayscale == 'water') {
        compWater.classList.add('grayScale');
    }
    else if (previousGrayscale == 'earth') {
        compEarth.classList.add('grayScale');
    }
}

function getComputerSelection() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        grayScaleToggle(previousGrayscale);
        compFire.classList.remove('grayScale');
        previousGrayscale = 'fire';
        return 'fire';
    }
    else if (randomNum == 2) {
        grayScaleToggle(previousGrayscale);
        compWater.classList.remove('grayScale');
        previousGrayscale = 'water';
        return 'water';
    }
    else {
        grayScaleToggle(previousGrayscale);
        compEarth.classList.remove('grayScale');
        previousGrayscale = 'earth';
        return 'earth';
    }
}

function fireListener() {
    playRound('fire');
}
function waterListener() {
    playRound('water');
}
function earthListener() {
    playRound('earth');
}

fire.addEventListener('click', fireListener);

water.addEventListener('click', waterListener);

earth.addEventListener('click', earthListener);

playAgainButton.addEventListener('click', () => {
    playAgain();
    playAgainButton.classList.toggle('displayNone');
});

/* 
No longer required but I'm keeping it here for future reference.
function globalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback()
    })
};

globalEventListener('click', '.fire', () => {
    playRound('fire');
});

globalEventListener('click', '.water', () => {
    playRound('water');
});

globalEventListener('click', '.earth', () => {
    playRound('earth');
});

globalEventListener('click', '.playAgain', () => {
    playAgain();
    playAgainButton.classList.toggle('displayNone');
});
*/

function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    if (playerSelection == computerSelection) {
        statusUpdate('tie game');
        game(undefined);
    }
    else if
        ((playerSelection == 'fire' && computerSelection == 'earth') ||
        (playerSelection == 'water' && computerSelection == 'fire') ||
        (playerSelection == 'earth' && computerSelection == 'water')) {
        statusUpdate('you win!')
        game(true);
    }
    else {
        statusUpdate('you lose!')
        game(false);
    }
}

function game(roundResult) {
    round += 1;
    if (roundResult == true) {
        computerLives += -1;
    }
    else if (roundResult == false) {
        playerLives += -1;
    }
    livesBox.textContent = `Your Lives: ${playerLives} | Enemy's 
    Lives: ${computerLives}`;
    roundBox.textContent = `Round: ${round}`;
    if (computerLives == 0) {
        gameConclusion(true);
    }
    else if (playerLives == 0) {
        gameConclusion(false);
    }
}

function gameConclusion(winner) {
    playAgainButton.classList.toggle('displayNone');
    if (winner == true) {
        declareWinnerLoser.textContent = 'MATCH VICTORY!'

    }
    else {
        declareWinnerLoser.textContent = 'MATCH DEFEAT.'
    }
    fire.removeEventListener('click', fireListener);
    water.removeEventListener('click', waterListener);
    earth.removeEventListener('click', earthListener);
}

function statusUpdate(content) {
    winLoseBox.textContent = content;
}

function playAgain () {
    playerLives = 5;
    computerLives = 5;
    round = 0;
    roundBox.textContent = `Round: ${round}`;
    livesBox.textContent = "Your Lives: 5  |  Enemy's Lives 5";
    winLoseBox.textContent = 'Choose an element to go to battle!';
    declareWinnerLoser.textContent = '';
    compFire.classList.add('grayScale');
    compWater.classList.add('grayScale');
    compEarth.classList.add('grayScale');
    fire.addEventListener('click', fireListener);
    water.addEventListener('click', waterListener);
    earth.addEventListener('click', earthListener);
}



