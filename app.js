const buttons = document.querySelectorAll('button');
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let option = Math.floor(Math.random() * 3);
    let choice = options[option];
    return choice;
}
function playRound(playerSelection, computerSelection) {
    const choice = playerSelection.target.textContent;
    const lower = choice.toLowerCase();
    const computerWin = 0;
    const playerWin = 1;
    const tie = 2;
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
buttons.forEach(button => {
    button.addEventListener('click', playRound)
})
function game() {
    let playerScore = 0;
    let computerScore = 0;
    // for (let i = 0; i < 5; i++) {
    //     const input = window.prompt('Please enter rock, paper, or scissors: ');
    //     const comp = computerPlay();
    //     const round = playRound(input, comp);
    //     if (round === 1) {
    //         playerScore++;
    //     }
    //     else if (round === 0) {
    //         computerScore++;
    //     }
    //     const statement = `Player chooses: ${input}\nComputer chooses: ${comp}\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
    //     console.log(statement);
    // }
    if (playerScore > computerScore) {
        console.log('Congrats! You won!');
    }
    else if (playerScore < computerScore) {
        console.log('Oh man! You lost :(');
    }
    else {
        console.log('The game ended in a tie!');
    }
}
game();