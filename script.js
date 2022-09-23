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