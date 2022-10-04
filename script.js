const cpuSelectionDisplay = document.getElementById('cpuSelection');
const userSelectionDisplay = document.getElementById('userSelection');
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
        userSelectionDisplay.innerHTML = playerSelection.toUpperCase();
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
    cpuSelectionDisplay.innerHTML = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) { 
        result.innerHTML = ('Tie! You both chose ' + playerSelection + '.' + ' Choose again.')
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore +=1;
            userScore.innerHTML = playerScore;
            if (playerScore === 5) {
                result.innerHTML = ('Congratulations! You have beat the computer 5 to ' + computerScore + '.')
            } else {
                result.innerHTML = ('You win! ' + playerSelection + ' beats ' + computerSelection + '.')
            }
    } else {
        computerScore +=1;
        cpuScore.innerHTML = computerScore;
        if (computerScore === 5) {
            result.innerHTML = ('Bummer! You have lost to the computer 5 to ' + playerScore + '.')
        } else {
             result.innerHTML = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '.')
        }
    }
}
