let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const gameLog = document.getElementById('game-log');
const restartBtn = document.createElement('button');
restartBtn.textContent = 'Play again!';
restartBtn.addEventListener('click', restartGame);
restartBtn.style = 'display: none';

//Score
const humanScoreOutput = document.getElementById('human-score');
const computerScoreOutput = document.getElementById('computer-score');
humanScoreOutput.textContent = humanScore;
computerScoreOutput.textContent = computerScore;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}  

function playRound(humanChoice, computerChoice) {
  roundNumber++;
  humanChoice = humanChoice.toLowerCase();
  const winMsg = `You win! ${humanChoice} beats ${computerChoice}.`;
  const loseMsg = `You lose! ${computerChoice} beats ${humanChoice}.`;
  if (humanChoice === "rock" &&  computerChoice === "rock") {
    gameLog.textContent = `Deuce!`;
  } else if (humanChoice === "rock" &&  computerChoice === "paper") {
    gameLog.textContent = `${loseMsg}`;
    computerScore++;
  } else if (humanChoice === "rock" &&  computerChoice === "scissors") {
    gameLog.textContent = `${winMsg}`;
    humanScore++;
  } else if  (humanChoice === "paper" &&  computerChoice === "rock") {
    gameLog.textContent = `${winMsg}`;
    humanScore++;
  } else if  (humanChoice === "paper" &&  computerChoice === "paper") {
    gameLog.textContent = `Deuce!`;
  }  else if  (humanChoice === "paper" &&  computerChoice === "scissors") {
    gameLog.textContent = `${loseMsg}`;
    computerScore++;
  }else if  (humanChoice === "scissors" &&  computerChoice === "rock") {
    gameLog.textContent = `${loseMsg}`;
    computerScore++;
  } else if  (humanChoice === "scissors" &&  computerChoice === "paper") {
    gameLog.textContent = `${winMsg}`;
    humanScore++;
  }  else if  (humanChoice === "scissors" &&  computerChoice === "scissors") {
    gameLog.textContent = `Deuce!`;
  }
  humanScoreOutput.textContent = humanScore;
  computerScoreOutput.textContent = computerScore;
  if (roundNumber >= 5) {
    endGame();
  }
}

function playGame() {
  var humanChoice = document.getElementById('human-choice');
  humanChoice.addEventListener('click', getHumanChoice);
  function getHumanChoice(e) {
      if (e.target.classList.contains('game-btn')) {
        humanSelection = e.target.value;
        const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
  }
  
}

function endGame() {
  if (humanScore > computerScore) {
    gameLog.textContent = `You are the Winner! 🥳`;
  } else  if (humanScore < computerScore){
    gameLog.textContent = `You lost the Game! 🥲`;
  } else if (humanScore === computerScore && (humanScore !== 0 || computerScore || 0) ) {
    gameLog.textContent = `No winner! 🤷🏼‍♂️`;
  }
  gameLog.appendChild(restartBtn); 
  restartBtn.style = 'display: block';
}

function restartGame() {
  restartBtn.style = 'display: none';
  gameLog.textContent = '';
  humanScore = 0;
  computerScore = 0;
  roundNumber = 0;
  humanScoreOutput.textContent = humanScore;
  computerScoreOutput.textContent = computerScore;
}

playGame();