/* These lines of code are initializing variables and constants that are used in the
rock-paper-scissors game. */
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let move = 0;
const movesLeft = 5;
const computerOptions = ["rock", "paper", "scissors"];

/**
 * The function "getComputerChoice" returns a random choice from an array called "computerOptions".
 * @returns the computer's choice, which is a randomly selected option from the `computerOptions`
 * array.
 */
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * computerOptions.length);
  //console.log("Computer choice is: ", computerChoice);
  return computerOptions[computerChoice];
}

/**
 * The function `playRound` determines the winner of a rock-paper-scissors game between a player and a
 * computer.
 * @param playerSelection - The player's choice of rock, paper, or scissors.
 * @param computerSelection - The computerSelection parameter represents the choice made by the
 * computer in the game. It can be either "rock", "paper", or "scissors".
 * @returns either "It's a tie", "Player Wins!", or "Computer Wins!" depending on the conditions met.
 */
function playRound(playerSelection, computerSelection) {
  //checking for a tie
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "Player Wins!";
  } else {
    computerScore++;
    return "Computer Wins!";
  }
}

/**
 * The function updates the player and computer scores on the scoreboard.
 */
function updateScoreboard() {
  const playerScoreboard = document.getElementById("player-score");
  const computerScoreboard = document.getElementById("computer-score");
  playerScoreboard.textContent = playerScore;
  computerScoreboard.textContent = computerScore;
}

/**
 * The function displays the final result of the game based on the player's score and the computer's
 * score.
 */
function displayFinalResult() {
  const movesLeft = document.querySelector(".moves-left");
  if (playerScore > computerScore) {
    movesLeft.textContent = "Congratulations! You win the game!";
  } else if (playerScore < computerScore) {
    movesLeft.textContent = "Oops! You lose the game!";
  } else {
    movesLeft.textContent = "It's a tie! The game ends in a draw!";
  }
}

/**
 * The function handles a button click event, updates the game result text and scoreboard, and checks
 * if the maximum number of moves has been reached.
 * @param e - The parameter "e" is an event object that represents the event that triggered the button
 * click. It contains information about the event, such as the target element that was clicked
 * (e.target).
 * @returns The function handleButtonClick is not returning anything.
 */
function handleButtonClick(e) {
  //console.log(e.target.id);
  if (move > movesLeft) {
    displayFinalResult();
    return;
  }

  playerSelection = e.target.id;
  //console.log(playerSelection);
  computerSelection = getComputerChoice();
  const results = document.querySelector(".result-text");
  const result = playRound(playerSelection, computerSelection);
  results.textContent = `Player chose ${playerSelection}. The computer chose ${computerSelection}. ${result}`;
  updateScoreboard();
  move++;

  if (move === movesLeft) {
    displayFinalResult();
  }
}

/* The code is selecting all elements with the class "options" using the `document.querySelectorAll`
method and storing them in the `buttons` constant. Then, it is adding an event listener to each
button using the `forEach` method. The event listener is listening for a click event on each button
and calling the `handleButtonClick` function when a button is clicked. */
const buttons = document.querySelectorAll(".options");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
