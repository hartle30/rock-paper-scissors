let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound() {
    let result = ""
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
    let computerSelection = getComputerChoice()
    console.log(playerSelection)
    console.log(computerSelection)
   if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    console.log('Please make a valid selection.')
   } else if (playerSelection === computerSelection) { 
    result = ('Tie! You both chose ' + playerSelection + ' Choose again.')
    console.log(result)
   } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection + '.' + ' Player Score: ' + playerScore + ' Computer Score: ' + computerScore)
        console.log(result)
    } else {
        computerScore +=1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '.' + ' Player Score: ' + playerScore + ' Computer Score: ' + computerScore)
        console.log(result)
    }
}

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