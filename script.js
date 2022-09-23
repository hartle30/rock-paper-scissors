// generate computer choice
// get user choice
// compare choices
// determine win, loss, or tie
// repeat to determine winner of best of 5 series

let computerSelection = Math.floor(Math.random()*3) +1;

function getComputerChoice(computerSelection) {
    if (computerSelection === 1) {
        return ('Rock');
    } else if (computerSelection === 2) {
        return ('Paper');
    } else {
        return ('Scissors')
    }
}

let playerSelection = prompt('Rock, Paper, Scissors?')
