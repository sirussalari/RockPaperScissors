const buttons = document.querySelectorAll('button');
const results = document.querySelector('div');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const statement = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const finalRound = document.createElement('p');
const computerWin = 'Oh man! You lost this round! :(';
const playerWin = 'Congrats! You won!';
const tie = 'This round ended in a tie';
let playerCount = 0;
let computerCount = 0;
results.appendChild(playerChoice);
results.appendChild(computerChoice);
results.appendChild(playerScore);
results.appendChild(computerScore);
results.appendChild(statement);
results.appendChild(finalRound);
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let option = Math.floor(Math.random() * 3);
    let choice = options[option];
    return choice;
}
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    const choice = playerSelection.target.textContent;
    const lower = choice.toLowerCase();
    playerChoice.textContent = `Player chooses: ${lower}`
    computerChoice.textContent = `Computer chooses: ${computerSelection}`
    playerScore.textContent = `Player Score: ${playerCount}`;
    computerScore.textContent = `Computer Score: ${computerCount}`;
    if (lower === 'rock') {
        if (computerSelection === 'rock') {
            statement.textContent = tie;
        }
        else if (computerSelection === 'paper') {
            computerCount++;
            playerScore.textContent = `Player Score: ${playerCount}`;
            computerScore.textContent = `Computer Score: ${computerCount}`;
            statement.textContent = computerWin;
        }
        else {
            playerCount++;
            playerScore.textContent = `Player Score: ${playerCount}`;
            computerScore.textContent = `Computer Score: ${computerCount}`;
            statement.textContent = playerWin;
        }
    }
    else if (lower === 'paper') {
        if (computerSelection === 'rock') {
            playerCount++;
            playerScore.textContent = `Player Score: ${playerCount}`;
            computerScore.textContent = `Computer Score: ${computerCount}`;
            statement.textContent = playerWin;
        }
        else if (computerSelection === 'paper') {
            statement.textContent = tie;
        }
        else {
            computerCount++;
            playerScore.textContent = `Player Score: ${playerCount}`;
            computerScore.textContent = `Computer Score: ${computerCount}`;
            statement.textContent = computerWin;
        }
    }
    else {
        if (computerSelection === 'rock') {
            computerCount++;
            playerScore.textContent = `Player Score: ${playerCount}`;
            computerScore.textContent = `Computer Score: ${computerCount}`;
            statement.textContent = computerWin;
        }
        else if (computerSelection === 'paper') {
            playerCount++
            playerScore.textContent = `Player Score: ${playerCount}`;
            computerScore.textContent = `Computer Score: ${computerCount}`;
            statement.textContent = playerWin;
        }
        else {
            statement.textContent = tie;
        }
    }
    if (playerCount === 5) {
        clickEvent(true);
        results.removeChild(statement);
        finalRound.textContent = 'Congratulations! You won the game!';
    }
    else if (computerCount === 5) {
        clickEvent(true);
        results.removeChild(statement);
        finalRound.textContent = 'You lost :( Better luck next time';
    }
}
buttons.forEach(button => {
    button.addEventListener('click', playRound);
}) 
function clickEvent(gameOver = false) {
    if (gameOver) {
        buttons.forEach(button => {
            button.removeEventListener('click', playRound);
        })
    }
}
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