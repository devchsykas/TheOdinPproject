document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  let firstOperand = "";
  let secondOperand = "";
  let currentOperator = "";
  let shouldResetDisplay = false;

  // Function to update display when numbers are clicked
  function updateDisplay(value) {
    if (shouldResetDisplay || display.value === "0") {
      display.value = value; // Replace the display with the new number
      shouldResetDisplay = false; // Allow for continued input
    } else {
      display.value = display.value === "0" ? value : display.value + value; // Append numbers
    }
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
    currentOperator = "";
    shouldResetDisplay = true; // Ensure next number press replaces display
  }

  // Function to handle +/- toggle
  function invertSign() {
    if (display.value !== "0") {
      display.value = display.value.startsWith("-")
        ? display.value.slice(1)
        : "-" + display.value;
    }
  }

  // Function to handle decimal point input
  function addDecimal() {
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
      const type = button.getAttribute("data-type");
      const value = button.getAttribute("value");

      if (type === "operand") {
        updateDisplay(value);
      } else if (type === "operator") {
        if (value === "clear") {
          clearCalculator();
        } else if (value === "invert") {
          invertSign();
        } else if (value === "=") {
          evaluate();
        } else if (type === "decimal") {
          addDecimal();
        }
      } else {
        handleOperator(value);
      }
    });
  });
});
