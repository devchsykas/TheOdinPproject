console.log("Javascript Loaded");

// Select elements and initialize variables
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

console.log(`Found ${buttons.length} buttons`);

let firstOperand = "";
let secondOperand = "";
let currentOperator = "";
let shouldResetDisplay = false;

// Function to update display when numbers are clicked
function updateDisplay(value) {
  console.log(
    `updateDisplay called with value: ${value}, shouldResetDisplay: ${shouldResetDisplay}`
  );
  console.log(`Before update: display.value = ${display.value}`);
  if (shouldResetDisplay) {
    display.value = value; // Replace the display with the new number
    shouldResetDisplay = false; // Allow for continued input
  } else {
    display.value = display.value === "0" ? value : display.value + value; // Append numbers
  }
  console.log(`After update: display.value = ${display.value}`);
}

// Function to reset calculator
function clearCalculator() {
  display.value = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperator = "";
  shouldResetDisplay = false;
}

// Function to handle operator input
function handleOperator(operator) {
  console.log(`Operator clicked: ${operator}`);
  console.log(
    `firstOperand = ${firstOperand}, currentOperator = ${currentOperator}`
  );
  if (currentOperator && !shouldResetDisplay) {
    evaluate(); // Evaluate before setting new operator
  }
  firstOperand = display.value; // Store the current display value for evaluation

  currentOperator = operator;
  shouldResetDisplay = true; // Set to true to reset display for the next number input
}

// Function to evaluate the expression
function evaluate() {
  if (!currentOperator || shouldResetDisplay) return;
  secondOperand = display.value;

  console.log(
    `Evaluating: ${firstOperand} ${currentOperator} ${secondOperand}`
  );
  console.log(`shouldResetDisplay before evaluation: ${shouldResetDisplay}`);

  let result;
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);

  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      return;
  }

  display.value = result;
  firstOperand = result.toString();
  currentOperator = null;
  shouldResetDisplay = true; // Ensure next number press replaces display

  console.log(`Result after evaluation: ${display.value}`);
  console.log(`shouldResetDisplay after evaluation: ${shouldResetDisplay}`);
}

// Function to handle +/- toggle
function invertSign() {
  console.log(`Inverting sign. Current value: ${display.value}`);
  if (display.value !== "0") {
    display.value = display.value.startsWith("-")
      ? display.value.slice(1)
      : "-" + display.value;
  }
}

// Function to handle decimal point input
function addDecimal() {
  console.log(`Adding decimal. Current display: ${display.value}`);
  if (shouldResetDisplay) {
    display.value = "0.";
    shouldResetDisplay = false;
  } else if (!display.value.includes(".")) {
    display.value += ".";
  }
}

// Event Listener for Buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Button clicked: ${button.getAttribute("value")}`);
    const type = button.getAttribute("data-type");
    const value = button.getAttribute("value");

    console.log(`Button clicked: Type = ${type}, Value = ${value}`);

    if (type === "operand") {
      updateDisplay(value);
    } else if (type === "operator") {
      if (value === "clear") {
        clearCalculator();
      } else if (value === "invert") {
        invertSign();
      } else if (value === "=") {
        evaluate();
      } else {
        handleOperator(value);
      }
    } else if (type === "decimal") {
      addDecimal();
    }
  });
});
