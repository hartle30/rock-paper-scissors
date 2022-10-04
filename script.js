const cpuSelectionDisplay = document.getElementById('cpuSelection');
const userSelectionDisplay = document.getElementById('userSelection');
const userScore = document.getElementById('userScore');
const cpuScore = document.getElementById('cpuScore');
const result = document.getElementById('result');

let playerScore = 0
let computerScore = 0
let playerSelection = ''

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    userSelectionDisplay.innerHTML = playerSelection;
    playRound();
});

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    userSelectionDisplay.innerHTML = playerSelection;
    playRound();
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    userSelectionDisplay.innerHTML = playerSelection;
    playRound();
});

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound() {
    let computerSelection = getComputerChoice()
    cpuSelectionDisplay.innerHTML = computerSelection;
    console.log(playerSelection)
    console.log(computerSelection)
   if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    console.log('Please make a valid selection.')
   } else if (playerSelection === computerSelection) { 
    result.innerHTML = ('Tie! You both chose ' + playerSelection + '.' + ' Choose again.')
    console.log(result)
   } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore += 1;
        userScore.innerHTML = playerScore;
        result.innerHTML = ('You win! ' + playerSelection + ' beats ' + computerSelection + '.')
        console.log(result)
    } else {
        computerScore +=1;
        cpuScore.innerHTML = computerScore;
        result.innerHTML = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '.')
        console.log(result)
    }
}

/*

function game() {
   while (playerScore < 5 && computerScore < 5) {
    playRound()
    if (playerScore === 5) {
        console.log('Congratulations! You won the game ' + playerScore + '-' + computerScore + '! Refresh the page to play again.')
    } else if (computerScore === 5) {
        console.log('Bummer! You lost the game ' + computerScore + '-' + playerScore + '! Refresh the page to play again.')
    }
   }
}

game()

*/
