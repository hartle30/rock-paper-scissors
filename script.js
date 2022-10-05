const cpuSelectionDisplay = document.querySelector('.cpuSelection');
const userSelectionDisplay = document.querySelector('.userSelection');
const userScore = document.getElementById('userScore');
const cpuScore = document.getElementById('cpuScore');
const result = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        if (playerSelection === 'rock') {
            userSelectionDisplay.innerHTML = '&#9994';
        } else if (playerSelection === 'paper') {
            userSelectionDisplay.innerHTML = '&#9995';
        } else {
            userSelectionDisplay.innerHTML = '&#9996';
        }
        resetGame();
        playRound();
    });
});

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        userScore.innerHTML = playerScore;
        computerScore = 0;
        cpuScore.innerHTML = computerScore;
    }
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerState = document.querySelector('.userSelection')
    let cpuState = document.querySelector('.cpuSelection')
    playerState.classList.remove('win')
    cpuState.classList.remove('win')
 
    if(computerSelection === 'rock') {
        cpuSelectionDisplay.innerHTML = '&#9994';
    } else if (computerSelection === 'paper') {
        cpuSelectionDisplay.innerHTML = '&#9995';
    } else {
        cpuSelectionDisplay.innerHTML = '&#9996';
    }
    if (playerSelection === computerSelection) { 
        result.innerHTML = ('Tie! You both chose ' + playerSelection + '.' + ' Choose again.')
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore +=1;
            userScore.innerHTML = playerScore;
            playerState.classList.toggle('win');
            if (playerScore === 5) {
                result.innerHTML = ('Congratulations! You have beat the computer 5 to ' + computerScore + '.')
            } else {
                result.innerHTML = ('You win, ' + playerSelection + ' beats ' + computerSelection + '.')
            }
    } else {
        computerScore +=1;
        cpuScore.innerHTML = computerScore;
        cpuState.classList.toggle('win')
        if (computerScore === 5) {
            result.innerHTML = ('Bummer! You have lost to the computer 5 to ' + playerScore + '.')
        } else {
             result.innerHTML = ('You lose, ' + computerSelection + ' beats ' + playerSelection + '.')
        }
    }
}
