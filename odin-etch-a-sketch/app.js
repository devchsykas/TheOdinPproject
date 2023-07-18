/* These lines of code are selecting elements from the HTML document using their respective IDs and
assigning them to variables. */
const gridContainer = document.getElementById("grid-container");
const gridSizeButton = document.getElementById("btn-grid-size");
const clearButton = document.getElementById("btn-clear");

/**
 * The function creates a grid of squares with a specified size.
 * @param size - The "size" parameter represents the number of rows and columns in the grid. It
 * determines the size of the grid, with each row and column having the same width and height.
 */
function createGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}

/**
 * The function changes the background color of a square element to black when it is clicked.
 * @param e - The parameter "e" is an event object that represents the event that triggered the
 * function. In this case, it is likely an event object for a mouse click event.
 */
function changeColor(e) {
  let square = e.target;
  if (square.classList.contains("square")) {
    square.style.backgroundColor = "black";
  }
}

/**
 * The function `pickGridSize` prompts the user to enter a grid size between 1 and 100, and if the
 * input is valid, it creates a grid of that size.
 * @returns nothing (undefined).
 */
function pickGridSize() {
  let gridSize = prompt(
    "Please enter the grid size. The size should be between 1 and 100."
  );
  //console.log(gridSize);

  if (gridSize === undefined || gridSize === null || gridSize === "") {
    return;
  }
  if (gridSize >= 1 && gridSize <= 100) {
    while (gridContainer.hasChildNodes()) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(gridSize);
  } else {
    prompt("Grid size too big or too small! Please enter valid size!");
    pickGridSize();
  }
}

//   createGrid(gridSize);

/**
 * The clearGrid function selects all elements with the class "square" and sets their background color
 * to white.
 */
function clearGrid() {
  let clearGrid = document.querySelectorAll(".square");
  clearGrid.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

/* These lines of code are adding event listeners to the `gridSizeButton` and `clearButton` elements. */
/* These lines of code are adding event listeners to the `gridContainer`, `gridSizeButton`, and
`clearButton` elements. */
gridContainer.addEventListener("mouseover", changeColor);
gridSizeButton.addEventListener("click", pickGridSize);
clearButton.addEventListener("click", clearGrid);

/* `window.onload = createGrid(16);` is setting the `createGrid(16)` function to be executed when the
window has finished loading. This means that when the HTML document is fully loaded, the
`createGrid(16)` function will be called, creating a grid of squares with a size of 16x16. */
window.onload = createGrid(16);
