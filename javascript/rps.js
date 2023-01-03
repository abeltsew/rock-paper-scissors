const draw = ["rock", "paper", "scissors"];
const getComputerChoice = () => {
  const pick = Math.floor(Math.random() * 3);
  return draw[pick];
};

let playerScore = 0;
let ComputerScore = 0;
let round = "";
const score = document.querySelector(".score");

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
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    round = "you Lose! Rock beats Scissors!";
    ComputerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    round = "you win!";
    playerScore += 1;
  }
  if (playerScore == 5) {
    playerScore = 0;
    ComputerScore = 0;
    return "You are the overall winner";
  } else if (ComputerScore == 5) {
    playerScore = 0;
    ComputerScore = 0;
    return "you are the loser! ";
  }
  score.innerHTML = `player ${playerScore}  computer ${ComputerScore}`;

  return `${round}`;
};

// for (let i = 1; i <= 5; i++) {
// let userPick = prompt().toLocaleLowerCase();

// alert(
//   `
//     Round: ${round}
//     \n
//     score ${i} of 5 \n Player: ${playerScore} \n computer: ${ComputerScore}`
// );
round = "";
// }

if (playerScore === ComputerScore) {
  console.log("its a draw");
} else {
  alert(
    playerScore > ComputerScore
      ? `player Wins ${playerScore} : ${ComputerScore}`
      : `computer wins ${ComputerScore}:${playerScore}`
  );
}

const result = document.createElement("h1");

const body = document.getElementsByTagName("body")[0];

var rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", function (event) {
  result.innerHTML = shoot("rock", getComputerChoice());
  body.appendChild(result);
});
var paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", function (event) {
  result.innerHTML = shoot("paper", getComputerChoice());
  body.appendChild(result);
});
var scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", function (event) {
  result.innerHTML = shoot("scissors", getComputerChoice());
  body.appendChild(result);
});
