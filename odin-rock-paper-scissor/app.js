/**
 * The function generates a random choice of "Rock", "Paper", or "Scissors" for the computer.
 * @returns The function `getComputerChoice()` returns a string value of either "Rock", "Paper", or
 * "Scissors" based on a random number generated between 0 and 2.
 */
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  console.log("Computer choice is: ", computerChoice);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/**
 * The function prompts the user to enter their choice of rock, paper, or scissors and returns the
 * choice as a string.
 * @returns The function `getPlayerChoice()` returns a string value of either "rock", "paper", or
 * "scissors" based on the user's input.
 */
function getPlayerChoice() {
  let playerChoice = prompt("Rock - Paper - Scissors! Enter your choice here");
  console.log("Player choice is:", playerChoice);

  if (playerChoice === "rock") {
    return "rock";
  } else if (playerChoice === "paper") {
    return "paper";
  } else {
    return "scissors";
  }
}

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

/**
 * The function "game" plays a game of rock-paper-scissors for 5 rounds and keeps track of the player
 * and computer scores.
 */
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === "Player Wins") {
      playerScore++;
    } else if (result === "Computer Wins") {
      computerScore++;
    }
    //Display the results of each round
    console.log(
      `Round ${i + 1}: ${playerSelection} vs ${computerSelection} - ${result}`
    );
  }
  //Display the final winner and return it.
  if (playerScore === computerScore) {
    return console.log(
      `We don't have a winner! it's a tie with score ${playerScore} - ${computerScore}`
    );
  } else if (playerScore > computerScore) {
    return console.log(
      `Player wins with score ${playerScore} - ${computerScore}`
    );
  } else {
    return console.log(
      `Computer wins with score ${computerScore} - ${playerScore}`
    );
  }
}

// const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log("Computer saying:", computerSelection);

const playerSelection = getPlayerChoice();
console.log("Player saying:", playerSelection);

console.log(playRound(playerSelection, computerSelection));

const winner = game();
