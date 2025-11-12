console.log("Javascript Loaded");
document.addEventListener("DOMContentLoaded", () => {
  // Select elements and initialize variables
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  console.log(`Found ${buttons.length} buttons`);
  if (!display) {
    console.error("Display element with id 'display' not found!");
    return;
  }

  let firstOperand = "";
  let secondOperand = "";
  let currentOperator = null;
  let shouldResetDisplay = false;

  // Function to update display when numbers are clicked
  function updateDisplay(char) {
    console.log(
      `updateDisplay called with value: ${char}, shouldResetDisplay: ${shouldResetDisplay}`
    );
    console.log(`Before update: display.value = ${display.char}`);
    if (shouldResetDisplay) {
      display.value = char; // Replace the display with the new number
      shouldResetDisplay = false; // Allow for continued input
    } else {
      display.value = display.value === "0" ? char : display.value + char; // Append numbers
    }
    console.log(`After update: display.value = ${display.value}`);
  }

  // Function to reset calculator
  function clearCalculator() {
    display.value = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    shouldResetDisplay = false;
  }

  // Function to handle +/- toggle
  function invertSign() {
    console.log(`Inverting sign. Current value: ${display.value}`);
    if (display.value === "0") return;
    display.value = display.value.startsWith("-")
      ? display.value.slice(1)
      : "-" + display.value;
  }

  // Function to handle decimal point input
  function addDecimal() {
    console.log(`Adding decimal. Current display: ${display.value}`);
    if (shouldResetDisplay) {
      display.value = "0.";
      shouldResetDisplay = false;
      return;
    }
    if (!display.value.includes(".")) display.value += ".";
  }

  // Function to handle operator input
  function handleOperator(operator) {
    console.log(`Operator clicked: ${operator}`);
    console.log(
      `firstOperand = ${firstOperand}, currentOperator = ${currentOperator}`
    );

    // If an operator is already set and user hasn't just pressed operator, evaluate first
    if (currentOperator && !shouldResetDisplay) {
      evaluate(); // Evaluate before setting new operator
    }
    firstOperand = display.value; // Store the current display value for evaluation

    currentOperator = operator;
    shouldResetDisplay = true; // Set to true to reset display for the next number input
  }

  // Function to evaluate the expression
  function evaluate() {
    if (!currentOperator) return;
    // If user pressed operator and then = without second operand, do nothing
    if (shouldResetDisplay) return;

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
        result = num2 === 0 ? "Error" : num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        return;
    }

    display.value = String(result);
    firstOperand = display.value;
    currentOperator = null;
    shouldResetDisplay = true; // Ensure next number press replaces display

    console.log(`Result after evaluation: ${display.value}`);
    console.log(`shouldResetDisplay after evaluation: ${shouldResetDisplay}`);
  }

  // Event Listener for Buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(`Button clicked: ${button.getAttribute("value")}`);
      const type = button.dataset.type; // expects data-type on buttons
      const value = button.getAttribute("value"); // expects value attribute for operand/operator

      console.log(`Button clicked: Type = ${type}, Value = ${value}`);

      if (type === "operand") {
        updateDisplay(value);
      } else if (type === "decimal") {
        addDecimal();
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
      }
    });
  });

  // Optional: keyboard support
  window.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
    if (e.key >= "0" && e.key <= "9") {
      updateDisplay(e.key);
    } else if (e.key === ".") {
      addDecimal();
    } else if (["+", "-", "*", "/", "%"].includes(e.key)) {
      handleOperator(e.key);
    } else if (e.key === "Enter" || e.key === "=") {
      evaluate();
    } else if (e.key === "Backspace") {
      if (shouldResetDisplay) return;
      display.value =
        display.value.length > 1 ? display.value.slice(0, -1) : "0";
    } else if (e.key.toLowerCase() === "c") {
      clearCalculator();
    }
  });
});
