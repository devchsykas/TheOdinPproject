"use strict";

/* ========================================   PLAYER FACTORY FUNCTION
======================================== */

/**
 * Creates a player object.
 *
 * @param {string} name - Player name
 * @param {string} marker - X or O
 *
 * @returns {Object}
 */
const createPlayer = (name, marker) => {
  return {
    name,
    marker,
  };
};

/* ========================================   PLAYERS
======================================== */
const player1 = createPlayer("Player", "X");
const player2 = createPlayer("Odin", "O");

/* ========================================   GAMEBOARD MODULE
======================================== */

/**
 * Responsible for:
 * - storing board state
 * - updating board
 * - resetting board
 */
const Gameboard = (() => {
  // Board array
  const board = ["", "", "", "", "", "", "", "", ""];

  /**
   * Returns the board array.
   */
  const getBoard = () => board;

  /**
   * Updates a specific cell.
   *
   * @param {number} index
   * @param {string} marker
   */
  const updateCell = (index, marker) => {
    board[index] = marker;
  };

  /**
   * Clears the board.
   */
  const resetBoard = () => {
    board.fill("");
  };

  return {
    getBoard,
    updateCell,
    resetBoard,
  };
})();

/* ========================================   DISPLAY CONTROLLER MODULE
======================================== */

/**
 * Responsible ONLY for:
 * - rendering UI
 * - updating DOM
 */
const DisplayController = (() => {
  // DOM elements
  const cells = document.querySelectorAll(".cell");
  const status = document.getElementById("status");

  /**
   * Renders the board array to the DOM.
   */
  const renderBoard = () => {
    // Get current board state
    const board = Gameboard.getBoard();

    // Loop through cells and update text content and classes
    cells.forEach((cell, index) => {
      cell.textContent = board[index];

      // Add marker classes for styling
      cell.classList.remove("x", "o");

      // Add class based on marker
      if (board[index] === "X") {
        cell.classList.add("x");
      }

      // Add class based on marker
      if (board[index] === "O") {
        cell.classList.add("o");
      }
    });
  };

  /**
   * Updates status text.
   *
   * @param {string} message
   */
  const updateStatus = (message) => {
    status.textContent = message;
  };

  return {
    renderBoard,
    updateStatus,
    cells,
  };
})();

/* ========================================   GAME CONTROLLER MODULE
======================================== */

/**
 * Responsible for:
 * - game flow
 * - turns
 * - winner checking
 * - restart logic
 */
const GameController = (() => {
  // Initial game state
  let currentPlayer = player1;
  let gameOver = false;

  // Winning combinations for a 3x3 board
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  /**
   * Switches between players.
   */
  const switchPlayer = () => {
    // Toggle current player
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  /**
   * Checks if someone has won.
   *
   * @returns {boolean}
   */
  const checkWinner = () => {
    // Get current board state
    const board = Gameboard.getBoard();

    // Check each winning combination
    return winningCombinations.some((combination) => {
      const [a, b, c] = combination;

      // If the cell is empty, skip
      if (board[a] === "") return false;

      // Check if all three cells in the combination are the same
      if (board[a] === board[b] && board[a] === board[c]) {
        // We have a winner!
        DisplayController.updateStatus(`${currentPlayer.name} wins!`);
        gameOver = true;
        return true;
      }

      return false;
    });
  };

  /**
   * Checks if board is full.
   *
   * @returns {boolean}
   */
  const checkDraw = () => {
    // Get current board state
    const board = Gameboard.getBoard();

    // If every cell is filled and no winner, it's a draw
    if (board.every((cell) => cell !== "")) {
      DisplayController.updateStatus("Draw!");
      gameOver = true;
      return true;
    }

    return false;
  };

  // const switchPlayer = () => {
  //   currentPlayer = currentPlayer === player1 ? player2 : player1;
  // };

  /**
   * Handles cell clicks.
   *
   * @param {number} index
   */
  const playRound = (index) => {
    // If game is already over, ignore clicks
    if (gameOver) return;

    // Get current board state
    const board = Gameboard.getBoard();

    // If cell is not empty, ignore click
    if (board[index] !== "") return;

    // Update game state with current player's marker
    Gameboard.updateCell(index, currentPlayer.marker);
    // Update UI
    DisplayController.renderBoard();

    // Check for winner or draw before switching player
    if (checkWinner()) return;
    if (checkDraw()) return;

    // Switch player
    switchPlayer();
    // Update status for next player's turn
    DisplayController.updateStatus(`${currentPlayer.name}'s turn`);
  };

  /**
   * Resets the game.
   */
  const restartGame = () => {
    // Reset game state
    Gameboard.resetBoard();

    // Reset current player and game over flag
    currentPlayer = player1;
    gameOver = false;

    // Update UI
    DisplayController.renderBoard();
    // Update status for new game
    DisplayController.updateStatus(`${currentPlayer.name}'s turn`);
  };

  return {
    playRound,
    restartGame,
  };
})();

/* ========================================   EVENT LISTENERS
======================================== */

/**
 * Add click events to every cell.
 */
DisplayController.cells.forEach((cell) => {
  // Add click event
  cell.addEventListener("click", () => {
    // Get cell index from data attribute
    const index = cell.dataset.index;
    // Play round with clicked cell index
    GameController.playRound(index);
  });
});

/**
 * Add click event to restart button.
 */

// Dom element
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", () => {
  // Restart game on button click
  GameController.restartGame();
});

// Initial render of the board
DisplayController.renderBoard();
