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

//no validation of human choice as this will further be updated when GUI added
function getHumanChoice() {
  const humanChoice = prompt("What's your choice? (rock, paper or scissors)");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  const winMsg = `You win! ${humanChoice} beats ${computerChoice}.`;
  const loseMsg = `You lose! ${computerChoice} beats ${humanChoice}.`;
  if (humanChoice === "rock" &&  computerChoice === "rock") {
    console.log("Deuce!");
  } else if (humanChoice === "rock" &&  computerChoice === "paper") {
    console.log(loseMsg);
    computerScore++;
  } else if (humanChoice === "rock" &&  computerChoice === "scissors") {
    console.log(winMsg);
    humanScore++;
  } else if  (humanChoice === "paper" &&  computerChoice === "rock") {
    console.log(winMsg);
    humanScore++;
  } else if  (humanChoice === "paper" &&  computerChoice === "paper") {
    console.log("Deuce!");
  }  else if  (humanChoice === "paper" &&  computerChoice === "scissors") {
    console.log(loseMsg);
    computerScore++;
  }else if  (humanChoice === "scissors" &&  computerChoice === "rock") {
    console.log(loseMsg);
    computerScore++;
  } else if  (humanChoice === "scissors" &&  computerChoice === "paper") {
    console.log(winMsg);
    humanScore++;
  }  else if  (humanChoice === "scissors" &&  computerChoice === "scissors") {
    console.log("Deuce!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(`You are the Winner! 🥳 \n Your score: ${humanScore} \n Computer score: ${computerScore}`);
  } else {
    console.log(`You lost the Game! 🥲 \n Your score: ${humanScore} \n Computer score: ${computerScore}`);
  }
}

playGame();