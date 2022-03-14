function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let option = Math.floor(Math.random() * 3);
    let choice = options[option];
    return choice;
}
function playRound(playerSelection, computerSelection) {
    const lower = playerSelection.toLowerCase();
    const computerWin = `You lost! ${computerSelection} beats ${lower}`;
    const playerWin = `You won! ${lower} beats ${computerSelection}`;
    const tie = `It's a tie! You both chose ${lower}`;
    if (lower === 'rock') {
        if (computerSelection === 'rock') {
            return tie;
        }
        else if (computerSelection === 'paper') {
            return computerWin;
        }
        else {
            return playerWin;
        }
    }
    else if (lower === 'paper') {
        if (computerSelection === 'rock') {
            return playerWin;
        }
        else if (computerSelection === 'paper') {
            return tie;
        }
        else {
            return computerWin;
        }
    }
    else {
        if (computerSelection === 'rock') {
            return computerWin;
        }
        else if (computerSelection === 'paper') {
            return playerWin;
        }
        else {
            return tie;
        }
    }
}