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



document.addEventListener('click', e => {
    if (e.target.matches('.fireButton')) {
        console.log('fire');
    }
});

document.addEventListener('click', e => {
    if (e.target.matches('.waterButton')) {
        console.log('water');
    }
});

document.addEventListener('click', e => {
    if (e.target.matches('.earthButton')) {
        console.log('earth');
    }
});

