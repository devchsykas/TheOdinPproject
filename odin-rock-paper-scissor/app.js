/**
 * The function generates a random choice of "Rock", "Paper", or "Scissors" for the computer.
 * @returns The function `getComputerChoice()` returns a string value of either "Rock", "Paper", or
 * "Scissors" based on a random number generated between 0 and 2.
 */
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);

  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// console.log(getComputerChoice());

/**
 * The function plays a round of rock-paper-scissors between a player and a computer and returns the
 * winner or a tie.
 * @param playerSelection - The choice made by the player (rock, paper, or scissors).
 * @param computerSelection - The computer's randomly generated choice of "rock", "paper", or
 * "scissors".
 * @returns a string that indicates the result of the round, either "Player Wins", "Computer Wins", or
 * "It's a tie".
 */
function playRound(playerSelection, computerSelection) {
  //checking for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie";
  }
  // Check for Rock
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "Player Wins";
    } else {
      return "Computer Wins";
    }
  }
  // Check for Paper
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "Computer Wins";
    } else {
      return "Player Wins";
    }
  }
  // Check for Scissors
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "Player Wins";
    } else {
      return "Computer Wins";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
