const draw = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const pick = Math.floor(Math.random() * 3);
  return draw[pick];
};

let playerScore = 0;
let ComputerScore = 0;
let round = "";

const shoot = (playerSelection, computerSelection) => {
  if (draw.indexOf(playerSelection) === -1) {
    round = "you blew this one";
  } else if (playerSelection === computerSelection) {
    round = "its a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    round = "you Lose! Paper beats Rock!";
    ComputerScore += 1;
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    round = "you win!";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    round = "you win!";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    round = "you Lose! Scissors beats Paper!";
    ComputerScore += 1;
  } else if (playerScore === "scissors" && computerSelection === "rock") {
    round = "you Lose! Rock beats Scissors!";
    ComputerScore += 1;
  } else if (playerScore === "scissors" && computerSelection === "paper") {
    round = "you win!";
    playerScore += 1;
  }
};

for (let i = 1; i <= 5; i++) {
  let userPick = prompt().toLocaleLowerCase();
  shoot(userPick, getComputerChoice());
  alert(
    `
    Round: ${round}
    \n
    score ${i} of 5 \n Player: ${playerScore} \n computer: ${ComputerScore}`
  );
  round = "";
}

if (playerScore === ComputerScore) {
  console.log("its a draw");
} else {
  alert(
    playerScore > ComputerScore
      ? `player Wins ${playerScore} : ${ComputerScore}`
      : `computer wins ${ComputerScore}:${playerScore}`
  );
}
