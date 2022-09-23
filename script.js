// compare choices
// determine win, loss, or tie
// repeat to determine winner of best of 5 series

// generate computer choice
function getComputerChoice() {
    let computerSelection = Math.floor(Math.random()*3) +1;
    if (computerSelection === 1) {
        return ('rock');
    } else if (computerSelection === 2) {
        return ('paper');
    } else {
        return ('scissors');
    }
}

computerSelection = getComputerChoice()
console.log(computerSelection)

//get user choice
let playerSelection = prompt('Rock, Paper, Scissors?')
playerSelection = playerSelection.toLowerCase()

console.log(playerSelection)

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ('Tie! Choose again.');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return ('You lose! Paper beats rock.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return ('You win! Rock beats scissors');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ('You win! Paper beats rock.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return ('You lose! Scissors beat rock.') ;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return ('You lose! Rock beats scissors');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('You win! Scissors beat paper.');
    } else {
        return ('Please make a valid selection.')
    }
}

console.log(playRound(playerSelection, computerSelection))

